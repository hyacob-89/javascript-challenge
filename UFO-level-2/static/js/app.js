var tableData = data;

// UFO-level-1 Code
var tbody = d3.select("tbody");

tableData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});


// UFO-level-2 Code
var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    d3.select("tbody").html("");
    filteredData.forEach(function(ufoReport) {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

