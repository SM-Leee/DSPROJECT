let radarChart = (d, select) => {
    // console.log($(select).attr('class'), $(select).attr('id'))
    let point = '';
    let count = $('.radar-background').length;
    if ($('.radar-wrapper').length === 0) {
        $(select).append(
            '<div class="radar-wrapper chart-wrapper">' +
            '<div class="radar-background"></div>' +
            '<div class="radar-showdata radar-showdata' + count + '"></div>' +
            '</div>'
        )
        // index Position 한번만 들어가야함
        index_position(select, d)
    } else {
        $('.radar-wrapper').append(
            '<div class="radar-background"></div>' +
            '<div class="radar-showdata radar-showdata' + count + '"></div>'
        )
    }
    const bgColors = [
        'rgba(97, 184, 255, 0.7)',
        'rgba(97, 255, 132, 0.66)',
        'rgba(189, 255, 97, 0.72)'
    ]
    $('.radar-showdata' + count).css({
        'background': bgColors[count]
    })

    let stand_size = layout(select + '.radar-wrapper')
    d.map(function (dataSet, i) {
        let angle = 360 / d.length * i;
        let beforedata = dataSet.data / $(select).data('max') * 50;
        // append는 한번만 해도되 line값이니까
        $(select + '.radar-background').append(
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

        // -------- 
        // 길이(=값) 산출
        point = point + ((beforedata * Math.sin(Math.PI * angle / 360 * 2)) + 50) + '% ' + ((beforedata * Math.cos(Math.PI * angle / 360 * 2) * -1) + 50) + '% ';
        if (i + 1 !== d.length) {
            point = point + ',';
        }

        $(select + ' .radar-background').append(
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