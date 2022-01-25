import React from "react";
import "./navbar.css";
import { AiFillAlipayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <AiFillAlipayCircle className="companyLogo" />
      <div className="links">
        <Link className="navigationLink" to="/">
          Home
        </Link>
        <Link className="navigationLink" to="/contact ">
          Contact
        </Link>
        <Link className="navigationLink" to="/get-help">
          Get Help
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
