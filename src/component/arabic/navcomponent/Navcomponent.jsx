import "./nav.css";
import { useState } from "react";
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
    <div className="header" id="arabicNav">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar.Brand
              style={{ fontWeight: "bold", cursor: "pointer" }}
              className="custom-navbar"
              onClick={() => handleMenuItemClick("arabic")}
            >
              الصفحة الرئيسية
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className=" bg-light"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("arabic/about")}
              >
                المعلومات
              </Nav.Link>
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("arabic/contact")}
              >
                الاتصال
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

              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("german")}
              >
                <span className="fi fi-de"></span>
              </Nav.Link>
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("english")}
              >
                <span className="fi fi-gb"></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navcomponent;
