// BACKEND LOGIC
function range(num) {
  for (i = 0; i <= num; i++) {
    console.log(i);
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