
const cityID = '5604473'    
const apiKey = 'b88bb8f40c62687e2886e53f80498243';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&APPID=${apiKey}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.main.temp;

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
const desc = jsObject.weather[0].description;  
document.getElementById('imagesrc').textContent = imagesrc;  
document.getElementById('icon').setAttribute('src', imagesrc);  
document.getElementById('icon').setAttribute('alt', desc);
  });