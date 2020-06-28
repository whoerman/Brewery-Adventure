import React from 'react';
import ReactMap from "react-usa-map";
import StatesObj from "../USAMap/InitialStates";

const USAMap = () => {

  const handleStateClick = event => {
    let currentClickedState = StatesObj[event.target.dataset.name].fullName;
    console.log(currentClickedState);
    
  };
  return (
    <div>
      <ReactMap customize={StatesObj} onClick={handleStateClick} />
    </div>
  )
}

export default USAMap;