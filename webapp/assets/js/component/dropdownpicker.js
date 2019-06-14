/*dropdown*/
const dropdownPicker = function(){
	if($(".ds-ui-dropdown-picker").length != 0){
		$('.ds-ui-dropdown-picker').each(function(){
			let no = getParameterByName('no');
			if(no == ''){
				no = 1;
			}
			$(this).wrap('<div class="ds-ui-dropdown-picker-box"></div>')
			if($(this).data('ds-rows') == 2){
				$(this).parent().addClass('rowlong');
				$(this).addClass('rowlong');
			}
			if($(this).data('ds-label') == undefined){
				$(this).css('width', '98%')	
			} else {
				$(this).parent('div').prepend('<div>'+
						'<label>'+$(this).data('ds-label')+'</label>' +
				'</div>')
			}
			// data-binding됬을때
			let thiscomponent = $(this);
			let databinding = $(this).data('ds-item-binding');
			if(databinding != undefined){
				let value_field;
				let text_field;
				try{
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
				} catch(error) {
					console.error('ds-item-binding : Json Object dose not exist.');
				}
			}
			try{
				statusData = eval($(this).data('ds-binding'));
			}catch(error) {
				statusData=undefined;
				console.error('Json Object dose not exist.');
			}
			
			no = no*1;
			let newArr;
			if(statusData != undefined){
				$.each(statusData, function(){
					newArr = statusData.filter(function (item) {
						return item.no === no;
					})
				})
				let dataform = newArr[0][$(this).data('ds-value-field')];
				console.log(dataform)
				if($(this).length > 0){
					$(this).val(dataform)
				}
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