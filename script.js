const cities = [
    "<strong>Santiago</strong> SCL - Chile",
    "<strong>Antofagasta</strong> ANF - Chile",
    "<strong>Iquique</strong> IQQ - Chile",
    "<strong>Concepción</strong> CCP - Chile",
    "<strong>La Serena</strong> LSC - Chile",
    "<strong>Punta Arenas</strong> PUQ - Chile",
    "<strong>Puerto Montt</strong> PMC - Chile",
    "<strong>Calama</strong> CJC - Chile",
    "<strong>Valdivia</strong> ZAL - Chile",
    "<strong>Temuco</strong> ZCO - Chile",
    "<strong>Copiapó</strong> CPC - Chile",
    "<strong>Bogotá</strong> BOG - Colombia",
    "<strong>Buenos Aires</strong> AEP/EZE - Argentina",
    "<strong>Caracas</strong> CCS - Venezuela",
    "<strong>Ciudad de México</strong> MEX - México",
    "<strong>Lima</strong> LIM - Perú",
    "<strong>São Paulo</strong> GRU - Brasil",
    "<strong>Montevideo</strong> MVD - Uruguay",
    "<strong>Quito</strong> UIO - Ecuador",
    "<strong>La Paz</strong> LPB - Bolivia",
    "<strong>Asunción</strong> ASU - Paraguay",
    "<strong>Panamá</strong> PTY - Panamá",
    "<strong>San Salvador</strong> SAL - El Salvador",
    "<strong>Guatemala City</strong> GUA - Guatemala",
    "<strong>Havana</strong> HAV - Cuba",
    "<strong>San José</strong> SJO - Costa Rica",
    "<strong>Tegucigalpa</strong> TGU - Honduras",
    "<strong>Managua</strong> MGA - Nicaragua",
    "<strong>Brasilia</strong> BSB - Brasil",
    "<strong>Medellín</strong> MDE - Colombia",
    "<strong>Cali</strong> CLO - Colombia",
    "<strong>Rio de Janeiro</strong> GIG/SDU - Brasil",
    "<strong>Recife</strong> REC - Brasil",
    "<strong>Barranquilla</strong> BAQ - Colombia"
];

function setupAutocomplete(inputId, suggestionsId, cities) {
    const input = document.getElementById(inputId);
    const suggestionsList = document.getElementById(suggestionsId);

    function displaySuggestions(citiesToShow) {
        suggestionsList.innerHTML = ''; // Limpiar sugerencias anteriores
        if (citiesToShow.length > 0) {
            suggestionsList.style.display = 'block';
            citiesToShow.forEach(city => {
                const suggestionItem = document.createElement('div');
                suggestionItem.innerHTML = city; // Usar innerHTML para incluir formato HTML
                suggestionItem.addEventListener('click', function() {
                    input.value = city.replace(/<[^>]*>/g, ''); // Eliminar etiquetas HTML del valor
                    suggestionsList.innerHTML = '';
                    suggestionsList.style.display = 'none';
                });
                suggestionsList.appendChild(suggestionItem);
            });
        } else {
            suggestionsList.style.display = 'none';
        }
    }

    input.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const filteredCities = cities.filter(city => city.toLowerCase().includes(inputValue));
        displaySuggestions(filteredCities);
    });

    input.addEventListener('focus', function() {
        if (input.value === '') {
            displaySuggestions(cities);
        }
    });

    suggestionsList.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    document.addEventListener('click', function(e) {
        if (!input.contains(e.target) && !suggestionsList.contains(e.target)) {
            suggestionsList.style.display = 'none';
        }
    });
}

// Activar autocompletado para ambos inputs
setupAutocomplete('cityInputOrigen', 'suggestionsOrigen', cities);
setupAutocomplete('cityInputDestino', 'suggestionsDestino', cities);

document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '+56982049605'; // Número de teléfono en formato internacional
    const message = 'Quiero comprar un vuelo!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank')});
