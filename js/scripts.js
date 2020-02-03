// BACKEND LOGIC
function range(num) {
  var output = [];
    for (i = 0; i <= num; i++) {
    output.push(i.toString());   
  }
  return output;
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
$(document).ready(function() {
  event.preventDefault();
  $("form#userInput").submit(function(event) {
    var endNumber = parseInt($("#userEndNumber").val());
    parseInt($("#userEndNumber").val(""));
    var userArray = range(endNumber);
    console.log(changer(userArray));   
  });
});