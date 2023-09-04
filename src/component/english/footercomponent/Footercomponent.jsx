import "./Footer.css";
import { Button, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

function Footercomponent() {
  return (
    <div className="footer">
      <p>
        Copyrights© <span>DIOUANI ELMOKHTAR</span>
      </p>
      <div class="social-icons">
        <NavLink href="https://github.com/Diouani1" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              fontSize: "2rem",
            }}
          />
        </NavLink>
        <NavLink
          href="https://www.linkedin.com/in/el-mokhtar-diouani-10a009124/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            style={{
              fontSize: "2rem",
            }}
          />
        </NavLink>
        <NavLink
          href="https://www.xing.com/profile/ElMokhtar_Diouani/cv"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faXing}
            style={{
              fontSize: "2rem",
            }}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Footercomponent;
