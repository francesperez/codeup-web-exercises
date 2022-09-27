$(function() {

    function windCardinalDirection(degrees) {
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >= 0 && degrees <= 11.25)) {
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees <= 33.75) {
            cardinalDirection = "NNE";
        } else if (degrees > 33.75 && degrees <= 56.25) {
            cardinalDirection = "NE";
        } else if (degrees > 56.25 && degrees <= 78.75) {
            cardinalDirection = "ENE";
        } else if (degrees > 78.75 && degrees <= 101.25) {
            cardinalDirection = "E";
        } else if (degrees > 101.25 && degrees <= 123.75) {
            cardinalDirection = "ESE";
        } else if (degrees > 123.75 && degrees <= 146.25) {
            cardinalDirection = "SE";
        } else if (degrees > 146.25 && degrees <= 168.75) {
            cardinalDirection = "SSE";
        } else if (degrees > 168.75 && degrees <= 191.25) {
            cardinalDirection = "S";
        } else if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25) {
            cardinalDirection = "SW";
        } else if (degrees > 236.25 && degrees <= 258.75) {
            cardinalDirection = "WSW";
        } else if (degrees > 258.75 && degrees <= 281.25) {
            cardinalDirection = "W";
        } else if (degrees > 281.25 && degrees <= 303.75) {
            cardinalDirection = "WNW";
        } else if (degrees > 303.75 && degrees <= 326.25) {
            cardinalDirection = "NW";
        } else if (degrees > 326.75 && degrees <= 348.75) {
            cardinalDirection = "NNW";
        }
        return cardinalDirection;
    }

    function printWeather(data) {
        //This empties out the card
        $(".row").empty();
        data.list.forEach((forecast, index) => {
            if (index % 8 === 0) {
                $('.row').append(`
                        <div class="mt-3 card" style="width: 18rem;">
                            <img class="card-img-top d-flex mx-auto" src="http://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png"  alt="Card image cap" style="height: 150px; width: 150px">
                                <h6 class="card-header text-center name" id="name" style="width: 100%">${(data.list[index].dt_txt).split(' ')[0]}</h6>
                            <div class="card-body">
                                <h5 class="card-text text-center">Current Weather for ${data.city.name}</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item temp">Temperature: ${data.list[index].main.temp}</li>
                                        <li class="list-group-item desc">Weather: ${data.list[index].weather[0].description}</li>
                                        <li class="list-group-item">Wind: ${windCardinalDirection(data.list[index].wind.deg)}</li>
                                    </ul>
                            </div>
                        </div>
                `);
            }
        });
    }
        function updateWeather(coordinates) {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat:    coordinates[1],
            lon:   coordinates[0],
            units: "imperial"
        }).done(function(data) {
            printWeather(data)
        })
    }

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat:    29.423017,
            lon:   -98.48527,
            units: "imperial"
        }).done(function(data) {
            printWeather(data)
        })



    mapboxgl.accessToken = MAPBOX_MAPS_API;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [-99.459530, 27.578510],
        zoom: 5,
        projection: 'globe'
    });

    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

    document.getElementById("setMarkerButton").addEventListener('click', function (e){
        e.preventDefault();
        const address = document.getElementById("setMarker").value;
        geocode(address, MAPBOX_MAPS_API).then(function(coordinates){
            const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
            map.setCenter(coordinates);
            updateWeather(coordinates);
        })
    });

});










