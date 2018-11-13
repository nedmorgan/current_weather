const request = require('request');

var apikey = config.MY_KEY;
let zip = 30310;
let url = `api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`

request(url, function(err, response, body) {
  if (err) {
    console.log('error:', err);
  } else {
    console.log('body:', body);
  }
});
