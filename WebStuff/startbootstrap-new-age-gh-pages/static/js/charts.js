
window.onload = function () {
	dashboardChart()
}

function dashboardChart() {

var rec = {
	temp : [], // dataPoints
	activ : [] // dataPoints
};
var sliceIndex = [];


function addData(data){
// Chart options ----------------------------------------------------------------------------
	var chart = new CanvasJS.Chart("chartContainer", {
		backgroundColor: "transparent",
		// title :{
		// 	text: "Sleep data",
		// 	padding : 5,
		// },
		axisY: [{
			includeZero: false,
			title : "Activity",
			titleFontSize : 15

		}],
		axisX : {
			// valueFormatString: "HHH",
			title : "Time",
			titleFontSize : 15
		},
		legend: {
				horizontalAlign: "left", // "center" , "right"
     		verticalAlign: "center",  // "top" , "bottom"
       	fontSize: 15,
        cursor: "pointer",
        itemclick: function (e) {
            //console.log("legend click: " + e.dataPointIndex);
            //console.log(e);
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }

            e.chart.render();
        }
    },
		data: []

	});
//chart 2 options --------------------------------------------------------
	var chart2 = new CanvasJS.Chart("chartContainer3", {
		backgroundColor: "transparent",
	// title :{
	// text: "Trends"
	// },
		axisY: {
		title : "Hours of sleep",
		includeZero: false,
		valueFormatString: "mm",
		titleFontSize : 15
		},
		axisX: {
		title : "Date Month/Day/Year",
		valueFormatString: "MM-DD",
		titleFontSize : 15
		},
		data: {
		type: "column",
		dataPoints: []
	}
	});

// Data point parsing ---------------------------------------------------
	for (var i = 0; i < data.length; i++) {

		//Parse Python flask server timestamp
		 var servtime = (data[i].recvtime );
		 var res = servtime.split(",");

		 var timestamp = [];
		 res.forEach(function(item) {
  	 timestamp.push(parseInt(item));
		});

		// JSON record separating -------------------------------------------------
		rec.activ.push({
			x: new Date(timestamp[0], timestamp[1], timestamp[2], timestamp[3], timestamp[4], timestamp[5]),
			y: data[i].activity
		})
		if(data[i].activity === undefined){
			sliceIndex.push(i);
		}
	}
// Data point updating --------------------------------------------------------------------
		for(var i =0; i< sliceIndex.length; i++){
			//chart 1 data pushing
			chart.options.data.push({
				type: "line",
				showInLegend : true,
				legendText: 'Record '+(i+1),
				dataPoints: rec.activ.slice((sliceIndex[i]+1),sliceIndex[i+1])
			});
			//chart 2 data pushing
			if((rec.activ[sliceIndex[i+1]]) === undefined){
				var recTime = (Date.parse(rec.activ[rec.activ.length-1].x) - Date.parse(rec.activ[sliceIndex[i]].x))
				} else {
				var recTime = (Date.parse(rec.activ[sliceIndex[i+1]-1].x) - Date.parse(rec.activ[sliceIndex[i]].x))
				}

				// console.log(recTime);
				// console.log(new Date(Date.parse(rec.activ[sliceIndex[i]].x)+(i*86400000)));
			chart2.options.data.dataPoints.push({
				x: recTime,
				y: new Date(Date.parse(rec.activ[sliceIndex[i]].x)+(i*86400000))
			});
			// console.log(chart2.options.data.dataPoints);
		}
// Render charts --------------------------------------------------------
		chart.render();
		console.log(chart2.options.data);
		chart2.render(); //not loading despite dataPoints being seemingly correctly set

		// document.getElementById("chartContainer3").innerHTML = JSON.stringify(chart2.options.data.dataPoints);

}
// Update JSON file ----------------------------------------------------------
$.getJSON('/db', addData);

}
