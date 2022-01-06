import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../Pages/User/Signup";
import SignIn from "../Pages/User/Signin";
import Home from '../Core/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};


export default Router;