"use client";
import { useState } from "react";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "../../../styles.css";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "next/navigation";

import * as db from "../../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  // collapsed = true -> lessons hidden
  // collapsed = false -> lessons shown
  const [collapsed, setCollapsed] = useState(false);

  // Toggle collapse/expand
  const handleCollapseAll = () => {
    setCollapsed((prev) => !prev);
  };

  const handleViewProgress = () => {
    alert("In progress");
  };

  const handlePublishAll = () => {
    alert("In progress");
  };

  const handleAddModule = () => {
    alert("In progress");
  };

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module) => module.course === cid)
          .map((module, index) => (
            <ListGroupItem
              key={index}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson, index) => (
                    <ListGroupItem key={index} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
