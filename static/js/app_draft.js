// import the data from data.js
const tableData = data;
console.log(data);
//Reference the HTML table using d3
var tbody =d3.select("tbody");

function buildTable(data) {
    //First clear out any existing data
    tbody.html("");

    //Next, loop through each object in the data
    //and append a row and cells for each value in the row 
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in teh dataRow and aff
        //each balue as a table cell (td)
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append("td");
            cell.text(val);
        });

    });
}

function handleClick() {
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    //Check to see if a date was entered and filter the
    //data using that date
    if (date) {
        //Apply a filter to the table data to only keep
        //rows where the datetime value matches the filter value
        filteredData = filterData.filter(row => row.datetime === date);
    };

    //Rebild the table using the filtered data
    //@NOTE: If no date was entered, the filteredData will
    //just be the original tableData
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);

