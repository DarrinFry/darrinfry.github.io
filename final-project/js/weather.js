const cityName ='McCall'
const cityID = '5600363'    
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


fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const guides = jsonObject['guides'];
        
   

    for (let i = 0; i < guides.length; i++ ) {
        

            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let certification = document.createElement('p');
            let experience = document.createElement('p');
            let email = document.createElement('p');
            let image = document.createElement('img');
            let bio = document.createElement('p');

            h2.textContent = guides[i].name;
            h4.textContent = guides[i].motto;
            certification.textContent = "Certification: " + guides[i].certification;
            experience.textContent = "Rafting since: " + guides[i].experience;
            email.textContent = "Email Address: " + guides[i].email;
            bio.textContent = "Upcoming Events: \n" + guides[i].bio;


            image.setAttribute('src', '/final-project/images/' + guides[i].photo);
            image.setAttribute('alt', "picture of: " + h2.textContent);  

            div.appendChild(h2);
            div.appendChild(h4);
            div.appendChild(certification);
            div.appendChild(experience);
            div.appendChild(email);
            div.appendChild(bio);
            card.appendChild(div);
            card.appendChild(image);    

            document.querySelector('div.data').appendChild(card);
          
    }

});

 