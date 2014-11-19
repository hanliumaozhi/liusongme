$(document).ready(function(){
	$.post("/data_observer", {type:1}, function(data){
		var obj = eval('(' + data + ')');
		var update_str = '<tr><td class="col-md-6 text-center">图例</td></tr><tr><th class="col-md-6 text-center"><div id="myGraph"></div></th></tr>';
		console.log(obj);
		$("#myTable").empty();
		lc = new LineChart({
			parent: '#myGraph',
			x_scale: d3.time.scale()
		});
		lc.for([obj]).plot();
	});
});