const toggleButton = () => {
	if($('.toggle').length == 0) return ;

	let $toggle = $('.toggle');
	$.each($toggle, (index, item) => {
		$(item).append("<div class='toggle__rail'>")
		.children().append("<div class='toggle__ball'></div>")
		.append("<span>ON</span>")
		.append("<span class='toggle__off'>OFF</span>");

		if($(item).data('dsOn') != undefined && $(item).data('dsOn').trim() != '' && $(item).data('dsOn').length <= 3) {
			$(item).find('span')[0].innerText = $(item).data('dsOn');
		}
		if($(item).data('dsOff') != undefined &&  $(item).data('dsOff').trim() != '' && $(item).data('dsOff').length <= 3) {
			$(item).find('span')[1].innerText = $(item).data('dsOff');
		}
		$(item).unbind('click').bind('click', (e)=>{
			if($(item).hasClass('toggle--active')) {
				$(item).removeClass('toggle--active');
				$($(item).find('span')[0]).attr('style', 'color:rgba(0, 0, 0, 0.01)');
			}
			else {
				$(item).addClass('toggle--active');
				$($(item).find('span')[0]).removeAttr('style');
			}
		});
	});
}