var city = $("#cityinput")
var searchBtn = $('#search-button')
var APIKey = "9ef22da27f649ed9c8372d14e6e7e5a2"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

function getApi(queryURL){
    fetch(queryURL)
}

function saveSearch(event) {
// console.log(event.currentTarget)
var buttonClicked = event.currentTarget;
var InputText = $(buttonClicked).siblings('input')
// console.log(InputText)
var texttoSave = InputText.val();
// console.log(texttoSave)
$('#city-name').text(texttoSave)
var CityName = $("<li></li>").text(texttoSave)
$("#savedSearch").prepend(CityName)
// console.log(CityName.innerText)
$("#cityinput").val('');
fetch("http://api.openweathermap.org/data/2.5/weather?q="+ texttoSave + "&appid=9ef22da27f649ed9c8372d14e6e7e5a2")
.then(function(response){
return response.json()
})
.then(function(data){
    console.log(data)
    var temp = data.main.temp
    var tempF = (Math.trunc((temp - 273.15) * 9/5 + 32)) 
    $("#temp").text(tempF + " °F");

    var tempM = data.main.temp_max
    var tempMF = (Math.trunc((tempM - 273.15) * 9/5 + 32)) 
    $("#tempM").text(tempMF + " °F");

    var tempL = data.main.temp_min
    var tempLF = (Math.trunc((tempL - 273.15) * 9/5 + 32)) 
    $("#tempL").text(tempLF + " °F");


    if (data.clouds.all > 75){
        $("#city-name").append(" ☁️")
    } else if (data.clouds.all < 15){
    $("#city-name").append(" ☀️")
} else {
    $("#city-name").append(" ⛅")
}
var humidity = data.main.humidity
$("#Humidity").text(humidity + "%")


})

}


searchBtn.on('click', saveSearch)

//API Key: 9ef22da27f649ed9c8372d14e6e7e5a2