var events = {};

var createEvents = function () {
  // create elements that make up an event
  $("event-category").each(function () {});
  // Append elements to parent
};

// Function to save events to localStorage
var saveEvents = function () {
  localStorage.setItem("events", JSON.stringify(events));
};
var loadEvents = function () {};
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
  // update and re-save to localStorage
});
