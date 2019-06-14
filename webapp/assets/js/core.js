/*document.open();*/
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/falsepiechart.js' ><" + "/script>");

document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/input.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/header-title.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/header-togglemenu.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/navigator-submenu.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/dropdownpicker.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/datepicker.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/periodpicker.js' ><" + "/script>");

document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/chartutil.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/piechart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/radarchart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/linechart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/bubblechart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/barchart.js' ><" + "/script>");

document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/footer.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/button.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/cardlist.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/staticbutton.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/statusview.js' ><" + "/script>");

document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/dataTable.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/accordion.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/checkbox.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/radiobutton.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/rangeslider.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/msgbox.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/toggle-button.js' ><" + "/script>");
document.write("<script type='text/javascript' src='"+window.location.pathname+"/../../assets/js/component/imgview.js' ><" + "/script>");

/*docuemnt.close();*/
function component(){
	resizible();
	headerTitle()
	headerToggleMenu();
	navigatorSubmenu();
	dataTable();
	inputFormat();
	dropdownPicker();
	datePicker();
	periodPicker();
	falsepiechart();
	cardlistSetting();
	footerSetting();
	staticBtnSetting();
	
	toggleButton(); 
	messageBox();
	/* 원형 차트 */
	/* 기본적인 형태는 갖춰졌지만 UI적인 수정이 필요함 */
	$('.circle').each(function(){
		select = '.circle[id='+$(this).attr('id')+'] ';
		pieChart(chartDataBinding('circle', ''), select);
	})
	/* 방사형 차트 (radar chart) */
	$('.radar').each(function(){
		select = '.radar[id='+$(this).attr('id')+'] ';
		formItems(chartDataBinding('radar', ''), select);
	})
	/* 꺽은선 차트 (line chart) */
	/* 아직 이건 차트의 사이즈 설정이 완전하지 않음 */
	/* 또한 UI 적인 수정이 필요함 */
	/*$('.bubble').each(function(){
		select = '.bubble[id='+$(this).attr('id')+'] ';
		bubbleChart(dataSet1, select);
	})*/
	$('.bar').each(function(){
		select = '.bar[id='+$(this).attr('id')+'] ';
		barChart(chartDataBinding('bar', ''), select);
	})
	$('.line').each(function(){
		select = '.line[id='+$(this).attr('id')+'] ';
		//년도별
		//let btnClickDataset = ['A', 'plus', '년도별', '2016', '2019'];
		//분기별
		//let btnClickDataset = ['A', 'plus', '분기별', '2018'];
		//월별
		//let btnClickDataset = ['A', 'plus', '월별', '2018'];
		lineChart(chartDataBinding('line',''), select, '');
	})
	basicButton();
	checkbox();
	radiobutton();
	rangeSlider();
	accordion();
}
const resizible = function () {
	const restartHeight = function() { $('.App').css('height', $(window).height() + 'px'); }
	const minHeight = function(){ $('.App').css('minHeight', $(window).height() + 'px'); }
	minHeight();
	restartHeight();
	$(window).resize(function () {
		restartHeight();

	});

}
