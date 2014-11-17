function processingData(photoTimesNum, oneTimesPhotoNum){
	$.post("/", {turns: photoTimesNum, onesNum: oneTimesPhotoNum}, function(data){
		var obj = eval('(' + data + ')');
		var data2html = '';
		for(var i in obj.data){
			data2html += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><div class="box"><a href="/m/';
			data2html += obj.data[i][0];
			data2html += '"><img class="img-responsive" alt="test" src="';
			data2html += obj.data[i][1];
			data2html += '" /></a><div class="meta"><a href="javascript:;"><small>';
			data2html += obj.data[i][2];
			data2html += '</small></a><small>&nbsp;发布于&nbsp;</small><a href="javascript:;"><small>';
			data2html += obj.data[i][3];
			data2html += '</small></a></div></div></div>';
		}
		$("#photoContainer").append(data2html);
	});
}


$(document).ready(function(){
    var photoTimesNum = 0;
	var oneTimesPhotoNum = 6;
	var winHeight = $(window).height();
	processingData(photoTimesNum, oneTimesPhotoNum);
	photoTimesNum++;
	alert($(window).height());
	
    $(window).scroll(function(){
		if(($(window).scrollTop() + $(window).height()) == $(document).height()){
			processingData(photoTimesNum, oneTimesPhotoNum);
			photoTimesNum++;
		}
    });  
})