
window.onload = function () {
	dashboardChart()
	// sleepBreakdown()
	trendsChart()
	setInterval(
		function(){
		dashboardChart()
		// sleepBreakdown()
		trendsChart()},
		100000);

}

function dashboardChart() {

var rec = {
	temp : [], // dataPoints
	activ : [] // dataPoints
};


function addData(data){

	var chart = new CanvasJS.Chart("chartContainer", {
		backgroundColor: "transparent",
		// title :{
		// 	text: "Sleep data",
		// 	padding : 5,
		// },
		axisY: [{
			includeZero: false,
			title : "Acceleration m/s²",
			titleFontSize : 15
		// },
		// {
		// 	includeZero: false,
		// 	title : "Temperature",
		// 	titleFontSize: 15
		}],
		axisX : {
			title : "Time",
			titleFontSize : 15
		},
		data: [{
			type: "line",
			// axisYindex: 0,
			dataPoints: rec.activ
		// },
		// {
		// 	type: "line",
		// 	axisYindex: 1,
		// 	dataPoints: rec.temp
		}]
	});
	for (var i = 0; i < data.length; i++) {
		if(data[i].state = "NEW_SESSION"){
    //
		// 	// rec.temp = [];
		// 	// rec.activ = [];
		// 	i++;
		}
		rec.activ.push({
			x: new Date(data[i].time[0], data[i].time[1], data[i].time[2], data[i].time[3], data[i].time[4], data[i].time[5], data[i].time[6], data[i].time[7]),
			y: data[i].activity
		// });
		// rec.temp.push({
		// 	x: new Date(data[i].time[0], data[i].time[1], data[i].time[2], data[i].time[3], data[i].time[4], data[i].time[5], data[i].time[6], data[i].time[7]),
		// 	y: data[i].temperature
		})
	}


		chart.render();

}

$.getJSON('/db', addData);

}
// function sleepBreakdown() {
// 		var chart = new CanvasJS.Chart("chartContainer2", {
// 			backgroundColor: "transparent",
//
// 	  axisY : {
// 		title : "Breakdown of total sleep %",
// 		titleFontSize : 15
// 	},
// 	  data: [{
// 		type: "stackedBar100",
// 		dataPoints: [
// 			{ x: new Date(2016, 1, 0), y: 40000 },
// 		]
// 	  },
// 	  {
// 		type: "stackedBar100",
// 		dataPoints: [
// 			{ x: new Date(2016, 1, 0), y: 30000 },
// 		]
// 	  },
// 	  {
// 		type: "stackedBar100",
// 		dataPoints: [
// 			{ x: new Date(2016, 1, 0), y: 20000 },
// 		]
// 	  }
// 	]
// 	});
//
//
// 	  chart.render();
// }
function trendsChart() {

	var chart = new CanvasJS.Chart("chartContainer3", {
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
			{ x: new Date(2016, 1, 1), y: 40000 },
			{ x: new Date(2016, 1, 1), y: 42000 },
			{ x: new Date(2016, 1, 2), y: 45000 },
			{ x: new Date(2016, 1, 3), y: 45000 },
			{ x: new Date(2016, 1, 4), y: 47000 },
			{ x: new Date(2016, 1, 5), y: 43000 },
			{ x: new Date(2016, 1, 6), y: 42000 },
			{ x: new Date(2016, 1, 7), y: 43000 },
		]
	  },
	  {
		type: "stackedColumn",
		legendText: "Light Sleep",
        showInLegend: "true",
		dataPoints: [
			{ x: new Date(2016, 1, 0), y: 30000 },
			{ x: new Date(2016, 1, 1), y: 32000 },
			{ x: new Date(2016, 1, 2), y: 35000 },
			{ x: new Date(2016, 1, 3), y: 35000 },
			{ x: new Date(2016, 1, 4), y: 37000 },
			{ x: new Date(2016, 1, 5), y: 33000 },
			{ x: new Date(2016, 1, 6), y: 32000 },
			{ x: new Date(2016, 1, 7), y: 33000 },
		]
	  },
	  {
		type: "stackedColumn",
		legendText: "Deep sleep",
        showInLegend: "true",
		dataPoints: [
			{ x: new Date(2016, 1, 0), y: 20000 },
			{ x: new Date(2016, 1, 1), y: 22000 },
			{ x: new Date(2016, 1, 2), y: 25000 },
			{ x: new Date(2016, 1, 3), y: 25000 },
			{ x: new Date(2016, 1, 4), y: 27000 },
			{ x: new Date(2016, 1, 5), y: 23000 },
			{ x: new Date(2016, 1, 6), y: 22000 },
			{ x: new Date(2016, 1, 7), y: 23000 },
		]
	  }
	]
	});


	  chart.render();
}
