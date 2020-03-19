//create an array of strings, each one related to a topic that interests you, save to variable "topics"
//FOOD! 10 food topics:
var topics = ["Pizza","Cheeseburgers","Spaghetti","Soup", "Pretzels", "Salad", "Cheese", "Steak","Hot Dogs","Bagels"]

//app takes topics array and create buttons to HTML
function displayButtons() {
    $("#button-area").empty();
// loop that appends a button for each string in the array
    for (var i = 0; i < topics.length; i++) {
        var showButton = $("<button>");
    //add a class food-bttn
        showButton.addClass("food-bttn");
    //add a data-attribute
        showButton.attr("data-name", topics[i]);
    // providing the initial button text
        showButton.text(topics[i]);
    // add button to button-area
        $("#button-area").append(showButton);
    }
}



//user clicks a button, page gets 10 static, non-animated gifs from GIPHY API and displays on page

//user clicks gif and gif animates.  

//user clicks animated gif again and gif pauses

//display rating under each displayed gif

//add a form to page that takes value from user input box and adds to "topics" array
//make function call that takes added topic in array and makes a button
$("#addButton").on("click", function(event) {
    event.preventDefault();
    //grabs input from textbox
    var topicVar = $("#form-input").val().trim();
    //adds topic from input to topic array
    topics.push(topicVar);
    //displays buttons
    displayButtons();
});

displayButtons();