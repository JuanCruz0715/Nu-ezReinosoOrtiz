import React from "react";
import "./Navbar.css";
<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
=======
import { Link, NavLink, useLocation } from 'react-router-dom';

>>>>>>> 8a89deb6e8b39f48cff3b0b9826532f376fed8bc
import logocard1 from "../../../public/logocard1.png";

export default function Navbar() {
  const location = useLocation();

  const loginRoute = '/';

  const shouldShowNavbar = () => {
    return location.pathname !== loginRoute;
  };
  return (
<<<<<<< HEAD
    <nav className="Container-Navbar">
      <img src={logocard1} alt="Valorant" />
      <ul className="Card-Navbar">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Agents"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Agents
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Weapons"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Weapons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Maps"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Maps
          </NavLink>
        </li>
      </ul>
    </nav>
=======
    shouldShowNavbar() && (
      <nav className="Container-Navbar">
        <img src={logocard1} alt="Valorant" />
        <ul className="Card-Navbar">
          <li>
            <NavLink to='/Home' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Agents' className={({ isActive }) => (isActive ? 'active' : '')}>Agents</NavLink>
          </li>
          <li>
            <NavLink to='/Weapons' className={({ isActive }) => (isActive ? 'active' : '')}>Weapons</NavLink>
          </li>
          <li>
            <NavLink to='/Maps' className={({ isActive }) => (isActive ? 'active' : '')}>Maps</NavLink>
          </li>
        </ul>
      </nav>
    )
>>>>>>> 8a89deb6e8b39f48cff3b0b9826532f376fed8bc
  );
}
