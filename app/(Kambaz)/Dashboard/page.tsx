import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt="" src="/images/reactjs.webp" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5010" className="wd-dashboard-course-link">
            <Image alt="" src="/images/pdp.png" width={200} height={150} />
            <div>
              <h5> CS5010 Programming Design Paradigm </h5>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5800" className="wd-dashboard-course-link">
            <Image alt="" src="/images/algo.png" width={200} height={150} />
            <div>
              <h5>CS5800 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Design and Analysis of Algorithms
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5200" className="wd-dashboard-course-link">
            <Image alt="" src="/images/dbms.png" width={200} height={150} />
            <div>
              <h5>CS5200 Database Management Systems</h5>
              <p className="wd-dashboard-course-title">
                Concepts of Relational Databases
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6650" className="wd-dashboard-course-link">
            <Image alt="" src="/images/bsds.png" width={200} height={150} />
            <div>
              <h5>CS6650 Building Scalable Distributed Systems</h5>
              <p className="wd-dashboard-course-title">
                Large Scale & Cloud-Based Systems
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5001" className="wd-dashboard-course-link">
            <Image alt="" src="/images/coop.png" width={200} height={150} />
            <div>
              <h5>Co-op</h5>
              <p className="wd-dashboard-course-title">
                Cooperative Education Experience
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1000" className="wd-dashboard-course-link">
            <Image
              alt=""
              src="/images/orientation.png"
              width={200}
              height={150}
            />
            <div>
              <h5>CS1000 Orientation</h5>
              <p className="wd-dashboard-course-title">
                Introduction & Orientation Program
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
