import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome, FaChartBar, FaBullhorn } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>

      {/* publish / unpublish */}
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button
            variant="secondary"
            size="lg"
            className="w-100 text-nowrap"
            id="wd-unpublish-btn"
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button
            variant="success"
            size="lg"
            className="w-100"
            id="wd-publish-btn"
          >
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </Button>
        </div>
      </div>

      <br />

      {/* Course Controls */}
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-import-existing"
      >
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-import-commons"
      >
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-choose-home"
      >
        <FaHome className="me-2 fs-5" /> Choose Home Page
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-view-analytics"
      >
        <FaChartBar className="me-2 fs-5" /> View Course Analytics
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-view-notifications"
      >
        <FaBullhorn className="me-2 fs-5" /> View Course Notifications
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-new-announcement"
      >
        <BsFillFileEarmarkTextFill className="me-2 fs-5" /> New Announcement
      </Button>
    </div>
  );
}
