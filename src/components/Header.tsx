import "../styles/Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="kwoc-logo"></div>
      <nav className="nav-bar">
        <a href='#' className="nav-element">Home</a>
        <a href='#' className="nav-element">Projects</a>
        <a href='#' className="nav-element">FAQs</a>
        <button className="button">Register</button>
      </nav>
    </div>
  )
}
