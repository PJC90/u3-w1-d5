import { Container, Nav, Navbar } from "react-bootstrap"
import { Bell, PersonCircle, Search } from "react-bootstrap-icons"


const NavbarNetflix = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="#home">
          <img
              src="assets/logo.png"
              width="100"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link  >Home</Nav.Link>
              <Nav.Link>TV Shows</Nav.Link>
              <Nav.Link>Movies</Nav.Link>
              <Nav.Link>Recently Added</Nav.Link>
              <Nav.Link>My List</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="ms-auto d-flex flex-row me-3">
            <Nav.Link ><Search /></Nav.Link>
            <Nav.Link >KIDS</Nav.Link>
            <Nav.Link ><Bell/></Nav.Link>
            <Nav.Link ><PersonCircle/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarNetflix