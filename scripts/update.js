$(function () {
	var imgOrgPath;
  $('#btnConfirm').hide();
  $('#fileupload').fileupload({
      dataType: 'json',
      done: function (e, data) {
      	$('#uploadImage').attr('src','http://192.168.0.12:3000' + data.result.path);
      	imgOrgPath = data.result.path
      	$("#pnlChkBox").show("slow");
      	$('#btnFileSelect').hide();
      	$('#btnConfirm').show();
      },
      processfail: function (e, data) {
	      alert('error');
	    }
  });
  function makeData()
  {
  	 var dataString = new Object();
	   dataString.original_path = imgOrgPath;
	   if($("#name").is(":checked"))
	   	dataString.name = "1";
	   if($("#title").is(":checked"))
	   	dataString.title = "1";
	   if($("#picture").is(":checked"))
	   	dataString.picture = "1";
	   return dataString;
  }
  $("#name").bootstrapSwitch();
  $("#picture").bootstrapSwitch();
  $("#title").bootstrapSwitch(); 
  
  $("#title").on('switchChange.bootstrapSwitch', function(event, state) {
  	$.ajax({
			type: 'post',
			url: 'http://192.168.0.12:3000/upload',
			data: makeData(),
			success: function(data){
				$('#uploadImage').attr('src','http://192.168.0.12:3000' + data.path);
				console.dir(data);
			}
		});
	});
});