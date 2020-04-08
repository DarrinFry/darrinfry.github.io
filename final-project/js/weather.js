const cityName ='Preston'
const cityID = '5604473'    
const apiKey = 'b88bb8f40c62687e2886e53f80498243';
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json' ;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&APPID=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${apiKey}`;


fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {

    var condition = jsObject.weather[0].main;
    document.getElementById('current1').textContent = condition  
    var temp = Math.round(jsObject.main.temp);
    document.getElementById('temp1').textContent = temp;   
    var humidity = jsObject.main.humidity;
    document.getElementById('humid1').textContent = humidity;
    var windSpeed = Math.round(jsObject.wind.speed);
    document.getElementById('wind1').textContent = windSpeed;  
    
    var result = windChill(temp, windSpeed);
    document.getElementById("windchill").innerHTML = result;

    function windChill(tempF, speed){
        if (tempF <= 50 && speed >= 3){
            var s = Math.pow(speed, 0.16);
            var t = tempF;
            var chill = 35.74 + (0.6215*t) - (35.75 * s) + (0.4275*t * s);
            chill = Math.round(chill.toFixed(1))
            return chill + "ºF";
        }
        else {
            return "N/A"
        }
    }

  });

 