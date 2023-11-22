import {} from "react";
import "../css/Nav/nav.css";

function Nav() {

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  }

  return (
      <nav className="nav_container">
        <h1>Tech Pill</h1>
        <div className="dados">
          <p>{sessionStorage.getItem("name")}</p>
          <p>{sessionStorage.getItem("email")}</p>
        </div>
        <div>
          <button className="button_logout" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
  );
}

export default Nav;