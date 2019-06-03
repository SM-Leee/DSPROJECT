let lineChart = (dataSet, select, title) => {
	
    let point = '';
    let lineChartTitleName = '';
    // line chart 제목 처리 하는거 조금만더 생각해볼것
    if(title == ''){
    	
    	lineChartTitleName = '임시데이터';
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
    	let calc_detail = [];
    	let titlecalcdetail;
    	if($(select).data('calc-detail') != null){
    		calc_detail = $(select).data('calc-detail').split(' ');
    	}
    	if(calc_detail.length != 1){
    		if(calc_detail[0] === 'mul'){
    			titlecalcdetail = '총합';
    		}
    		if(calc_detail[0] === 'avg'){
    			
    		}
    	} else {
    		console.log(eval('tableOption'))
    		for(let i=0; i < eval('tableOption').length; i++){
    			$.each(eval('tableOption')[i], function(key, value){
    				if(key == $(select).data('calc-detail')){
    					titlecalcdetail = value;
    				}
    			})
    		}
    	}
    	
    	lineChartTitleName = title[2]+' '+title[0]+ '의 '+ title[1]+ ' '+titlecalcdetail;
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
            'top':'calc('+beforedata+'% - 0.5rem)',
            'left':'calc('+X_value+'% - 0.5rem)'
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