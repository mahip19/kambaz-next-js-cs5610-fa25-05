"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../Details";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  console.log("in users table: ", users.length);
  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
    console.log("selected user ", selectedUserId);
  };

  return (
    <div id="wd-people-table">
      {selectedUserId && (
        <PeopleDetails
          uid={selectedUserId}
          onClose={() => setSelectedUserId(null)}
        />
      )}
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
          {users.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                {currentUser?.role === "ADMIN" ? (
                  <button
                    onClick={() => handleUserClick(user._id)}
                    className="btn btn-link text-decoration-none p-0 text-start"
                  >
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName} </span>
                    <span className="wd-last-name">{user.lastName}</span>
                  </button>
                ) : (
                  <span>
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName} </span>
                    <span className="wd-last-name">{user.lastName}</span>
                  </span>
                )}
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
