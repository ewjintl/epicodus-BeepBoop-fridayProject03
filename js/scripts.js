// BACKEND LOGIC
var output = []
for (i=1; i <= 15; i++) {
  output.push(i);
}
console.log(output);

var mapped = output.map(function(number) {
  return number * 2;
});
console.log(mapped);




// FRONTEND LOGIC
$(Document).ready(function() {
  $("form#userInput").submit(function(event) {
    var endNumber = parseInt($("#userEndNumber").val());
    console.log(endNumber);
    
    range(endNumber);
    
    event.preventDefault();
  });
});


// spec1 = [];
// output.forEach(function(item) {
//   if ((item).includes(1)) {
//     output.push("Beep!"); 
//   }
//   return console.log(output)
// });
// } else if ("2".includes(i) == true) {
//    display += "Boop!";
//     }