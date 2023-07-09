// Function to update the clock hands
function updateClockHands() {
  // Get the current time
  var now = new Date();

  // Calculate the rotation angle for each hand
  var hours = now.getHours() % 12; // Convert to 12-hour format
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var hourRotation = 30 * hours + 0.5 * minutes; // Each hour mark represents 30 degrees (360 degrees / 12 hours)
  var minuteRotation = 6 * minutes; // Each minute mark represents 6 degrees (360 degrees / 60 minutes)
  var secondRotation = 6 * seconds; // Each second mark represents 6 degrees (360 degrees / 60 seconds)

  // Update the transform attribute of each hand
  var hourHand = document.getElementById('hours');
  hourHand.setAttribute('transform', 'rotate(' + hourRotation + ' 243.5 250.5)');

  var minuteHand = document.getElementById('minutes');
  minuteHand.setAttribute('transform', 'rotate(' + minuteRotation + ' 243.5 250.5)');

  var secondHand = document.getElementById('seconds');
  secondHand.setAttribute('transform', 'rotate(' + secondRotation + ' 243.5 250.5)');
}

// Call the updateClockHands function once per second
setInterval(updateClockHands, 1000);