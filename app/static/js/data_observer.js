$(document).ready(function(){
	$.post("/data_observer", {type:1}, function(data){
		var obj = eval('(' + data + ')');
		$("#myTable").empty();
		lc = new LineChart({
			parent: '#myTable',
			x_scale: d3.time.scale()
		});
		lc.for([obj]).plot();
	});
});