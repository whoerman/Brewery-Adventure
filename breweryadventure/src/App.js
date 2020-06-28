import React, { Component } from 'react';
import './App.css';
import StatesObj from "../src/USAMap/InitialStates";
import Navbartop from "../src/components/NavTop/Navbartop";
import USAMap from "react-usa-map";
import Container from 'react-bootstrap/Container';


// let currentState = "Click on a State";

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
          <div className="row">
            <div className="col-md-8 MapDiv">
            <h3 className="text-center">Click on any State to get a list of that state's breweries...</h3>
              <USAMap onClick={this.handleStateClick} customize={StatesObj}/>
            </div>
            <div className="col-md-4 MapDiv">
              <h3 className="text-center">Brewery List</h3>
              {/* {{currentState}} */}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
 
export default App;