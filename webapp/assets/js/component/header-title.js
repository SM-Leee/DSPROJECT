/*header title*/
const headerTitle = function(){
	if($("#ds-ui-title").length != 0){
		let titlehtml = "<span>"+$("#ds-ui-title").html()+"</span>"
		$("#ds-ui-title").empty();
		$("#ds-ui-title").append(titlehtml);
	}
}