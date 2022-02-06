var apiURL = 'https://rickandmortyapi.com/api/character/'

document.getElementById('getData').onclick = getData;

function getData() {
    var userInput = document.getElementById('dataInput').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = receiveData;
    xhttp.open('GET', apiURL + '' + userInput);
    xhttp.send();

    function receiveData() {
        var dataSection = document.getElementById('data');
        dataSection.innerHTML = '';

        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                var response = xhttp.responseText;
                response = JSON.parse(response);
                populateData(response);
            }
        }
    }
}

function populateData(response) {
    var dataSection = document.getElementById('data');
    var nameTag = document.createElement('h2');
    nameTag.innerHTML = 'Character Name: ' + response.name + '<br>';
    dataSection.appendChild(nameTag);
    console.log(nameTag);

    var image = document.createElement('img');
    image.src = response.image;
    dataSection.appendChild(image);
    console.log(image);

    var species = document.createElement('h3');
    species.innerHTML = 'Species: ' + response.species + '<br>';
    dataSection.appendChild(species);
    console.log(species);

    var episodesArray = response.episodes;
    var episodes = document.createElement('p');
    episodes.innerHTML = 'Episode: ' + episodesArray + '<br>';
    dataSection.appendChild(episodes);
    console.log(episodes);


    /*
    for( var i = 0; i < 5; i++) {
        var episodeLi = document.createElement('li');
        episodeLi.innerHTML = episodesArray[i];
        episode.appendChild(episodeLi);
    }
    dataSection.innerHTML += 'From Episode #: <br>';
    dataSection.appendChild(episodes);
    

    
    var abilitiesArray = response.abilities;
    var abilities = document.createElement('ul');

    for(var ability of abilitiesArray) {
        var abilityLi = document.createElement('li');
        abilityLi.innerHTML = ability.ability.name;
        abilities.appendChild(abilityLi);
    }
    dataSection.innerHTML += 'Abilities<br>';
    dataSection.appendChild(abilities);
    var spritesObject = response.sprites;

    for(var sprite in spritesObject) {
        if(spritesObject[sprite]) {
            var spriteIMG = document.createElement('img');
            spriteIMG.src = spritesObject[sprite];
            dataSection.appendChild(spriteIMG);
        }
    }*/
}