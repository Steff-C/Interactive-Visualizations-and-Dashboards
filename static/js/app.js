///////////////// THE CODE IN THIS FILE COMES FROM OFFICE HOURS WITH DOM /////////////
console.log("app.js is loaded");

function DrawBargraph(sampleId) {
    console.log(`DrawBargraph(${sampleId})`);

    d3.json("data/samples.json").then(data => {
        console.log(data);  

        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        console.log(resultArray);
        var result = resultArray[0];
        console.log(result)
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();

        var barData = {
            x: sample_values.slice(0, 10).reverse(), //  TBD
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0, 10).reverse(), //TBD
            orientation: "h"
        }

        var barArray = [barData];
        
        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t: 30, l: 150}
        }
        
        Plotly.newPlot("bar", barArray, barLayout);
        
        // console.log(sample_values);
        // console.log(otu_ids);
        // console.log(otu_labels);

    });
}

function DrawBubblechart(sampleId) {
    console.log(`DrawBubblechart(${sampleId})`);
} 

function ShowMetadata(sampleId) {
    console.log(`ShowMetadata(${sampleId})`);
} 

function optionChanged(newSampleId) {
    console.log(`User selected(${newSampleId})`);

    // Draw the graphs and the metadata
    DrawBargraph(newSampleId);
    DrawBubblechart(newSampleId);
    ShowMetadata(newSampleId);
}


function InitDashboard() {
    console.log("InitDashboard()");

    // Populate the dropdown (selector) in Test Subject ID No.:
    var selector = d3.select("#selDataset");

    d3.json("data/samples.json").then(data => {
        console.log(data);       

        var sampleNames = data.names;

        sampleNames.forEach(sampleId => {
            selector.append("option")
                .text(sampleId)
                .property("value", sampleId);
            });

            var id = sampleNames[0];

              // Draw the graphs and the metadata
            DrawBargraph(id);
            DrawBubblechart(id);
            ShowMetadata(id);


    });

    // Update the Bar Graph



    // Update the Bubble Chart
    // Update the Demographic Information


}

InitDashboard();