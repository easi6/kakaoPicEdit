$(function () {
	var imgOrgPath;
	var currentPath;
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
  function makeCheckBoxData()
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
  $("#name").bootstrapSwitch('state', false, false);
  $("#picture").bootstrapSwitch('state', false, false);
  $("#title").bootstrapSwitch('state', false, false);

  $("#name").on('switchChange.bootstrapSwitch', function(event, state) {
  	callApi('post','upload',makeCheckBoxData(),function(data){
			$('#uploadImage').attr('src','http://192.168.0.12:3000' + data.path);
			currentPath = data.path;
			console.dir(data);
		});
	});
	$("#picture").on('switchChange.bootstrapSwitch', function(event, state) {
  	callApi('post','upload',makeCheckBoxData(),function(data){
			$('#uploadImage').attr('src','http://192.168.0.12:3000' + data.path);
			currentPath = data.path;
			console.dir(data);
		});
	});
  $("#title").on('switchChange.bootstrapSwitch', function(event, state) {
  	callApi('post','upload',makeCheckBoxData(),function(data){
			$('#uploadImage').attr('src','http://192.168.0.12:3000' + data.path);
			currentPath = data.path;
			console.dir(data);
		});
	});
	$('#btnConfirm').on('click', function(event) {
		var parameter = new Object();
		parameter.path = currentPath;
  	callApi('post','confirm',parameter,function(data){
			$('#uploadImage').attr('src','http://192.168.0.12:3000' + data.path);
			console.dir(data);
			$('#successModalDialog').modal('show');
		});
  });
  $('#successModalDialog').on('hidden.bs.modal', function (e) {
  	parent.history.back();
	})
	$('#btnBack').on('click', function(event) {
    back();
  })
});