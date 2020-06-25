import React from "react";
import '../components/navbartop.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbartop() {
  
    return (
      <div className="NavBarDiv">
        <Container>
        <Navbar expand="lg" variant="light" bg="light">
        <div>
            <Navbar.Brand><h1 className="logotext"><FontAwesomeIcon icon={faBeer} /> Brewery Adventure</h1></Navbar.Brand>
        </div>
        </Navbar>
        </Container>
      </div>
    );
  }
  
  export default Navbartop;