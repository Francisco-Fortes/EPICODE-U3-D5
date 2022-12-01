import { Navbar, Container, Nav } from "react-bootstrap";
import netflixLogo from "../../assets/netflix_logo.png";
import profilePic from "../../assets/avatar.png";
import "./my-navbar.css";
// NavDropdown
const MyNavbar = () => {
  return (
    <Navbar expand="lg" id="main-bg" variant="dark" className="main-bg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img id="netflix-logo" src={netflixLogo} alt="Netflix-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-between"
          id="basic-navbar-nav"
        >
          <Nav className="me-auto align-items-center">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
          </Nav>
          <Nav className="me-auto align-items-center">
            <Nav.Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="26"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="26"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#">
              <img id="profile-picture" src={profilePic} alt="profile-avatar" />
            </Nav.Link>
          </Nav>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
