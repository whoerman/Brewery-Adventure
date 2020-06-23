import React from 'react';
import './App.css';
import axios from "axios"

function App() {

  let state ="ohio"

  axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
  .then((response) => {
    let currentBreweries = response.data;
    console.log(currentBreweries);
  });
  
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
