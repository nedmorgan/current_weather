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
          $("#result").text(city);
        },
        error: function(xhr, status, error) {
          console.log("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
      });
    }
  });
});
