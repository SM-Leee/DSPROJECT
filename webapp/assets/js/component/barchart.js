let barChart = (dataSet, select) => {
	$(select).html(
			'<div class="bar-wrapper chart-wrapper">' +
			'<div class="bar-background data-background"></div>' +
			'</div>'
	)
	index_position(select, dataSet)
	let chartAxis = chartAxisNumberFormat(dataSet)
	data_background(dataSet, select)
	let pos = 100 / dataSet.length
	let typeofvalue = '';
	$.each(dataSet[0], function(key,value){
		typeofvalue = typeof value;
	})
	if(typeofvalue === 'object'){
		let xTarget = [];
		for(let j = 0;j < dataSet.length; j++){
			$.each(dataSet[j], function(key,value){
				//console.log(key)
				xTarget.push(key)
			})			
		}
		
		for(let j = 0;j < dataSet.length; j++){
			dataSet[j][xTarget[j]].map(function (d, i) {
				let countNum = (i+(j*dataSet[j][xTarget[j]].length));
				$(select + '.showdata').append(
						'<div class="bar-showdata bar-showdata' + countNum + '">' +
						'<div class="bar-showValue bar-showValue' + countNum + '">' +
						d.data + 
						'</div>' +
						'</div>'
				)
				$(select + '.bar-showdata' + countNum).css({
						'bottom': '0%',
						'width' : '15px',
						//left 값 수정 하기 
						// 'left':'calc('+(pos*i)+'% + '+($(select+'.bar-showdata').width()/2)+'px)',
						'height': (d.data / chartAxis * 100) + '%',
						'background-color': d.color
					})
				if(i == 0){
					$(select + '.bar-showdata' + countNum).css({
						'left': 'calc(' + pos * (2 * j + 1) / 2 + '% - ' + $(select + ".bar-showdata").width()* (dataSet[j][xTarget[j]].length/2) + 'px)'
					})
				}else {
					$(select + '.bar-showdata' + countNum).css({
						'height': (d.data / chartAxis * 100) + '%'
					})
					if(dataSet[j][xTarget[j]].length%2 == 1){
						//홀수
						if(dataSet[j][xTarget[j]].length/2 > i){
							$(select + '.bar-showdata' + countNum).css({
								'left': 'calc(' + pos * (2 * j + 1) / 2 + '% - ' + $(select + ".bar-showdata").width()* ((dataSet[j][xTarget[j]].length-(i*2))/2) + 'px)'
							})							
						} else {
							$(select + '.bar-showdata' + countNum).css({
								'left': 'calc(' + pos * (2 * j + 1) / 2 + '% + ' + $(select + ".bar-showdata").width()* (Math.abs((dataSet[j][xTarget[j]].length-(i*2)))/2) + 'px)'
							})
						}
					}
					if(dataSet[j][xTarget[j]].length%2 == 0){
						//짝수
						if(dataSet[j][xTarget[j]].length/2 > i){
							$(select + '.bar-showdata' + countNum).css({
								'left': 'calc(' + pos * (2 * j + 1) / 2 + '% - ' + $(select + ".bar-showdata").width()* ((dataSet[j][xTarget[j]].length-(i*2))/2) + 'px)'
							})							
						} else {
							$(select + '.bar-showdata' + countNum).css({
								'left': 'calc(' + pos * (2 * j + 1) / 2 + '% + ' + $(select + ".bar-showdata").width()* (Math.abs((dataSet[j][xTarget[j]].length-(i*2)))/2) + 'px)'
							})
						}
					}
					
				}
			})
		}
	} else {
		dataSet.map(function (d, i) {
			$(select + '.showdata').append(
					'<div class="bar-showdata bar-showdata' + i + '">' +
					'<div class="bar-showValue bar-showValue' + i + '">' +
					d.data + 
					'</div>' +
					'</div>'
			)
			$(select + '.bar-showdata' + i).css({
				'bottom': '0%',
				'width' : '20px',
				/* left 값 수정 하기 */
				// 'left':'calc('+(pos*i)+'% + '+($(select+'.bar-showdata').width()/2)+'px)',
				'height': (d.data / chartAxis * 100) + '%',
				'background-color': d.color
			})
			$(select + '.bar-showdata' + i).css({
				'left': 'calc(' + pos * (2 * i + 1) / 2 + '% - ' + $(select + ".bar-showdata").width() / 2 + 'px)'
			})
		
			// 만약 bar Width가 바뀐다면
			// let eachBarWidth = $('.bar-showdata'+i).width();
			$(select + '.bar-showValue' + i).css({
				'color': d.color
			})
		})
	}
}