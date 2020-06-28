import axios from "axios";

function currentBreweries() {

    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${currentState}`)
    .then((response) => {
      let currentBreweries = response.data;
      console.log(currentBreweries)
    });
    
}

return currentBreweries


