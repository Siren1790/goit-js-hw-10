import './css/styles.css';
import debounce from "lodash.debounce";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

import API from "./api-countries"

refs = {
   searchBox: document.querySelector("#search-box"),
   countryList: document.querySelector('.country-list'),
   countryInfo: document.querySelector('.country-info'),
}

refs.searchBox.addEventListener("keyup", debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries (e){
   const searchValue = e.target.value.trim();

   API.searchCountries(searchValue)
      .then(data => {
         if (data.length > 10){
            Notify.info("Too many matches found. Please enter a more specific name.");
         } else {
         for(info of data){
            murkupCountries(info)            
         }
      }
      })
      .catch(error => {
         Notify.failure("Oops, there is no country with that name");
      })
}

function murkupCountries ({name: {official}, capital, population, flags: {svg}, languages}){
   console.log(`official: ${official}, capital: ${capital}, population: ${population}, svg: ${svg}, languages: ${Object.values(languages)}`);
}
