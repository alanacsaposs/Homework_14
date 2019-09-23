// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// // Use d3 to update each cell's text with
// // UFO sighting information
  data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value);
// // Append a cell to the row for each value
  var cell = row.append("td");
  cell.text(value);
  });
  });

// Select Filter Button
var button = d3.select("#filter-btn");
button.on("click", function() {

  // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = data.filter(data => data.datetime === inputValue);
  
    console.log(filteredData);

    // remove any all previous data from table
    tbody.html("");

  // append stats to the list
    filteredData.forEach(function(ufoSighting) {
      console.log(ufoSighting);
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
  // // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
      });
    });
  }); 