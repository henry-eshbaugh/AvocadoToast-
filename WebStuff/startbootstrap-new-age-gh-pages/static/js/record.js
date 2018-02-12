var JSONPoints = [];
$.getJSON("/json", function(data) {  
    $.each(data, function(){
        JSONPoints.push(data);
    });
}); 

console.log(JSONPoints);

   
var record2 = {
	//stored data
	recordData	: JSON.parse(JSONPoints),
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
