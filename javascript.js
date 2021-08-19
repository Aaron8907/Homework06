
var APIKey = "bb3ce3b5617e051aeb508d6854fc54f9";
var submitBtn= $('#submitButton')
var cityInput= $("#cityInput");
var city="";
var rootEl = $('#mainInfo');
var forecast=$("#forecast");
var timeDisplayEl = $('#currentDay');
var previousSearches2= $("#previousSearches2")
var previousSearches= $("#previousSearches")


cityInput.val(localStorage.getItem("city"));

var initialCities=["Miami","London","Paris", "Tokyo", "Sydney"];


for(var i = 0; i <5; i++) {
 
    var previousSearchesBtn= $("<button>");
    var spacing=$("<br>");
    var spacing=$("<br>");
    previousSearchesBtn.attr("type","button");
    previousSearchesBtn.text(initialCities[i]);
    previousSearches2.addClass("m-3");
    previousSearchesBtn.css("height","30px")
    previousSearchesBtn.css("width","90px")
    previousSearchesBtn.css("padding","10px")
    previousSearchesBtn.css("line-height","5px")
    previousSearchesBtn.css("margin","0px")
    previousSearches2.append(previousSearchesBtn)   
    previousSearches2.append(spacing);
}

submitBtn.on("click",function(){
    
    city=localStorage.setItem("city", $('input[name="city"]').val());
    cityStorage=localStorage.getItem("city");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + localStorage.city +"&units=metric&appid=" + APIKey;

    

    fetch(queryURL)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var temp=data.main.temp
        var weatherCode=data.weather[0].id
        var wind=data.wind.speed
        var humid=data.main.humidity
        var longitude=data.coord.lon;
        var latitude=data.coord.lat;
        var queryURL2="https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude+ "&exclude=hourly,minutely,alerts&units=metric&appid="+ APIKey;

        fetch(queryURL2)
        .then(function (response) {
            return response.json();
          })
          .then(function (data) {

          for (var i = 0; i < 5; i++){    
          var Fday = new Date();
          var dd = Fday.getDate() +1+i;
          var mm = Fday.getMonth()+1; 
          var yyyy = Fday.getFullYear();
          if(dd<10) 
          { dd='0'+dd;} 
          if(mm<10) 
          {mm='0'+mm;} 
          Fday = dd+'-'+mm+'-'+yyyy;
          var div = $("<div>");
          div.addClass("col 3");
          div.addClass(".d-flex");
          forecast.append(div);
          var divStacked = $("<div>");
          divStacked.addClass("p-3");
          divStacked.addClass("border");
          divStacked.addClass("bg-dark");
          divStacked.addClass("text-white");
          div.append(divStacked);
          var date= $("<h4>");
          date.text(Fday);
          divStacked.append(date);
          var pTemp = $("<p>");
          var weatherCodeF=data.daily[i].weather[0].id
          pTemp.text(data.daily[i].temp.day + " °C")
          divStacked.append(pTemp)
          var pWind = $("<p>");
          pWind.text(data.daily[i].wind_speed + " km/h")
          divStacked.append(pWind)
          var pHumid = $("<p>");
          pHumid.text(data.daily[i].humidity + " %")
          divStacked.append(pHumid)
          currentIndex=localStorage.setItem("Index", data.daily[0].uvi);
          
          var pictureF=document.createElement("img");

          if(weatherCodeF>199 && weatherCodeF<240){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/11d@2x.png");
          }else if(weatherCodeF>299 && weatherCodeF<340){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/09d@2x.png");
          }else if(weatherCodeF>499 && weatherCodeF<540){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/10d@2x.png");
          }else if(weatherCodeF>599 && weatherCodeF<640){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/13d@2x.png");
          }else if(weatherCodeF>700 && weatherCodeF<790){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/50d@2x.png");
          }else if(weatherCodeF==800){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/01d@2x.png");
          }else if(weatherCodeF==801){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/02d@2x.png");
          }else if(weatherCodeF==802){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/03d@2x.png");
          }else if(weatherCodeF==803 || weatherCodeF==804 ){
            pictureF.setAttribute("src","http://openweathermap.org/img/wn/04n@2x.png");
          }

          divStacked.append(pictureF)

        }

        var shifted=initialCities.shift();
        var pop=initialCities.push(cityStorage)
 

        previousSearches2.remove();

        updateCities()
         

          if(weatherCode>199 && weatherCode<240){
            picture.setAttribute("src","http://openweathermap.org/img/wn/11d@2x.png");
          }else if(weatherCode>299 && weatherCode<340){
            picture.setAttribute("src","http://openweathermap.org/img/wn/09d@2x.png");
          }else if(weatherCode>499 && weatherCode<540){
            picture.setAttribute("src","http://openweathermap.org/img/wn/10d@2x.png");
          }else if(weatherCode>599 && weatherCode<640){
            picture.setAttribute("src","http://openweathermap.org/img/wn/13d@2x.png");
          }else if(weatherCode>700 && weatherCode<790){
            picture.setAttribute("src","http://openweathermap.org/img/wn/50d@2x.png");
          }else if(weatherCode==800){
            picture.setAttribute("src","http://openweathermap.org/img/wn/01d@2x.png");
          }else if(weatherCode==801){
            picture.setAttribute("src","http://openweathermap.org/img/wn/02d@2x.png");
          }else if(weatherCode==802){
            picture.setAttribute("src","http://openweathermap.org/img/wn/03d@2x.png");
          }else if(weatherCode==803 || weatherCode==804 ){
            picture.setAttribute("src","http://openweathermap.org/img/wn/04n@2x.png");
          }


          })
          var picture=document.createElement("img");
          var date=new Date();
          var val=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
          var titleEl = $('<h1>');
          titleEl.text(localStorage.city +" "+val);
          rootEl.append(titleEl);
          var tempEl=$("<p>");
          tempEl.text(temp + " °C");
          rootEl.append(tempEl)
          var windEl=$("<p>");
          windEl.text(wind + " km/h");
          rootEl.append(windEl)
          var humidEl=$("<p>");
          humidEl.text(humid + " %");
          rootEl.append(humidEl);
          var uvInd = localStorage.getItem("Index");
          var uvIndEl=$("<p>");
          uvIndEl.text(uvInd);
          uvIndEl.addClass("d-inline");
          if(uvInd<=3){
          uvIndEl.addClass("bg-success");
          }else if( uvInd>3 && uvInd<=5){
            uvIndEl.addClass("bg-warning");
          }else if( uvInd>5){
            uvIndEl.addClass("bg-danger");
          } 
          rootEl.append(uvIndEl);
          rootEl.append(picture);
       
      })

})

function updateCities() {

  
for(var i = 0; i <5; i++) {
 
  var previousSearchesBtn= $("<button>");
  var spacing=$("<br>");
  var spacing=$("<br>");
  previousSearchesBtn.attr("type","button");
  previousSearchesBtn.text(initialCities[i]);
  previousSearches.addClass("m-3");
  previousSearchesBtn.css("height","30px")
  previousSearchesBtn.css("width","90px")
  previousSearchesBtn.css("padding","10px")
  previousSearchesBtn.css("line-height","5px")
  previousSearchesBtn.css("margin","0px")
  previousSearches.append(previousSearchesBtn)   
  previousSearches.append(spacing);
}
  
}

      
