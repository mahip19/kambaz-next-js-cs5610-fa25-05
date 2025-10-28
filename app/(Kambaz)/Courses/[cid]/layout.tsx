"use client";

import { ReactNode, use } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import { Dropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

export default function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = use(params);
  const course = courses.find((course) => course._id == cid);

  return (
    <div id="wd-courses" className="position-relative">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        <Breadcrumb course={course} />
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
        {/* Desktop Sidebar */}
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
