import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <h2 style={{ fontWeight: "bold", fontSize: "28px", cursor: "pointer" }}>
          <span style={{ color: "#ff4c24" }}>Feast</span>
          <span style={{ color: "#49557e" }}>Flow.</span>
          <span
            style={{
              fontSize: "12px",
              marginLeft: "8px",
              color: "#6c757d",
              fontWeight: "normal",
              verticalAlign: "middle",
            }}
          >
            ADMIN
          </span>
        </h2>
      </div>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
