import React from "react";
import '../breweryAPI/brwerylistformat.css';
import currentBreweries from "../App"

import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BreweryListFormat() {
    console.log(currentBreweries);
    return (
      <div className="BreweryListDiv">
          Brewery List
      </div>
    );
  }
  
  export default BreweryListFormat;