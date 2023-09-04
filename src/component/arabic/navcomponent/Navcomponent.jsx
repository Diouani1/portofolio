import "./nav.css";
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navcomponent() {
  const [expanded, setExpanded] = useState(false);

  const handleMenuItemClick = () => {
    setExpanded(false);
  };
  return (
    <div className="header" id="arabicNav">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar.Brand style={{ fontWeight: "bold" }}>
              <Link
                to="/arabic"
                className="custom-navbar"
                onClick={handleMenuItemClick}
              >
                الصفحة الرئيسية
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className=" bg-light"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link>
                <Link
                  to="/arabic/about"
                  className="custom-navbar"
                  onClick={handleMenuItemClick}
                >
                  المعلومات
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/arabic/contact"
                  className="custom-navbar"
                  onClick={handleMenuItemClick}
                >
                  الاتصال
                </Link>
              </Nav.Link>
              <NavDropdown title="مشاريع" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://github.com/Diouani1/react-group-project"
                  target="_blank"
                >
                  مشروع السيرة الذاتية
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/Diouani1/Friseur-Project"
                  target="_blank"
                >
                  مشروع حلاق
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/Diouani1/react-project"
                  target="_blank"
                >
                  مشروع أمين الصندوق
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="custom-navbar">
                <Link to="/german">
                  <span className="fi fi-de"></span>
                </Link>
              </Nav.Link>
              <Nav.Link className="custom-navbar">
                <Link to="/">
                  <span className="fi fi-gb"></span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navcomponent;
