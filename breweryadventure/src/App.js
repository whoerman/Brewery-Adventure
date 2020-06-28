import React, { Component } from 'react';
import './App.css';
import Navbartop from "../src/components/NavTop/Navbartop";
import USAMap from "../src/USAMap/USAMap";
import Container from 'react-bootstrap/Container';
import BreweryList from './breweryAPI/BreweryList';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbartop/>
        <Container fluid>
          <div className="row">
            <div className="col-md-8 MapDiv">
            <h3 className="text-center">Click on any State to get a list of that state's breweries...</h3>
              <USAMap/>
            </div>
            <div className="col-md-4 MapDiv">
              <h4>Brewery List</h4>
              <BreweryList/>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
 
export default App;