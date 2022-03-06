var events = [];

var createEvents = function (eventText) {
  // create elements that make up an event
  var eventText = $("textarea").text(textInput);
  // Append elements to parent
  eventText.append(eventText);
};
var loadEvents = function () {
  events = JSON.parse(localStorage.getItem("events"));
  // If there's nothing in localStorage, create a new object to track all event status arrays
  if (!events) {
    events = [];
  }
};

// Function to save events to localStorage
var saveEvents = function (clickedButton) {
  events[$(clickedButton).parent().attr("data-hour")] = "You clicked me!";

  localStorage.setItem("events", JSON.stringify(events));
};

// Setting up time/clock element
var time = document.getElementById("currentDay");
function currentDay() {
  time.textContent = new Date().toString();
}

// Refreshing every second (1000 milliseconds)
setInterval(currentDay, 1000);

// Use Moment.js to add the text content of the current month, day and year
function checkEvent() {
  var clockEl = moment().hours();

  // Set up the event element - this is on all time blocks
  $(".event-category").each(function () {
    var blockHour = parseInt($(this).attr("data-hour"));

    // If Conditional for if blockHour is less than the clockElement
    // Will add past class

    if (blockHour < clockEl) {
      $(this).addClass("past");

      // Else If Conditional for if blockHour is equal to the clockElement
      // Will add present class and remove past class
    } else if (blockHour === clockEl) {
      $(this).removeClass("past");
      $(this).addClass("present");

      // Else If Conditional for if blockHour is equal to the clockElement
      // Will add future class and remove past/present class
    } else if (blockHour > clockEl) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
// Refreshing every second (1000 milliseconds)
setInterval(checkEvent, 1000);

// on card click - allow user to edit to add/change event
$(".event-category").on("click", function () {
  var text = "";

  var textInput = $("<textarea>").val(text);
  $(".event-text").replaceWith(textInput);

  textInput.trigger("focus");
});

// update and re-save to localStorage when SaveBtn is clicked

$(".saveBtn").on("click", function () {
  saveEvents($(this));
});

loadEvents();
