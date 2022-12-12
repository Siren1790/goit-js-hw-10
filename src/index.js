import './css/styles.css';

const DEBOUNCE_DELAY = 300;

import API from "./api-countries"

refs = {
   searchBox: document.querySelector("#search-box"),
   countryList: document.querySelector('.country-list'),
   countryInfo: document.querySelector('.country-info'),
}

refs.searchBox.addEventListener("keyup", searchCountries);

function searchCountries (e){

   API.searchCountries(e.target.value)
      .then(data => {
      if (data.length > 10){
         console.log("Потрібно більше букв")
      } else {
         for(info of data){
            murkupCountries(info)            
         }
      }
   })
   .catch(error => {
      console.log(error);
   })
}

function murkupCountries ({name: {official}, capital, population, flags: {svg}, languages}){
   console.log(`official: ${official}, capital: ${capital}, population: ${population}, svg: ${svg}, languages: ${Object.values(languages)}`);
}
