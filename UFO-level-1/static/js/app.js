// from data.js
var tableData = data;

// YOUR CODE HERE!
var output = d3.select("tbody");

tableData.forEach((ufo) => {
    console.log(ufo);
    var row = output.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

// select button
var button = d3.select("button#filter-btn");

// select input
var inputField = d3.select("input#datetime")


function filter (
  
)

// change function

function handleChange() {
  var inputText = d3.event.target.value;
  output.text("");
  var outputText = filter(inputText)
  output.text(outputText);

}

button.on("click", handleChange)
















  
// inputField.on("change", function() {
//     var newText = d3.event.target.value
//     console.log(newText)
//     tbody.text(newText)
//     }
// );

// // click function
// button.on("click", function() {
//       console.log("button clicked");
//       // filtered data function;
//   }
// );

