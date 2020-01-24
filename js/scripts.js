// BACKEND LOGIC

function range(num) {
  var output = [];
  for (i = 0; i <= num; i++) {
    output.push(i);    
  }
  return console.log(output);
}






// if ([i].includes(1)) {
//   output += "Beep!"; 
// //   // } else if ("2".includes(i) == true) {
// //   //     display += "Boop!";
//     }





// FRONTEND LOGIC
$(Document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var endNumber = parseInt($("#userEndNumber").val());
    console.log(endNumber);

    range(endNumber);

  });
});