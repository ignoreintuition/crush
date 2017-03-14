// main.js
// created by Brian Greig
// Last updated 2/9/2017

d3.queue()
.defer(d3.json, "data/age.json")
.defer(d3.json, "data/generation.json")
.await(function(error, data, data2) {
	if (error) {
		console.error('Error loading json: ' + error);
	}
	else {
		var cfg = {
			"width": 1024,
			"barHeight": 20
		};
		// join values using a range
		var mappedObj = data.map(function(obj){
			var title = "";
			data2.forEach(function(e){
				if ( obj.age >= e.min && obj.age <= e.max){
					title = e.title
				}
			})
			return {"generation": title
				, "total": obj.total
				, "males": obj.males
				, "females": obj.females 
			};
		});
		var ds2 = groupBy(mappedObj, "generation", ["total", "males", "females"]);
		$( "#gender" ).change(function() {
			ds2 = orderBy(ds2, ($( this ).val()), 'asc');
			renderDonut( ds2
				, ".chart"
				, "generation"
				, ($( this ).val())
				, 100000
				, cfg
			);
		});		
	}
});
