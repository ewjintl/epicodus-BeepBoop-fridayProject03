// BACKEND LOGIC
var output = [];
function range(num) {
    for (i = 0; i <= num; i++) {
    output.push(i.toString());    
  }
  console.log(output);
}

function changer() {
output.map(function(string) {
  if (i.includes("3")) {
  return i = "I'm sorry Dave...";
  } else if (i.includes("2")) {
    return i = "Boop!";
  } else if (i.includes("1")) {
    return i = "Beep!";
  } else {
    return array;
  }
});
}

// FRONTEND LOGIC
$(cocument).ready(function() {
  $("form#userInput").submit(function(event) {
    var endNumber = parseInt($("#userEndNumber").val());
    console.log(endNumber);
    // range().empty();
    range(endNumber);
    console.log(changer(output));   
    event.preventDefault();
  });
});