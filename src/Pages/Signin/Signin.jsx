import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import React, { useContext, useRef } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup, Form, Button } from "react-bootstrap";
import userLocalStorage from "../../userLocalStorage";
import style from "../Signin/Signin.module.css";

const Signin = () => {
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const { setAccount } = useContext(AccountContext);
  const navigate = useNavigate();

  const onLoginSuccess = (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);

    const user = userLocalStorage();

    user.push({
      fname: decoded.given_name,
      lname: decoded.family_name,
      email: decoded.email,
      name: decoded.name,
    });

    localStorage.setItem("User", JSON.stringify(user));
    navigate("/home");
  };

  const onLoginError = (res) => {
    console.log("error in login", res);
  };

  function handleSubmit() {
    const userData = userLocalStorage();

    const userObj = userData.find(
      (obj) =>
        obj?.email === userEmailRef.current.value &&
        obj?.password === userPasswordRef.current.value
    );

    if (userObj != undefined) {
      setAccount(userObj);
      navigate("/home");
    } else alert("Please registered first");
  }

  return (
    <>
      <div className={style.signinContainer}>
        <Form className={style.signinForm}>
          <h1 style={{ margin: "25px", marginBottom: "50px" }}>Sign in</h1>
          <h6>Log in with Google</h6>

          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          <br />
          <br />
          <p className={style.textInLine}> Or </p>

          <FormGroup
            style={{
              padding: "10px",
              paddingTop: "35px",
              margin: "10px",
              width: "50%",
              height: "30%",
            }}
          >
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              ref={userEmailRef}
              placeholder="Enter your email "
            />

            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              ref={userPasswordRef}
              placeholder="Enter your password"
            />
          </FormGroup>
          <Button variant="secondary" onClick={handleSubmit}>
            Log in
          </Button>
          <br />
          <a>Don't have an account? </a>
          <Link to={"/Signup"}>Sign up</Link>
        </Form>
      </div>
    </>
  );
};

export default Signin;
