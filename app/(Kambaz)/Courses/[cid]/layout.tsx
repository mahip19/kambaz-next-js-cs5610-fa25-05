"use client";

import { ReactNode, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { Dropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const course = courses.find((course: any) => course._id === cid);

  // State to control sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Check if user is enrolled - handle both enrollment formats
  console.log("Layout - Checking enrollment for course:", cid);
  console.log("Layout - Current enrollments:", enrollments);
  console.log(
    "Layout - Enrollment details:",
    enrollments.map((e: any) => ({
      _id: e._id,
      course: e.course,
      user: e.user,
      type: typeof e,
    }))
  );
  console.log("Layout - Current user:", currentUser?._id);

  const isEnrolled = enrollments.some((item: any) => {
    // Handle both formats:
    // 1. Full course objects (from findMyCourses/findEnrollmentsForUser)
    // This is the NEW format from your API
    if (item._id === cid && item.name) {
      console.log(
        "Layout - Found enrolled course by _id (course object):",
        item._id
      );
      return true;
    }
    // 2. OLD enrollment objects with user and course properties
    // This is the old seed data format
    if (item.user === currentUser?._id && item.course === cid) {
      console.log("Layout - Found enrolled by user/course (old format):", item);
      return true;
    }
    // 3. If item is just a string ID
    if (typeof item === "string" && item === cid) {
      console.log("Layout - Found enrolled course by string ID:", item);
      return true;
    }
    return false;
  });

  console.log("Layout - isEnrolled result:", isEnrolled);

  // Protect route - redirect if not enrolled
  useEffect(() => {
    if (!isEnrolled && currentUser && enrollments.length > 0) {
      // Only redirect if we have enrollments data loaded
      alert("You must be enrolled in this course to access it.");
      router.push("/Dashboard");
    }
  }, [isEnrolled, currentUser, enrollments, router, cid]);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Don't render if not enrolled (but wait for enrollments to load)
  if (!currentUser || (enrollments.length === 0 && !isEnrolled)) {
    return <div>Loading...</div>;
  }

  if (!isEnrolled && enrollments.length > 0) {
    return null;
  }

  return (
    <div id="wd-courses" className="position-relative">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />
        {course?.name}
      </h2>
      <hr />

      {/* Mobile Dropdown - Top Right */}
      <Dropdown className="d-md-none position-absolute top-0 end-0 mt-2 me-2">
        <Dropdown.Toggle
          variant="light"
          id="course-nav-dropdown"
          className="border"
          size="sm"
        >
          <FaBars />
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" style={{ minWidth: "200px" }}>
          <div className="list-group list-group-flush">
            <CourseNavigation />
          </div>
        </Dropdown.Menu>
      </Dropdown>

      <div className="d-flex">
        {/* Desktop Sidebar - conditionally rendered based on state */}
        <div className={isSidebarVisible ? "d-none d-md-block" : "d-none"}>
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
