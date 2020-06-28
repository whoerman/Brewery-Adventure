import React from "react";
import '../NavTop/navbartop.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {faBeer} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import OpenBreweryDBLogo from "../NavTop/OpenBreweryDBLogo.png"

function Navbartop() {

  return ( 
  <div className = "NavBarDiv">
    <Container fluid >
      <Navbar expand = "lg"variant = "light" bg = "light" >
        <div className="row">
          <div className="col-md-8">
            <Navbar.Brand> <h1 className = "logotext" > < FontAwesomeIcon icon = {faBeer}/> Brewery Adventure</h1> </Navbar.Brand>
          </div>
          <div className="col-md-2">
            <h4> database available from: </h4> 
          </div> 
          <div className="col-md-2">
            <img src = {OpenBreweryDBLogo} alt = "Open Brewery Logo" className = "openDBlogo" />
          </div> 
        </div> 
      </Navbar> 
    </Container> 
  </div>
  );
}

export default Navbartop;