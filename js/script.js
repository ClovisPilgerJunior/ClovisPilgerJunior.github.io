const selectField = document.getElementById("country_field");
selectField.addEventListener("change", getCountryInformation);

function getCountryInformation(){
    const url = `https://restcountries.com/v3.1/name/$(selectField.value?fullText=true)`;

    fetch(url)
    .then((resultResquet) => {
        return resultResquet.json();
    })
    .then((jasonRequest) => {
        document.getElementById("info_country").setAttribute("Style", "display: block");
        document.getElementById("name").append(jasonRequest[0].altSpellings);
        document.getElementById("capital").append(jasonRequest[0].capital);
        document.getElementById("continente").append(jasonRequest[0].continente);

        for (key in jasonRequest[0].currencies) {
            indiceMoeda = key;
        }
        document.getElementById("currency").append(jasonRequest[0].currencies[indiceMoeda].name);

        for (key in jasonRequest[0].languages) {
            indiceIdioma = key;
        }

        document.getElementById("currency").append(jasonRequest[0].languages[indiceIdioma].name);

        document.getElementById("population").append(jasonRequest[0].population);

        document.getElementById("imagem").src = jasonRequest[0].flags.png;

        loadIframe();
        
    })

    function loadIframe(country) {
        document.getElementById("iframe_images").setAttribute("Style", "display:block");
        const url = `https://www.google.com.br/search?q=${country}&tbm=isch`;
        iframe.src = url;
    }
}