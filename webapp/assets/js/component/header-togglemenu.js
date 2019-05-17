/* ToggleMenu */
let togglemenu = $('#ds-ui-menu').find('div').get();
const headerToggleMenu = function(){
	if($("#ds-ui-menu").length != 0){
		$('#ds-ui-menu').empty();
		let menuhtml = "<div id='menu-icon-table'>"
			+ "<i class='fas fa-bars menu-icon'></i>"
			+ "</div>" + "<div class='ds-ui-toggleMenu hide'>"
			+ "</div>";

		$('#ds-ui-menu').append(menuhtml);
		let toggleMenuTitle = "<div class='ds-ui-toggleMenuTitle-table'>"
			+ "<div class='ds-ui-toggleMenuTitle'>"
			+ togglemenu[0].textContent + "</div>" + "</div>"
			$('.ds-ui-toggleMenu').append(toggleMenuTitle);

		for (let i = 1; i < togglemenu.length; i++) {
			let toggleMenuItem = "<div class='ds-ui-toggleMenuItem-table'>"
				+ "<a class='ds-ui-toggleMenuItem' href=''>"
				+ togglemenu[i].textContent + "</a>" + "</div>"
				$('.ds-ui-toggleMenu').append(toggleMenuItem);
		}
	}
}