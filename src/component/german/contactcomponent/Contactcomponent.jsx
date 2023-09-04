import "./Contact.css";
import { Form, Button } from "react-bootstrap";

function Contactcomponent() {
  return (
    <div className="contact">
      <h2 className="title">Lass uns in Kontakt bleiben</h2>
      <div className="content">
        <Form
          action="https://formspree.io/f/xzbolbqq"
          method="post"
          className="disk-form"
        >
          <Form.Group>
            <Form.Label htmlFor="fname">Vorname :</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="Vorname"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lname">Nachname :</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              id="lname"
              required
              placeholder="Nachname "
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="phone">Handynummer :</Form.Label>
            <Form.Control
              type="tel"
              id="phone"
              name="phone"
              placeholder="schreiben sie ihre handynummer"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email"> E-mail:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              required
              placeholder="Schreiben Sie Ihre E-Mail"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="story">
              Erzähl mir deine Geschichte :
            </Form.Label>
            <Form.Control
              as="textarea"
              id="story"
              name="story"
              rows="5"
              placeholder="Erzähl mir deine Geschichte"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>

        <Form
          action="https://formspree.io/f/xzbolbqq"
          method="post"
          className="mobile-form"
        >
          <Form.Group>
            <Form.Label htmlFor="fname">Vollständiger Name :</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="Vollständiger Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email"> E-mail:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              required
              placeholder="Schreiben Sie Ihre E-Mail"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="story">
              Erzähl mir deine Geschichte :
            </Form.Label>
            <Form.Control
              as="textarea"
              id="story"
              name="story"
              rows="5"
              placeholder="Erzähl mir deine Geschichte"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Contactcomponent;
