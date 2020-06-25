import React from "react";
import '../breweryAPI/brwerylistformat.css';
import currentBreweries from "../App";

function BreweryListFormat() {
    console.log(currentBreweries);
    return (
      <div className="BreweryListDiv">
          Brewery List
      </div>
    );
  }
  
  export default BreweryListFormat;