var app = {amcharts: {}};
var chart;
app.amcharts = function () {



    function _ajaxcall(url, callback) {
        
        if (window.XMLHttpRequest) {
            var xmlHttpReq = new XMLHttpRequest();
       
            xmlHttpReq.open('GET', url, true);
            xmlHttpReq.setRequestHeader('Content-Type', 'application/json');
            xmlHttpReq.onreadystatechange = function() {
                if (xmlHttpReq.readyState == 4) {
                    if (callback) {
                        callback.call(xmlHttpReq);
                    }
                }
            }
            xmlHttpReq.send();    
        }
        
    }
    
    return {
        
        stacked: function () {                       

            AmCharts.ready(function () {

     
                
                // SERIALL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = [];
                chart.categoryField = "year";
                chart.plotAreaBorderAlpha = 0.2;
                chart.rotate = true;

                // AXES
                // Category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.gridAlpha = 0.1;
                categoryAxis.axisAlpha = 0;
                categoryAxis.gridPosition = "start";

                // value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.stackType = "regular";
                valueAxis.gridAlpha = 0.1;
                valueAxis.axisAlpha = 0;
                chart.addValueAxis(valueAxis);

                // graphs

                // firstgraph
                var graph = new AmCharts.AmGraph();
                graph.title = "Europe";
                graph.labelText = "[[value]]";
                graph.valueField = "europe";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                graph.lineColor = "#C72C95";
                graph.balloonText = "<b><span style='color:#C72C95'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                graph.labelPosition = "middle";
                chart.addGraph(graph);

                // second graph
                graph = new AmCharts.AmGraph();
                graph.title = "North America";
                graph.labelText = "[[value]]";
                graph.valueField = "namerica";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                graph.lineColor = "#D8E0BD";
                graph.balloonText = "<b><span style='color:#afbb86'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                graph.labelPosition = "middle";
                chart.addGraph(graph);

                // third graph
                graph = new AmCharts.AmGraph();
                graph.title = "Asia-Pacific";
                graph.labelText = "[[value]]";
                graph.valueField = "asia";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                graph.lineColor = "#B3DBD4";
                graph.balloonText = "<b><span style='color:#74bdb0'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                graph.labelPosition = "middle";
                chart.addGraph(graph);

                // fourth graph
                graph = new AmCharts.AmGraph();
                graph.title = "Latin America";
                graph.labelText = "[[value]]";
                graph.valueField = "lamerica";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                graph.lineColor = "#69A55C";
                graph.balloonText = "<b><span style='color:#69A55C'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                graph.labelPosition = "middle";
                chart.addGraph(graph);

                // fifth graph
                graph = new AmCharts.AmGraph();
                graph.title = "Middle-East";
                graph.labelText = "[[value]]";
                graph.valueField = "meast";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                graph.lineColor = "#B5B8D3";
                graph.balloonText = "<b><span style='color:#7a81be'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                graph.labelPosition = "middle";
                chart.addGraph(graph);

                // sixth graph
                graph = new AmCharts.AmGraph();
                graph.title = "Africa";
                graph.labelText = "[[value]]";
                graph.valueField = "africa";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                graph.lineColor = "#F4E23B";
                graph.balloonText = "<b><span style='color:#c3b218'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                graph.labelPosition = "middle";
                chart.addGraph(graph);

                // LEGEND
                var legend = new AmCharts.AmLegend();
                legend.position = "right";
                legend.borderAlpha = 0.3;
                legend.horizontalGap = 10;
                legend.switchType = "v";
                chart.addLegend(legend);

                chart.creditsPosition = "top-right";


                /*
                     @[scrap
                        @@name chartHandleTest
                        @@context chart
                        @@assert ok(chart, "chart handle is not valid")
                     ]@
                */


                _ajaxcall("data.json", function () {

                    var data = JSON.parse(this.responseText);
                    /*
                         @[scrap
                             @@name chartDataTest
                             @@context data
                             @@assert ok(data, "chart handle is not valid")
                         ]@
                     */
                    
                    chart.dataProvider = data;

                    
                 
                    
                    // WRITE
                    chart.write("chartdiv");

                    /*
                     @[scrap
                        @@name chartDivTest
                        @@context chart
                        @@wait object(chart.chartDiv)
                        @@assert ok(true, "chart was created") 
                        @@js chart.balloon.showBalloon()
                        
                        @@dom fire("mouseover", {element: chart.columnsArray[1].column.set.node.childNodes[0]})
                        @@dom fire("mouseover", {element: chart.columnsArray[1].column.set.node.childNodes[0]})
                        @@dom fire("mousemove", {element: chart.columnsArray[1].column.set.node.childNodes[0]})

                        @@dom fire("mouseover", {element: chart.columnsArray[1].column.set.node.childNodes[0]})
                        @@dom fire("mouseenter", {element: chart.columnsArray[2].column.set.node.childNodes[0]})
                        @@dom fire("mouseover", {element: chart.columnsArray[2].column.set.node.childNodes[0]})
                        @@dom fire("mousemove", {element: chart.columnsArray[2].column.set.node.childNodes[0]})
                        @@dom fire("mousemove", {element: chart.columnsArray[2].column.set.node.childNodes[0]})
                        @@dom fire("mousemove", {element: document, cords: chart.columnsArray[2].column.set.node.childNodes[0]})
                        @@dom fire("mousemove", {element: document, offset: {x:275, y:278}})


                     ]@
                     */


                    for (var key in chart.columnsArray[1].column.set.node.childNodes[0]) {
                        if (key.indexOf("on") === 0) {
                            chart.columnsArray[1].column.set.node.childNodes[0].addEventListener(key.substring(2), function(e) {
                                console.log(e.type);
                            }, false);
                        }
                    }
                });
                              
            });          
        },

        // Make chart 2D/3D
        setDepth: function() {
            if (document.getElementById("rb1").checked) {
                chart.depth3D = 0;
                chart.angle = 0;
            } else {
                chart.depth3D = 20;
                chart.angle = 30;
            }
            chart.validateNow();
        }



    };

}();
