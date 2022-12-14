function xxx(value) {
   return fetch(`https://restcountries.com/v3.1/name/${value}`)
            .then(response => response.json())
}

export default { xxx };