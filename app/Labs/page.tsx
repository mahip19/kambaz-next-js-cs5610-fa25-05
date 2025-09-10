import Link from "next/link";
import TOC from "./TOC";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <TOC />
      <p>
        <Link
          href="https://github.com/mahip19/kambaz-next-js-cs5610-fa25-05"
          id="wd-github"
        >
          GitHub Repository
        </Link>
      </p>
      <p>Full Name: Mahip Parekh</p>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
