const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json' ;


fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        
   

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs'){

            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            h4.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rainfall Average: " + towns[i].averageRainfall + " in";

            image.setAttribute('src', '/lesson9/images/' + towns[i].photo);
            image.setAttribute('alt', "picture of: " + h2.textContent);  

            div.appendChild(h2);
            div.appendChild(h4);
            div.appendChild(year);
            div.appendChild(population);
            div.appendChild(rainfall);
            card.appendChild(div);
            card.appendChild(image);    

            document.querySelector('div.data').appendChild(card);
        }   
    }

});