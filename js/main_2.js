$(document).ready(function() {
  console.log("ready");

  $("#submit").click(function() {
    let zip = $("#zip").val();
    if (zip !== "") {
      $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=6c0feaa89e60519b02e1df2db7c20768",
        dataType: "json",
        success: function(wallOfText) {
          let city = wallOfText.name;
          let temp = wallOfText.main.temp.toFixed(0);
          let conditions = wallOfText.weather[0].description;
          let humidity = wallOfText.main.humidity;
          $("#result-list").fadeIn(750);
          $("#city").text("City: " + city);
          $("#temp").text("Temperature: " + temp + " °F");
          $("#conditions").text("Current Conditions: " + conditions.charAt(0).toUpperCase() + conditions.substr(1).toLowerCase());
          $("#humidity").text("Humidity: " + humidity + "%");
        },
        error: function(xhr, status, error) {
          console.log("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
      });
    }
  });
  $("#reset").click(function() {
    $("#result-list").hide();
    $("#zip").val("");
  });
});
