import React from 'react';
import ReactMap from "react-usa-map";
import StatesObj from "../USAMap/InitialStates";
import axios from "axios";

const USAMap = () => {

  const handleStateClick = event => {
    let currentClickedState = StatesObj[event.target.dataset.name].fullName;
    console.log(currentClickedState);
    
    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${currentClickedState}`)
    .then((response) => {
      let currentBreweries = response.data;
      console.log(currentBreweries)
    });


  };
  return (
    <div>
      <ReactMap customize={StatesObj} onClick={handleStateClick} />
    </div>
  )
}

export default USAMap;