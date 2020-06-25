import React, { Component } from 'react';
import './App.css';
import StatesObj from "../src/USAMap/InitialStates";
import Navbartop from "../src/components/Navbartop";
import USAMap from "react-usa-map";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import BreweryList from './breweryAPI/breweryListFormat';

class App extends Component {


  /* mandatory */
 handleStateClick = (event) => {

    let currentState = StatesObj[event.target.dataset.name].fullName;
    console.log(currentState);    
  }
 
  render() {
    return (
      <div className="App">
        <Navbartop/>
        <Container fluid>
          <Row className ="MapDiv">
            <Col xs={6} m={4}>
              <USAMap onClick={this.handleStateClick} customize={StatesObj} />
            </Col>
            <Col xs={6} m={4}>
              <BreweryList/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default App;