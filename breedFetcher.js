const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(response.statusMessage, null);
    } else {
      const data = JSON.parse(body);
      //to check if the data is empty since the website could not find the breed
      if (Object.keys(data).length === 0) {
        callback(null, 'breed not found');
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };