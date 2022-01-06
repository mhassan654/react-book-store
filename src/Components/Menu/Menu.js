import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import { signout, isAuth } from "../../auth";
import { Navigate } from "react-router-dom";
// import { withRouter } from "react-router";

// const SetActive = (history, path) => {
//     let navigate = useNavigate();
//   if (history.location.pathname === path) {
//     return { color: "#ff9900" };
//   } else {
//     return { color: "#ffffff" };
//   }
// };
const Menu = () => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#ff9900" : "#f0f0f0",
          })}
          to="/"
        >
          Home
        </NavLink>
      </li>

{!isAuth() &&(
  <Fragment>
  <li className="nav-item">
        <NavLink
          className="nav-link"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#ff9900" : "#f0f0f0",
          })}
          to="/signin"
        >
          SignIn
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/signup"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#ff9900" : "#f0f0f0",
          })}
        >
          Signup
        </NavLink>
      </li>
  </Fragment>
)}
     {isAuth() &&(
      <li className="nav-item">
        <span
          className="nav-link"
          style={{ cursor: "pointer", color: "#fff" }}
          // to="/"
          onClick={() => signout()}
        >
          Signout
        </span>
      </li>
     )}

    
    </ul>
  </div>
);

export default Menu;
