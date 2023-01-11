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
    $("#temp").text(temp);
    if (data.clouds.all > 75){
        $("#city-name").append(" ☁️")
    } else if (data.clouds.all < 15){
    $("#city-name").append(" ☀️")
} else {
    $("#city-name").append(" ⛅")

}

})

}


searchBtn.on('click', saveSearch)

//API Key: 9ef22da27f649ed9c8372d14e6e7e5a2