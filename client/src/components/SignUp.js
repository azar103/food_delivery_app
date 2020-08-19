import React, { useState, useEffect, useRef } from "react";
import Form from "./Form";
import "./SignUp.scss";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Nav from "./Nav";
import { connect } from "react-redux";
import { registerUser } from "../reducers/authActions";
import { Alert } from "reactstrap";
import { clearErros } from "../reducers/errorActions";
import NavHeader from "./NavHeader";
import NavAuth from "./NavAuth";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [msg, setMsg] = useState("");
  const prevError = useRef();
  useEffect(() => {
    const { error } = props;
    prevError.current = error;
    if (error !== prevError) {
      if (error.id === "REGISTER_FAIL") {
        setMsg(error.msg.message);
      } else {
        setMsg(null);
      }
    }
  });
  const [redirectTo, setRedirectTo] = useState(false);
  const handChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const createUser = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      password,
      email,
      address,
      tel,
    };
    props.dispatch(registerUser(user));
    console.log(props.error.msg);
    if (
      props.error.status == null &&
      firstName !== "" &&
      lastName !== "" &&
      password !== "" &&
      email != "" &&
      address != "" &&
      tel !== ""
    ) {
      setRedirectTo(true);
      setFirstName("");
      setLastName("");
      setPassword("");
      setEmail("");
      setAddress("");
      setTel("");
    }
  };

  return redirectTo === false ? (
    <>
      <Nav>
        <NavAuth />
      </Nav>
      {msg ? (
        <Alert
          color="danger"
          style={{
            backgroundColor: "#DC143C",
            opacity: 0.8,
            margin: "auto",
            maxWidth: "553px",
            padding: "10px",
            color: "white",
            marginTop: "100px",
          }}
        >
          {msg}
        </Alert>
      ) : null}

      <Form>
        <div className="login_container_right">
          <h1>Create Your account</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name..."
              className="input"
              value={firstName}
              onChange={(value) => {
                props.dispatch(clearErros());
                handChangeFirstName(value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name..."
              className="input"
              value={lastName}
              onChange={(value) => {
                props.dispatch(clearErros());
                handleChangeLastName(value);
              }}
            />
            <input
              type="email"
              placeholder="email..."
              className="input"
              value={email}
              onChange={(value) => {
                props.dispatch(clearErros());
                handleChangeEmail(value);
              }}
            />
            <input
              type="password"
              placeholder="password..."
              className="input"
              value={password}
              onChange={(value) => {
                props.dispatch(clearErros());
                handleChangePassword(value);
              }}
            />
            <input
              type="password"
              placeholder="confirm your password..."
              className="input"
              onChange={(value) => {
                props.dispatch(clearErros());
              }}
            />
            <input
              type="number"
              placeholder="telephone..."
              className="input"
              value={tel}
              onChange={(value) => {
                props.dispatch(clearErros());
                handleChangeTel(value);
              }}
            />
            <input
              type="text"
              placeholder="address..."
              className="input"
              value={address}
              onChange={(value) => {
                props.dispatch(clearErros());
                handleChangeAddress(value);
              }}
            />
          </div>
          <div className="buttons-group">
            <button
              className="singup-signin-button"
              onClick={(e) => createUser(e)}
            >
              <b>Create An Account</b>
            </button>
          </div>
        </div>
      </Form>
    </>
  ) : (
    <Redirect to="/login" />
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuthenticated,
    error: state.errorReducer,
    redirectToLogin: state.authReducer.redirectToLogin,
  };
};
export default connect(mapStateToProps)(SignUp);
