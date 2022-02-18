import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import "./Num.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Num = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="light"
        style={{ height: "100px", width: "100vw" }}
      >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <h5
              style={{
                textAlign: "right",
                position: "absolute",
                right: "10px",
                bootom: "20px",
                paddingBottom: "30px",
                color: "white",
              }}
            >
              {" "}
              Self Applied Student
            </h5>
          </Nav>
        </Container>
      </Navbar>
      <div id="parent">
        <div id="child">
          <h4> Personal Details</h4>
          <section>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ width: "400px" }}>
                    First Name *
                  </Form.Label>
                  <Form.Control type="email" placeholder="First Name" />
                </Form.Group>
              </Form>
            </div>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ width: "400px" }}>
                    Lastt Name *
                  </Form.Label>
                  <Form.Control type="email" placeholder="Last Name" />
                </Form.Group>
              </Form>
            </div>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ width: "400px" }}>DOB*</Form.Label>
                  <Form.Control type="email" placeholder=" mm/dd/yy" />
                </Form.Group>
              </Form>
            </div>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ width: "400px" }}>
                    Contact Number *
                  </Form.Label>
                  <Form.Control type="email" placeholder="Contact Number" />
                </Form.Group>
              </Form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Num;
