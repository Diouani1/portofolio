import "./Main.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareXing,
} from "@fortawesome/free-brands-svg-icons";
function Maincomponent() {
  return (
    <div className="main">
      <div>
        <h1>
          EL Mokhtar Diouani Ein Full-Stack-Webentwickler
          <br />
          <span>Digitale Karriere</span>
        </h1>
        <h3>
          Ich habe erfolgreich umfassende <br />
          Webentwicklungsfähigkeiten erworben <br />
          durch meine Ausbildung bei <span>DCI</span>
        </h3>
        <Button href="tel:00 49 15217937286" className="main-btn">
          Jetzt anrufen
        </Button>
        <div className="social-icons">
          <Button
            className="button"
            variant="outline-success"
            href="https://www.xing.com/profile/ElMokhtar_Diouani/cv"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSquareXing}
              style={{
                fontSize: "3rem",
              }}
            />
          </Button>
          <Button
            className="button"
            variant="outline-dark"
            href="https://github.com/Diouani1"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              style={{
                fontSize: "3rem",
              }}
            />
          </Button>
          <Button
            className="button"
            variant="outline-primary"
            href="https://www.linkedin.com/in/el-mokhtar-diouani-10a009124/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                fontSize: "3rem",
              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Maincomponent;
