let newSet = []; //새로운 dataSet 만들기
let radarChart = (d, select, keyItem) => {
    let point = '';
    let count = $('.radar-background').length;
    
    if ($('.radar-wrapper').length === 0) {
        $(select).append(
            '<div class="radar-wrapper chart-wrapper">' +
            '<div class="radar-background radar-background' + count + '"></div>' +
            '<div class="radar-showdata radar-showdata' + count + '"></div>' +
            '</div>'
        )
        for (var i = 0; i < keyItem.length; i++) {
            var keyItems = new Object();
                keyItems.title = keyItem[i];
                keyItems.color = chartColor[i];
                newSet.push(keyItems);
            }
        index_position(select, newSet)

    } else {
        $('.radar-wrapper').append(
            '<div class="radar-background radar-background' + count + '"></div>' +
            '<div class="radar-showdata radar-showdata' + count + '"></div>'
        )
    }

    // const background = [
    //     '#FF7F50',
    //     '#00FFFF',
    //     '#7CFC00',
    //     '#8A2BE2'
    // ]

    const border = [
        '#FF0000',
        '#0000FF',
        '#00FF00',
        '#82118A'
    ]
    $('.radar-showdata' + count).css({
        'opacity': '0.37',
        'background': chartColor[count]
        // 'border': border[count]
    })

    let stand_size = layout(select + '.radar-wrapper')
    d.map(function (dataSet, i) {
        let angle = 360 / d.length * i;
        let beforedata = 0;
		if($(select).data('max') != undefined){
			beforedata = dataSet.data / $(select).data('max') * 50;
		} else {
			beforedata = dataSet.data / 1 * 50;        	
		}
        if ($('.radar-background').length === 1) {
            $(select + '.radar-background').append(
                "<div class='stand-line stand-line" + i + "'>" +
                "<div class='stand-line-value stand-line-value" + i + "'>" + dataSet.title +
                "</div>" +
                "</div>"
            )
        }
        $(select + '.stand-line' + i).css({
            'transform': "rotate(" + angle + "deg)"
        })
        let reverangle = -angle;
        $(select + '.stand-line-value' + i).css({
            'transform': "rotate(" + reverangle + "deg)"
        })

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
            "<div class='data-point-value data-point-value" + i + "'>" + dataSet.data +
            "</div>" +
            "</div>"
        )
        $(select + '.data-count' + count + '.data-point' + i).css({
            'left': 'calc(' + ((beforedata * Math.sin(Math.PI * angle / 360 * 2)) + 50) + '% - 0.5rem)',
            'top': 'calc(' + ((beforedata * Math.cos(Math.PI * angle / 360 * 2) * -1) + 50) + '% - 0.5rem)',
        })
    })
    stand_size = stand_size - 40;
    $(select + '.radar-background, ' + select + '.radar-showdata').css({
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

}