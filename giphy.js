//create an array of strings, each one related to a topic that interests you, save to variable "topics"
//Earth GIFS
$(document).ready(function () {
    
    //array of topics
    var topics = ["Sunset", "Sunrise", "Mountains", "Landscapes", "Seascapes", "Lightning", "Rainy", "Tornado", "Cyclone", "Tsunami"];

    //app takes topics array and create buttons to HTML
    function displayButtons() {
    
        //hides weather card display at start up
        $(".card").hide();
        $("#button-area").empty();
    
        // loop that appends a button for each string in the array
        for (var i = 0; i < topics.length; i++) {
            var showButton = $("<button>");
    
            //add a class earth-bttn
            showButton.addClass("btnClass");
    
            //add a data-attribute
            showButton.attr("data-earth", topics[i]);
    
            // providing the initial button text
            showButton.text(topics[i]);
    
            // add button to button-area
            $("#button-area").append(showButton);
        }
    }
    //add a form to page that takes value from user input box and adds to "topics" array
    //make function call that takes added topic in array and makes a button
    $("#addButton").on("click", function (event) {
    
        //keeps in variable
        event.preventDefault();
    
        //grabs input from textbox
        var earth = $("#form-input").val().trim();
    
        //adds topic from input to topic array
        topics.push(earth);
    
        //displays buttons
        displayButtons();
    });

    //function to query giphy and display gifs
    function displayGifs() {
        var earth = $(this).attr("data-earth");
        
        //constructs URL w/earth topic
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + earth + "&api_key=bbADz3KnghoZiynw8PEXRxCMDhj2WZJu&limit=10";
        
        //console.log to check
        console.log(queryURL);

        //perform ajax request     
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                console.log(response);

                //erase previous gifs
                $("#display-area-1").empty(); 
                $("#display-area-2").empty();
                $("#display-area-3").empty();

                //shows results after grabbing data
                var results = response.data;

                //loops through each grabbed GIF
                for (var j = 0; j < results.length; j++) {
                    var earthDiv = $("<div>");

                    //display rating under each displayed gif
                    var p = $("<p>").text("Rating: " + results[j].rating.toUpperCase());
                    var q = $("<h5>").text(results[j].title.toUpperCase());
    
                    //user clicks a button, page gets 10 static, non-animated gifs from GIPHY API and displays on page
                    var earthImage = $("<img>");
                    earthImage.attr("src", results[j].images.original_still.url);
                    earthImage.attr("data-still", results[j].images.original_still.url);
                    earthImage.attr("data-animate", results[j].images.original.url);
                    earthImage.attr("data-state", "still");
                    earthImage.addClass("image");
                    earthDiv.append(q);
                    earthDiv.append(earthImage);
                    earthDiv.append(p);
    
                    //if/else statement to display grabbed 10 gifs into three rows to display
                    if (j >= 0 && j < 3) {
                        $("#display-area-1").append(earthDiv);
                    } else if (j >= 3 && j < 7) {
                        $("#display-area-2").append(earthDiv);
                    } else {
                        $("#display-area-3").append(earthDiv);
                    }
                }
            });
    }

    
    displayButtons();

    //click event listener to all buttons to click button and display gifs
    $(document).on("click", ".btnClass", displayGifs);
    
    //click event listener to play and stop gifs
    $(document).on("click", ".image", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })


    //weather API 
    //takes entered zip code and adds into URL and API key 
    $(".submit").on("click", function (event) {
    
        //keeps variable
        event.preventDefault();
    
        //card will display w/info after submit 
        $(".card").show();
    
        //takes input value and goes into weather variable
        var weather = $(".weatherzip").val().trim();
        var weatherAPIKey = "bd380aef65f86e853fbb40f0606884f1";
        var zipcodeURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + weather + ",us&appid=" + weatherAPIKey;
    
        //ajax call
        $.ajax({
                url: zipcodeURL,
                method: "GET"
            })
            .then(function (responseW) {
    
                //check URL and response
                console.log(zipcodeURL);
                console.log(responseW);
    
                //convert grabbed kelvin temperatures into fahrenheit
                 //to convert kelvin to F, F = (K - 273.15) * 1.80 + 32
                var mainTemp = ((responseW.main.temp - 273.15) * 1.80) + 32;
                //rounds result
                var roundTemp = Math.round(mainTemp);
                //same as mainTemp
                var feelsTemp = ((responseW.main.feels_like - 273.15) * 1.80) + 32;
                var feelsRoundTemp = Math.round(feelsTemp);
            
                //prints responses to html for user
                $(".location").html("<h4>Location: " + responseW.name + "</h4>");
                $(".temperature").html("<h5>Present Temp(F): &deg" + roundTemp + "</h5>");
                $(".feelsLike").html("<h5>Feels Like(F): &deg" + feelsRoundTemp + "</h5>");
                $(".todaysForecast").html("<h5>Today's Forecast: " + responseW.weather[0].description + "</h5>");

            })
                
    })

})