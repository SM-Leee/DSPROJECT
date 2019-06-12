let lineChart = (dataSet, select, title) => {

	let point = '';
	let lineChartTitleName = '';
	let transferTitle = '';
	let dataTransfer = eval($(select).data('ds-transfer-naming'));
	let dataTable = eval($(select).data('ds-binding'))[0];
	if(dataTransfer != undefined){
		$.each(dataTransfer, function(key, value){
			if(title== ''){
				if(value[$(select).data('ds-substandard')] == dataTable[$(select).data('ds-substandard')]){
					transferTitle = value['transname']
				}				
			} else {
				if(value[$(select).data('ds-substandard')] == title[1]){
					transferTitle = value['transname']
				}				
			}
		})
	} else {
		transferTitle = dataTable[$(select).data('ds-substandard')];
	}
	let calc_detail = [];
	let titlecalcdetail;
	if($(select).data('ds-calc-detail') != null){
		calc_detail = $(select).data('ds-calc-detail').split(' ');
	}
	if(calc_detail.length != 1){
		if(calc_detail[0] === 'mul'){
			titlecalcdetail = '총합';
		}
		if(calc_detail[0] === 'avg'){
			titlecalcdetail = '평균'
		}
	} else {
		for(let i=0; i < eval('tableOption').length; i++){
			$.each(eval('tableOption')[i], function(key, value){
				if(key == $(select).data('ds-calc-detail')){
					titlecalcdetail = value;
				}
			})
		}
	}
	if(title == ''){
		lineChartTitleName ='년도별 '+dataTable[$(select).data('ds-standard')]+ '의 '+ transferTitle+ ' '+titlecalcdetail;
		$(select).append(
				'<div class="line-wrapper chart-wrapper">'+
				'<div class="line-title">' +
				'<div>'+
				'<label>'+lineChartTitleName+'</label>'+
				'</div>'+
				'</div>'+
				'<div  class="line-background data-background"></div>'+
				'</div>'
		);
	} else {
		
		
		lineChartTitleName = title[2]+' '+title[0]+ '의 '+ transferTitle+ ' '+titlecalcdetail;
		$(select+'.line-title div label').empty();
		$(select+'.line-title div label').text(lineChartTitleName);
		$(select+'.line-wrapper').append(
				'<div  class="line-background data-background"></div>'+
				'</div>'	
		);
	}
	//index_position(select, dataSet)
	data_background(dataSet, select)
	$(select+'.line-wrapper').css({'height':'100%', 'width':'100%'})

	dataSet.map(function(d, i){

		let X_value = 100/(dataSet.length-1)*i;
		// let beforedata = (100-(d.data-$(select).data('min'))/($(select).data('y')-$(select).data('min'))*100);
		let beforedata = (100-(d.data-0)/(chartAxisNumberFormat(dataSet))*100);

		point = point + X_value + '% ' + beforedata + '% ';
		if(i+1 !== dataSet.length){point = point + ',';}

		$(select + '.background').append(
				'<div class="event data-point data-point' + i +
				'" data-value="' + d.data + '">' + 
				'<div class="data-point-value data-point-value' + i + '">' /*+ d.data*/ +
				'</div>' +
		'</div>')
		$(select + '.data-point'+i).css({
			'top':'calc('+beforedata+'% - 0.3rem)',
			'left':'calc('+X_value+'% - 0.3rem)'
		})
	})
	point = 'polygon(' + point + ',100% 100%, 0 100%)';

	let stand_size = ($(select+'.line-wrapper').height()/2*3 < $(select+'.line-wrapper').width()) ? $(select+'.line-wrapper').height() : $(select+'.line-wrapper').width();

	$(select+'.showdata').append('<div class="line-showdata"></div>')
	$(select + '.line-background').css({
		'top': 'calc(0)',
		'left': 'calc(0)',
		'width': '100%',
		'height': '85%'
	})
	$(select + '.line-showdata').css({
		'clip-path': '-webkit-'+point,
		'clip-path': point
	})

}