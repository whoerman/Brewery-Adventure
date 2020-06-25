import React, { Component } from 'react';
import './App.css';
import StatesObj from "../src/MapSetup/InitialStates";
import Navbartop from "../src/components/Navbartop";
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
        <Navbartop/>
        <div className="MapDiv">
          <div className="col-7 col-md-7">
          <USAMap onClick={this.handleStateClick} customize={StatesObj} />
          </div>
          <div className="col-4 col-md-4">
          <p>currentBreweries </p>
          </div>
      </div>
      </div>
    );
  }
}
 
export default App;