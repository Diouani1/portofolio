import "./Contact.css";
import { Form, Button } from "react-bootstrap";

function Contactcomponent() {
  return (
    <div className="contact" id="arabic-contact">
      <h2 class="title">لنبقى على إتصال</h2>

      <div className="content">
        <Form
          action="https://formspree.io/f/xzbolbqq"
          method="post"
          className="disk-form"
        >
          <Form.Group>
            <Form.Label htmlFor="fname">الإسم الشخصي :</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="الإسم الشخصي "
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lname">الإسم العائلي :</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              id="lname"
              required
              placeholder="الإسم العائلي "
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="phone"> رقم الهاتف :</Form.Label>
            <Form.Control
              type="tel"
              id="phone"
              name="phone"
              placeholder=" رقم الهاتف "
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email"> البريد الإلكتروني :</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              required
              placeholder=" البريد الإلكتروني "
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="story">تعليقات :</Form.Label>
            <Form.Control
              as="textarea"
              id="story"
              name="story"
              rows="5"
              placeholder="علق ببعض الكلمات "
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
            <Form.Label htmlFor="fname">الأسم الكامل :</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="  الأسم الكامل "
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">البريد الإلكتروني :</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              required
              placeholder="أكتب بريدك الإلكتروني"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="story"> تعليقات :</Form.Label>
            <Form.Control
              as="textarea"
              id="story"
              name="story"
              rows="5"
              placeholder="علق ببعض الكلمات "
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Contactcomponent;
