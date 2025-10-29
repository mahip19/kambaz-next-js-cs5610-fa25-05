"use client";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ModulesControls from "./ModulesControls";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import "../../../styles.css";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "next/navigation";

import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");

  // Check if current user is faculty
  const isFaculty = currentUser?.role === "FACULTY";

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
      {/* Only show ModulesControls for faculty */}
      {isFaculty && (
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}
        />
      )}
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
                <BsGripVertical className="me-2 fs-3" />{" "}
                {!module.editing && module.name}
                {/* Only allow editing for faculty */}
                {module.editing && isFaculty && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                {/* Only show module control buttons for faculty */}
                {isFaculty && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => {
                      dispatch(deleteModule(moduleId));
                    }}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                )}
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson, index) => (
                    <ListGroupItem key={index} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                      {/* Only show lesson control buttons for faculty */}
                      {isFaculty && <LessonControlButtons />}
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
