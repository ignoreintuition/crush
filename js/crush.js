// helper function to get all unique values of attr from a dataset data
function getUniqueValues (data, attr){
	var arr = [];
	for (i = 0; i < data.length; i++){
		if (arr.indexOf(data[i][attr]) === -1) {
			arr.push(data[i][attr]);
		}
	}
	return arr;
}

// groupBy function will aggregate our dataset data by attribute attr
// and create a summation of metric0 and metric1 as well as an default count
function groupBy (data, attr, metric){
	var dataset = [];
	var arr = getUniqueValues(data, attr);

	// for loop will access every unique attribute (from our getUniqueValues function) for aggregation.
	for (j = 0; j < arr.length; j++){
		var currObj = data.filter(function(a) {
			return a[attr] === arr[j]; 
		}, []);

		// create an initial array value to be passed into our reduce function
		var initArr = {"count": 0};		
		initArr[attr] = arr[j];
		
		if (metric) {
			for (k=0; k< metric.length; k++){
				metric[k] ? initArr[metric[k]] = 0 : null;
			}
		}
		// reduce function will aggregate each metric if the value is is true 
		var reducedObj = currObj.reduce(function(a, b){
			a.count++;
			if (metric) {
				for (k=0; k< metric.length; k++){
					if (metric[k]) { 
						a[metric[k]] += b[metric[k]]; 
					}
				}
			}
			return a;
		}, initArr)

		// push the reduced object into an array dataset
		dataset.push(reducedObj);
	}
	// return the final array of values. 
	return dataset;
}