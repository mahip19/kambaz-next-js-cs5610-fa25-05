"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "Home" },
    { name: "Modules", path: "Modules" },
    { name: "Piazza", path: "Piazza" },
    { name: "Zoom Meetings", path: "Zoom" },
    { name: "Assignments", path: "Assignments" },
    { name: "Quizzes", path: "Quizzes" },
    { name: "Grades", path: "Grades" },
    { name: "People", path: "People" },
    { name: "Settings", path: "Settings" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link.path);
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`list-group-item border border-0 ${
              isActive ? "active text-black" : "text-danger"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
