import axios from "axios";

function getBreweries() {

    let state = "ohio"

    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
      .then((response) => {
        let currentBreweries = response.data;
        console.log(currentBreweries);
      });
      return getBreweries
}


