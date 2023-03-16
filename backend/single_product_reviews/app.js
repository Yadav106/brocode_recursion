const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://amazon23.p.rapidapi.com/reviews',
  params: {asin: 'B07XQXZXJC', sort_by: 'recent', country: 'US'},
  headers: {
    'X-RapidAPI-Key': 'c0e6b1bc88msh72b33926948d6fcp18712ejsn3dd37cfa9ae4',
    'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});