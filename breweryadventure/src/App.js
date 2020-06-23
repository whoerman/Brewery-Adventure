import React from 'react';
import './App.css';
import axios from "axios";
import getBreweries from "../src/breweryAPI/APIrequest"

function App() {

  function getBreweries() {
    let state ="new_hampshire"

    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=200`)
    .then((response) => {
      let currentBreweries = response.data;
      console.log(currentBreweries);
      return currentBreweries
    });
  }

 getBreweries();
  
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Brewery Adventure
        </p>
      </header>
    </div>
  );
}

export default App;
