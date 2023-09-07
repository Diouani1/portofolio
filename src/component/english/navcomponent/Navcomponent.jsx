import "./nav.css";
import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navcomponent() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const handleMenuItemClick = (name) => {
    setExpanded(false);
    navigate(`/${name}`);
  };

  return (
    <div className="header">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        style={{
          background: "rgba(51,51,51,255)",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar.Brand
              style={{ fontWeight: "bold", cursor: "pointer" }}
              className="custom-navbar"
              onClick={() => handleMenuItemClick("")}
            >
              HOME
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className=" bg-light"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("about")}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("contact")}
              >
                CONTACT
              </Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://github.com/Diouani1/react-group-project"
                  target="_blank"
                >
                  Build resume
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/Diouani1/Friseur-Project"
                  target="_blank"
                >
                  Friseur
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/Diouani1/react-project"
                  target="_blank"
                >
                  Cashier
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("german")}
              >
                <span className="fi fi-de"></span>
              </Nav.Link>
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("arabic")}
              >
                <span class="fi fi-eh"></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navcomponent;
