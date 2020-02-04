// BACKEND LOGIC
function range(num) {
  var output = [];
  for (i = 0; i <= num; i++) {
  output.push(i.toString());   
    if ((output[i]).includes("3")) {
      output[i] = ("I'm sorry Dave...");
    } else if ((output[i]).includes("2")) {
      output[i] = ("Boop!");
    } else if ((output[i]).includes("1")) {
      output[i] = ("Beep!");
    } else {
      output[i];
    }
  }
    return output;
  };

// FRONTEND LOGIC
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var endNumber = parseInt($("#userEndNumber").val());
    parseInt($("#userEndNumber").val(""));
    var userArray = range(endNumber);
    $("#output").text(userArray);
    event.preventDefault();
  });
});