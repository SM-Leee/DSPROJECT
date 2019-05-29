var path = window.location.pathname;
/*document.open();*/
document.write("<script type='text/javascript' src='"+path+"/../assets/js/core.js' ><" + "/script>");
/*document.close();*/
$(document).ready(function(){
	$('body').removeClass('body');
	component();

})
