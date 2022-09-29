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

    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n;
    }

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let hour = appendLeadingZeroes(dateTime.getHours());
        let minutes = appendLeadingZeroes(dateTime.getMinutes());
        let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + ", " + year + " ";
        return formattedDateTime;
    }

    function printWeather(data) {

//This empties out the card
        $(".row").empty();
        data.list.forEach((forecast, index) => {
            let timeStamp = data.list[index].dt;
            if (index % 8 === 0) {
                $('.row').append(`
                    <div class="mt-3 mb-5 card" style="width: 16rem; border-radius: 50px; background-image: linear-gradient(#fc9898, #c94a4a, #fc9898);">
                        <img class="card-img-top d-flex mx-auto" src="http://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png"  alt="Card image cap" style="height: 120px; width: 120px">
                            <h6 class="card-header text-center name" id="name" style="width: 70%; border-radius: 20px; margin: auto">${formatTime(timeStamp)}</h6>
                        <div class="card-body">
                            <h5 class="card-text text-center">Weather for <br>${data.city.name}</h5>
                                <ul class="list-group list-group-flush" style="border-radius: 20px;">
                                    <li class="list-group-item temp" style="  background-color: #fc9898; color: white">Temperature: ${(data.list[index].main.temp).toFixed()} F</li>
                                    <li class="list-group-item desc" style="background-color: #dc8585; color: white">Weather: ${data.list[index].weather[0].main}</li>
                                    <li class="list-group-item desc" style="background-color: #b06969; color: white">Humidity: ${data.list[index].main.humidity}%</li>
                                    <li class="list-group-item" style="background-color: #884949; color: white">Wind: ${windCardinalDirection(data.list[index].wind.deg)}</li>
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
    const coordinates = document.getElementById('coordinates');
    const map = new mapboxgl.Map({
        container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/francesperez/cl8lw0e57003w15pc4m0ordfp',
        center: [-98.48527, 29.423017],
        zoom: 1,
        projection: 'globe'
    });


    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.499530, 29.418510])
        .addTo(map);

//This is the function that fixes the longitude problem on the globe.
    function returnCorrectLongitude(longitude){
        if (longitude < -180) {
            let difference = Math.abs(longitude + 180);
            longitude = 180 - difference;
        }
        if (longitude > 180) {
            let difference = longitude - 180;
            longitude = -180 + difference;
        }
        return longitude;
    }


    function onDragEnd() {
        const lngLat = marker.getLngLat();
//Recalling the function to correct the longitude to -179.99/179.99
        let long = returnCorrectLongitude(lngLat.lng)
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${long}<br />Latitude: ${lngLat.lat}`;
        let coords = [`${long}`, `${lngLat.lat}`]
        updateWeather(coords)
    }
    marker.on('dragend', onDragEnd);

    document.getElementById("setMarkerButton").addEventListener('click', function (e){
        e.preventDefault();
        const address = document.getElementById("setMarker").value;
        geocode(address, MAPBOX_MAPS_API).then(function(coordinates){
            map.setCenter(coordinates);
            marker.setLngLat(coordinates);
            updateWeather(coordinates);
        })
    });

});










