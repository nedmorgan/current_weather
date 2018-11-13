const request = require('request');

let apikey = '6c0feaa89e60519b02e1df2db7c20768';
let city = 30310;
let url = `api.openweathermap.org/data/2.5/weather?q=${city},us&appid${apikey}`

request(url, function (err, response, body) {
  if(err) {
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
