import React, { useRef, useState } from "react";
import { Form, FormGroup, Row, Col, Button } from "react-bootstrap";
import userLocalStorage from "../../userLocalStorage";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
   
  const nav = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const user = userLocalStorage();

    user.push({
      fname: fnameRef.current.value,
      lname: lnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      day: dayRef.current.value,
      month: monthRef.current.value,
      year: yearRef.current.value,
      
    });

    localStorage.setItem("User", JSON.stringify(user))
    event.target.resset();
    nav('/');
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#64CCC5",
        }}
      >
        <Form
          onSubmit={handleSubmit}
          style={{
            width: "50%",
            padding: "15px",
            margin: "15px",
            backgroundColor: "#DAFFFB",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "5px 10px  10px black",
          }}
        >
          <h1>Sign Up</h1>
          <FormGroup
            controlId="formGridEmail"
            style={{ padding: "15px", margin: "10px" }}
          >
            <Row>
              <Col>
                <Form.Label>First name:</Form.Label>
                <Form.Control placeholder="First name" ref={fnameRef} />
              </Col>
              <Col>
                <Form.Label>Last name:</Form.Label>
                <Form.Control placeholder="Last name" ref={lnameRef} />
              </Col>
            </Row>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email "
              ref={emailRef}
            />

            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your phone number"
              ref={phoneRef}
            />

            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create your password"
              ref={passwordRef}
            />

            <Row className="mb-3">
              <Form.Label>DOB:</Form.Label>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control type="number" placeholder="Day" ref={dayRef} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select defaultValue="Month" ref={monthRef}>
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Control type="number" placeholder="Year" ref={yearRef} />
              </Form.Group>
            </Row>
          </FormGroup>
          <Button variant="secondary" type="submit">
            Create Account
          </Button>
          <a href="/"> Log in</a>
        </Form>
      </div>
    </>
  );
};

export default Signup;
