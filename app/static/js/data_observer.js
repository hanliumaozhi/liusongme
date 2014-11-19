$(document).ready(function(){
	$.post("/data_observer", {type:1}, function(data){
		console.log('xx');
		var obj = eval('(' + data + ')');
		var update_str = '<tr><td class="col-md-6 text-center">图例</td></tr><tr><th class="col-md-6 text-center"><div id="myGraph"></div></th></tr>';
		console.log(obj);
		$("#myTable").empty();
		$("#myTable").append(update_str);
		lc = new LineChart({
			parent: '#myGraph',
			x_parse: d3.time.format("%d/%m/%Y").parse,
			x_scale: d3.time.scale()
		});
		lc.for([obj]).plot();
	});
});