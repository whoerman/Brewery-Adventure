import React from 'react';
import './App.css';
import breweries from "../src/breweryAPI/brewerytest";

function App() {

  console.log(breweries)
  
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
