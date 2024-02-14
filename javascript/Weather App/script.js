
// fetch('https://api.weatherapi.com/v1/current.json?key=8fa376daa91a4c3bbc3173100230707&q=bengaluru', {mode: 'cors'})
//   .then(function(response) {
//     return response.json();
//     })
//     .then(function(response) {

//     console.log(response.location.name);
//     let string = JSON.stringify(response);
//     console.log(string);
    
    
//   })
//   .catch(function(err) {
//     // Error :(
//   });
// let map;

// async function initMap(lat,lng) {
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: lat, lng: lng },
//     zoom: 8,
//     mapId: "ce79ea472e98743c",
//   });
// }
// function Map123() {  
//     var mapOptions = {  
//         center:new google.maps.LatLng(12.971599,77.594566),  
//         zoom: 10,  
//         mapId: "ce79ea472e98743c",
        
//     }  
//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);  
//     }  
    

function Submit(){

    console.log("hello");
    var city = document.getElementById("city").value;
    console.log(city);
    fetch('https://api.weatherapi.com/v1/current.json?key=8fa376daa91a4c3bbc3173100230707&q='+city, {mode: 'cors'})
  .then(function(response) {
    if (!response.ok) {
      alert("No weather found.");
      throw new Error("No weather found.");
    }
    return response.json();
    })
    .then(function(response) {
        document.body.style.fontFamily="cookie2";
    document.body.style.flexDirection = "column";
    document.body.innerHTML = `<div class="container_main"><div id="map"></div><div class="info"><div class="btn">
    <div class="btn__indicator">
      <div class="btn__icon-container">
        <i class="btn__icon fa-solid"></i>
      </div>
    </div>
  </div><h1>${response.location.name}</h1><h3>Temp: ${response.current.temp_c} °C</h3><h3>Feels Like: ${response.current.feelslike_c} °C</h3><h3 class="img"><img src='${response.current.condition.icon}'>${response.current.condition.text}</h3><h3>Wind Speed: ${response.current.wind_kph}</h3><h3>Humidity: ${response.current.humidity}</h3><h3>Clouds: ${response.current.cloud}</h3><h3>Uv Radiation: ${response.current.uv}</h3></div>
    <script src="script.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeSLKGC-l-Snb-kOUigxqtXRgvPb84XFI"></script>
    <div id="data"></div></div>`;
    // initMap(response.location.lat,response.location.lon);
    // console.log(response.location.name);
    // let string = JSON.stringify(response);
    // console.log(string);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${response.location.lat}&lon=${response.location.lon}&appid=bd437de9b986811a510f617c4f7f0d92&units=metric`)
    .then(function(data) {
      return data.json();
      })
      .then(function(data) {
        console.log(data);
        let arr = data.list;
        console.log(arr);
        let str = "";
        arr.forEach(element => {
          str += `<div class="card">
          <img class="img_weather" src="https://openweathermap.org/img/w/${element.weather[0].icon}.png">
          <h3>${element.dt_txt}</h3>
          <h3>Temp: ${element.main.temp} °C</h3>
          <h3>Wind Speed: ${element.wind.speed}</h3>
          <h3>Humidity: ${element.main.humidity}</h3>
          </div>`;
        });
        document.getElementById('data').innerHTML += str;
      
      
    })
    
  })
  .catch(function(err) {
    // Error :(
  });
  
}

const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
  localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
    icon.classList.add('fa-sun');
  }
}


load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})