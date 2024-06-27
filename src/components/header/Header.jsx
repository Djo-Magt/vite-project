import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import SearchInput from '../SearchInput/SearchInput';
import "./header.css";
import { Link } from 'react-router-dom';

function Header () {
  return (
    <div>
      <div className="header-connect">
        <Container>
          <div className="row">
            <div className="col-md-5 col-sm-8 col-xs-12">
              <div className="header-half header-call">
                <p>
                  <span><i className="pe-7s-call"></i> +1 234 567 7890</span>
                  <span><i className="pe-7s-mail"></i> your@company.com</span>
                </p>
              </div>
            </div>
            <div className="col-md-2 col-md-offset-5 col-sm-3 col-sm-offset-1 col-xs-12">
              <div className="header-half header-social">
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-vine"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Navbar collapseOnSelect expand="lg" className="navbar navbar-default">
        <Container>
          <Navbar.Brand href="index.html">
            <Link to="/"><img src="src/assets/img/logo.png" alt="Acceuil" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="yamm">
            <div className="button navbar-right">
              <button className="navbar-btn nav-button wow bounceInRight login" onClick={() => window.open('register.html')} data-wow-delay="0.4s">Login</button>
              <button className="navbar-btn nav-button wow fadeInRight" onClick={() => window.open('submit-property.html')} data-wow-delay="0.5s">Submit</button>
            </div>
            <Nav className="main-nav ml-auto header-links">
              <NavDropdown title="Home" id="collasible-nav-dropdown" className="dropdown ymm-sw" data-wow-delay="0.1s">
                <NavDropdown.Item href="index.html">Home Style 1</NavDropdown.Item>
                <NavDropdown.Item href="index-2.html">Home Style 2</NavDropdown.Item>
                <NavDropdown.Item href="index-3.html">Home Style 3</NavDropdown.Item>
                <NavDropdown.Item href="index-4.html">Home Style 4</NavDropdown.Item>
                <NavDropdown.Item href="index-5.html">Home Style 5</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="wow fadeInDown" data-wow-delay="0.1s" href="properties.html">Properties</Nav.Link>
              <Nav.Link className="wow fadeInDown" data-wow-delay="0.1s" href="property.html">Property</Nav.Link>
              <Nav.Link className="wow fadeInDown" data-wow-delay="0.4s" href="contact.html">Contact</Nav.Link>
              <SearchInput />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
