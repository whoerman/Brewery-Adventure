import React, { Component } from 'react';
import './App.css';
import StatesObj from "../src/MapSetup/InitialStates";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import USAMap from "react-usa-map";
import axios from "axios";
 
class App extends Component {


  /* mandatory */
 handleStateClick = (event) => {

    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${StatesObj[event.target.dataset.name].fullName}`)
    .then((response) => {
      let currentBreweries = response.data;
      console.log(currentBreweries);
    });
    
  }
 
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm={8}><USAMap onClick={this.handleStateClick} customize={StatesObj} /></Col>
            <Col sm={4}><p>Bacon ipsum dolor amet hamburger pork ham, shankle sausage tail andouille pig venison porchetta spare ribs biltong frankfurter pastrami. Leberkas pig picanha sausage prosciutto, swine ham turducken ground round kevin alcatra chislic bacon. Buffalo pork chop ham leberkas. </p></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default App;