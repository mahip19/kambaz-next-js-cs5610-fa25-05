"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  // ["Courses", "RS101", "People", "Table"]
  const afterCourse = segments.slice(2);

  let formattedSegments = [...afterCourse];

  //  /People/Table, collapse to just People
  if (
    formattedSegments.length === 2 &&
    formattedSegments[0] === "People" &&
    formattedSegments[1] === "Table"
  ) {
    formattedSegments = ["People"];
  }
  formattedSegments = formattedSegments.map((seg) =>
    seg === "Table" ? "People" : seg
  );

  const breadcrumbTrail = [course?.name, ...formattedSegments].join(" > ");

  return <span>{breadcrumbTrail}</span>;
}
