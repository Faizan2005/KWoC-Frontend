import "../styles/Header.css";
import { ROUTER_PATHS } from "../util/constants";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="kwoc-logo"></div>
      <nav className="nav-bar">
        <a href='#' className="nav-element">Home</a>
        <a href='#' className="nav-element">Projects</a>
        <a href='#' className="nav-element">FAQs</a>
        <button className="button"><Link to = {ROUTER_PATHS.STUDENT_FORM}>Register</Link></button>
      </nav>
    </div>
  )
}
