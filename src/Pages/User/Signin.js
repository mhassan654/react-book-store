// @ts-nocheck
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import axios from "axios";
import Layout from "../../Components/Layouts/Layout";
import { signIn, authenticate } from "../../auth";
import "./style.css";
// import { API } from "../../config";
const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, error: false, [name]: value });
  };

  // const { name, email, password, error, success } = values;
  const handleSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, loading: true });
    signIn({ email, password }).then((data) => {
      setValues({ ...values, loading: false });
      if (data.error) {
        setValues({
          ...values,
          loading: false,
          redirectToReferrer: true,
        });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
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

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Navigate to="/" />;
    }
  };

  const signInForm = () => (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <h2 className="card-title text-center">SignIn</h2>
            <div className="card-body py-md-4">
              <form _lpchecked="1" onSubmit={handleSubmit}>
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
    <Layout title="Signin Page" description="FOR SIGN IN PAGE">
      {/* {JSON.stringify(values)} */}
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
