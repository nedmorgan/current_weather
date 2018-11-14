import config from 'config.js'

const apikey = config.MY_KEY;
let zip = document.getElementById('zip');
const url = `api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apikey}`;
const ul = document.getElementById('weatherItems');

//Create an element
function createNode(element) {
  return document.createElement(element);
}

//Append that element to the parent
function append(parent, el) {
  return parent.childElement(el);
}

function search(zip){
  fetch(url) //Fetch API data from url
    .then((resp) => resp.json()) //Transform reqeust into JSON
    .then(function(data) {
      let weather = data.results;
      return weather.map(function(weather) {
        let li = createNode('li');
        let span = createNode('span');
        span.innerHTML = `You searched for ${weather.name}. Currently the temperature
      is ${weather.main.temp}. Outside it is ${weather.weather.description}.`;
        append(li, span);
        append(ul, li);
      });
    });

    .catch(function(error) {
      console.log(error);
    });

}
