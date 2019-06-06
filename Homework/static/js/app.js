// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function AppendRows(myObject){
    var row = tbody.append("tr");
    var objectKeys = Object.keys(myObject);
    for (var i = 0; i <objectKeys.length; i = i + 1){
        row.append("td").text(myObject[objectKeys[i]]);
    }
}

tbody.text("");

data.forEach(AppendRows);

var submit = d3.select("#filter-btn");

submit.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //console.log(inputValue);
    //console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    //console.log(filteredData);

    if (inputValue === ""){
        filteredData = tableData;
    }

    tbody.text("");
    filteredData.forEach(AppendRows);
})