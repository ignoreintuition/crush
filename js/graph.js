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