import axios from "axios";
import currentClickedState from "../USAMap/USAMap"

function currentBreweries() {

    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${currentClickedState}`)
    .then((response) => {
      let currentBreweries = response.data;
      console.log(currentBreweries)
    });
    
}

export default currentBreweries


