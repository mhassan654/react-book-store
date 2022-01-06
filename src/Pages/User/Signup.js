// @ts-nocheck
import React, { useState } from "react";
import {Link} from 'react-router-dom';
// import axios from 'axios'
import Layout from "../../Components/Layouts/Layout";
import "./style.css";
// import { API } from "../../config";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, error: false, [name]: value });
  };

  const signup = (user) => {
    return fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const { name, email, password, error, success } = values;
  const handleSubmit = (event) => {
    event.preventDefault();
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
        });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      New account created. Please <Link to="/signin" className="btn btn-sm btn-success">Sign In</Link>
    </div>
  );

  const signUpForm = () => (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <h2 className="card-title text-center">Sign UP</h2>
            <div className="card-body py-md-4">
              <form _lpchecked="1" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={values.name || ""}
                    placeholder="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={values.email || ""}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={values.password || ""}
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    placeholder="confirm-password"
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  {/* <a className="btn btn-sm btn-success">Login</a> */}
                  <button className="btn btn-sm btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Layout title="Sign up Page" description="FOR SIGN UP PAGE">
      {/* {JSON.stringify(values)} */}
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
