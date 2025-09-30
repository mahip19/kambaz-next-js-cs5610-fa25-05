"use client"; // Required for using the useRouter hook

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

export default function Signin() {
  const router = useRouter();

  // Function to handle form submission
  const handleSignin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Here you would typically handle authentication logic
    // After successful sign-in, navigate to the profile page:
    router.push("/Account/Profile");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h1 className="mb-4">Signin</h1>
          <Form onSubmit={handleSignin}>
            <Form.Group className="mb-3" controlId="wd-username">
              <FormControl placeholder="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-password">
              <FormControl placeholder="password" type="password" />
            </Form.Group>

            <Button
              id="wd-signin-btn"
              variant="primary"
              type="submit"
              className="w-100"
              href="/Dashboard"
            >
              Signin
            </Button>
          </Form>
          <Link
            id="wd-signup-link"
            href="/Account/Signup"
            className="d-block mt-3"
          >
            Signup
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
