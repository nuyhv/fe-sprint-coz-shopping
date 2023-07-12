import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => setIsOpen(!isOpen);

  return (
    <header className="header-container">
      <div>
        <Link to="/">
          <img src="logo.svg" alt="logo"></img>
        </Link>
        <span className="logo-title">COZ Shopping</span>
      </div>
      <div className="hamburger-container" onClick={toggleButton}>
        <img src="hamburger.svg" alt="hamburger button"></img>
        {isOpen ? <Dropdown /> : null}
      </div>
    </header>
  );
}
