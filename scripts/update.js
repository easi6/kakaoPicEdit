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
  	
  }
  $("#name").bootstrapSwitch();
  $("#picture").bootstrapSwitch();
  $("#title").bootstrapSwitch(); 
  
  $("#title").on('switchChange.bootstrapSwitch', function(event, state) {
  	$.ajax({
			type: 'post',
			url: 'http://192.168.0.12:3000/upload',
			data: {
				'original_path': imgOrgPath,
				'title': "1"
			},
			success: function(data){
				$('#uploadImage').attr('src','http://192.168.0.12:3000' + data.path);
				console.dir(data);
			}
		});
	});
});