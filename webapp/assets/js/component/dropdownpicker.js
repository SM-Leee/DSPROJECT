/*dropdown*/
const dropdownPicker = function(){
	if($(".ds-ui-dropdown-picker").length != 0){
		$('.ds-ui-dropdown-picker').each(function(){
			let no = getParameterByName('no');
			$(this).wrap('<div class="ds-ui-dropdown-picker-box"></div>')
			if($(this).data('ds-label') == undefined){
				$(this).css('width', '98%')	
			} else {
				$(this).parent('div').prepend('<div>'+
						'<label>'+$(this).data('ds-label')+'</label>' +
				'</div>')
			}
			// data-binding됬을때
			let thiscomponent = $(this);
			let databinding = $(this).data('ds-binding');
			if(databinding != undefined){
				let value_field;
				let text_field;
				for(let i = 0; i<eval(databinding).length; i++){
					
					$.each(eval(databinding)[i], function(key,value){
						if(key == thiscomponent.data('ds-value-field')){
							value_field = value;
						}
						if(key == thiscomponent.data('ds-text-field')){
							text_field = value;
						}
					})
					$(this).append('<option value="'+value_field+'">'+text_field+'</option>')
				}
			}
			//no 값이 존재할때 data 넘기는것!
			if(no != ''){
				
			}

		})
	}
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}