"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles.css"; // Assuming the same stylesheet is used

export default function AccountNavigation() {
  const pathname = usePathname();

  // Define the account links in an array
  const links = [
    { name: "Signin", href: "/Account/Signin" },
    { name: "Signup", href: "/Account/Signup" },
    { name: "Profile", href: "/Account/Profile" },
  ];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          id={`wd-account-${link.name.toLowerCase()}-link`}
          // This logic dynamically highlights the active link
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
