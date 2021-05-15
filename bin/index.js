#!/usr/bin/env node
const yargs = require("yargs");
const axios = require("axios");



const options = yargs
.usage("Usage: -n <country-id>, refer https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes to get 2 char country code")

.options("n",{alias:"name", describe: "Country-code",
			  type: "string", demandOptions: true})
.argv;

const country= `You entered the country code: ${options.name}!`;


console.log(country);

var opt = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country/code',
  params: {code: `${options.name}` },
  headers: {
    'x-rapidapi-key': '7c9e9d03ebmsh904aa2bf9e2593ap1192a9jsne73d81e16e66',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

axios.request(opt).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


