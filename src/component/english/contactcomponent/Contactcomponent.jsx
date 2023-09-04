import "./Contact.css";
import { Form, Button } from "react-bootstrap";

function Contactcomponent() {
  return (
    <div className="contact">
      <h2 className="title">Let's be in touch</h2>
      <div className="content">
        <Form
          action="https://formspree.io/f/xzbolbqq"
          method="post"
          className="disk-form"
        >
          <Form.Group>
            <Form.Label htmlFor="fname">First Name:</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lname">Last Name:</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              id="lname"
              required
              placeholder="Last name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="phone">Your phone number:</Form.Label>
            <Form.Control
              type="tel"
              id="phone"
              name="phone"
              placeholder="Write your number"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Your E-mail:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              required
              placeholder="Write your e-mail"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="story">Tell me your story:</Form.Label>
            <Form.Control
              as="textarea"
              id="story"
              name="story"
              rows="5"
              placeholder="Write your story"
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
            <Form.Label htmlFor="fname">Full Name:</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="Full name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Your E-mail:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              required
              placeholder="Write your e-mail"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="story">Tell me your story:</Form.Label>
            <Form.Control
              as="textarea"
              id="story"
              name="story"
              rows="5"
              placeholder="Write your story"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Contactcomponent;
