"use client";

import { ReactNode, use, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import { Dropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);

  // State to control sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Toggle sidebar function
  const toggleSidebar = () => {
    console.log(isSidebarVisible);
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div id="wd-courses" className="position-relative">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />
        <Breadcrumb course={course} />
        {/* {course?.name} */}
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
