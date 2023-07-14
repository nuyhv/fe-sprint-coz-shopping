import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleButton = () => setIsOpen(!isOpen);
  const handleBlur = () => setTimeout(() => setIsOpen(false), 200);

  return (
    <header className="header-container">
      <div>
        <Link to="/">
          <img src="../logo.svg" alt="logo"></img>
        </Link>
        <span className="logo-title">COZ Shopping</span>
      </div>
      <div className="hamburger-container" onBlur={handleBlur}>
        <button onClick={handleButton}>
          <img src="../hamburger.svg" alt="hamburger button"></img>
        </button>
        {isOpen && <Dropdown />}
      </div>
    </header>
  );
}
