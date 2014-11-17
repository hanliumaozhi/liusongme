$(document).ready(function(){
	$.post("/show_mc_user_online_time", {type:1}, function(data){
		update_str = '<tr><td class="col-md-2 text-center">账号</td><td class="col-md-2 text-center">已兑换时间(分钟)</td><td class="col-md-2 text-center">未兑换时间(分钟)</td></tr>';
		var obj = eval('(' + data + ')');
		console.log(obj.data.length);
		for(i = 0; i != obj.data.length; ++i){
			update_str += '<tr>';
			update_str += '<td class="col-md-2 text-center">' + obj.data[i][0] + '</td>';
			update_str += '<td class="col-md-2 text-center">' + obj.data[i][1] + '</td>';
			update_str += '<td class="col-md-2 text-center">' + obj.data[i][2] + '</td>' ;
			update_str += '</tr>';
		}
		$("#myTable").empty();
		$("#myTable").append(update_str);
	});
});