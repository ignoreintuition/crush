// renderGraph uses D3 to create a simple bar graph for the dataset B 
function renderBarGraph (B, id, attr, metric, scale, cfg){
	d3.select(id).selectAll("*").remove();

	var x = d3.scaleLinear()
	.domain([0, d3.max(B)])
	.range([0, cfg.width]);
	
	var chart = d3.select(id)
	.attr("width", cfg.width)
	.attr("height", cfg.barHeight * B.length);

	var bar = chart.selectAll("g")
	.data(B)
	.enter().append("g")
	.attr("transform", function(d, i) {
		return "translate(0," + i * cfg.barHeight + ")";
	});

	bar.append("rect")
	.attr("width", function(d) { 
		return d[metric] / scale + 10;	
	}).attr("height", cfg.barHeight - 1);

	bar.append("text")
	.attr("x", function(d) {
		return d[metric] / scale; 
	})
	.attr("y", cfg.barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d) {
		return d[attr] + ": " + d[metric];
	})
};

function renderDonut(B, id, attr, metric, scale, cfg){
	d3.select(id).selectAll("*").remove();

	var chart = d3.select(id)
	.attr("width", 400)
	.attr("height", 400);
	radius = 200;

	var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	var pie = d3.pie()
	.sort(null)
	.value(function(d) { return d[metric]; });

	var path = d3.arc()
	.outerRadius(radius - 10)
	.innerRadius(0);

	var label = d3.arc()
	.outerRadius(radius - 40)
	.innerRadius(radius - 40);

	var arc = chart.selectAll("g")
	.data(pie(B))
	.enter().append("g")
	.attr("class", "arc")
	.attr("transform", "translate(" + 200 + "," + 200 + ")");

	arc.append("path")
	.attr("d", path)
	.attr("fill", function(d) { return color(d.data[metric]); });

	arc.append("text")
	.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
	.attr("dy", "0.35em")
	.text(function(d) { return d.data[attr]; });
};