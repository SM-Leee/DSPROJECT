let size = window.screen.availWidth;
let heightSize = window.screen.availHeight;
let setLocate = 0;
var togglemenu_visible = [ false ];
var togglemenu_visibility = "hide";
const defaultIcon = [{
	krw: "<i class='fas fa-won-sign'></i></span>",
	dollor: "<i class='fas fa-dollar-sign'></i>",
	status: "<i class='statusViewBtn fas fa-search'></i>",
	modify: "<i class='modifyBtn fas fa-wrench'></i>",
	remove: "<i class='removeBtn fas fa-trash-alt'></i>"
}]
const lineDataSet = [
	{grade:"2013-1", data:"3.18"},
	{grade:"2013-2", data:"3.21"},
	{grade:"2016-1", data:"3.87"},
	{grade:"2016-2", data:"3.33"},
	{grade:"2017-1", data:"3.03"},
	{grade:"2017-2", data:"3.13"},
	{grade:"2018-1", data:"2.75"},
	{grade:"2018-2", data:"3.50"}
	]
$(document).ready(function () {	
	let pielinedata;
	if($(".circle").length!=0){
		pielinedata =chartDataBinding('circle');		
	}
	ToggleButton();
	DropdownPicker();
	inputBoxFormat();
	fileUploadButton();
	buttonClick();
	footerTouchSlider($('.ds-ui-footerBox'));
	staticBtnTouchMove($('#ds-ui-staticBtn'), $('#ds-ui-staticShowBtn'));
	pieChartClick();
	barClick($('.bar-showdata'), $('.bar-showValue'));
	SubtopicTouchSlider($('.ds-ui-subtopic-box'));
	modifyevent();
	legendPick();
	lineChartTileClick($('.line-title'));
});
const lineChartTileClick = (Target) => {
	let clickparent;
	$(Target).click(function () {
		clickparent = $(this).parent().parent();
		let chartFilterHtml =
			"<div class='filterBox'>" +
			"<div class='overlay'></div>"+
			"<div class='filterView'>" +
			"<div class='filter-content'>" +
			"</div>" +
			"<div class='filter'>" +
			"</div>" +
			"<div class='filter-submit'>" +
			"<div class='filterBtn'>Filter</div>"
			"</div>"
			"</div>" +
			"</div>"

			$('.App')
			.append(chartFilterHtml)


			//  기간
			let filterData = filterMapping($(this))

			filterData[0].push('기간')
			filterData[0].push('기간 정보')
			const dateFilter = ['월별', '분기별', '년도별']
		filterData.push(dateFilter)



		for (var i = 0; i < filterData[0].length; i++) {
			$('.filter-content').append(
					"<div class='filter-topic' data-filter='" + (i + 1) + "'>" +
					"<div class='filter-topic-name'>" + filterData[0][i] + "</div>" +
					"<div class='filter-topic-item'></div>" +
					"</div>"
			)
		}

		const filter_topic = $('.filter-topic');
		let no;

		let clickDate = [];

		$(filter_topic).click(function () {
			$(filter_topic[3]).off('click');
			// border 초기화
			$(filter_topic).css({
				'border': ''
			})
			$(this).css({
				'border': '1px solid blue'
			})
			no = $(this).data('filter');
			let filter_value = '';
			// 초기화
			$('.filter').empty();
			for (var i = 0; i < filterData[no].length; i++) {
				if (no == 3) {
					$('.filter').append(
							"<div class='date-item' data-date-filter='" + i + "'>" +
							filterData[no][i] +
							"</div>"
					)
				} else {
					$('.filter').append(
							"<div class='filter-item'>" +
							filterData[no][i] +
							"</div>"
					)
				}
			}
			let topic = ''
				const filter_item = $('.filter-item');
			$(filter_item).click(function () {
				if ($(filter_topic[(no - 1)]) != '') {
					topic = ($(filter_topic[(no - 1)]).children('.filter-topic-item').text(), 'text')
				}
				for (var i = 0; i < $(filter_item).length; i++) {
					if (topic == ($(filter_item[i]).text())) {
						console.log('####')
						$(filter_item[i]).css({'background' : 'green'})
					}
				}
				filter_value = $(this).text();
				$(filter_topic[(no - 1)]).children('.filter-topic-item').text(filter_value)
			})

			let dateFilterHtml =
				"<div class='dateBox'>" +
				"<div class='dateView'>" +
				"<div class='date-content'>" +
				"<div class='date-year'></div>" +
				"</div>" +
				"</div>" +
				"</div>"

				const date = new Date();
			//  detail Year
			const dateFilterDetail = (target, num) => {
				let date_set = (date.getFullYear() - num) == 0 ? 1 : (date.getFullYear() - num) + 1;
				for (var i = 0; i < date_set; i++) {
					$(target).append(
							"<div class='date-year-item'>" +
							(date.getFullYear() - i) +
							"</div>"
					)
				}
			}
			// basic
			const dateFilterBasic = (target) => {
				for (var i = 0; i < 20; i++) {
					$(target).append(
							"<div class='date-year-item'>" +
							(date.getFullYear() - i) +
							"</div>"
					)
				}
			}
			// 년도별, 해당년도에 해당하는 월별, 
			$('.date-item').click(function () {
				let date_no = $(this).data('date-filter');
				filter_value = $(this).text();
				$(filter_topic[2]).children('.filter-topic-item').text(filter_value)

				$('.App').append(dateFilterHtml)

				if (date_no == 2) {
					$('.date-content').css({
						"flex-direction": "row"
					})
					$('.date-content').append(
							"<div class='date-filter-detail'></div>"
					)
					dateFilterBasic($('.date-year'));

					const date_first = $('.date-year').children('.date-year-item');
					$(date_first).click(function () {
						$('.date-filter-detail').empty();
						clickDate[0] = $(this).text();
						dateFilterDetail($('.date-filter-detail'), clickDate[0]);
						const date_second = $('.date-filter-detail').children('.date-year-item');
						$(date_second).click(function () {
							clickDate[1] = $(this).text();
							if (clickDate[1] != null) {
								let date_result = clickDate[0] + ' ~ ' + clickDate[1];
								$(filter_topic[3]).children('.filter-topic-item').text(date_result)
								$('.dateBox').remove();
							}
						})
					})
				} else {
					$('.date-content').css({
						"flex-direction": "column"
					})
					dateFilterBasic($('.date-year'));
					$('.date-year-item').click(function () {
						let dateYear_value = $(this).text();
						$('.dateBox').remove();
						$(filter_topic[3]).children('.filter-topic-item').text(dateYear_value)
					})
				}
			})
		})
		const filter_item = $('.filter-topic-item')
		let filter_result = []
		$('.filterBtn').click(function () {

			for (var i = 0; i < filter_item.length; i++) {
				filter_result[i] = $(filter_item[i]).text();
				if (clickDate.length == 2) {
					filter_result[3] = clickDate[0]
					filter_result[4] = clickDate[1]
				}
			}
			let validdate = 0;
			for (var i = 0; i < filter_result.length; i++) {
				if (filter_result[i] == '') {
					validdate++;
					$(filter_topic[i]).css({
						'border': '1px solid red'
					})
				} else {}

			}
			if (validdate == 0) {
				$('.filterBox').remove();
			}
			select = '.line[id='+$(clickparent)[0].id+'] ';
			$(select+' .line-background').remove();
			lineChart(chartDataBinding('line',filter_result), select,filter_result);
		})
	})

}
const filterMapping = (target) => {

	target = target.parent().parent();
	let dataItem = eval(target.data('binding'));
	let filter_item = [];
	let filter_item_space = $(target).data('standard');
	filter_item.push(filter_item_space);
	filter_item_space = $(target).data('substandard');
	filter_item.push(filter_item_space);

	let dataAfter = []
	let dataResult = [];
	let colName = [];
	for (let i = 0; i < filter_item.length; i++) {
		let setData_filter = filter_item[i];
		let data;
		dataAfter = []
		for (var z = 0; z < tableOption.length; z++) {
			$.each(tableOption[z], function (key, value) {
				if (key == setData_filter) {
					colName[i] = value;
				}
			})
		}
		for (var j = 0; j < dataItem.length; j++) {
			$.each(dataItem[j], function (key, value) {
				if (key == setData_filter) {
					data = value;
					dataAfter.push(data);
				}
			})
		}
		dataResult.push(dataAfter);
	}


	let filter_set = [];
	let resultArr = [];

	resultArr.push(colName)

	for(var i = 0; i < dataResult.length; i ++){
		filter_set = [];
		$.each(dataResult[i], function (key, value) {
			if ($.inArray(value, filter_set) === -1) {
				filter_set.push(value);
			}
		});
		resultArr.push(filter_set)
	}
	return resultArr;
}
const legendPick = () => {
	const legendItems = $('.radarlegend')
	const radarShowData = $('.radar-showdata')
	const radarBackGround = $('.radar-background')
	$(legendItems).click(function () {
		let no = $(this).data('no');
		if ($(this).css('backgroundColor') === 'rgb(195, 195, 195)') {
			$(radarShowData[no]).css({
				'display': ''
			})
			$(radarBackGround[no]).css({
				'display': ''
			})
			$(this).css({
				'background': 'white'
			})
		} else {
			$(radarShowData[no]).css({
				'display': 'none'
			})
			$(radarBackGround[no]).css({
				'display': 'none'
			})
			$(this).css({
				'background': '#C3C3C3'
			})
		}
	})
}


const modifyevent = () => {
	const modifyBtn = $('.modifyBtn');
	$(modifyBtn).click(function(){

		location.href='documententry?no='+$(this).parent('div').data('no'); 
	})

}

//cardlistBinding
const cardlistDataBinding = () => {
//	data mapping, binding
	const cardlistUi = $('.ds-ui-cardlistAll');
	let cardlist_detail = [];
	let cardlistAfterWork = [];
	let data_cardlist_detail = [];
	cardlistData = $(cardlistUi).data('mapping');
	let col_num = $(cardlistUi).children('div');
	for (var i = 0; i < col_num.length; i++) {
		data_cardlist_detail[i] = $(col_num[i]).data('detail');
	}
	cardItem = eval(cardlistData)
	if (col_num.length == 1) {
		cardlist_detail[0] = data_cardlist_detail[0]
	} else {
		cardlist_detail = data_cardlist_detail.slice(' ');
	}
	$.each(cardItem, function (j) {
		var data = [];
		for (var i = 0; i < cardlist_detail.length; i++) {
			let search_detail = cardlist_detail[i]
			data[i] = this[search_detail];
		}
		cardlistAfterWork.push(data);
	})
	cardlistUi.empty()

	category = $(cardlistUi).data('category');
	if (category != null) {
		const category_obj = []
		$.each(cardItem, function (j) {
			data = this[category];
			category_obj.push(data);
		})
		$.each(cardItem, function (i) {
			let color_pick = category_obj[i]
			var newArr = color_option.filter(function (item) {
				return item.category === color_pick;
			});
			if (newArr.length === 0) {
				color = 'black'
			} else {
				color = newArr[0].color;
			}
			cardlistAfterWork[i].push(color);
		})
	} else {
		$.each(cardItem, function (i) {
			cardlistAfterWork[i].push('black')
		})
	}
//	no
	$.each(cardItem, function (i) {
		var data = [];
		data = (this['no'])
		cardlistAfterWork[i].push(data);
	})
	return cardlistAfterWork;
}
const iconLoad = (icons_result) => {
	// var icons = []
	// for (var i = 0; i < target.length; i++) {
	//    icons[i] = ($(target[i]).data('icon') == null) ? '' : ($(target[i]).data('icon'));
	// }
	for (var i = 0; i < icons_result.length; i++) {
		$.each(defaultIcon[0], function (key, value) {
			if (key == icons_result[i]) {
				icons_result[i] = value;
			}
		})
	}
	return icons_result;
}


//statusViewMapping
const statusViewMapping = (no) => {

	let statusData = eval(exampleData);
	let statusAfterWork = [];
	let newArr;
	$.each(statusData, function (i) {
		newArr = statusData.filter(function (item) {
			return item.no === no;
		})
	})

	const colName = []
	const newName = {}
	var keyname = ''
//		json key rename
		for (var i = 0; i < statusViewOption.length; i++) {
			$.each(statusViewOption[i], function (key, value) {
				if (key == 'col') {
					colName[i] = value;
				}
				for (var j = 0; j < statusViewOption.length; j++) {
					if (key == Object.keys(newArr[0])[j + 1]) {
						newName[keyname + value] = Object.values(newArr[0])[j + 1];
						// newName[keyname + 'col'] = colName[j]
					}
				}
			})
		}
	return [newName, colName];

}


const ToggleButton = function(){
	/* ToggleMenu */
	if($("#ds-ui-menu").length != 0){
		$('#ds-ui-menu').click(function() {
			togglemenu_visible.splice(0, 1, !togglemenu_visible[0]);
			$(".ds-ui-toggleMenu").toggleClass(togglemenu_visibility);
			if (togglemenu_visible[0]) {
				togglemenu_visibility = "show";
			} else {
				togglemenu_visibility = "hide";
			}
			$(".ds-ui-toggleMenu").toggleClass(togglemenu_visibility);

		});
	}
}
const DropdownPicker = function(){
	/* DropdownPicker */
	if($(".ds-ui-dropdown-picker").length != 0){
		$('.ds-ui-dropdown-picker').click(function(){
			$(this).toggleClass("show");
		})
	}
}
const inputBoxFormat = function(){
	/* InputBox */
	if($(".ds-ui-input").length!=0){
		$(".onlynumber input").keyup(function(event){
			reg = /[^0-9]/gi;
			v = $(this).val();

			if (reg.test(v)) {
				$(this).val(v.replace(reg, ''));
				$(this).focus();

			}
		})
		$(".kwdnumber input").keyup(function(event) {

			// format number
			$(this).val(function(index, value) {

				return value
				.replace(/\D/g, "")
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
				;
			});
		});
	}
}
const fileUploadButton = function(){
	/* fileuploadButton */
	var fileTarget = $('.ds-ui-basicButton .upload-hidden');

	fileTarget.on('change', function(){
		// 값이 변경되면
		var ext = $(this).val().split('.').pop().toLowerCase();
		if($.inArray(ext,['gif','png','jpg','jpeg']) == 1){
			if(window.FileReader){
				var filename = $(this)[0].files[0].name;
			}
			else{
				var filename = $(this).val().split('/').pop().split('\\').pop();
			}
		} else{
			$(this).val("");
		}
		// 추출한 파일명 삽입 
		$(this).siblings('.upload-name').val(filename);
	});
}

const buttonClick = function(){
	/*input data*/
	$('.basicBtn').click(function(){
		if(getParameterByName('no') != ''){
			location.href='byperiod';
		}

		/*datepicker data*/
		console.log($('.ds-ui-datepicker-box input').val());
		/*dropdown data*/
		console.log($('.dropdown-picker').val())
		$('.ds-ui-input input').each(function(){
			if($(this).closest("div").hasClass("kwdnumber")===true){
				/*input kwdnumber가 존재하는경우 , 삭제 된 상태*/
				console.log($(this).val().replace(/\D/g, ""));
			} else{
				/*input data*/
				console.log($(this).val());
			}
		});
		/*textarea data (Big input 창)*/
		console.log($('.ds-ui-input textarea').val());
	});
}
//piechart event
const pieChartClick = function(){
	if($(".pie").length!=0){
		$('.pie').click(function(){
			let sum = 0;
			let parentPie = $(this).parent('div').parent('div').parent('div').attr('id');
			let dataSetPie = $('#'+parentPie+' .pie');

			for(let i = 1; i < dataSetPie.length+1; i++){
				sum = sum + $('#'+parentPie+' .pie'+i).data('ds-value');
			}

			value = $(this).data('ds-value')/sum;
			let percent = Math.floor(value*100);
			$('#'+parentPie+' .circle-title').text($(this).data('ds-circletitle'));
			$('#'+parentPie+' .circle-percent-item').text(percent+"%");		
		})
	}
}
//subtopicTouchSlider
const SubtopicTouchSlider = function(SubtopicList){
	let lX = 0,
	qX = 0,
	locate = $('.subtopic-selected').parent('div').data('ds-page');
	$('#ds-ui-subtopic').bind('touchstart mousedown', function (e) {

		if($('.App').width() > 600){
			e.preventDefault();
		}
		lX = (e.type === 'mousedown') ? e.pageX : e.touches[0].screenX;
	})

	$('#ds-ui-subtopic').bind('touchend mouseup', function (e) {
		qX = (e.type === 'mouseup') ? e.pageX : e.changedTouches[0].screenX;
		// 왼쪽
		if ((qX - lX) / size > 0.20) {
			setLocate = (locate - 1) < 0 ? (SubtopicList.length - 1) : (locate - 1);
			slideFooter(SubtopicList, locate, setLocate);
			locate--;
			locate = locate < 0 ? (locate = SubtopicList.length - 1) : locate;
		}
		// 오른쪽
		if ((qX - lX) / size < -0.20) {
			setLocate = (locate + 1) == SubtopicList.length ? 0 : (locate + 1);
			slideFooter(SubtopicList, locate, setLocate);
			locate++;
			locate = (locate == SubtopicList.length) ? locate = 0 : locate;
		}
	})
}

//footerBinding
const footerDataBinding = (footerAlltag) => {
	for (var i = 0; i < footerAlltag.length; i++) {
		dataItem = eval(exampleData);

		let calc_standard;
		let calc_detail;
		// circle-data-binding
		let data_standard_space = $(footerAlltag[i]).data('standard')
		if (data_standard_space != null) {
			calc_standard = data_standard_space.split(' ');
		}
		let data_detail_space = $(footerAlltag[i]).data('calc-detail');
		if (data_detail_space != null) {
			calc_detail = data_detail_space.split(' ');
		}

		let data = 0;
		if (calc_detail != undefined && calc_standard != undefined) {
			let dataAfter = []
			for (let j = 0; j < calc_standard.length; j++) {
				let setData_standard = calc_standard[j];
				let data;
				dataAfter = []
				for (var z = 0; z < dataItem.length; z++) {
					$.each(dataItem[z], function (key, value) {
						if (value == setData_standard) {
							data = dataItem[z];
							dataAfter.push(data);
						}
					})
				}
				dataItem = []
				for (var c = 0; c < dataAfter.length; c++) {
					dataItem.push(dataAfter[c]);
				}
			}
			if (calc_detail[0] === 'mul' || calc_detail[0] === 'add' || calc_detail[0] === 'sub' || calc_detail[0] === 'div') {
				// data-calc에서 총합 / 평균을 바로 구하는게 아니라 두개 이상의 데이터를 연관지어 계산해서 총합 / 평균을 구하고 싶을 경우 여기에 들어온다.
				//곱하기 / 더하기 / 빼기 / 나누기

				if (calc_detail[0] == 'add') {
					let totalData = 0;
					$.each(dataItem, function () {
						totalData += this[calc_detail[1]];
					})
					data = totalData;
				}
				// if (calc_detail[0] == 'sub') {

				// }
				if (calc_detail[0] == 'mul') {
					let totalData = 0;
					$.each(dataItem, function () {
						let mul_item = 1;
						totalData += (this[calc_detail[1]] * this[calc_detail[2]]);
					})
					data = totalData;
				}
			}
			if (calc_detail[0] === 'count') {
				data = dataItem.length;
			}


			$(footerAlltag[i]).html(data)
		}
	}
}
//footerTouchSlider
const footerTouchSlider = function(footerBoxList){
	let sX = 0,
	fX = 0,
	locate = 0;
	$('.footer').bind('touchstart mousedown', function (e) {
		e.preventDefault();
		sX = (e.type === 'mousedown') ? e.pageX : e.touches[0].screenX;
	})

	$('.footer').bind('touchend mouseup', function (e) {
		fX = (e.type === 'mouseup') ? e.pageX : e.changedTouches[0].screenX;
		// 왼쪽
		if ((fX - sX) / size > 0.20) {
			setLocate = (locate - 1) < 0 ? (footerBoxList.length - 1) : (locate - 1);
			slideFooter(footerBoxList, locate, setLocate);
			locate--;
			locate = locate < 0 ? (locate = footerBoxList.length - 1) : locate;
		}
		// 오른쪽
		if ((fX - sX) / size < -0.20) {
			setLocate = (locate + 1) == footerBoxList.length ? 0 : (locate + 1);
			slideFooter(footerBoxList, locate, setLocate);
			locate++;
			locate = (locate == footerBoxList.length) ? locate = 0 : locate;
		}
	})
}
//slideFooter
const slideFooter = (footerBoxList, locate, setLocate) => {
	if (footerBoxList.length !== 1) {
		$(footerBoxList[locate]).hide(0, function () {
			$(footerBoxList[setLocate]).show(0);
		})
		initFooter(footerBoxList, setLocate);
	}
};

//staticMove
const staticBtnTouchMove = function(staticBtn, staticShowBtn){
	$(staticBtn).bind('touchmove', function (e) {
		e.preventDefault();
		var touchLocation = e.targetTouches[0];
		var left = touchLocation.pageX;
		var top = touchLocation.clientY;
		$(staticBtn).children('div').css('display', 'none')
		$(staticBtn).css('left', left - 25 + 'px');
		$(staticBtn).css('top', top - 25 + 'px');
		if (left < 0 || left > size || top < 0 || top > heightSize) {
			$(staticBtn).css('display', 'none');
			$(staticShowBtn).css('display', 'block');
		}
	});
}
//일단 붙
const staticBtnTouchEnd = function(left, top, staticBtn, staticShowBtn){
	$(staticBtn).bind('touchend', function (e) {
		if (left < 0 || left > size || top < 0 || top > heightSize) {
			$(staticBtn).css('display', 'none');
			$(staticShowBtn).css('display', 'block');
		}
	})
}


const statusItems = function(formData) {
	const formItemList = formData;
	var titles = '';
	var types = '';
	var icon = '';
	var values = '';
	var urls = '';
	var headerContent = '';
	var formContent = '';

	for (var i = 0; i < formItemList.length; i++) {
		urls = formItemList[i].url;
		types = formItemList[i].type;
		icon = ((formItemList[i].type === 'img') ?
				"<img data-imgurl='" + urls + "'" + " class='imgUrl' src='" + urls + "'" + "/>" :
		"");
		titles = ((formItemList[i].title != '') ?
				"<span class='status-title'>" + formItemList[i].title + "</span>" :
					""
		);
		values =
			((formItemList[i].value != '') ?
					"<span class='status-value'>" + formItemList[i].value + "</span>" :
			"");

		// header
		headerContent =
			"<div class='status-img'>" +
			icon +
			"</div>"
			if(icon != ''){
				appendHtml(headerContent, '.statusView-header');
			}
		//  body
		formContent =
			"<div class='" + types + "'>" +
			titles +
			values +
			"</div>"

			if(titles != ''){
				appendHtml(formContent, '.statusView-body');
			}
	}
}



//radar chart 여러가지 데이터로 만들기
const formItems = function (formData, select) {
	let beforedata = 0;
	let maxValue = 0;
	if ($(select).data('max') != undefined) {
		beforedata = $(select).data('max');
	} else {
		beforedata = 1;
	}
	// 3개의 카테고리에 대한 max 값


	let maxValues = [];
	for (var i = 0; i < formData.length; i++) {
		$.each(formData[i], function (key, value) {
			if (i == 0) {
				for (var j = 0; j < value.length; j++) {
					maxValues[j] = 0;
				}
			}

			for (var j = 0; j < value.length; j++) {
				if (maxValues[j] < value[j].data) {
					maxValues[j] = value[j].data
				}
			}
		})
	}
	let chartAfterData = [];
	for (var i = 0; i < formData.length; i++) {

		//  maxvalue 구하기
		let ex2Object = new Object();
		$.each(formData[i], function (key, value) {
			let chartMiddleData = [];
			let count = 0;
			$.each(value, function (key2, value2) {
				let exObject = new Object();
				$.each(value2, function (key3, value3) {
					if (key3 == 'data') {
						//  소수점 자리수 고정
						exObject[key3] = ((value3 / maxValues[count]).toFixed(1) * 1);

					} else {
						exObject[key3] = value3
					}

				})
				count++;
				chartMiddleData.push(exObject);
			})
			ex2Object[key] = chartMiddleData;
		});
		chartAfterData.push(ex2Object)
	}
	var keyItem = [];
	var data;
	// key 값 구하기
	for (var i = 0; i < chartAfterData.length; i++) {
		$.each(chartAfterData[i], function (key, value) {
			keyItem[i] = key;
		});
	}
	for (var i = 0; i < chartAfterData.length; i++) {
		$.each(chartAfterData[i], function (key, value) {
			data = value;
			radarChart(data, select, keyItem)
		});
	}

}



//bar chart click
const barClick = (chartBar, chartBarValue) => {
	chartBar.click(function(){
		chartBar.css('opacity', 'initial');

		$(this).css({
			'opacity' : '0.5'
		})
		chartBarValue.css('display', 'none');
		/*$(this).children('div').css({
			'display' : 'block',
		})
		 */
	})
}
let chartData; //data-set 가져오기
let calc_detail; // data-calc-detail 가져오기
let dataAfterWork = []; //새로운 dataSet 만들기
let dataItem; // 매핑된 data 새롭게 저장
let dataStandard; // data-standard 가져오기
//색깔 저장
let chartColor = ['Aqua','blue','blueviolet','burlywood','coral','cornflowerblue','crimson','darkblue','darkorange','deeppink','deepskyblue','forestgreen','gold','green','greenyellow','hotpink','indeianred','indigo','khaki','lightgreen','lightseagreen','lime','mediumaquamarine','mediumseagreen','midnightblue','mistyrose','orangered','orchid','palegreen','plum','powderblue','red','royalblue','silver','slateblue','steelblue','teal','tomato','yellow','yellowgreen'];

//bar chart databinding
const chartDataBinding = function(name, clickdata){
	dataAfterWork = [];
	dataStandard = $(select).data('standard');
	chartData = $(select).data('binding');
	dataCalc = $(select).data('calc');
	dataItem = eval(chartData);
	dataSubStandard = $(select).data('substandard');
	resultArr3 = [];
	//button click시 넘어올 데이터가 담길 객체
	let btnClickDataset = clickdata;

	let dataNamingTransfer = eval($(select).data('transfer-naming'));

	// circle-data-binding
	let data_detail_space = $(select).data('calc-detail');
	if(data_detail_space != null){
		calc_detail = data_detail_space.split(' ');
	}

	let resultArr = [];
	if(calc_detail[0] === 'mul' || calc_detail[0] === 'add' || calc_detail[0] === 'sub' || calc_detail[0] === 'div'){
		// data-calc에서 총합 / 평균을 바로 구하는게 아니라 두개 이상의 데이터를 연관지어 계산해서 총합 / 평균을 구하고 싶을 경우 여기에 들어온다.
		//곱하기 / 더하기 / 빼기 / 나누기
		if(calc_detail[0] == 'add'){
			$.each(dataItem, function(){
				let add_item = 0;
				for(let j=1; j<calc_detail.length;j++){
					let calc_detail_add = calc_detail[j];
					add_item = add_item * this[calc_detail_add];
				}
				this.calc = add_item;
			})
		}
		if(calc_detail[0] == 'sub'){

		}
		if(calc_detail[0] == 'mul'){
			$.each(dataItem, function(){
				let mul_item = 1;
				for(let j=1; j<calc_detail.length;j++){
					let calc_detail_mul = calc_detail[j];
					mul_item = mul_item * this[calc_detail_mul];
				}
				this.calc = mul_item;
			})
		}
		if(calc_detail[0] == 'div'){

		}
		let x = $(select).data('x')
		if(typeof x === 'string'){
			let resultArr2 = [];
			if(name == 'line' && dataStandard != null){

				if(btnClickDataset != ''){
					// button click 시 데이터가 넘어왔을때 binding
					console.log('ok!!')
					$.each(dataItem, function(){
						if(this[dataStandard] == btnClickDataset[0] && this[dataSubStandard] == btnClickDataset[1]){
							resultArr.push(this)
						}
					})

					if(btnClickDataset[2] == '년도별'){
						for(let i =0; i< (btnClickDataset[4]-btnClickDataset[3])+1;i++){
							resultArr3.push((btnClickDataset[3])*1+i);
						}
					} else if(btnClickDataset[2] == '분기별'){
						$.each(resultArr, function(key,value){
							if(value[x].split('-',1)[0] == btnClickDataset[3]){
								let quarterDay = value[x].split('-',2)[1];
								//1분기
								if(1<=quarterDay && quarterDay <=3){
									this.calcquarter = btnClickDataset[3]+'-1';
								}
								//2분기
								if(4<=quarterDay && quarterDay <=6){
									this.calcquarter = btnClickDataset[3]+'-2';
								}
								//3분기
								if(7<=quarterDay && quarterDay <=9){
									this.calcquarter = btnClickDataset[3]+'-3';
								}
								//4분기
								if(10<=quarterDay && quarterDay <=12){
									this.calcquarter = btnClickDataset[3]+'-4';
								}
							}
						})
						resultArr3 = [btnClickDataset[3]+'-1', btnClickDataset[3]+'-2',btnClickDataset[3]+'-3',btnClickDataset[3]+'-4']
					} else if(btnClickDataset[2] == '월별'){
						$.each(resultArr, function(key,value){
							if(value[x].split('-',1)[0] == btnClickDataset[3]){
								this.calcmonth = value[x].split('-',2)[1];
							}
						});
						resultArr3 = ['01', '02','03','04','05','06','07','08','09','10','11','12'];
					} else {

					}
					$.each(resultArr3, function(key, value){
						let calc = 0;
						let exObject = new Object();
						let trueandfalse;
						for(let i=0; i< resultArr.length; i++){
							if(btnClickDataset[2] == '년도별'){
								if(resultArr[i][x].split('-',1)[0] == value){
									trueandfalse = true;
									break;
								} else {
									trueandfalse = false;
								}								
							} else if(btnClickDataset[2] == '분기별'){
								if(resultArr[i]['calcquarter'] == value){
									trueandfalse = true;
									break;
								} else {
									trueandfalse = false;
								}
							} else if(btnClickDataset[2] == '월별'){
								if(resultArr[i]['calcmonth'] == value){
									trueandfalse = true;
									break;
								} else {
									trueandfalse = false;
								}
							} else {

							}
						}
						if(trueandfalse){
							for(let i=0; i< resultArr.length; i++){
								if(btnClickDataset[2] == '년도별'){
									if(resultArr[i][x].split('-',1)[0] == value){
										calc = calc+ resultArr[i]['calc'];										
									}
								} else if(btnClickDataset[2] == '분기별'){
									if(resultArr[i]['calcquarter'] == value){
										calc = calc+ resultArr[i]['calc'];
									}
								} else if(btnClickDataset[2] == '월별'){
									if(resultArr[i]['calcmonth'] == value){
										calc = calc+ resultArr[i]['calc'];
									}									
								}
							}
						} else {
							calc = 0;
						}
						exObject.grade = value;
						exObject.data = calc;
						dataAfterWork.push(exObject);
					})


				} else {
					// 입력된 데이터가 없을때
					$.each(dataItem, function(){
						if(this[dataStandard] == dataItem[0][dataStandard] && this[dataSubStandard] == dataItem[0][dataSubStandard]){
							resultArr.push(this)
						}
					})

					$.each(resultArr, function(key, value){
						if($.inArray(value[x].split('-',1)[0], resultArr3) === -1) resultArr3.push(value[x].split('-',1)[0])
					})
					let calc = 0;
					$.each(resultArr3, function(key, value){
						let exObject = new Object();
						for(let i=0; i< resultArr.length; i++){
							if(resultArr[i][x].split('-',1)[0] == value){
								calc = calc+ resultArr[i]['calc'];
							}
						}
						exObject.grade =value;
						exObject.data = calc;
						dataAfterWork.push(exObject);
					})

					dataAfterWork.sort(function(a,b){
						return (a.grade < b.grade) ? -1 : ((a.grade>b.grade) ? 1:0);
					})
				}

			} else {
				$.each(dataItem, function(){
					let data = this[x];
					if($.inArray(data, resultArr2) === -1){
						resultArr2.push(data)
					};
				})
				//오름차순 정렬
				resultArr2.sort(function (a, b){
					return a < b ?-1 : a > b ? 1 : 0;
				})

				for(let z=0; z< resultArr2.length; z++){
					let result = [];
					let dataMiddleWork = [];
					$.each(dataItem, function(){
						if(this[x] == resultArr2[z]){
							result.push(this)
						}
					})
					// dataStandard 중복값 분리
					$.each(dataItem, function(){
						let data = this[dataStandard];
						if($.inArray(data, resultArr) === -1){
							resultArr.push(data)
						};
					})
					let falsetrue = false;
					for(let i=0;i<resultArr.length;i++){
						let exObject = new Object();
						let calc=0;
						if(dataNamingTransfer != undefined){
							for(let l = 0; l < dataNamingTransfer.length; l++){
								let nameValue = []
								$.each(dataNamingTransfer[l], function(key, value){
									nameValue.push(value);
									if(key == 'transname'){																		
										if(resultArr[i] == nameValue[0]){
											exObject.title = value;
											falsetrue = false;
										}
										if(resultArr2[i] == nameValue[0]){
											falsetrue = true;
										}
									}
								})
							}
							if(falsetrue){
								exObject.title = resultArr[i];
							}
						} else {
							exObject.title = resultArr[i];
						}

						let j = 0;
						$.each(result, function(){
							if(this[dataStandard] == resultArr[i]){
								calc=calc+this['calc'];
								j++;
							}
						})
						if(dataCalc == 'avg'){
							exObject.data = calc/j;
						} else {
							// default 값 : dataCalc == 'sum'
							exObject.data = calc;	
						}
						if('radar' == name){
							exObject.color = chartColor[z];
						} else {
							exObject.color = chartColor[i];						
						}

						dataMiddleWork.push(exObject);

					}
					let ex2Object = new Object();
					ex2Object[resultArr2[z]] = dataMiddleWork;
					dataAfterWork.push(ex2Object);
				}
			}
		} else {
			//x의 기준이 없는 경우
			// line은 x가 없기때문에 여기에 들어온다
			$.each(dataItem, function(){
				let data = this[dataStandard];
				if($.inArray(data, resultArr) === -1){
					resultArr.push(data)
				};
			})

			for(let i=0;i<resultArr.length;i++){
				let exObject = new Object();
				let calc=0;

				if(dataNamingTransfer != undefined){
					for(let l = 0; l < dataNamingTransfer.length; l++){
						let nameValue = []
						$.each(dataNamingTransfer[l], function(key, value){
							nameValue.push(value);
							if(key == 'transname'){																		
								if(resultArr[i] == nameValue[0]){
									exObject.title = value;

								}
							}
						})
					}
				} else {
					exObject.title = resultArr[i]
				}

				let j = 0;
				$.each(dataItem, function(){
					if(this[dataStandard] == resultArr[i]){
						calc=calc+this['calc'];
						j++;
					}
				})
				if(dataCalc == 'avg'){
					exObject.data = calc/j;
				} else {
					// default 값 : dataCalc == 'sum'
					exObject.data = calc;	
				}
				exObject.color = chartColor[i];
				dataAfterWork.push(exObject);
			}
		}
	} else {
		// 하나의 data로 인하여 총합과 평균을 구해서 차트를 그리거나, 총합 / 평균을 구하지 않고 차트를 그리는 경우
		let x = $(select).data('x')
		if(typeof x === 'string'){
			let resultArr2 = [];
			if(name == 'line' && dataStandard != null){

				$.each(dataItem, function(){
					if(this[dataStandard] == dataItem[0][dataStandard] && this[dataSubStandard] == dataItem[0][dataSubStandard]){
						resultArr.push(this)
					}
				})
				if(btnClickDataset != ''){
					// button click 시 데이터가 넘어왔을때 binding
					console.log('ok!!');
					if(btnClickDataset[2] == '년도별'){
						for(let i =0; i< (btnClickDataset[4]-btnClickDataset[3])+1;i++){
							resultArr3.push((btnClickDataset[3])*1+i);
						}
					} else if(btnClickDataset[2] == '분기별'){
						$.each(resultArr, function(key,value){
							if(value[x].split('-',1)[0] == btnClickDataset[3]){
								let quarterDay = value[x].split('-',2)[1];
								//1분기
								if(1<=quarterDay && quarterDay <=3){
									this.calcquarter = btnClickDataset[3]+'-1';
								}
								//2분기
								if(4<=quarterDay && quarterDay <=6){
									this.calcquarter = btnClickDataset[3]+'-2';
								}
								//3분기
								if(7<=quarterDay && quarterDay <=9){
									this.calcquarter = btnClickDataset[3]+'-3';
								}
								//4분기
								if(10<=quarterDay && quarterDay <=12){
									this.calcquarter = btnClickDataset[3]+'-4';
								}
							}
						})
						resultArr3 = [btnClickDataset[3]+'-1', btnClickDataset[3]+'-2',btnClickDataset[3]+'-3',btnClickDataset[3]+'-4']
					} else if(btnClickDataset[2] == '월별'){
						$.each(resultArr, function(key,value){
							if(value[x].split('-',1)[0] == btnClickDataset[3]){
								this.calcmonth = value[x].split('-',2)[1];
							}
						});
						resultArr3 = ['01', '02','03','04','05','06','07','08','09','10','11','12'];
					} else {

					}
					$.each(resultArr3, function(key, value){
						let calc = 0;
						let exObject = new Object();
						let trueandfalse;
						for(let i=0; i< resultArr.length; i++){
							if(btnClickDataset[2] == '년도별'){
								if(resultArr[i][x].split('-',1)[0] == value){
									trueandfalse = true;
									break;
								} else {
									trueandfalse = false;
								}								
							} else if(btnClickDataset[2] == '분기별'){
								if(resultArr[i]['calcquarter'] == value){
									trueandfalse = true;
									break;
								} else {
									trueandfalse = false;
								}
							} else if(btnClickDataset[2] == '월별'){
								if(resultArr[i]['calcmonth'] == value){
									trueandfalse = true;
									break;
								} else {
									trueandfalse = false;
								}
							} else {

							}
						}
						if(trueandfalse){
							for(let i=0; i< resultArr.length; i++){
								if(btnClickDataset[2] == '년도별'){
									if(resultArr[i][x].split('-',1)[0] == value){
										calc = calc+ resultArr[i][calc_detail[0]];										
									}
								} else if(btnClickDataset[2] == '분기별'){
									if(resultArr[i]['calcquarter'] == value){
										calc = calc+ resultArr[i][calc_detail[0]];
									}
								} else if(btnClickDataset[2] == '월별'){
									if(resultArr[i]['calcmonth'] == value){
										calc = calc+ resultArr[i][calc_detail[0]];
									}									
								}
							}
						} else {
							calc = 0;
						}
						exObject.grade = value;
						exObject.data = calc;
						dataAfterWork.push(exObject);
					})

				} else {
					// 입력된 데이터가 없을때
					$.each(resultArr, function(key, value){
						if($.inArray(value[x].split('-',1)[0], resultArr3) === -1) resultArr3.push(value[x].split('-',1)[0])
					})
					let calc = 0;
					$.each(resultArr3, function(key, value){
						let exObject = new Object();
						for(let i=0; i< resultArr.length; i++){
							if(resultArr[i][x].split('-',1)[0] == value){
								calc = calc+ resultArr[i][calc_detail[0]];
							}
						}
						exObject.grade =value;
						exObject.data = calc;
						dataAfterWork.push(exObject);
					})
					dataAfterWork.sort(function(a,b){
						return (a.grade < b.grade) ? -1 : ((a.grade>b.grade) ? 1:0);
					})
				}

			} else {
				$.each(dataItem, function(){
					let data = this[x];
					if($.inArray(data, resultArr2) === -1){
						resultArr2.push(data)
					};
				})
				//오름차순 정렬
				resultArr2.sort(function (a, b){
					return a < b ?-1 : a > b ? 1 : 0;
				})

				for(let z=0; z< resultArr2.length; z++){
					let result = [];
					let dataMiddleWork = [];
					$.each(dataItem, function(){
						if(this[x] == resultArr2[z]){
							result.push(this)
						}
					})

					$.each(dataItem, function(){
						let data = this[dataStandard];
						if($.inArray(data, resultArr) === -1){
							resultArr.push(data)
						};
					})
					for(let i=0;i<resultArr.length;i++){
						let exObject = new Object();
						let calc=0;

						if(dataNamingTransfer != undefined){
							for(let l = 0; l < dataNamingTransfer.length; l++){
								let nameValue = []
								$.each(dataNamingTransfer[l], function(key, value){
									nameValue.push(value);
									if(key == 'transname'){																		
										if(resultArr[i] == nameValue[0]){
											exObject.title = value;								
										}
									}
								})
							}
						} else {
							exObject.title = resultArr[i]
						}

						let j = 0;
						$.each(dataItem, function(){
							if(this[dataStandard] == resultArr[i]){
								calc=calc+this['calc'];
								j++;
							}
						})
						if(dataCalc == 'avg'){
							exObject.data = calc/j;
						} else {
							// default 값 : dataCalc == 'sum'
							exObject.data = calc;	
						}
						if('radar' == name){
							exObject.color = chartColor[z];
						} else {
							exObject.color = chartColor[i];						
						}
						dataMiddleWork.push(exObject);
					}
					let ex2Object = new Object();
					ex2Object[resultArr2[z]] = dataMiddleWork;
					dataAfterWork.push(ex2Object);
				}
			}
		}
		else {
			//하나의 데이터로 line chart를 그릴때

			$.each(dataItem, function(){
				let data = this[dataStandard];
				if($.inArray(data, resultArr) === -1){
					resultArr.push(data)
				};
			})
			for(let i=0;i<resultArr.length;i++){
				let exObject = new Object();
				let calc=0;

				if(dataNamingTransfer != undefined){
					for(let l = 0; l < dataNamingTransfer.length; l++){
						let nameValue = [];
						$.each(dataNamingTransfer[l], function(key, value){
							nameValue.push(value);
							if(key == 'transname'){																		
								if(resultArr[i] == nameValue[0]){
									exObject.title = value;								
								}
							}
						})
					}
				} else {
					exObject.title = resultArr[i]
				}

				let j = 0;
				$.each(dataItem, function(){
					if(this[dataStandard] == resultArr[i]){
						calc=calc+this['calc'];
						j++;
					}
				})
				if(dataCalc == 'avg'){
					exObject.data = calc/j;
				} else {
					// default 값 : dataCalc == 'sum'
					exObject.data = calc;	
				}
				exObject.color = chartColor[i];
				dataAfterWork.push(exObject);
			}
		}
	}


	dataCalc = '';
	calc_detail = '';
	return dataAfterWork;
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
