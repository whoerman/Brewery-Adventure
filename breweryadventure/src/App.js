import React, { Component, useState, setState } from 'react';
import './App.css';
import StatesObj from "../src/USAMap/InitialStates";
import Navbartop from "../src/components/NavTop/Navbartop";
import USAMap from "react-usa-map";
import Container from 'react-bootstrap/Container';
//import currentBreweries from "../src/breweryAPI/APIrequest"




class App extends Component {
 
  /* mandatory */
 handleStateClick = (event) => {
    const [stateName, setstateName] = useState(0);

    setstateName(StatesObj[event.target.dataset.name].fullName);
    console.log(stateName)
    


    // let currentState = StatesObj[event.target.dataset.name].fullName;
    // console.log(currentState); 
    // currentBreweries(currentState);
    // console.log(currentBreweries)

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
          <div className="row">
            <div className="col-md-8 MapDiv">
            <h3 className="text-center">Click on any State to get a list of that state's breweries...</h3>
              <USAMap onClick={this.handleStateClick} customize={StatesObj}/>
            </div>
            <div className="col-md-4 MapDiv">
              <h3 className="text-center">Brewery List</h3>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
 
export default App;