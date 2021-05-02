///////////////// THE CODE IN THIS FILE COMES FROM OFFICE HOURS WITH DOM /////////////
console.log("app.js is loaded");

function DrawBargraph(sampleId) {
    console.log(`DrawBargraph(${sampleId})`);

    d3.json(`data/samples.json`).then(data => {
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
            textposition: 'auto',
            orientation: "h",
            width: 'auto'
        }

        var barArray = [barData];
        
        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t: 25, l: 200},
            size:22
        }
        
        Plotly.newPlot("bar", barArray, barLayout);
        
        // console.log(sample_values);
        // console.log(otu_ids);
        // console.log(otu_labels);

    });
}

function DrawBubblechart(sampleId) {
    console.log(`DrawBubblechart(${sampleId})`);

    d3.json(`data/samples.json`).then(data => {
        console.log(data);  
        
        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        console.log(resultArray);
        var result = resultArray[0];
        console.log(result)
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        
        var xvalues = data.otu_ids;
        var yvalues = data.sample_values;
        var label = data.otu_labels;
        var size = data.sample_values;

        var bubbles = {
            x: otu_ids,
            y: sample_values,
            label: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids
            }
        };
        var data =[bubbles];

        var layout = {
            title: "Bacteria Size",
            showlegend: false,
            height: 600,
        }

        Plotly.newPlot("bubble", data,layout);
    });
}    

function ShowMetadata(sampleId) {
    console.log(`ShowMetadata(${sampleId})`);
    
    d3.json(`metadata/samples.json`).then(data => {
        var sampleMetadata = data.metadata;
        var result = sampleMetadata.filter(obj => obj.id == sampleId);
        var filterresult = result[0];
        var display = d3.select("#sample-metadata");
        display.html("");
        Object.entries(filterresult).forEach(([key, value]) => {
            display.append("h6").text(`${key} ${value}`);
        });

    });
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