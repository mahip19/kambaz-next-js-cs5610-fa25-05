"use client";
import { useState } from "react";

export default function Modules() {
  // collapsed = true → lessons hidden
  // collapsed = false → lessons shown
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
      {/* Buttons Row */}
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleCollapseAll}>
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
        <button onClick={handleViewProgress}>View Progress</button>
        <button onClick={handlePublishAll}>Publish All</button>
        <button onClick={handleAddModule}>+ Module</button>
      </div>

      {/* Modules List */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    Introduction to the course
                  </li>
                  <li className="wd-content-item">
                    Learn what is Web Development
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Topics</span>
                <ul className="wd-content">
                  <li className="wd-content-item">HTML Basics</li>
                  <li className="wd-content-item">CSS Fundamentals</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Topics</span>
                <ul className="wd-content">
                  <li className="wd-content-item">JavaScript Basics</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
