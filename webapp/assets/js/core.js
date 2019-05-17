document.write("<script type='text/javascript' src='./assets/js/component/falsepiechart.js' ><" + "/script>");

document.write("<script type='text/javascript' src='./assets/js/component/input.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/header-title.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/header-togglemenu.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/navigator-submenu.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/dropdownpicker.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/datepicker.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/periodpicker.js' ><" + "/script>");

document.write("<script type='text/javascript' src='./assets/js/component/chartutil.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/piechart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/radarchart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/linechart.js' ><" + "/script>");
<<<<<<< HEAD
document.write("<script type='text/javascript' src='./assets/js/component/bubblechart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/barchart.js' ><" + "/script>");

document.write("<script type='text/javascript' src='./assets/js/component/footer.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/button.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/cardlist.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/staticbutton.js' ><" + "/script>");

let chartData;

function component(){
	
	resizible();

	headerTitle()
	headerToggleMenu();
	navigatorSubmenu();
	inputFormat();
	dropdownPicker();
	periodPicker();
	datePicker();
	falsepiechart();
	cardlistSetting();
	footerSetting();
	staticBtnSetting($('#ds-ui-staticBtn'), $('#ds-ui-staticShowBtn'));
	/* 원형 차트 */
	/* 기본적인 형태는 갖춰졌지만 UI적인 수정이 필요함 */    
	$('.circle').each(function(){
		select = '.circle[id='+$(this).attr('id')+'] ';
		//chartData = $(select).data('set');
		console.log($(select).data('standard'));
		console.log($(select).data('calc'));
		console.log($(select).data('calc-detail'));
		pieChart(dataSet, select);
	})
	/* 방사형 차트 (radar chart) */
	$('.radar').each(function(){
		select = '.radar[id='+$(this).attr('id')+'] ';
		radarChart(dataSet, select);
	})
	/* 꺽은선 차트 (line chart) */
	/* 아직 이건 차트의 사이즈 설정이 완전하지 않음 */
	/* 또한 UI 적인 수정이 필요함 */
	$('.line').each(function(){
		select = '.line[id='+$(this).attr('id')+'] ';
		lineChart(lineDataSet, select);
	})
	$('.bubble').each(function(){
        select = '.bubble[id='+$(this).attr('id')+'] ';
        bubbleChart(dataSet1, select);
    })

    $('.bar').each(function(){
        select = '.bar[id='+$(this).attr('id')+'] ';
        barChart(barDataSet, select);
        console.log("1111111");
    })
=======

document.write("<script type='text/javascript' src='./assets/js/component/footer.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/button.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/cardlist.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/staticbutton.js' ><" + "/script>");

function component(){
	resizible();

	headerTitle()
	headerToggleMenu();
	navigatorSubmenu();
	inputFormat();
	dropdownPicker();
	periodPicker();
	datePicker();
	falsepiechart();
	cardlistSetting();
	footerSetting();
	staticBtnSetting($('#ds-ui-staticBtn'), $('#ds-ui-staticShowBtn'));
	/* 원형 차트 */
	/* 기본적인 형태는 갖춰졌지만 UI적인 수정이 필요함 */    
	$('.circle').each(function(){
		select = '.circle[id='+$(this).attr('id')+'] ';
		pieChart(dataSet, select);
	})
	/* 방사형 차트 (radar chart) */
	$('.radar').each(function(){
		select = '.radar[id='+$(this).attr('id')+'] ';
		radarChart(dataSet, select);
	})
	/* 꺽은선 차트 (line chart) */
	/* 아직 이건 차트의 사이즈 설정이 완전하지 않음 */
	/* 또한 UI 적인 수정이 필요함 */
	$('.line').each(function(){
		select = '.line[id='+$(this).attr('id')+'] ';
		lineChart(dataSet, select);
	})
>>>>>>> refs/remotes/origin/master
	basicButton();
}
const resizible = function () {
	const restartHeight = () => { $('.App').css('height', $(window).height() + 'px'); }
	const minHeight = function(){ $('.App').css('minHeight', $(window).height() + 'px'); }
	minHeight();
	restartHeight();
	$(window).resize(function () {
		restartHeight();

	});

}
