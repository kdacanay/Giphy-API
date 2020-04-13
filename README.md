# Giphy-API

https://kdacanay.github.io/Giphy-API/

<img src="captureportfolioGIPHY.png" width=500>

**Earth GIPHY w/Weather API**

In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

* Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

* We chose animals for our theme, but you can make a list to your own liking.

* Your app should take the topics in this array and create buttons in your HTML.

* Try using a loop that appends a button for each string in the array.

* When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

* When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

* Under every gif, display its rating (PG, G, so on).

* This data is provided by the GIPHY API.
* Only once you get images displaying with button presses should you move on to the next step.

* Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

* Deploy your assignment to Github Pages.


First, I created an array of different search topics; I decided to use 'earth' related gifs because I thought I could use an additional API, such as the weather API, to make the site better and a little more appealling.  A for loop runs through the topic array, and then we use JQuery to add classes and data to the topics, and then they become buttons.  The user can also use the form to display additional topics, which then join the button array.  We then use ajax and query the GIPHY api with an apikey, then a for loop runs through the results and display ten related gifs, using JQeury to add attributes.  The user can then click each gif to animate them and pause them.  I also use ajax to call the weather api after the user inputs their zipcode in the additional input box.  Ajax calls to the weather api and retrieves the forecast and current temperature of the user's zipcode.  
