const basicButton = function(){
	$('.ds-ui-basicButton').each(function(){
		let basictext = $(this).text();
		
		$(this).empty();
		$(this).append("<button class='basicBtn'>"+basictext+"</button>")
	})
	$('.fileupload').each(function(){
		$(this).empty();
		$(this).append("<input class='upload-name' value='이미지선택' disabled='disabled'>"+
				"<div>" +
				"<label for='ds-ui-filename'><i class='fas fa-camera button'></i></label>"+
				"</div>" +
		"<input type='file' id='ds-ui-filename' class='upload-hidden' accept='image/*'>");
	})
}