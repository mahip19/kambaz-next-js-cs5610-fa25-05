"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function KambazNavigation() {
  const pathname = usePathname();

  // 💡 Updated logic to use startsWith()
  const linkClass = (path: string) =>
    pathname.startsWith(path)
      ? "bg-white text-danger text-decoration-none d-block py-2"
      : "bg-black text-white text-decoration-none d-block py-2";

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem className="border-0 text-center p-0">
        <Link
          href="/Account/Signin" // Use the base path for consistency
          className={linkClass("/Account")}
          id="wd-account-link"
        >
          <FaRegCircleUser className="fs-1" />
          <br />
          Account
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 text-center p-0">
        <Link
          href="/Dashboard"
          className={linkClass("/Dashboard")}
          id="wd-dashboard-link"
        >
          <AiOutlineDashboard className="fs-1" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 text-center p-0">
        <Link
          href="/Dashboard"
          className={linkClass("/Courses")}
          id="wd-courses-link"
        >
          <LiaBookSolid className="fs-1" />
          <br />
          Courses
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 text-center p-0">
        <Link
          href="/Calendar"
          className={linkClass("/Calendar")}
          id="wd-calendar-link"
        >
          <IoCalendarOutline className="fs-1" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 text-center p-0">
        <Link href="/Inbox" className={linkClass("/Inbox")} id="wd-inbox-link">
          <FaInbox className="fs-1" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 text-center p-0">
        <Link href="/Labs" className={linkClass("/Labs")} id="wd-labs-link">
          <LiaCogSolid className="fs-1" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
