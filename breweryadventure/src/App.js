import React, { Component } from 'react';
import './App.css';
import StatesObj from "../src/MapSetup/InitialStates";
import Navbartop from "../src/components/Navbartop";
import USAMap from "react-usa-map";
// import BreweryListFormat from "../src/breweryAPI/brewerylistformat"
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';

class App extends Component {


  /* mandatory */
 handleStateClick = (event) => {

    // axios.get(`https://api.openbrewerydb.org/breweries?by_state=${StatesObj[event.target.dataset.name].fullName}`)
    // .then((response) => {
    //   let currentBreweries = response.data;
    //   // console.log(StatesObj[event.target.dataset.name].fullName);
    //   console.log(currentBreweries)
    // });
    
  }
 
  render() {
    return (
      <div className="App">
        <Navbartop/>
        <Container fluid>
          <Row>
            <Col col-={7} className ="MapDiv">
              <USAMap onClick={this.handleStateClick} customize={StatesObj} />
            </Col>
            <Col col-={4} className ="ListDiv">
              <p>Bacon leberkas. </p></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default App;