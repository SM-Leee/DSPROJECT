var path = window.location.pathname;
document.write("<script type='text/javascript' src='"+path+"/../assets/js/core.js' ><" + "/script>");

$(document).ready(function(){
	$('body').removeClass('body');
	component();

})
