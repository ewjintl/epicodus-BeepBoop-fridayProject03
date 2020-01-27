// BACKEND LOGIC
var output = [];
function range(num) {
    for (i = 0; i <= num; i++) {
    output.push(i);    
  }
  console.log(output);
}

var changer = output.map(function(number) {
  if ([3, 13, 23, 30].includes(number)) {
  return number = "I'm sorry Dave...";
  } else if ([2, 12].includes(number)) {
    return number = "Boop!";
  } else if ([1, 11].includes(number)) {
    return number = "Beep!";
  } else 
    return number;
});


// FRONTEND LOGIC
$(Document).ready(function() {
  $("form#userInput").submit(function(event) {
    var endNumber = parseInt($("#userEndNumber").val());
    console.log(endNumber);
    
    range(endNumber);
    console.log(changer);
    
    event.preventDefault();
  });
});