let radarChart = (d, select, keyItem) => {
	let newSet = []; //새로운 dataSet 만들기
	let point = '';
	let count = $(select + '.radar-background').length;
	if ($(select + '.radar-wrapper').length === 0) {
		$(select).append(
				'<div class="radar-wrapper chart-wrapper">' +
				'<div class="radar-background-basic"></div>' +
				'</div>'
		)
		for (var i = 0; i < keyItem.length; i++) {
			var keyItems = new Object();
			keyItems.title = keyItem[i];
			keyItems.color = chartColor[i];
			newSet.push(keyItems);
		}
		index_position(select, newSet)
	}
	$(select + '.radar-wrapper').append(
			'<div class="radar-background radar-background' + count + '"></div>' +
			'<div class="radar-showdata radar-showdata' + count + '"></div>'
	)
	$(select + '.radar-showdata' + count).css({
		'opacity': '0.35',
		'background': chartColor[count]
	})
	let stand_size = layout(select + '.radar-wrapper')
	d.map(function (dataSet, i) {
		let angle = 360 / d.length * i;
		let beforedata = 0;
		if ($(select).data('max') != undefined) {
			beforedata = dataSet.data / $(select).data('max') * 50;
		} else {
			beforedata = dataSet.data / 1 * 50;
		}//$(select + '.radar-background-basic .stand-line').length
		if($(select + '.radar-background-basic .stand-line').length < d.length){
			$(select + '.radar-background-basic').append(
					"<div class='stand-line stand-line" + i + "'>" +
					"<div class='stand-line-value stand-line-value" + i + "'>" + dataSet.title +
					"</div>" +
					"</div>"
			)

			$(select + '.stand-line' + i).css({
				'transform': "rotate(" + angle + "deg)"
			})
			let reverangle = -angle;
			$(select + '.stand-line-value' + i).css({
				'transform': "rotate(" + reverangle + "deg)"
			})
		}
		point =
			point +
			((beforedata * Math.sin(Math.PI * angle / 360 * 2)) + 50) +
			'% ' +
			((beforedata * Math.cos(Math.PI * angle / 360 * 2) * -1) + 50) +
			'% ';

		if (i + 1 !== d.length) {
			point = point + ',';
		}

		$(select + ' .radar-background' + count).append(
				"<div class='event data-count" + count + " data-point data-point" + i +
				"' data-value='" + dataSet.data + "'>" +
				"<div class='data-point-value data-point-value" + i + "'>" +
				"</div>" +
				"</div>"
		)
		$(select + '.data-count' + count + '.data-point' + i).css({
			'left': 'calc(' + ((beforedata * Math.sin(Math.PI * angle / 360 * 2)) + 50) + '% - 0.33rem)',
			'top': 'calc(' + ((beforedata * Math.cos(Math.PI * angle / 360 * 2) * -1) + 50) + '% - 0.27rem)',
		})


	})
	stand_size = stand_size - 20;
	$(select + '.radar-background-basic ,' + select + '.radar-background, ' + select + '.radar-showdata').css({
		'margin': '0.5rem',
		'width': 'calc(' + stand_size + 'px - 1rem)',
		'height': 'calc(' + stand_size + 'px - 1rem)',
		'top': 'calc(50% - ' + (stand_size / 2) + 'px)',
		'left': 'calc(50% - ' + (stand_size / 2) + 'px)',
	})
	$(select + '.radar-showdata' + count).css({
		'clip-path': '-webkit-polygon(' + point + ')',
		'clip-path': 'polygon(' + point + ')'
	})
	$(select + ' .radar-background' + count).children('.data-point').css({
		'background': chartColor[count],
		'opacity': '1'
	})
	$(select + '.basic-line').css({
		'position': 'relative',
		'box-sizing': 'border-box',
		'margin': '0.5rem',
		'width': 'calc(' + stand_size + 'px - 1rem)',
		'height': 'calc(' + stand_size + 'px - 1rem)',
		'top': 'calc(50% - ' + (stand_size / 2) + 'px)',
		'left': 'calc(50% - ' + (stand_size / 2) + 'px)',
		'border': '2px solid black',
		'border-radius': '50%'
	})

	if (count == 0) {
		for (var i = 0; i < 10; i++) {
			$('.radar-background-basic').append(
					'<div class="basic-circle basic-circle' + i + '"></div>'
			)
			var percent = $(select + ' .radar-background' + count).width();
			var percent2 = $(select + ' .radar-background' + count).height()
			$('.basic-circle' + i).css({
				'width': percent / 10 * i + 'px',
				'height': percent2 / 10 * i + 'px',
				'border-radius': '50%',
			})
			var calWidth = (percent / 2) - $('.basic-circle' + i).width() / 2;
			$('.basic-circle' + i).css({
				'top': calWidth + 'px',
				'left': calWidth + 'px'
			})
		}
	}

}

