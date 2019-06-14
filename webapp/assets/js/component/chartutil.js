//chart
let layout = (className) => {
	return ($(className).height() < $(className).width() ? $(className).height() : $(className).width());
}
let index_position = (select_tag, dataSet) => {
	let typeofvalue = '';
	let dataSetMake;
	$.each(dataSet[0], function(key,value){
		typeofvalue = typeof value;
	})
	let xTarget = [];
	for(let j = 0;j < dataSet.length; j++){
		$.each(dataSet[j], function(key,value){
			xTarget.push(key)
		})			
	}
	if(typeofvalue === 'object'){
		dataSetMake = dataSet[0][xTarget[0]]
	} else {
		dataSetMake = dataSet;
	}


	let position = {
			'top':'column-reverse',
			'right':'row',
			'left':'row-reverse',
			'bottom':'column',
			'none':''
	}
	let status = $(select_tag).data('ds-index-position');

	if(status == 'none' || 10 < dataSetMake.length ) {
		$(select_tag+'.chart-wrapper').css({'height':'100%', 'width':'100%'})
	} else if(status){
		$(select_tag).append('<div class="chart-index"></div>')

		$(select_tag).css({
			'flex-direction':position[status]
		})
		status = (status == 'top'||status == 'bottom')?'height':'width';

		if(status == 'height'){
			$(select_tag+'.chart-wrapper').css({'height':'calc(100% - 60px)'})
			$(select_tag+'.chart-index').css({'height':'60px'})
		} else {
			$(select_tag+'.chart-wrapper').css({'width':'calc(100% - 60px)'})
			$(select_tag+'.chart-index').css({'width':'60px'})
		}
	} else {
		$(select_tag).append('<div class="chart-index"></div>')
		$(select_tag).css({'flex-direction':'column'})
		$(select_tag+'.chart-wrapper').css({'height':'calc(100% - 60px)'})
		$(select_tag+'.chart-index').css({'height':'60px'})
	}
	let rightLegend = 100/dataSetMake.length;
	let chartname;
	status = $(select).data('ds-index-position');

	if(select_tag.indexOf('circle') != -1){
		chartname = 'pie';
	}
	if(select_tag.indexOf('bar') != -1){
		chartname = 'bar';
	}
	if(select_tag.indexOf('radar') != -1){
		chartname = 'radar'
	}
	if(dataSetMake.length <= 10 && (select_tag.indexOf('circle') != -1 || select_tag.indexOf('bar') != -1 || select_tag.indexOf('radar') != -1) ){
		for(var i=0; i<dataSetMake.length;i++){
			 $(select+'.chart-index').append('<div class="'+chartname+'legend" data-no="'+i+'" id='+chartname+'legend'+i+'></div>');
			if(status == 'right' || status == 'left'){
				$(select+'#'+chartname+'legend'+i).css({'height':rightLegend+'%'});
				$(select+'#'+chartname+'legend'+i).css({'width':'100%'});
			} else {
				$(select+'#'+chartname+'legend'+i).css({'text-align':'center'});
				//$(select+'#pielegend'+i).css({'flex':'auto'});			
				if(0<=dataSetMake.length && dataSetMake.length <=5){
					$(select+'#'+chartname+'legend'+i).css({'height':'100%'});				
					$(select+'#'+chartname+'legend'+i).css({'width':rightLegend+'%'});									
				}
				if(5<dataSetMake.length && dataSetMake.length <=10){
					$(select+'#'+chartname+'legend'+i).css({'width':'20%'});
					$(select+'#'+chartname+'legend'+i).css({'height':'50%'});				
				}
			}
			$(select+'#'+chartname+'legend'+i).css({'text-decoration':'none'});
			$(select+'#'+chartname+'legend'+i).css({'display':'flex'});
			$(select+'#'+chartname+'legend'+i).css({'float':'left'});
			$(select+'#'+chartname+'legend'+i).css({'position':'relative'});
			$(select+'#'+chartname+'legend'+i).css({'justify-content':'center'});
			$(select+'#'+chartname+'legend'+i).css({'align-items':'center'});

			$(select+'#'+chartname+'legend'+i).append('<div></div>');
			$(select+'#'+chartname+'legend'+i).append('<label>'+dataSetMake[i].title+'</label>');

			$(select+'#'+chartname+'legend'+i+' div').css({'float':'left'});
			$(select+'#'+chartname+'legend'+i+' label').css({'float':'left'});
			$(select+'#'+chartname+'legend'+i+' div').css({'margin':'1vmin'});
			$(select+'#'+chartname+'legend'+i+' label').css({'margin':'1vmin 0'});
			$(select+'#'+chartname+'legend'+i+' div').css({'background-color':dataSetMake[i].color});
			$(select+'#'+chartname+'legend'+i+' div').css({'width':'3vmin'});
			$(select+'#'+chartname+'legend'+i+' div').css({'height':'3vmin'});
		}
	}

}

let data_background = (dataSet, select_tag) => {
	$(select_tag+'.data-background').html(
			'<div class="axis-Y"></div>'+
			'<div class="data-area">'+
			'<div class="background"></div>'+
			'<div class="showdata"></div>'+
			'</div>'+
			'<div class="blank"></div>'+
			'<div class="axis-X"></div>'
	)

	let x = $(select_tag).data('ds-x')
	let dist_x = $(select_tag).data('ds-dist-x')
	let y = $(select_tag).data('ds-y')
	let dist_y = $(select_tag).data('ds-dist-y')

	let dataAxisNum = chartAxisNumberFormat(dataSet);
	let dataAxisString = dataAxisNum.toString();
	/*if(x == undefined){
		x = (dataAxisString.substr(0, (dataAxisString.length - 4*(Math.ceil(dataAxisString.length/4)-1))))*1;

		let dataSubFormat = y/5;
		dist_x = '';
		for(let i=0; i<dataSubFormat.toString().length; i++){
			if(i == 0){
				dist_x = dist_x + dataSubFormat.toString().substr(i,1);
			}else {
				dist_x = dist_x + 0;
			}
		}
	}*/
	if(y == undefined){
		y = (dataAxisString.substr(0, (dataAxisString.length - 4*(Math.ceil(dataAxisString.length/4)-1))))*1;
		let dataSubFormat = y/5;
		
		if(dataSubFormat % 1 != 0 &$ (y+'').length == 1) {
			y =(dataAxisString.substr(0, ((dataAxisString.length+1) - 4*(Math.ceil(dataAxisString.length/4)-1))));
			y = (y.substring(0,1) + "." + y.substring(1,y.length))*1;
			//소숫점이 존재하는지 않하는지?
			dist_y = dataSubFormat;
		} else {
			dist_y = '';
			dist_y = dataSubFormat;
		}		
	}
	if(Math.ceil(dataAxisString.length/4) == 1){

	} else if(Math.ceil(dataAxisString.length/4) == 2){
		$(select_tag+' .blank').html('( 만 )');
	} else if(Math.ceil(dataAxisString.length/4) == 3){
		$(select_tag+' .blank').html('( 억 )');
	} else if(Math.ceil(dataAxisString.length/4) == 4){
		$(select_tag+' .blank').html('( 조 )');
	} else if(Math.ceil(dataAxisString.length/4) == 5){
		$(select_tag+' .blank').html('( 경 )');
	} else {
		$(select_tag+' .blank').html('( 해 )');
	}

	if(typeof x === 'number'){
		for(let i = 0; i <= Math.ceil(x/dist_x); i++){
			$(select_tag+'.axis-X').append('<label>'+(i*dist_x)+'</label>')
		}
		$(select_tag+'.axis-X').css({'justify-content':'space-between'})
	} else {

		// type이 string 이거나 없을때 
		if(typeof x === 'string'){
			if($(select_tag).hasClass('line')){
				for(let i = 0; i <dataSet.length; i++){
					$(select_tag+'.axis-X').append('<label>'+dataSet[i]['grade']+'</label>')
				}
			} else {
				let dataNamingTransfer = '';
				try{
					dataNamingTransfer = eval($(select_tag).data('ds-transfer-naming'));
				} catch(error){
					console.error('ds-transfer-naming : Json Object dose not exist.');
				}
				let falsetrue = false;
				for(let i = 0; i < dataSet.length; i++){
					if(dataNamingTransfer != undefined){
						$.each(dataSet[i], function(key, value2){

							for(let l=0; l<dataNamingTransfer.length; l++){
								let nameValue = [];
								$.each(dataNamingTransfer[l], function(index, value){
									nameValue.push(value);
									if(index == 'transname'){
										if(key == nameValue[0]){
											$(select_tag+'.axis-X').append('<div>'+value+'</div>')
											falsetrue = false;
										}
										//조건이 하나더 있어야댐 그걸 고민중......
										if(value2[l].title == value && key != nameValue[0]){
											falsetrue = true;
										}									
									}
								})
							}
							if(falsetrue){
								$(select_tag+'.axis-X').append('<div>'+key+'</div>')
							}

						})
					} else {					
						$.each(dataSet[i], function(key){
							$(select_tag+'.axis-X').append('<div>'+key+'</div>')
						})
					}
				}
			}
		} else {
			for(let i = 0; i < dataSet.length; i++){
				$(select_tag+'.axis-X').append('<div>'+dataSet[i]['title']+'</div>')
			}

		}
		if($(select_tag).hasClass('line')){
			$(select_tag+'.axis-X').css({'justify-content':'space-between'})
		} else {
			$(select_tag+'.axis-X').css({'justify-content':'space-around'})
			$(select_tag+'.axis-X>label').css({'flex':'1'})			
		}


	}

	if(typeof y === 'number'){
		for(let i = 0; i <= Math.ceil(y/dist_y); i++){
			let iDist_y = 0;
			if(dist_y.toString().length < 4 && dist_y  % 1 != 0){
				iDist_y = (i*dist_y).toFixed(1);
			} else if(dist_y  % 1 != 0) {
				iDist_y = (i*dist_y).toFixed(2);
			} else {
				iDist_y = (i*dist_y)
			}
			$(select_tag+'.axis-Y').append('<label>'+iDist_y+'</label>')

		}
		$(select_tag+'.axis-Y').css({'justify-content':'space-between'})
	} else if(typeof y === 'string'){
		for(let i = 0; i < dataSet.length; i++){
			$(select_tag+'.axis-Y').append('<label>'+dataSet[i][$(select_tag).data('ds-y')]+'</label>')
		}
		$(select_tag+'.axis-Y').css({'justify-content':'space-around'})
		$(select_tag+'.axis-Y>label').css({'flex':'1'})
	} else {
		console.log("여기는 어떻게 해야 되는지 잘.....");
	}
}
//Axis Number Format
const chartAxisNumberFormat = function(dataSet){
	let typeofvalue = '';
	let dataSetMake;
	$.each(dataSet[0], function(key, value){
		typeofvalue = typeof value;
	})

	let xTarget = [];
	for(let j = 0;j < dataSet.length; j++){
		$.each(dataSet[j], function(key,value){
			xTarget.push(key)
		})			
	}
	if(typeofvalue === 'object'){
		dataSetMake = [];
		for(let i=0; i<dataSet.length; i++){
			dataSet[i][xTarget[i]].map(function(d, j){
				dataSetMake.push(d);
			})
		}
	} else {
		dataSetMake = dataSet;
	}

	let dataAxis = [];

	for(let i=0; i<dataSetMake.length; i++){
		dataAxis.push(dataSetMake[i].data);
	}
	let dataMax= Math.max.apply(null, dataAxis);

	let dataMaxString = dataMax.toString();
	let chartAxis = '';
	for(let i=1; i<dataMaxString.length; i++){
		if(dataMaxString.substr(i, 1) == '9' && i==1){
			chartAxis = chartAxis + ((dataMaxString.substr(0, 2) *1) + 6);
		}
		if(dataMaxString.substr(i, 1) == '8' && i==1){
			chartAxis = chartAxis + ((dataMaxString.substr(0, 2) *1) + 2);
		}
		if(dataMaxString.substr(i, 1) != '8' && dataMaxString.substr(i, 1) != '9' && i==1){
			if(dataMaxString.substr(0, 1) == '9'){
				chartAxis = chartAxis + ((dataMaxString.substr(0, 1) *1) + 1);
			} else {
				chartAxis = chartAxis + (dataMaxString.substr(0, 1) *1);
			}
			chartAxis = chartAxis + ((dataMaxString.substr(i, 1) *1) + 1)
		}
		if(i>1){
			chartAxis = chartAxis + 0;
		}
	}
	chartAxis = (chartAxis * 1);
	return chartAxis;
}