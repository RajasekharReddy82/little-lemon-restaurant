import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";
import nav from "../assets/nav-logo.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <img src={nav} alt="Little Lemon logo" className="nav-image" />
        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" onClick={handleToggle} />
      {navbarOpen && <Navigation device="mobile" onClick={handleToggle} />}
    </nav>
  );
}
