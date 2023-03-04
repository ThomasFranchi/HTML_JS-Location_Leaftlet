let btnLoc = document.querySelector('#btnLoc');
let lat;
let lon;

btnLoc.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        sessionStorage.setItem('longitudeSave', position.coords.latitude )
        sessionStorage.setItem('latitudeSave', position.coords.longitude );
        // Script leaf 
        var map = L.map('map').setView([sessionStorage.getItem('longitudeSave') ,sessionStorage.getItem('latitudeSave')], 13);
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([sessionStorage.getItem('longitudeSave'), sessionStorage.getItem('latitudeSave')]).addTo(map);
    } )
})


// const url="https://api.wheretheiss.at/v1/satellites/25544";
// async function getIss(){
//     const response=await fetch(url);
//     const data=await response.json();
//     // latitude and longitude data
//     const {latitude, longitude}=data; if (latitude>7.8 && longitude<80.7){
//     }
//     document.getElementById('latitude').textContent = latitude.toFixed(1);
//     document.getElementById('longitude').textContent = longitude.toFixed(1);
//     map.setView([latitude, longitude], 3);
//     marker.setLatLng([latitude, longitude]);
//     }
//     //getting data in every second
//     setInterval(getIss,1000);