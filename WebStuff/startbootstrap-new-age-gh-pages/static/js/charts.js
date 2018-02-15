
window.onload = function () {
	dashboardChart()

	trendsChart()


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
			title : "Time",
			titleFontSize : 15
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
	titleFontSize : 15
	},
	axisX: {
	title : "Date Month/Day/Year",
	titleFontSize : 15
	},
	data: [{
	type: "stackedColumn",
	legendText: "REM sleep",
			showInLegend: "true",
	dataPoints: [
		{ x: new Date(2016, 1, 0), y: 40000 },
		{ x: new Date(2016, 1, 1), y: 42000 },
		{ x: new Date(2016, 1, 2), y: 45000 },
		{ x: new Date(2016, 1, 3), y: 45000 },
		{ x: new Date(2016, 1, 4), y: 47000 },
		{ x: new Date(2016, 1, 5), y: 43000 },
		{ x: new Date(2016, 1, 6), y: 42000 },
		{ x: new Date(2016, 1, 7), y: 43000 },
	]
	}
]
});

// Data point parsing ---------------------------------------------------
	for (var i = 0; i < data.length; i++) {

		rec.activ.push({
			x: new Date(data[i].time[0], data[i].time[1], data[i].time[2], data[i].time[3], data[i].time[4], data[i].time[5], data[i].time[6], data[i].time[7]),
			y: data[i].activity
// JSON record separating -------------------------------------------------
		})
		if(data[i].activity === undefined){
			sliceIndex.push(i);
		}
	}
// Data point updating --------------------------------------------------------------------
		for(var i =0; i< sliceIndex.length; i++){

			chart.options.data.push({
				type: "line",
				dataPoints: rec.activ.slice((sliceIndex[i]+1),sliceIndex[i+1])
			})

		}
// Render charts --------------------------------------------------------
		chart.render();
	  chart2.render();

}
// Update JSON file ----------------------------------------------------------
$.getJSON('/db', addData);

}

function trendsChart() {





}
