import React from "react";
import "./Navbar.css";
import { Link } from "react";
export default function Navbar() {
  return (
    <div>
      Navbar
      <ul>
        <Link to="/Home"></Link>
        <Link to="/Agents"></Link>
        <Link to="/Weapons"></Link>
        <Link to="/Maps"></Link>
      </ul>
    </div>
  );
}
