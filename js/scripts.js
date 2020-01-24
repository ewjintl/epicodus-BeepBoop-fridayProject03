// BACKEND LOGIC
function range(num) {
  for (i = 0; i <= num; i++) {
    // "contain" is the operative word here.
    var display = "";
    if ("1".includes(i) == true) {
      display += "Beep!"; 
      } else if ("2".includes(i) == true) {
          display += "Boop!";
        }
    console.log( display || i);
  }
  return 
}


// FRONTEND LOGIC
$(Document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var endNumber = $("#userEndNumber").val();
    console.log(endNumber);

    range(endNumber);

  });
});