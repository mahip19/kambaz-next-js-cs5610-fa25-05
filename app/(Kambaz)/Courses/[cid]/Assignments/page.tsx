"use client";
import Link from "next/link";
import { Button, Form, ListGroup, Badge } from "react-bootstrap";
import { BsSearch, BsPlus, BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
// --- NEW ICON IMPORTS ---
import { VscTriangleDown } from "react-icons/vsc";
import { PiNotePencil } from "react-icons/pi";

export default function Assignments() {
  // Your CSS imports for the search bar can remain
  return (
    <div id="wd-assignments" className="p-3">
      {/* Top controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search bar */}
        <div className="position-relative" style={{ maxWidth: "300px" }}>
          {/* Magnifying glass inside the input */}
          <BsSearch className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted" />
          {/* Input with left padding so text doesn't overlap icon */}
          <Form.Control
            type="text"
            placeholder="Search..."
            id="wd-search-assignment"
            className="ps-5"
          />
        </div>
        {/* Action buttons */}
        <div>
          <Button
            variant="secondary"
            size="sm"
            className="me-2"
            id="wd-add-assignment-group"
          >
            <BsPlus className="me-1 fs-6" /> Group
          </Button>
          <Button variant="danger" size="sm" id="wd-add-assignment">
            <BsPlus className="me-1 fs-6" /> Assignment
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center bg-light border p-2">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-3 fs-4 text-muted" />
          <VscTriangleDown className="me-2" />
          <div className="fw-bold">ASSIGNMENTS</div>
        </div>
        <div className="d-flex align-items-center">
          <Badge pill bg="light" text="dark" className="fw-normal me-2 border">
            40% of Total
          </Badge>
          <BsPlus className="fs-4 me-2" />
          <IoEllipsisVertical className="fs-4 text-muted" />
        </div>
      </div>

      <ListGroup id="wd-assignment-list">
        {/* A1 */}
        <ListGroup.Item className="d-flex align-items-left ps-1 border-0 border-start border-success border-4 rounded-0">
          <BsGripVertical className="me-3 fs-4 text-muted" />
          <PiNotePencil className="me-3 fs-4 text-success" />
          {/* New Icon Added */}
          <div className="flex-grow-1">
            <Link
              href="/Courses/1234/Assignments/123"
              className="fw-bold text-decoration-none text-dark"
            >
              A1
            </Link>
            <div className="text-muted small">
              <span className="text-danger">Multiple Modules</span> |
              <b>Not available until</b> May 6 at 12:00am |<br />
              <b>Due</b> May 13 at 11:59pm | <b>100 pts</b>
            </div>
          </div>
          <div className="d-flex align-items-center ms-2">
            <FaCheckCircle className="text-success me-3 fs-5" />
            <IoEllipsisVertical className="fs-4 text-muted" />
          </div>
        </ListGroup.Item>

        {/* A2 */}
        <ListGroup.Item className="d-flex align-items-left ps-1 border-0 border-start border-success border-4 rounded-0">
          <BsGripVertical className="me-3 fs-4 text-muted" />
          <PiNotePencil className="me-3 fs-4 text-success" />
          {/* New Icon Added */}
          <div className="flex-grow-1">
            <Link
              href="/Courses/1234/Assignments/124"
              className="fw-bold text-decoration-none text-dark"
            >
              A2
            </Link>
            <div className="text-muted small">
              <span className="text-danger">Multiple Modules</span> |
              <b>Not available until</b> May 13 at 12:00am |<br />
              <b>Due</b> May 20 at 11:59pm | <b>100 pts</b>
            </div>
          </div>
          <div className="d-flex align-items-center ms-2">
            <FaCheckCircle className="text-success me-3 fs-5" />
            <IoEllipsisVertical className="fs-4 text-muted" />
          </div>
        </ListGroup.Item>

        {/* A3 */}
        <ListGroup.Item className="d-flex align-items-left ps-1 border-0 border-start border-success border-4 rounded-0">
          <BsGripVertical className="me-3 fs-4 text-muted" />
          <PiNotePencil className="me-3 fs-4 text-success" />
          {/* New Icon Added */}
          <div className="flex-grow-1">
            <Link
              href="/Courses/1234/Assignments/125"
              className="fw-bold text-decoration-none text-dark"
            >
              A3
            </Link>
            <div className="text-muted small">
              <span className="text-danger">Multiple Modules</span> |
              <b>Not available until</b> May 20 at 12:00am |<br />
              <b>Due</b> May 27 at 11:59pm | <b>100 pts</b>
            </div>
          </div>
          <div className="d-flex align-items-center ms-2">
            <FaCheckCircle className="text-success me-3 fs-5" />
            <IoEllipsisVertical className="fs-4 text-muted" />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
