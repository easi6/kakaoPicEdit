$(function () {
	getImageList('GET','',function(data) {
		//list 표시
	});
	function getImageList(req_type, data, cb)
	{
		$.ajax({
		  type: req_type,
		  url: 'http://192.168.0.12:3000',
		  dataType: 'json',
		  data:data,
		  success: cb
		});
	}
	$("#addInput").click(function () {
           window.location.href = 'upload.html';
  });
});