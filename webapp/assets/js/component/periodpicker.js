function periodPicker(){
	$('.periodpicker')
		.append('<input type="text" id="fromDate" data-ds-language="en">')
		.append('<div><label>&nbsp;~&nbsp;</label></div>')
		.append('<input type="text" id="toDate">')
		.append('<button class="search-button"><i class="fa fa-search"></i></button>');
}