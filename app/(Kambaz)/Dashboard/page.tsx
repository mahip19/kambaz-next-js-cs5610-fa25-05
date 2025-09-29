import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {/* CS1234 React JS */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  alt=""
                  variant="top"
                  src="/images/reactjs.webp"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* CS5010 Programming Design Paradigm */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5010"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  alt=""
                  variant="top"
                  src="/images/pdp.png"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle>CS5010 Programming Design Paradigm</CardTitle>
                  <CardText
                    className="wd-dashboard-course-title"
                    style={{ height: "100px" }}
                  >
                    Programming Design Paradigm
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* CS5800 Algorithms */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5800"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  alt=""
                  variant="top"
                  src="/images/algo.png"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle>CS5800 Algorithms</CardTitle>
                  <CardText
                    className="wd-dashboard-course-title"
                    style={{ height: "100px" }}
                  >
                    Design and Analysis of Algorithms
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* CS5200 Database Management Systems */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5200"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  alt=""
                  variant="top"
                  src="/images/dbms.png"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle>CS5200 Database Management Systems</CardTitle>
                  <CardText
                    className="wd-dashboard-course-title"
                    style={{ height: "100px" }}
                  >
                    Concepts of Relational Databases
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* CS6650 Building Scalable Distributed Systems */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/6650"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  alt=""
                  variant="top"
                  src="/images/bsds.png"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle>
                    CS6650 Building Scalable Distributed Systems
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-title"
                    style={{ height: "100px" }}
                  >
                    Large Scale & Cloud-Based Systems
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Co-op */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5001"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  alt=""
                  variant="top"
                  src="/images/coop.png"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle>Co-op</CardTitle>
                  <CardText
                    className="wd-dashboard-course-title"
                    style={{ height: "100px" }}
                  >
                    Cooperative Education Experience
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* CS1000 Orientation */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1000"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  alt=""
                  variant="top"
                  src="/images/orientation.png"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle>CS1000 Orientation</CardTitle>
                  <CardText
                    className="wd-dashboard-course-title"
                    style={{ height: "100px" }}
                  >
                    Introduction & Orientation Program
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
