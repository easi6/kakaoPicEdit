$(function () {
	getImageList('GET','','',function(data) {
		//list 표
		alert('test');
	});
	
	$("#addInput").click(function () {
           window.location.href = 'upload.html';
  });
});