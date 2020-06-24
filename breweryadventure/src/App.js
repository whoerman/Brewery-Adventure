// import React from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';
import breweries from "../src/breweryAPI/brewerytest";

// function App() {

//   console.log(breweries)
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Brewery Adventure
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import USAMap from "react-usa-map";

 
class App extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  render() {
    return (
      <div className="App">
        <Container>
        <USAMap onClick={this.mapHandler} />
        </Container>
      </div>
    );
  }
}
 
export default App;