//chart
let layout = (className) => {
	// console.log($(className));
	return ($(className).height() < $(className).width() ? $(className).height() : $(className).width());
	// return 300;
}
let index_position = (select_tag, dataSet) => {
	let position = {
			'top':'column-reverse',
			'right':'row',
			'left':'row-reverse',
			'bottom':'column',
			'none':''
	}
	let status = $(select).data('index-position');


	if(status == 'none' || 10 < dataSet.length ) {
		$(select_tag+'.chart-wrapper').css({'height':'100%', 'width':'100%'})
	} else if(status){
		// console.log(status)
		$(select_tag).append('<div class="chart-index"></div>')

		$(select_tag).css({
			'flex-direction':position[status]
		})
		status = (status == 'top'||status == 'bottom')?'height':'width';
		// console.log(status)
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
	let rightLegend = 100/dataSet.length;
	let chartname;
	status = $(select).data('index-position');
	if(select.indexOf('circle') != -1){
		chartname = 'pie';
	}
	if(select.indexOf('bar') != -1){
		chartname = 'bar';
	}
	if(dataSet.length <= 10 && (select.indexOf('circle') != -1 || select.indexOf('bar') != -1)){
		for(var i=0; i<dataSet.length;i++){
			$(select+'.chart-index').append('<div id='+chartname+'legend'+i+'></div>');
			if(status == 'right' || status == 'left'){
				$(select+'#'+chartname+'legend'+i).css({'height':rightLegend+'%'});
				$(select+'#'+chartname+'legend'+i).css({'width':'100%'});
			} else {
				$(select+'#'+chartname+'legend'+i).css({'text-align':'center'});
				//$(select+'#pielegend'+i).css({'flex':'auto'});			
				if(0<=dataSet.length && dataSet.length <=5){
					$(select+'#'+chartname+'legend'+i).css({'height':'100%'});				
					$(select+'#'+chartname+'legend'+i).css({'width':rightLegend+'%'});									
				}
				if(5<dataSet.length && dataSet.length <=10){
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
			$(select+'#'+chartname+'legend'+i).append('<label>'+dataSet[i].title+'</label>');

			$(select+'#'+chartname+'legend'+i+' div').css({'float':'left'});
			$(select+'#'+chartname+'legend'+i+' label').css({'float':'left'});
			$(select+'#'+chartname+'legend'+i+' div').css({'margin':'1vmin'});
			$(select+'#'+chartname+'legend'+i+' label').css({'margin':'1vmin 0'});
			$(select+'#'+chartname+'legend'+i+' div').css({'background-color':dataSet[i].color});
			$(select+'#'+chartname+'legend'+i+' div').css({'width':'3vmin'});
			$(select+'#'+chartname+'legend'+i+' div').css({'height':'3vmin'});
		}
	}

}
let data_background = (dataSet, select_tag) => {
	// console.log(select_tag)
	$(select_tag+'.data-background').html(
			'<div class="axis-Y"></div>'+
			'<div class="data-area">'+
			'<div class="background"></div>'+
			'<div class="showdata"></div>'+
			'</div>'+
			'<div class="blank"></div>'+
			'<div class="axis-X"></div>'
	)

	let x = $(select_tag).data('x')
	let dist_x = $(select_tag).data('dist-x')
	let y = $(select_tag).data('y')
	let dist_y = $(select_tag).data('dist-y')

	if(typeof x === 'number'){
		for(let i = 0; i <= Math.ceil(x/dist_x); i++){
			$(select_tag+'.axis-X').append('<label>'+(i*dist_x)+'</label>')
		}
		$(select_tag+'.axis-X').css({'justify-content':'space-between'})
	} else if(typeof x === 'string'){
		// console.log(dataSet[0][$(select_tag).data('x')])
		for(let i = 0; i < dataSet.length; i++){
			// for(let i = 0; i < 5; i++){
			$(select_tag+'.axis-X').append('<div>'+dataSet[i][$(select_tag).data('x')]+'</div>')
		}
		$(select_tag+'.axis-X').css({'justify-content':'space-around'})
		$(select_tag+'.axis-X>label').css({'flex':'1'})
	} else {
		console.log("여기는 어떻게 해야 되는지 잘.....");
	}

	if(typeof y === 'number'){
		// console.log("number");
		for(let i = 0; i <= Math.ceil(y/dist_y); i++){
			$(select_tag+'.axis-Y').append('<label>'+(i*dist_y)+'</label>')
		}
		$(select_tag+'.axis-Y').css({'justify-content':'space-between'})
	} else if(typeof y === 'string'){
		// console.log("string");
		// console.log(dataSet[0][$(select_tag).data('x')])
		for(let i = 0; i < dataSet.length; i++){
			$(select_tag+'.axis-Y').append('<label>'+dataSet[i][$(select_tag).data('y')]+'</label>')
		}
		$(select_tag+'.axis-Y').css({'justify-content':'space-around'})
		$(select_tag+'.axis-Y>label').css({'flex':'1'})
	} else {
		console.log("여기는 어떻게 해야 되는지 잘.....");
	}
}