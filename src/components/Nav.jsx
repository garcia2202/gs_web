import { useState,useEffect } from "react";
import "../css/Nav/nav.css";

function Nav() {
  const [name, setName] = useState(sessionStorage.getItem("name"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));

  useEffect(() => {
    setName(sessionStorage.getItem("name"));
    setEmail(sessionStorage.getItem("email"));
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  }

  return (
      <nav className="nav_container">
        <h1>Tech Pill</h1>
        <div className="dados">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <div>
          <button className="button_logout" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
  );
}

export default Nav;