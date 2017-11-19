var final = [];
var result;
var index;
var newIndex;
var formData = new FormData(); // Currently empty

function formatBytes(bytes,decimals) {
   if(bytes == 0) return '0 Bytes';
   var k = 1024,
   dm = decimals || 2,
   sizes = ['Bytes', 'KB', 'MB'],
   i = Math.floor(Math.log(bytes) / Math.log(k));
   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function loadfiles() {      
	$('#rm').hide()
	var checkboxes = document.getElementById('chkall')
	selectall(this)
	checkboxes.checked = false                            
	$("thead").height("10px");
	var imageFiles = document.getElementById("fileupload"),
	filesLength = imageFiles.files.length;
	for (var i = 0; i < filesLength; i++) {
		var fs = imageFiles.files[i].size;
		var ftype = imageFiles.files[i].type
		var newFinal = []
		var count;
		final.push(imageFiles.files[i])
		for(var x=0;x<final.length;x++){
		  if(final[x] != ""){
			newFinal.push(final[x])
			}
		}                        
		index = 0
		index = final.length 
		newIndex = newFinal.length
	   
	}
	var fi = document.getElementById('fileupload');
	if (fi.files.length > 0) {
		for (var i = 0; i <= fi.files.length - 1; i++) {
			$('.error-section').empty()
			var fsize = fi.files.item(i).size;
			var filetype = fi.files.item(i).type 
					$('#no-attachment').hide()
					$('.attachment-list table tbody').append('<tr><td><label style="padding-top:0px;margin-top:-5px;" ><input type="checkbox" class="check" id= '+index+' name="ch"></label></td><td>'+fi.files.item(i).name+'</td><td>'+formatBytes(fsize)+'</td><td><a class="blue-color fa button-close"  id= '+index+' +" " onclick="removeFiles()">Remove</a></td> '); 
		}
	}
}

function removeFiles() {
	$('.error-section').empty()
	$(document).on("click", '.attachment-list table tbody tr .button-close', function(e) {
		e.preventDefault();
		var id = (e.target.id);
		final[id-1] = ""
		function isempty(x){
		if(x!==""){
			  return true;
			}
		}
		result = final.filter(isempty);
		if(result.length==0){
			$('#no-attachment').show()
			$('#rm').hide()
			$('#err').remove()
			var checkboxes = document.getElementById('chkall')
			checkboxes.checked = false;

		}
		if(result.length>0 && result.length <5){
			$('.attachment-section').show()
		}
	});
  
	
	$(document).on("click", '.attachment-list table tbody tr .button-close', function(e) {
		e.preventDefault();
		$(this).closest('tr').remove();
	});

	var x = document.getElementsByName("ch");
	var i;
	for (i = 0; i < x.length; i++) {
	  if (x[i].type == "checkbox") {
			if(x[i].checked == true){
			// $('#rm').show()
				continue;
			}
			else {
				$('#rm').hide()
				break;
			}
		}
	}
}


function removeMultipleFiles() {
  $('.error-section').empty()
	var checkboxes = document.getElementById('chkall')
	if(checkboxes.checked == true){
		final = []
		$('tbody tr td').remove();
		$('#no-attachment').show()
		$('.error-section').empty()
		$('#rm').hide()
		checkboxes.checked = false
	}
	else{
		var z=[];
		var newI=[]
		var x = document.getElementsByName("ch");
		var i;
		for (i = 0; i < x.length; i++) {
			if (x[i].type == "checkbox") {
				if(x[i].checked == true){
					var id = x[i].id
					final[id-1] = ""
					function isempty(x){
						if(x!==""){
						  return true;
						}
					}
					result = final.filter(isempty);
					if(result.length==0){
						$('#no-attachment').show()
					}
					if(result.length==0){
						$('#no-attachment').show()
					}
					if(result.length>0 && result.length <5){
						$('.attachment-section').show()
					}
					z.push(x[i])
					continue;
				}
				else{
					continue;
				}
			}
		}
	
		for(var t=0;t<z.length;t++){
			$(z[t].offsetParent).closest('tr').remove();
		}
		$('#rm').hide()
	}
}   



function selectall(checkboxElem) {
	$('.error-section').empty()
	var checkboxes = document.getElementsByName('ch');
	$('#rm').hide()
	if (checkboxElem.checked == true) {
		if(checkboxes.length == 0){
			$('#rm').hide()
		}
		else{
			$("#rm").show()
			for(var i=0, n=checkboxes.length;i<n;i++) {
				checkboxes[i].checked = checkboxElem.checked;
			}
		}

	}

	else {
		$('#rm').hide()
		for(var i=0, n=checkboxes.length;i<n;i++) {
			checkboxes[i].checked = checkboxElem.checked
		}
	}
}



$(document).on('change', '.check', function() {
	var counter = 0;
	var mainChk = document.getElementById('chkall');
	var x = document.getElementsByName("ch");
	var i;
	for(i=0;i<x.length;i++){
		if(x[i].checked == true){
			counter++
		}
	}
	if(counter<x.length){
		mainChk.checked = false
	}
	if(counter == x.length){
		mainChk.checked = true
	}
	for (i = 0; i < x.length; i++) {
		if (x[i].type == "checkbox") {
			if(x[i].checked == true){
				// $('#rm').hide()
				$("#rm").show()
				break;
			}
			if(x[i].checked == false){
				$('#rm').hide()
			}
		}
	}
});