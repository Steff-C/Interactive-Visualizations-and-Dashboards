///////////////// THE CODE IN THIS FILE COMES FROM OFFICE HOURS WITH DOM /////////////
console.log("app.js is loaded");

function InitDashboard() {
    console.log("InitDashboard()");

    // Populate the dropdown (selector) in Test Subject ID No.:

    var selector = d3.select("#selDataset");

    d3.json("samples.json").then(function(data) {
        console.log(data);       

    });



    // Update the Bar Graph
    // Update the Bubble Chart
    // Update the Demographic Information


}

InitDashboard();