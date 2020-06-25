import React, { Component } from 'react';
import './App.css';
import StatesObj from "../src/MapSetup/InitialStates";
import Navbartop from "../src/components/Navbartop";
import USAMap from "react-usa-map";
import BreweryListFormat from "../src/breweryAPI/brewerylistformat"
import axios from "axios";
 
class App extends Component {


  /* mandatory */
 handleStateClick = (event) => {

    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${StatesObj[event.target.dataset.name].fullName}`)
    .then((response) => {
      let currentBreweries = response.data;
      BreweryListFormat(currentBreweries)
    });
    
  }
 
  render() {
    return (
      <div className="App">
        <Navbartop/>
        <div className ="row">
          <div><USAMap classname="MapDiv" onClick={this.handleStateClick} customize={StatesObj} /></div>
          <div><p>Bacon ipsum dolor amet hamburger pork ham, shankle sausage tail andouille pig venison porchetta spare ribs biltong frankfurter pastrami. Leberkas pig picanha sausage prosciutto, swine ham turducken ground round kevin alcatra chislic bacon. Buffalo pork chop ham leberkas. </p></div>
        </div>
            </div>
    );
  }
}
 
export default App;