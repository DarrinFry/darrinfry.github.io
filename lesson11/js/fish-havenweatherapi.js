const cityName ='Fish Haven'
const cityID = '5585000'    
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

 
  
    fetch(forecastURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsObject) { 
        const items = jsObject.list['items'];    
        let i = 0;
        let card = document.createElement('div');  
        card.setAttribute('class', 'gridforecast');
    
        jsObject.list.forEach(item => {
          let datetime = jsObject.list[i].dt_txt;
    
          if (datetime.includes("18:00:00")) {
            var newdate = new Date(datetime);
            var shortdate = newdate.toLocaleDateString( 'en-US', { weekday: 'short' }); 
            var divdate = document.createElement('h4'); 
            var divtemp = document.createElement('div');  
            divdate.textContent = shortdate
            divdate.setAttribute('class', 'forecast-item');
            divtemp.setAttribute('class', 'forecast-item');

            let temp = `${jsObject.list[i].main.temp.toFixed(0)}`;
            divtemp.textContent = temp + " °F"; 

            let imgURL = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            let desc = jsObject.list[i].weather[0].description;  
            let icon1 = document.createElement('img');
    
            icon1.setAttribute('src', imgURL);
            icon1.setAttribute('alt', desc);
            icon1.setAttribute('height', 'auto');
            icon1.setAttribute('width', '100px');
            
            divdate.appendChild(divtemp);
            divdate.appendChild(icon1);
            card.appendChild(divdate);
            document.querySelector('.fiveDayForcast').appendChild(card);      
            
            i++;        
          } 
          else 
          {
            i++;
          }
            
          
        });
      });

      fetch(requestURL)
      .then(function (response) {
      return response.json();
      })
      .then(function (jsonObject) {
          const towns = jsonObject['towns'];
          for (let i = 0; i < towns.length; i++ ) {
             if (towns[i].name == cityName ){
               let container = document.createElement('div');
               for (let j = 0; j < 3; j++) {
                let events = document.createElement('p');
                events.textContent = towns[i].events[j];
                container.appendChild(events);
            }
              document.querySelector('.upcomingEvents').appendChild(container);
          }   
      }
  
  });

     