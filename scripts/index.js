$(function () {
	callApi('GET','','',function(data) {
	});
	$("#addInput").click(function () {
           window.location.href = 'upload.html';
  });
});