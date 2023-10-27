import { Container, Nav, Navbar } from "react-bootstrap"
import { Bell, PersonCircle, Search } from "react-bootstrap-icons"


const NavbarNetflix = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Link href="#link">TV Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features"><Search /></Nav.Link>
            <Nav.Link href="#pricing">KIDS</Nav.Link>
            <Nav.Link href="#pricing"><Bell/></Nav.Link>
            <Nav.Link href="#pricing"><PersonCircle/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarNetflix