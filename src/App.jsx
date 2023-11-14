import {} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
