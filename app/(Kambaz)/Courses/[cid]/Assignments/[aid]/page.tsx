"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Form, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

import * as db from "../../../../Database";

// Static dropdown options (unchanged)
const assignToOptions = [
  { value: "everyone", label: "Everyone" },
  { value: "section1", label: "Section 1" },
  { value: "section2", label: "Section 2" },
  { value: "admin", label: "Admins Only" },
];

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course + assignment IDs from route
  const assignment = db.assignments.find((a) => a._id === aid);
  // Convert DB dates to Date objects for DatePicker
  const [dueDate, setDueDate] = useState<Date | null>(
    assignment?.dueDate ? new Date(assignment?.dueDate) : null
  );
  const [availableFromDate, setAvailableFromDate] = useState<Date | null>(
    assignment?.availableFrom ? new Date(assignment?.availableFrom) : null
  );
  const [untilDate, setUntilDate] = useState<Date | null>(
    assignment?.untilDate ? new Date(assignment?.untilDate) : null
  );

  const [selectedOptions, setSelectedOptions] = useState(
    assignment?.assignTo?.map((label: string) => ({
      value: label.toLowerCase().replace(/\s+/g, ""),
      label: label,
    })) || [assignToOptions[0]]
  );
  if (!assignment) {
    return (
      <div className="p-3">
        <h4 className="text-danger">Assignment not found</h4>
        <p>
          No assignment found for ID &quot;{aid}&quot; in course &quot;{cid}
          &quot;.
        </p>
        <Link
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-secondary mt-3"
        >
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Name */}
      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue={assignment.title} />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-3">
        <div
          className="form-control"
          style={{ minHeight: "200px", whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: assignment.description }}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Points
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="number" defaultValue={assignment.points} />
        </Col>
      </Form.Group>

      {/* Assignment Group */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Assignment Group
        </Form.Label>
        <Col sm={4}>
          <Form.Select defaultValue={assignment.group}>
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECTS</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Display Grade As */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Display Grade as
        </Form.Label>
        <Col sm={4}>
          <Form.Select defaultValue={assignment.displayGradeAs}>
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Submission Type */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Submission Type
        </Form.Label>
        <Col sm={4} className="mt-2 p-3 border rounded">
          <Form.Select defaultValue={assignment.submissionType}>
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </Form.Select>

          <div className="mt-2">
            <div className="fw-bold">Online Entry Options</div>
            {[
              "Text Entry",
              "Website URL",
              "Media Recordings",
              "Student Annotation",
              "File Uploads",
            ].map((option) => (
              <Form.Check
                key={option}
                type="checkbox"
                label={option}
                defaultChecked={assignment.onlineEntryOptions?.includes(option)}
              />
            ))}
          </div>
        </Col>
      </Form.Group>

      {/* Assign Section */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Assign
        </Form.Label>
        <Col sm={6} className="p-3 border rounded">
          {/* Assign To */}
          <div className="mb-3">
            <Form.Label>Assign to</Form.Label>
            <Select
              defaultValue={selectedOptions}
              isMulti
              options={assignToOptions}
              classNamePrefix="select"
              placeholder="Select..."
              onChange={(opts) => setSelectedOptions(opts as any)}
            />
          </div>

          {/* Due Date */}
          <div className="mb-3">
            <Form.Label className="d-block">Due</Form.Label>
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy, h:mm aa"
              className="form-control"
            />
          </div>

          {/* Available From and Until */}
          <Row>
            <Col>
              <Form.Label className="d-block">Available from</Form.Label>
              <DatePicker
                selected={availableFromDate}
                onChange={(date) => setAvailableFromDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy, h:mm aa"
                className="form-control"
              />
            </Col>
            <Col>
              <Form.Label className="d-block">Until</Form.Label>
              <DatePicker
                selected={untilDate}
                onChange={(date) => setUntilDate(date)}
                showTimeSelect
                placeholderText="Click to select a date"
                dateFormat="MMMM d, yyyy, h:mm aa"
                className="form-control"
              />
            </Col>
          </Row>
        </Col>
      </Form.Group>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <Link
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}
