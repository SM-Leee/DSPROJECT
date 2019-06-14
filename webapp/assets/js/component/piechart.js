let pieChart = (dataSet, select) => {
	let sum = 0;
	let value = 0;
	let index_tag = '';

	for(let i = 0; i < dataSet.length; i++){
		sum = sum + dataSet[i].data;
	}
	
	$(select).html(
			'<div class="pie-wrapper chart-wrapper">'+
			'<div class="circle-shape"></div>'+
			'</div>'
	);

	index_position(select,dataSet);

	let stand_size = layout(select+'.pie-wrapper');

	$(select+'.circle-shape').css({
		'width':'calc('+stand_size+'px - 1rem)',
		'height':'calc('+stand_size+'px - 1rem)',
		'top':'calc(50% - '+(stand_size/2)+'px)',
		'left':'calc(50% - '+(stand_size/2)+'px)',
	})
	let angle = 0;
	let startClip = 0;
	let endClip = 0;
	let prevAngle = 0;
	dataSet.map(function(d, index){
		prevAngle = angle;
		value = d.data / sum;

		$(select + '.circle-shape').append('<div class="event pie'+(index+1)+' pie" data-ds-value="'+d.data+'" data-ds-circletitle="'+d.title+'"></div>');

		let tag = '.pie'+(index+1);
		let clip;
		angle = value +angle;
		startClip = endClip;
		if(0 <= angle && angle < 0.125){
			endClip = Math.tan(Math.PI * angle * 2)*50;
			endClip = 50+endClip;
		}
		if(0.125 <= angle && angle < 0.25){
			endClip = Math.tan(Math.PI * (0.25-angle) * 2)*50;
			endClip = 50-endClip;
		}
		if(0.25 <= angle && angle < 0.375){
			endClip = Math.tan(Math.PI*(angle-0.25)*2)*50;
			endClip = 50+endClip;
		}
		if(0.375 <= angle && angle < 0.5){
			endClip = Math.tan(Math.PI*(0.5-angle)*2)*50;
			endClip = 50+endClip;
		}
		if(0.5 <= angle && angle < 0.625){
			endClip = Math.tan(Math.PI*(angle-0.5)*2)*50;
			endClip = 50 - endClip;
		}
		if(0.625 <= angle && angle < 0.75){
			endClip = Math.tan(Math.PI*(0.75-angle)*2)*50;
			endClip = 50+endClip;
		}
		if(0.75 <= angle && angle < 0.875){
			endClip = Math.tan(Math.PI*(angle-0.75)*2)*50;
			endClip = 50-endClip;
		}
		if(0.875 <= angle && angle <= 1){
			endClip = Math.tan(Math.PI*(1-angle)*2)*50;
			endClip = 50-endClip;
		}

		if(0 <= angle && angle < 0.125){
			if(startClip ==0){
				clip = 'polygon(50% 0, '+endClip+'% 0, 50% 50%)';
			} else {
				clip = 'polygon('+startClip+'% 0, '+endClip+'% 0, 50% 50%)';
			}
		} else if(0.125 <= angle && angle < 0.375){
			if(0<=prevAngle && prevAngle < 0.125){
				if(startClip == 0){
					startClip = 50+startClip;
				}
				clip = 'polygon('+startClip+'% 0, 100% 0, 100% '+endClip+'%, 50% 50%)';
			}else{
				clip = 'polygon(100% '+startClip+'%, 100% '+endClip+'%, 50% 50%)';
			}
		} else if(0.375 <= angle && angle < 0.625){

			if(0<=prevAngle && prevAngle < 0.125){
				if(startClip == 0){
					startClip = 50+startClip;
				}
				clip = 'polygon('+startClip+'% 0, 100% 0,100% 100% ,'+endClip+'% 100%, 50% 50%)';
			} else if(0.125<=prevAngle && prevAngle < 0.375){
				clip = 'polygon(100% '+startClip+'% ,100% 100%, '+endClip+'% 100%, 50% 50%)';
			} else {
				clip = 'polygon('+startClip+'% 100%, '+endClip+'% 100%, 50% 50%)';
			}
		} else if(0.625 <= angle && angle < 0.875){

			if(0<=prevAngle && prevAngle < 0.125){
				if(startClip == 0){
					startClip = 50+startClip;
				}
				clip = 'polygon('+startClip+'% 0,100% 0, 100% 100%,0 100%, 0 '+endClip+'%, 50% 50%)';
			} else if(0.125<=prevAngle && prevAngle < 0.375){
				clip = 'polygon(100% '+startClip+'% ,100% 100%, 0 100%, 0 '+endClip+'%, 50% 50%)';
			} else if(0.375<=prevAngle && prevAngle < 0.625){
				clip = 'polygon('+startClip+'% 100%, 0 100%, 0 '+endClip+'%, 50% 50%)';
			} else {
				clip = 'polygon(0 '+startClip+'%, 0 '+endClip+'%, 50% 50%)';
			}
		} else {
			if(0<=prevAngle && prevAngle < 0.125){
				if(startClip == 0){
					startClip = 50+startClip;
				}
				clip = 'polygon('+startClip+'% 0,100% 0, 100% 100%,0 100%, 0 0,'+endClip+'% 0, 50% 50%)';
			} else if(0.125<=prevAngle && prevAngle < 0.375){
				clip = 'polygon(100% '+startClip+'% ,100% 100%, 0 100%, 0 0,'+endClip+'% 0, 50% 50%)';
			} else if(0.375<=prevAngle && prevAngle < 0.625){
				clip = 'polygon('+startClip+'% 100%, 0 100%, 0 0,'+endClip+'% 0, 50% 50%)';
			} else if(0.625<=prevAngle && prevAngle < 0.875){
				clip = 'polygon( 0 '+startClip+'%, 0 0, '+endClip+'% 0, 50% 50%)';
			} else {
				clip = 'polygon('+startClip+'% 0, '+endClip+'% 0, 50% 50%)';
			}
		}
		
		$(select + tag).css({
			'background-color': d.color,
			'clip-path': '-webkit-'+clip,
			'clip-path': ''+clip
		}); 
	})
	$(select + '.circle-shape').append(
			'<div class= "event circle-z-index">'+
			'</div>'
	).append(
			'<div class= "event circle-percent-box">'+
			'<div class="circle-percent">'+
			'<div>'+
			'<p class="circle-title"></p>'+
			'<p class="circle-percent-item"></p>'+
			'</div>'+
			'</div>'+
			'</div>'
	);
}