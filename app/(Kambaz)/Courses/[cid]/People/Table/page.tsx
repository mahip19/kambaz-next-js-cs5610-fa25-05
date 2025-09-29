import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Lewis</span>{" "}
              <span className="wd-last-name">Hamilton</span>
            </td>
            <td className="wd-login-id">001234561LH</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2023-09-10</td>
            <td className="wd-total-activity">12:15:40</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Max</span>{" "}
              <span className="wd-last-name">Verstappen</span>
            </td>
            <td className="wd-login-id">001234562MV</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2023-09-09</td>
            <td className="wd-total-activity">09:42:11</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Charles</span>{" "}
              <span className="wd-last-name">Leclerc</span>
            </td>
            <td className="wd-login-id">001234563CL</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2023-09-08</td>
            <td className="wd-total-activity">08:10:05</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Fernando</span>{" "}
              <span className="wd-last-name">Alonso</span>
            </td>
            <td className="wd-login-id">001234564FA</td>
            <td className="wd-section">S104</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2023-09-07</td>
            <td className="wd-total-activity">11:33:59</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
