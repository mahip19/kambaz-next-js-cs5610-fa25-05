export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Top title + name field */}
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input
        id="wd-name"
        type="text"
        defaultValue="A1 - ENV + HTML"
        style={{ width: "300px" }}
      />
      <br />
      <br />

      {/* Description */}
      <textarea
        id="wd-description"
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.`}
        rows={8}
        cols={36}
      />
      <br />

      {/* Details table */}
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Complete/Incomplete">Complete/Incomplete</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="No Submission">No Submission</option>
              </select>
              <div style={{ marginTop: 8 }}>
                <div>Online Entry Options</div>
                <label>
                  <input type="checkbox" id="wd-text-entry" /> Text Entry
                </label>
                <br />
                <label>
                  <input type="checkbox" id="wd-website-url" /> Website URL
                </label>
                <br />
                <label>
                  <input type="checkbox" id="wd-media-recordings" /> Media
                  Recordings
                </label>
                <br />
                <label>
                  <input type="checkbox" id="wd-student-annotation" /> Student
                  Annotation
                </label>
                <br />
                <label>
                  <input type="checkbox" id="wd-file-upload" /> File Uploads
                </label>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <div>
                <label htmlFor="wd-assign-to">Assign to</label>
              </div>
              <select id="wd-assign-to" defaultValue="Everyone">
                <option value="Everyone">Everyone</option>
                <option value="Section 1">Section 1</option>
                <option value="Section 2">Section 2</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
              />{" "}
              <label htmlFor="wd-available-until">Until</label>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <div>
        <button type="button">Cancel</button>{" "}
        <button type="button">Save</button>
      </div>
    </div>
  );
}
