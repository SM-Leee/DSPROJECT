let size = window.screen.availWidth;
let heightSize = window.screen.availHeight;
let setLocate = 0;
var togglemenu_visible = [ false ];
var togglemenu_visibility = "hide";
const footerBoxList = $('.ds-ui-footerBox');

const dataSet1 = [
	{X:47, Y:68, Z:6, color:'blue'},
	{X:21, Y:56, Z:9, color:'blue'},
	{X:17, Y:93, Z:6, color:'blue'},
	{X:52, Y:90, Z:6, color:'blue'},
	{X:30, Y:43, Z:10, color:'blue'},
	{X:22, Y:77, Z:9, color:'blue'},
	{X:84, Y:76, Z:2, color:'blue'},
	{X:15, Y:38, Z:8, color:'blue'},
	{X:22, Y:87, Z:10, color:'orange'},
	{X:92, Y:95, Z:9, color:'blue'},
	]

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


const exData = [{
    "더존비즈온": [{
          "title": "반가워",
          "data": 0.5,
          "color": "skyblue"
       },
       {
          "title": "ㅎㅇ",
          "data": 0.7,
          "color": "skyblue"
       },
       {
          "title": "r",
          "data": 0.33,
          "color": "skyblue"
       },
       {
          "title": "s",
          "data": 0.41,
          "color": "skyblue"
       },
       {
          "title": "x",
          "data": 0.1,
          "color": "skyblue"
       }
    ]
 },
 {
    "네이버": [{
          "title": "반가워",
          "data": 0.3,
          "color": "skyblue"
       },
       {
          "title": "ㅎㅇ",
          "data": 0.8,
          "color": "skyblue"
       },
       {
          "title": "r",
          "data": 0.12,
          "color": "skyblue"
       },
       {
          "title": "s",
          "data": 0.54,
          "color": "skyblue"
       },
       {
          "title": "x",
          "data": 0.31,
          "color": "skyblue"
       }
    ]
 }
 // ,
 // {
 //    "다음": [{
 //       "title": "반가워",
 //       "data": 23,
 //       "color": "skyblue"
 //    },
 //    {
 //       "title": "ㅎㅇ",
 //       "data": 50,
 //       "color": "skyblue"
 //    },
 //    {
 //       "title": "r",
 //       "data": 20,
 //       "color": "skyblue"
 //    },
 //    {
 //       "title": "s",
 //       "data": 69,
 //       "color": "skyblue"
 //    },
 //    {
 //       "title": "x",
 //       "data": 73,
 //       "color": "skyblue"
 //    }
 //    ]
 // }
]
const formData = [
	{
		"title": "",
		"type": "img",
		"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/200px-ReceiptSwiss.jpg",
		"value": ""
	},
	{
		"title": "일자",
		"type": "date",
		"value": "2019-05-15",
		"icon": ""
	},
	{
		"title": "거래처",
		"type": "text",
		"value": "더존비즈온",
		"icon": ""
	},
	{
		"title": "상품",
		"type": "text",
		"value": "WEHAGO",
		"icon": ""
	},
	{
		"title": "가격",
		"type": "num",
		"value": "100,100,100",
		"icon": ""
	},
	{
		"title": "상세설명",
		"type": "textArea",
		"value": "더존비즈온 ERP 프로그램",
		"icon": ""
	},
	{
		"title": "상품",
		"type": "text",
		"value": "WEHAGO",
		"icon": ""
	},{
		"title": "상세설명",
		"type": "textArea",
		"value": "더존비즈온 ERP 프로그램",
		"icon": ""
	},
	{
		"title": "상세설명",
		"type": "textArea",
		"value": "더존비즈온 ERP 프로그램",
		"icon": ""
	}
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
	footerTouchSlider(footerBoxList);
	staticBtnTouchMove($('#ds-ui-staticBtn'), $('#ds-ui-staticShowBtn'));
	pieChartClick();
	barClick($('.bar-showdata'), $('.bar-showValue'));
	
});

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
	if($("#ds-ui-dropdown-picker-box").length != 0){
		$('.dropdown-picker').click(function(){
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
				sum = sum + $('#'+parentPie+' .pie'+i).data('value');
			}

			value = $(this).data('value')/sum;
			let percent = Math.floor(value*100);
			$('#'+parentPie+' .circle-title').text($(this).data('circletitle'));
			$('#'+parentPie+' .circle-percent-item').text(percent+"%");		
		})
	}
}
//footerTouchSlider
const footerTouchSlider = (footerBoxList) => {
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
const staticBtnTouchMove = (staticBtn, staticShowBtn) => {
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
const staticBtnTouchEnd = (left, top, staticBtn, staticShowBtn) => {
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
	let beforedata =0;
	let maxValue = 0;
	
	if($(select).data('max') != undefined){
		beforedata = $(select).data('max');
	} else {
		beforedata = 1;
	}
	maxValue = chartAxisNumberFormat(formData);
	
	let chartAfterData = [];
	for (var i = 0; i < formData.length; i++) {
		let ex2Object = new Object();
		$.each(formData[i], function (key, value) {
			let chartMiddleData = [];
			$.each(value, function (key2, value2) {
				let exObject = new Object();
				$.each(value2, function(key3, value3){
					if(key3 == 'data'){
						exObject[key3] = ((value3/maxValue).toFixed(1)*1);
					}else {
						exObject[key3] = value3						
					}
				})
				chartMiddleData.push(exObject);
			})
			ex2Object[key] = chartMiddleData;
		});
		chartAfterData.push(ex2Object)
	}
	console.log(exData)
	console.log(chartAfterData);
	
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
const chartDataBinding = function(name){
	dataAfterWork = [];
	dataStandard = $(select).data('standard');
	chartData = $(select).data('binding');
	dataCalc = $(select).data('calc');
	dataItem = eval(chartData);

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
			if($(".radar").length != 0){
				console.log('radar')				
			}
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
		} else {
			//x의 기준이 없는 경우
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
		else {
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
