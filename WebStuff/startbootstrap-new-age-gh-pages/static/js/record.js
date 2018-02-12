
// var JSONPoints = [];
//
// $.getJSON("/json.json", function(data) {
//     $.each(data, function(){
//       console.log(data);
//       JSONPoints.push(data);
//     });
// });

//
var record = {
	//stored data
	recordData	: [],
	//function methods
	classifData	: function() { //return recordData classified into Light, Deep and REM
				var newList = [];
				for (i = 0; i < this.recordData.length; i++){
						if (this.recordData[i].y < 4){
							newList.push({x: this.recordData[i].x, y: 3});
						}
						else if (this.recordData[i].y >= 3 && this.recordData[i].y < 5){
							newList.push({x: this.recordData[i].x, y: 4});
						}
						else if (this.recordData[i].y >=5){
							newList.push({x: this.recordData[i].x, y: 5});
						}
				}
				return newList;

	},
	totLight	: function() { //return total light sleep
	},
	totDeep		: function() { //return total deep sleep
	},
	totSleep	: function() { //return sum of light, deep, REM sleep
	}

}

function UpdateJSON(){
  // $.getJSON("/db", function(data) {
	data = [	{'x': 1, 'y': 5.38108801203645}, //for testing scope
						{'x': 2, 'y': 5.13617061162582},
						{'x': 3, 'y': 5.09662662304338},
						{'x': 4, 'y': 5.30516164157148},
						{'x': 5, 'y': 5.8238836498647},
						{'x': 6, 'y': 5.627252866033},
						{'x': 7, 'y': 5.2059327641563},
						{'x': 8, 'y': 5.98018545803758},
						{'x': 9, 'y': 5.43777428013329},
						{'x': 10, 'y': 5.83519577423989},
						{'x': 11, 'y': 5.53918044796104},
						{'x': 12, 'y': 5.02512693318836},
						{'x': 13, 'y': 5.00682427912703},
						{'x': 14, 'y': 5.78608623851813}];
      for(i=0; i<data.length; i++){
        console.log(data.length);
        console.log(record.recordData);
      // record.recordData.push({x: data[i].accelData.norm.x, y: data[i].time.y}); //change to new json format
			record.recordData.push({x: data[i].x, y: data[i].y}); //change to new json format

    // }
    console.log("JSON updated");
    console.log(record.recordData);
	}
	// });
    //Potential time issues

}
