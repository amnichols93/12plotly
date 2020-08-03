function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
            .append("option")
            .text(sample)
            .property("value", sample);
        });
    });
}

init();
buildMetadata('940');
buildCharts('940');

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
  
        PANEL.html("");
        PANEL.append("h6").text("ID: " + result.id);
        PANEL.append("h6").text("ETHNICITY: " + result.ethnicity);
        PANEL.append("h6").text("GENDER: " + result.gender);
        PANEL.append("h6").text("AGE: " + result.age);
        PANEL.append("h6").text("LOCATION: " + result.location);
        PANEL.append("h6").text("BBTYPE: " + result.bbtype);
        PANEL.append("h6").text("WFREQ: " + result.wfreq);
    });
}

function buildCharts(sample) {
    /*Create a bar chart of the top ten bacterial species in a volunteer’s navel. 
    Use JavaScript to select only the most populous species.*/
    /*d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];*/

        /*d3.json("samples.json").then(function(data){
            let samples = data.samples.filter(sampleObj => sampleObj.id == sample);
            let sample_values = samples.sample_values;
            let sorted_sample_values = sample_values.sort((a,b) => b - a);
            let filtered_samples_values = sorted_sample_values;
            let topTenValues = filtered_samples_values.slice(0,10);
            console.log("Top 10: " + topTenValues);
        });*/

    /*});*/

    /*Create a bubble chart to visualize the relative frequency of all the 
    bacterial species found in a volunteer’s navel.*/

    //Gauge: DONE
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var guagevalue = result.wfreq;

        var gaugedata = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: guagevalue,
                title: { text: "Belly Button Washing" },
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { range: [null, 10] },
                    bar: { color: "#FFC0CB" },
                    steps: [
                      { range: [0, 1], color: "#e0f2f1" },
                      { range: [1, 2], color: "#b2dfdb" },
                      { range: [2, 3], color: "#80cbc4" },
                      { range: [3, 4], color: "#4db6ac" },
                      { range: [4, 5], color: "#26a69a" },
                      { range: [5, 6], color: "#009688" },
                      { range: [6, 7], color: "#00897b" },
                      { range: [7, 8], color: "#00796b" },
                      { range: [8, 9], color: "#00695c" },
                      { range: [9, 10], color: "#004d40" }
                    ]
                }
            }
        ];
        
        var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', gaugedata, layout);
    });
}