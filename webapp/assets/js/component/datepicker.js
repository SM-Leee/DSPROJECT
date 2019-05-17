/*date-picker*/
//datePicker setting
const datePicker = () => {
	if($('#date').length != 0 && $('#date').data('dsIsPopup') == undefined) {
		dateHtml($('#date'));
		// datepicker click event on
		datepickerListener($('#date'));
		initDate($('#date'));
	}
	if($('#fromDate').length != 0 && $('#fromDate').data('dsIsPopup') == undefined) {
		$('#fromDate').addClass('period-option');
		dateHtml($('#fromDate'));
		// datepicker click event on
		datepickerListener($('#fromDate'));
		initDate($('#fromDate'));
	}
	if($('#toDate').length != 0 && $('#toDate').data('dsIsPopup') == undefined) {
		$('#toDate').addClass('period-option');
		dateHtml($('#toDate'));
		// datepicker click event on
		datepickerListener($('#toDate'));
		initDate($('#toDate'));
	}
}
const datepickerListener = ($target) => {
	$target.on('click', function(event){
		// basicModal();
		dateModal($target);
	});
}
const dateHtml = ($target) => {
	$target.wrap('<div class="ds-ui-datepicker-box"></div>')
	.addClass('ds-ui-datepicker')
	.attr('readonly', 'readonly');
	$target[0].dataset.dsIsPopup = false;
	if($target.data('dsLabel')) {
		$target.before('<div class="datepicker-label-box"></div>')
		.prev().append('<label>' + $target.data('dsLabel') + '</label>');
	}
}
const initDate = ($target) => {
	if($('.ds-ui-datepicker-box').length != 0){
		transDate = today.getFullYear() + '-' 
		+ (today.getMonth() + 1 < 10 ? '0' : '') 
		+ (today.getMonth() + 1) + '-' 
		+ (today.getDate() < 10 ? '0' : '') 
		+ today.getDate();
		$target[0].value = transDate;
	}
}

let today = new Date(); // 오늘 날짜
function prevCalendar($targetPB) {
	today = new Date(today.getFullYear(), today.getMonth() -1, today.getDate());
	buildCalendar($targetPB);
}
function nextCalendar($targetPB) {
	today = new Date(today.getFullYear(), today.getMonth() +1, today.getDate());
	buildCalendar($targetPB);
}

function abbreviationDate(target, len) {
	return target.substring(0, len);
}

function buildCalendar($targetPB) {
	let nMonth = new Date(today.getFullYear(), today.getMonth(), 1); // 이번 달의 첫째 날
	let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); // 이번 달의 마지막 날
	let $tbCalendar = $targetPB.find('.date-tb'); // 테이블 달력을 만들 테이블 선택
	let $tbCalendarYM = $targetPB.find('.date-tb-title'); // yyyy년 mm월 출력할 곳

	// 오늘 날짜
	let currentYear = today.getFullYear();
	let currentMonth = today.getMonth() + 1;
	let exp_date = {
			ko:{
				month: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
				week: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
			},
			en:{
				month:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				week:['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
			}
	}

	let currentDate = today.getDate();
	let currentVIP = null; // 요일
	exp_month = null;
	exp_week = null;
	exp_year = null;
	exp_day = null;
	if($targetPB.hasClass('ko')) {
		$tbCalendarYM.addClass('ko');
		exp_year = currentYear + '년';
		exp_month = exp_date.ko.month[currentMonth-1];
		exp_day = currentDate + '일';
		exp_week = exp_date.ko.week;
		currentVIP = abbreviationDate(exp_week[today.getDay()], 1);
	} else if($targetPB.hasClass('en')) {
		$tbCalendarYM.addClass('en');
		exp_year = currentYear;
		exp_month = exp_date.en.month[currentMonth-1];
		exp_week = exp_date.en.week;
		exp_month = abbreviationDate(exp_month, 3) + '.';
		exp_day = currentDate;
		currentVIP = abbreviationDate(exp_week[today.getDay()], 2);
	}

	tempValue = exp_month + ' ' + exp_day + ' (' + currentVIP + ')';
	$targetPB.find('.date-title').children('span').text(tempValue);
	$targetPB.find('.date-subtitle').children('span').text(currentYear);
	$tbCalendarYM.children().text(exp_year);
	$tbCalendarYM.children().next().text(exp_month);

	if($targetPB.hasClass('ko')) {
		for(var i=0; i<exp_week.length; i++){
			$tbCalendar
			.find('th').text(abbreviationDate(exp_week[i], 1));
		}
	}
	if($targetPB.hasClass('en')) {
		for(var i=0; i<exp_week.length; i++){
			$tbCalendar
			.find('th').text(abbreviationDate(exp_week[i], 2));
		}
	}

	while ($tbCalendar[0].rows.length > 1) {
		$tbCalendar[0].deleteRow($tbCalendar[0].rows.length - 1);
	}
	let row = null;
	row = $tbCalendar[0].insertRow();
	let cnt = 0;
	// 1일이 시작되는 칸을 맞추어 줌
	for (i=0; i<nMonth.getDay(); i++) {
		cell = row.insertCell();
		cnt = cnt + 1;
	}

	for (i=1; i<=lastDate.getDate(); i++) { 
		cell = row.insertCell();
		cell.innerHTML = i;
		cnt = cnt + 1;
		if (cnt%7 == 0)// 1주일이 7일 이므로
			row = $tbCalendar[0].insertRow();// 줄 추가
	}

	$('td').unbind('click').bind('click', (event) => {
		currentDate = event.target.innerHTML;
		if(currentDate == '') return;
		console.log("ko : " + $targetPB.hasClass('ko'))
		if($targetPB.hasClass('ko')) {
			exp_day = currentDate + "일";
		} else {
			exp_day = currentDate;

		}
		tempValue = exp_month + ' ' + exp_day + ' (' + currentVIP + ')';
		today.setDate(currentDate);
		$targetPB.find('.date-title').children('span').text(tempValue);
		$targetPB.find('.date-subtitle').children('span').text(exp_year);
	});

	$('td').hover((event) => {
		currentDate = event.target.innerHTML;
		if(currentDate == '') return;
		$(event.target).addClass('hover');
	}, () => {
		$(event.target).removeClass('hover');
	});

}

const dateModal = ($target) => {
	basicModal($target);
	$targetPB = $('#' + $target[0].id + '_pb');
	if($target[0].dataset.dsIsPopup == 'false') {
		//headerViewRender
		let dateHeader = 
			"<div class='date-header'>" +
			"<div class='date-title'>" +
			"<span></span>" +
			"</div>" +
			"<div class='date-subtitle'>" +
			"<span></span>" +
			"</div>" +
			"</div>";

		$targetPB.find('.popup-header')
		.append(dateHeader);

		//bodyViewRender
		let dateBody = 
			"<div class='date-component-spinner'>" +
			"<div class='ic-express-np'>" +
			"<div><i class='fa fa-angle-left'></i></div>" +
			"<div><i class='fa fa-angle-right'></i></div>" +
			"</div>" +
			"<div class='date-basic'>" +
			"<div class='date-tb-title'>" +
			"<div></div>&nbsp" +
			"<div></div>" +
			"</div>" +
			"<table class='date-tb'>" +
			"<tr></tr>"
			"</table>" +
			"</div>" +
			"</div>";

		$targetPB.find('.popup-body')
		.append(dateBody);

		buildCalendar($targetPB);

		$targetPB.find('.fa-angle-left').unbind('click').bind('click', (event) => {
			prevCalendar($targetPB);
		});
		$targetPB.find('.fa-angle-right').unbind('click').bind('click', (event) => {
			nextCalendar($targetPB);
		});

		// Popup - footer
		row = "<div><a id='popup-close' href='#close'>취소</a></div>";
		$targetPB.find('.popup-set-tb').append(row);

		row = "<div><a id='popup-check' href='#check'>설정</a></div>";
		$targetPB.find('.popup-set-tb').append(row);
	}

	$targetPB.find('.popup-set-tb').children().unbind('click').bind('click', () => {
		$targetPB.addClass('popup-off');
	});

	$targetPB.find('.popup-set-tb').children().next().unbind('click').bind('click', () => {
		$targetPB.addClass('popup-off');
		transDate = today.getFullYear() + '-' 
		+ (today.getMonth() + 1 < 10 ? '0' : '')
		+ (today.getMonth() + 1) + '-' 
		+ (today.getDate() < 10 ? '0' : '') 
		+ today.getDate();
		$target[0].value = transDate;
	});

	$target[0].dataset.dsIsPopup =  true;
}


const basicModal = ($target) => {
	target_id = '#' + $target[0].id + '_pb';
	if($target.data('dsIsPopup') == false && $(target_id).length == 0) {
		if($target.data('dsLanguage') == null) {
			$target.data('dsLanguage', 'ko');
		}
		console.log($target.data('dsLanguage'));

		$('<div class="popupBox" id=' + $target[0].id + '_pb></div>').appendTo("body");
		$('#' + $target[0].id + '_pb').addClass($target.data('dsLanguage'));
		console.log("popupBox created!!");

		$(target_id)
		.append('<div class="overlay"></div>')
		.append('<div class="popup"></div>')
		.children('.popup')
		.append('<div class="popup-content"></div>')
		.children('.popup-content')
		.append('<div class="popup-header"></div>') // text : popup-hearder
		.append('<div class="popup-body"></div>') // text : popup-body
		.append('<div class="popup-footer"></div>')
		.children('.popup-footer')
		.append('<div class="popup-set-tb"></div>');

		console.log('layout, popup created in popupBox!!');

	}

	$(target_id).removeClass('popup-off');
};