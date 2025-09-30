"use client";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const assignToOptions = [
  { value: "everyone", label: "Everyone" },
  { value: "section1", label: "Section 1" },
  { value: "section2", label: "Section 2" },
  { value: "admin", label: "Admins Only" },
];

export default function AssignmentEditor() {
  const [selectedOptions, setSelectedOptions] = useState([assignToOptions[0]]);
  const [dueDate, setDueDate] = useState<Date | null>(
    new Date("2024-05-13T23:59:00")
  );
  const [availableFromDate, setAvailableFromDate] = useState<Date | null>(
    new Date("2024-05-06T00:00:00")
  );
  const [untilDate, setUntilDate] = useState<Date | null>(null);

  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Name */}
      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue="A1" />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={6}
          defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Points
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="number" defaultValue={100} />
        </Col>
      </Form.Group>

      {/* Assignment Group */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Assignment Group
        </Form.Label>
        <Col sm={4}>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECTS</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Display Grade as */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Display Grade as
        </Form.Label>
        <Col sm={4}>
          <Form.Select defaultValue="Percentage">
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
          <Form.Select defaultValue="Online">
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </Form.Select>
          <div className="mt-2">
            <div className="fw-bold">Online Entry Options</div>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Col>
      </Form.Group>

      {/* Assign To */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Assign
        </Form.Label>
        <Col sm={6} className="p-3 border rounded">
          {/* Assign to Dropdown */}
          <div className="mb-3">
            <Form.Label>Assign to</Form.Label>
            <Select
              defaultValue={[assignToOptions[0]]}
              isMulti
              options={assignToOptions}
              classNamePrefix="select"
              placeholder="Select..."
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

          {/* Available From and Until side-by-side */}
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
        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
