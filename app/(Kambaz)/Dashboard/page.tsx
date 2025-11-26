"use client";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import * as client from "../Courses/client";

import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../Courses/reducer";
import { setEnrollments } from "../Courses/[cid]/People/reducer";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  // Check if current user is faculty
  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  // State to toggle between showing all courses or only enrolled courses
  const [showAllCourses, setShowAllCourses] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.webp",
    description: "New Description",
  });

  // Fetch courses based on current mode using CLIENT REST APIs
  const fetchCourses = async () => {
    try {
      let fetchedCourses;
      const fetchedEnrollments = await client.findEnrollmentsForUser(
        currentUser._id
      );
      console.log("Fetched enrollments from server:", fetchedEnrollments);
      dispatch(setEnrollments(fetchedEnrollments));

      if (showAllCourses) {
        // Fetch all courses for enrollment view
        fetchedCourses = await client.fetchAllCourses();
      } else {
        // Fetch only enrolled courses for current user
        fetchedCourses = await client.findMyCourses();
      }
      console.log("Fetched courses:", fetchedCourses); // ADD THIS
      console.log(
        "showAllcourses: ",
        showAllCourses,
        "; fetched courses: ",
        fetchedCourses
      );
      dispatch(setCourses(fetchedCourses));
    } catch (error) {
      console.log(error);
    }
  };

  // adding course using api
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(
      setCourses(courses.filter((course: any) => course._id !== courseId))
    );
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c: any) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  const handleEnroll = async (courseId: string) => {
    await client.enrollInCourse(currentUser._id, courseId);
    await fetchCourses();
  };

  const handleUnenroll = async (courseId: string) => {
    const status = await client.unenrollFromCourse(currentUser._id, courseId);
    console.log(courseId, ", ", status);
    await fetchCourses();
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser, showAllCourses]);

  // Helper function to check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {/* Only show course creation/editing for faculty */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            aria-rowspan={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length}){/* Enrollments toggle button */}
        <Button
          variant="primary"
          className="float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-enrollments-btn"
        >
          {showAllCourses ? "My Courses" : "Enrollments"}
        </Button>
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any, index: number) => (
            <Col
              key={index}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    // Prevent navigation if not enrolled
                    if (!isEnrolled(course._id)) {
                      e.preventDefault();
                      alert("You must enroll in this course to access it.");
                    }
                  }}
                >
                  <CardImg
                    src={course.image}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary"> Go </Button>

                    {/* Show Enroll/Unenroll buttons when in enrollments mode */}
                    {showAllCourses && (
                      <>
                        {isEnrolled(course._id) ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleUnenroll(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-unenroll-course-click"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnroll(course._id);
                            }}
                            className="btn btn-success float-end"
                            id="wd-enroll-course-click"
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}

                    {/* Only show delete/edit buttons for faculty when NOT in enrollments mode */}
                    {isFaculty && !showAllCourses && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            onDeleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
