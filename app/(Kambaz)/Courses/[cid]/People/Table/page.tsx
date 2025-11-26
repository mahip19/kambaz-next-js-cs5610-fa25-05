"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../Details";
import * as client from "../../../client";

export default function PeopleTable() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // Fetch users when component mounts
  useEffect(() => {
    const fetchUsersForCourse = async () => {
      if (!cid) return;

      try {
        setLoading(true);
        console.log("Fetching users for course:", cid);
        const courseUsers = await client.findUsersForCourse(cid as string);
        console.log("Fetched users:", courseUsers);
        setUsers(courseUsers || []);
      } catch (error) {
        console.error("Error fetching users for course:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersForCourse();
  }, [cid]);

  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
    console.log("selected user ", userId);
  };

  if (loading) {
    return (
      <div id="wd-people-table" className="p-4">
        <h3>Loading course participants...</h3>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div id="wd-people-table" className="p-4">
        <h3>People</h3>
        <p>No users enrolled in this course yet.</p>
      </div>
    );
  }

  console.log("in users table: ", users.length);

  return (
    <div id="wd-people-table">
      <h3 className="mb-3">People ({users.length})</h3>
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
