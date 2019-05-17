/*input format*/
const inputFormat = function(){
	if($(".ds-ui-input").length !=0){
		$('.ds-ui-input label').wrap('<div></div>');
		$('.ds-ui-input').each(function() {
			let inputText = "<input/>";
			$(this).append(inputText);
			if ($(this).data('rows') == 2) {
				$(this).addClass('rowlong');
			}
			if($(this).data('rows') > 2){
				console.error("rows의 최고값은 2 입니다.");
				$(this).remove();
			}
			if ($(this).data('column') == 2) {
				$(this).find('input').remove();
				let columnlong = "<textarea></textarea>";
				$(this).append(columnlong);

				$(this).addClass('columnlong');
			}

		})
	}
}