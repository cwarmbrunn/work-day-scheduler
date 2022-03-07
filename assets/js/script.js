// Setting events variable equal to an empty array
var events = [];

function createEvents(eventText) {
  // create elements that make up an event
  var eventText = $("textarea").text(textInput);
  // Append elements to parent
  eventText.append(eventText);
}
//
function loadEvents() {
  // Setting variable count equal to 9 - which is the start of the timeblocks
  for (let count = 9; count < 18; count++) {
    // Getting the count number from localStorage
    localStorage.getItem(count);
    // Setting myString equal to the getItem(count)
    let myString = localStorage.getItem(count);
    // If conditional for if there is a count in localStorage (a timeblock is clicked)
    if (myString) {
      // Then the ID for that count is pulled and it will place the value of myString
      $("#" + count).val(myString);
    }
  }
}

// Function to save events to localStorage
function saveEvents(clickedButton) {
  events[$(clickedButton).parent().attr("data-hour")] = $("data-hour").val();
}

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

// On card click - allow user to edit to add/change event
$(".event-category").on("click", function () {
  var text = "";

  var textInput = $("<textarea>").val(text);

  textInput.trigger("focus");
});

// Update and save to localStorage when SaveBtn is clicked

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();

  localStorage.setItem($(this).parent().attr("data-hour"), text);
  loadEvents();
});

// Calls loadEvents function
loadEvents();
