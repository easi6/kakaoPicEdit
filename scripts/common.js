function callApi(req_type, path,data, cb)
{
	$.ajax({
	  type: req_type,
	  url: 'http://192.168.0.12:3000' + "/" + path,
	  dataType: 'json',
	  data:data,
	  success: cb
	});
}