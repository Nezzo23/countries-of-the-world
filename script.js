var countryToContinent = {
    "Antigua and Barbuda": "n-america",
    "Bahamas": "n-america",
    "Barbados": "n-america",
    "Belize": "n-america",
    "Canada": "n-america",
    "Costa Rica": "n-america",
    "Cuba": "n-america",
    "Dominica": "n-america",
    "Dominican Republic": "n-america",
    "El Salvador": "n-america"
    "Grenada": "n-america",
    "Guatemala": "n-america",
    "Haiti": "n-america",
    "Honduras": "n-america",
    "Jamaica": "n-america",
    "Mexico": "n-america",
    "Nicaragua": "n-america",
    "Panama": "n-america",
    "Saint Kitts and Nevis": "n-america",
    "Saint Vincent and the Grenadines": "n-america",
    "Trinidad and Tobago": "n-america",
    "United States of America": "n-america",
    "Algeria": "africa",
    "Angola": "africa",
    "Benin": "africa",
    "Botswana": "africa",
    "Burkina Faso": "africa",
    "Burundi": "africa",
    "Cabo Verde/Cape Verde": "africa",
    "Cameroon": "africa",
    "Central African Republic": "africa",
    "Chad": "africa",
    "Comoros": "africa",
    "Congo/Republic of the Congo": "africa",
    "Democratic Republic of the Congo": "africa",
    "Djibouti": "africa",
    "Egypt (transcontinental)": "africa",
    "Equatorial Guinea": "africa",
    "Eritrea": "africa",
    "Eswatini (formerly Swaziland)",
    "Ethiopia": "africa",
    "Gabon": "africa",
    "Gambia": "africa",
    "Ghana": "africa",
    "Guinea": "africa",
    "Guinea-Bissau": "africa",
    "Ivory Coast/Republic of Côte d'Ivoire": "africa",
    "Kenya": "africa",
    "Lesotho": "africa",
    "Liberia": "africa",
    "Libya": "africa",
    "Madagascar": "africa",
    "Malawi": "africa",
    "Mali": "africa",
    "Mauritania": "africa",
    "Mauritius": "africa",
    "Morocco": "africa",
    "Mozambique": "africa",
    "Namibia": "africa",
    "Niger": "africa",
    "Nigeria": "africa",
    "Rwanda": "africa",
    "Sao Tome and Principe": "africa",
    "Senegal": "africa",
    "Seychelles": "africa",
    "Sierra Leone": "africa",
    "Somalia": "africa",
    "South Africa": "africa",
    "South Sudan": "africa",
    "Sudan": "africa",
    "Tanzania": "africa",
    "Togo": "africa",
    "Tunisia": "africa",
    "Uganda": "africa",
    "Zambia": "africa",
    "Zimbabwe": "africa",
    "Canary Islands (Spain)": "africa",
    "Ceuta (Spain)": "africa",
    "French Southern and Antarctic Lands (France)": "africa",
    "Madeira (Portugal)": "africa",
    "Mayotte (France)": "africa",
    "Melilla (Spain)": "africa",
    "Pelagie Islands (Italy)": "africa",
    "Plazas de Soberania (Spain)": "africa",
    "Reunion (France)": "africa",
    "Saint Helena, Ascension and Tristan da Cunha (UK)": "africa",
    "Socotra Archipelago (Yemen)": "africa",
    "Afghanistan": "asia",
    "Armenia (transcontinental)": "asia",
    "Azerbaijan (transcontinental)": "asia",
    "Bahrain": "asia",
    "Bangladesh": "asia",
    "Bhutan": "asia",
    "British Indian Ocean Territory (UK territory)": "asia",
    "Brunei": "asia",
    "Cambodia": "asia",
    "China": "asia",
    "Cyprus (transcontinental)": "asia",
    "Egypt (transcontinental)": "asia",
    "Georgia (transcontinental)": "asia",
    "Hong Kong (China - Special Administrative Region)": "asia",
    "India": "asia",
    "Indonesia": "asia",
    "Iran": "asia",
    "Iraq": "asia",
    "Israel (U.N. member, though partially unrecognized)": "asia",
    "Japan": "asia",
    "Jordan": "asia",
    "Kazakhstan (transcontinental)": "asia",
    "Kuwait": "asia",
    "Kyrgyzstan": "asia",
    "Laos": "asia",
    "Lebanon"
    "Macau (China - Special Administrative Region)": "asia",
    "Malaysia": "asia",
    "Maldives"
    "Mongolia"
    "Myanmar (formerly Burma)": "asia",
    "Nepal"
North Korea (Democratic People's Republic of Korea)
Oman
Pakistan
Palestine (limited recognition)
Philippines
Qatar
Russia (transcontinental - generally considered European)
Saudi Arabia
Singapore
South Korea (Republic of Korea)
Sri Lanka
Syria
Taiwan (limited recognition - claimed by China)
Tajikistan
Thailand
Timor-Leste/East Timor
Turkey (transcontinental - generally considered European)
Turkmenistan
United Arab Emirates
Uzbekistan
Vietnam
Yemen
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