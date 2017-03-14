data

data2

data.filter(function(a, b, c){console.log(a)});

data.filter(function(a, b, c){return a.age <= 10}, []);

data.reduce(function(a, b, c, d){console.log(b.age)})

data.reduce(function(a, b, c, d){console.log(b.males)})

data.reduce(function(a, b, c, d){return a+b.males}, 0)

data.reduce(function(a, b, c, d){return a+b.females}, 0)

data.reduce(function(a, b){    
	a.count++;    
	if (b.age > 50) { 
		a.over50 += b.males;     
	}    
	if (b.age <= 50) {
		a.under50 += b.males;     
	} 
	return a; 
}, 
{ 	"count": 0,
"under50": 0, 
"over50": 0
}
)
 

[1,2,3,4,5,6,7,8,9,10].map(
	function(a){if (a<5) {
		return 'Less Than 5'} 
		else {
			return 'Greater than 5'
		}
	});

data.map(function(a){
	if (a.age > 50){return {"age": "over50", "males": a.males}}
	else {return {"age": "under50", "males": a.males}};
})

data.map(function(a){
	if (a.age > 50){return {"age": "over50", "males": a.males}}
	else {return {"age": "under50", "males": a.males}};
}).filter(function(a){
	return a.age === "over50";
}).reduce(function(a, b){
	return a = a + b.males;
}, 0)

data2 = data.map(function(a){
	if (a.age > 50){return {"age": "over50", "males": a.males}}
	else {return {"age": "under50", "males": a.males}};
})

d3.nest()
.key(function(d){return d.age})
.rollup(function(v){return d3.sum(v, function(d) {return d.males;})})
.entries(data2);
