// from data.js
var tableData = data;

// YOUR CODE HERE!
var output = d3.select("tbody");


// generating the entire table
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

// change function
button.on("click", handleChange);

// creating the function handleChange
function handleChange() {
  // prevent refreshing the page
  d3.event.preventDefault();

  // select input field
  var inputField = d3.select("input#datetime");
  var inputValue = inputField.property("value");
  console.log(inputValue)

  // filter data
  var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);
  console.log(filteredData);
  // clearing output
  output.text("");
  // generating table with the filtered data
  filteredData.forEach((ufo) => {
      console.log(ufo);
      var row = output.append("tr");
          Object.entries(ufo).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
      });
    });
}

