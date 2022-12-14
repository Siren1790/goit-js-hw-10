function requireCountry(value) {
   return fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then(response => {
         console.log(response);
         if (!response.ok) {
            throw new Error('Oops, there is no country with that name');
         }
         return response.json();
      })
}

export default { requireCountry };