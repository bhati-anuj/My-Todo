import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import React, { useContext, useState } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { useNavigate } from "react-router-dom";
import { FormGroup, Form, Button } from "react-bootstrap";

const Signin = () => {
  const { setAccount } = useContext(AccountContext);
  const navigate = useNavigate();

  const onLoginSuccess = (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    navigate("/home");
  };

  const onLoginError = (res) => {
    console.log("error in login", res);
  };

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
          <h1 style={{margin:'25px',marginBottom:'50px'}} >Sign in</h1>
          <h6>Log in with Google</h6>
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          <FormGroup controlId="formGridEmail" style={{padding:'15px',paddingTop:'50px',margin:'10px',width:'50%',height:'50%'}}>

            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email " />

            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </FormGroup>
          <Button variant="secondary" type="submit">
            Log in
          </Button>
        <a href="/signup">Signup</a>
        </Form>
      </div>
    </>
  );
};

export default Signin;
