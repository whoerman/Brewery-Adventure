// import React from 'react';
import './App.css';
import breweries from "../src/breweryAPI/brewerytest";
import StatesObj from "../src/MapSetup/InitialStates";


import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import USAMap from "react-usa-map";

 
class App extends Component {

  /* mandatory */
  mapHandler = (event) => {
    let stateAbbrev = event.target.dataset.name;
    console.log(stateAbbrev);
  }
 
  render() {
    return (
      <div classname="App">
        <Container fluid>
          <Row>
            <Col sm={8}><USAMap onClick={this.mapHandler} customize={StatesObj} /></Col>
            <Col sm={4}><p>Bacon ipsum dolor amet hamburger pork ham, shankle sausage tail andouille pig venison porchetta spare ribs biltong frankfurter pastrami. Leberkas pig picanha sausage prosciutto, swine ham turducken ground round kevin alcatra chislic bacon. Buffalo pork chop ham leberkas. </p></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default App;