"use client";
import Link from "next/link";
import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { BsSearch, BsPlus, BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      {/* Top controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search bar */}
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </InputGroup>

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

      {/* Assignment Group Header */}
      <div className="d-flex justify-content-between align-items-center bg-light border p-2">
        <div className="fw-bold">ASSIGNMENTS</div>
        <div className="text-muted small">40% of Total</div>
      </div>

      {/* Assignment List */}
      <ListGroup variant="flush" id="wd-assignment-list" className="mt-2">
        {/* A1 */}
        <ListGroup.Item className="d-flex align-items-start border-start border-success border-5">
          <BsGripVertical className="me-2 fs-4 text-muted" />
          <div className="flex-grow-1">
            <Link
              href="/Courses/1234/Assignments/123"
              className="fw-bold text-decoration-none text-dark"
            >
              A1 – ENV + HTML
            </Link>
            <div className="text-muted small">
              <span className="text-danger">Multiple Modules</span> |{" "}
              <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at
              11:59pm | <b>100 pts</b>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <IoEllipsisVertical className="fs-4 text-muted" />
          </div>
        </ListGroup.Item>

        {/* A2 */}
        <ListGroup.Item className="d-flex align-items-start border-start border-success border-5 mt-2">
          <BsGripVertical className="me-2 fs-4 text-muted" />
          <div className="flex-grow-1">
            <Link
              href="/Courses/1234/Assignments/124"
              className="fw-bold text-decoration-none text-dark"
            >
              A2 – CSS + BOOTSTRAP
            </Link>
            <div className="text-muted small">
              <span className="text-danger">Multiple Modules</span> |{" "}
              <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20
              at 11:59pm | <b>100 pts</b>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <IoEllipsisVertical className="fs-4 text-muted" />
          </div>
        </ListGroup.Item>

        {/* A3 */}
        <ListGroup.Item className="d-flex align-items-start border-start border-success border-5 mt-2">
          <BsGripVertical className="me-2 fs-4 text-muted" />
          <div className="flex-grow-1">
            <Link
              href="/Courses/1234/Assignments/125"
              className="fw-bold text-decoration-none text-dark"
            >
              A3 – JAVASCRIPT + REACT
            </Link>
            <div className="text-muted small">
              <span className="text-danger">Multiple Modules</span> |{" "}
              <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27
              at 11:59pm | <b>100 pts</b>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <IoEllipsisVertical className="fs-4 text-muted" />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
