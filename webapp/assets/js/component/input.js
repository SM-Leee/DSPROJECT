/*input format*/
const inputFormat = function(){
	if($(".ds-ui-input").length !=0){
		//$('.ds-ui-input label').wrap('<div></div>');
		let no = getParameterByName('no');
		if(no == ''){
			no = 1;
		}

		//let no = getParameterByName('no');
		$('.ds-ui-input').each(function() {


			let inputText = "<input/>";
			$(this).append(inputText);
			if ($(this).data('ds-rows') == 2) {
				$(this).addClass('rowlong');
			}
			if($(this).data('ds-rows') > 2){
				console.error("rows의 최고값은 2 입니다.");
				$(this).remove();
			}
			if ($(this).data('ds-column') == 2) {
				$(this).find('input').remove();
				let columnlong = "<textarea></textarea>";
				$(this).append(columnlong);

				$(this).addClass('columnlong');
				if($(this).data('ds-label') == undefined){
					$(this).children().css({'height': '95%'});
				}
			}
			if($(this).data('ds-label') == undefined && !($(this).hasClass('kwdnumber'))){
				$(this).find('input').css('width', '97%');
			} else if($(this).data('ds-label') == undefined && $(this).hasClass('kwdnumber')){
				$(this).find('input').css('width', '87%');
			} else {
				$(this).prepend('<div>'+
						'<label>'+$(this).data('ds-label')+'</label>' +
				'</div>');				
			}


			let statusData = eval($(this).data('ds-binding'));

			let newArr;
			no = no*1;
			if(statusData != undefined){
				$.each(statusData, function(){
					newArr = statusData.filter(function (item) {
						return item.no === no;
					})
				})
				let dataform = newArr[0][$(this).data('ds-form')];
				console.log(dataform)
				if($(this).find('textarea').length >0){
					$(this).find('textarea').val(dataform);								
				}
				if($(this).find('input').length >0){
					if($(this).hasClass('kwdnumber')){
						$(this).find('input').val(dataform);

						$(this).find('input').val(function(index, value) {
							return value
							.replace(/\D/g, "")
							.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
						})
					} else {
						$(this).find('input').val(dataform);							
					}
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