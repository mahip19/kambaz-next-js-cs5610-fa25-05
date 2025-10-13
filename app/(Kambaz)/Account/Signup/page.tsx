"use client"; //  for using the useRouter hook

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

export default function Signup() {
  const router = useRouter();

  // Function to handle form submission
  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Here you would typically handle user registration logic
    // After successful signup, navigate to the profile page:
    router.push("/Account/Profile");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h1 className="mb-4">Signup</h1>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="wd-username">
              <FormControl placeholder="username" defaultValue={"raptor"} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-password">
              <FormControl
                placeholder="password"
                type="password"
                defaultValue={"123123123"}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-verify-password">
              <FormControl placeholder="verify password" type="password" />
            </Form.Group>

            <Button
              id="wd-signup-btn"
              variant="primary"
              type="submit"
              className="w-100"
            >
              Signup
            </Button>
          </Form>
          <Link
            id="wd-signin-link"
            href="/Account/Signin"
            className="d-block mt-3"
          >
            Signin
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
