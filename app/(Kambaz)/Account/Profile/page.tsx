"use client"; // Required for using the useRouter hook

import { useRouter } from "next/navigation";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

export default function Profile() {
  const router = useRouter();

  // Function to handle signout
  const handleSignout = () => {
    // Here you would typically handle sign-out logic (e.g., clear session)
    // After signing out, navigate to the signin page:
    router.push("/Account/Signin");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h1 className="mb-4">Profile</h1>
          <Form>
            <Form.Group className="mb-3" controlId="wd-username">
              <FormControl defaultValue="raptor" placeholder="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-password">
              <FormControl
                defaultValue="123123213"
                placeholder="password"
                type="password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-firstname">
              <FormControl defaultValue="Mahip" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-lastname">
              <FormControl defaultValue="Parekh" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-dob">
              <FormControl defaultValue="2000-11-01" type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-email">
              <FormControl defaultValue="mahip@parekh" type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-role">
              <Form.Select defaultValue="FACULTY">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </Form.Select>
            </Form.Group>
          </Form>

          <Button
            id="wd-signout-btn"
            variant="danger" // Makes the button red
            className="w-100 mt-3"
            onClick={handleSignout}
          >
            Signout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
