//create an array of strings, each one related to a topic that interests you, save to variable "topics"
//Earth GIFS
$(document).ready(function () {
    var topics = ["Sunset", "Sunrise", "Mountains", "Landscapes", "Seascapes", "Lightning", "Thunderstorms", "Tornado", "Hurricane", "Tsunami"];

    //app takes topics array and create buttons to HTML
    function displayButtons() {
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
        event.preventDefault();
        //grabs input from textbox
        var earth = $("#form-input").val().trim();
        //adds topic from input to topic array
        topics.push(earth);
        //displays buttons
        displayButtons();
    });


    function displayGifs() {
        var earth = $(this).attr("data-earth");
        //constructs URL w/earth topic
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + earth + "&api_key=bbADz3KnghoZiynw8PEXRxCMDhj2WZJu&limit=10";
        console.log(queryURL);

        //perform ajax request 
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                console.log(response);
                $("#display-area-1").empty(); //erase previous gifs
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

    // //weather javascript (TEST):
    // $("#weatherButton").on("click".function() {
    // var weatherZIP; 
    // var weatherAPIKey = "bd380aef65f86e853fbb40f0606884f1";
    // var zipcodeURL = "https://api.openweathermap.org/data/2.5/weather?zip="+weatherZIP+"us&appid=" + weatherAPIKey;

    // $.ajax({
    //         url: zipcodeURL,
    //         method: "GET"
    //     })
    //     .then(function (responseW) {
    //         console.log(zipcodeURL);
    //         console.log(responseW);
    //     })

    //user clicks gif and gif animates.  

    //user clicks animated gif again and gif pauses
    
})