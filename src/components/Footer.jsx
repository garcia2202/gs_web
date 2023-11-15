import {} from "react";
import "../css/Footer/footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <p>Todos os direitos reservados.</p>
      <p>2023</p>
      <div className="redes_div">
        <FaFacebook className="redes" />
        <FaGithub className="redes" />
        <FaInstagram className="redes" />
        <FaTwitter className="redes" />
        <FaYoutube className="redes" />
      </div>
    </footer>
  );
}

export default Footer;
