import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/logo.png'
import { Link } from 'react-router-dom';


function MyNavbar() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} activeClassName to="/"><img src={logo} alt="bits&parts logo" className='App-logo' width="150"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} activeClassName to="/">Inicio</Nav.Link>
              <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={NavLink} activeClassName to="/Category/Componentes%20de%20PC">Componentes de PC</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} activeClassName to="/Category/Periféricos">
                  Periféricos
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} activeClassName to="/Category/Impresoras">Impresoras</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} activeClassName to="/Category/Monitores">
                  Monitores
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
            <Nav>
              <Link to="/Cart"><CartWidget/></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  export default MyNavbar;