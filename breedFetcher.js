const args = process.argv.slice(2);
const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[0];

request(url, function(error, response, body) {
  if (error) {
    console.error('Error', error);
  } else if (response.statusCode !== 200) {
    console.error('status', response.statusCode);
  } else {
    const data = JSON.parse(body);
    //to check if the data is empty since the website could not find the breed
    if (Object.keys(data).length === 0) {
      console.log("not found");
    } else {
      console.log(data);
    }
  }
});


