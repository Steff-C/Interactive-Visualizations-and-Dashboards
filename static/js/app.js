///////////////// THE CODE IN THIS FILE COMES FROM OFFICE HOURS WITH DOM /////////////
console.log("app.js is loaded");

function DrawBargraph(sampleId) {
    console.log(`DrawBargraph(${sampleId})`);
}

function DrawBubblechart(sampleId) {
    console.log(`DrawBubblechart(${sampleId})`);
} 

function ShowMetadata(sampleId) {
    console.log(`ShowMetadata(${sampleId})`);
} 

function optionChanged(newSampleId) {
    console.log(`User selected(${newSampleId})`);

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

            DrawBargraph(id);
            DrawBubblechart(id);
            ShowMetadata(id);


    });

    // Update the Bar Graph



    // Update the Bubble Chart
    // Update the Demographic Information


}

InitDashboard();