var countryToContinent = {
    "Antigua and Barbuda": "n-america",
    "Bahamas": "n-america",
    "Barbados": "n-america",
    "Belize": "n-america",
    "Canada": "n-america",

};

var countries = Object.keys(countryToContinent);

function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    return randomCountry;
}

document.getElementById('run').addEventListener('click', function () {
    const randomCountry = getRandomCountry();
    const correctContinent = countryToContinent[randomCountry];


    document.querySelector('.country input').value = randomCountry;


    var continents = document.querySelectorAll('.world-map div');
    continents.forEach(function (continentDiv) {
        continentDiv.addEventListener('click', function () {
            if (continentDiv.id === correctContinent) {
                alert("Correct! The country belongs to " + continentDiv.id);
            } else {
                alert("Incorrect. The country does not belong to " + continentDiv.id);
            }
        });
    });
});