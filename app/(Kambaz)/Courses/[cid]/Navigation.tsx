"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../styles.css";

export default function CourseNavigation() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/Courses/1234/Home" },
    { name: "Modules", href: "/Courses/1234/Modules" },
    { name: "Piazza", href: "/Courses/1234/Piazza" },
    { name: "Zoom", href: "/Courses/1234/Zoom" },
    { name: "Assignments", href: "/Courses/1234/Assignments" },
    { name: "Quizzes", href: "/Courses/1234/Quizzes" },
    { name: "People", href: "/Courses/1234/People/Table" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          id={`wd-course-${link.name.toLowerCase()}-link`}
          // Change "wd-active-link" back to "active"
          className={`list-group-item border-0 ${
            pathname.includes(link.name) ? "active" : "text-danger"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
