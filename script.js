const countries = [
    "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada",
    "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador",
    "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico",
    "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Trinidad and Tobago",
    "United States of America"
];

function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    return randomCountry;
}

const randomCountry = getRandomCountry();

document.getElementById('run').addEventListener('click', function () {
    const randomCountry = getRandomCountry();
    console.log(randomCountry);
});
