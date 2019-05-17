let radarChart = (d, select) => {
    console.log($(select).attr('class'), $(select).attr('id'))
    let point = '';

    $(select).html(
        '<div class="radar-wrapper chart-wrapper">'+
            '<div class="radar-background"></div>'+
            '<div class="radar-showdata"></div>'+
        '</div>'
    )
    index_position(select, dataSet)
    let stand_size = layout(select+'.radar-wrapper')

    dataSet.map(function(d, i){
        let angle = 360/dataSet.length*i;
        let beforedata = d.data/$(select).data('max')*50;

        // console.log(angle, beforedata)
        $(select+'.radar-background').append("<div class='stand-line stand-line"+i+"'></div>")
        $(select+'.stand-line'+i).css({
            'transform':"rotate(" + angle + "deg)"
        })

        point = point + ((beforedata*Math.sin(Math.PI * angle/360 *2))+50)+'% '+ ((beforedata*Math.cos(Math.PI * angle/360 *2)*-1)+50)+'% ';
        if(i+1 !== dataSet.length){point = point + ',';}

        // $('.radar-background').append("<div class='event data-point data-point"+index+"' data-value='"+data.data+"'></div>")
        $(select + ' .radar-background').append("<div class='event data-point data-point"+i+"' data-value='"+d.data+"'></div>")
        $(select + ' .data-point'+i).css({
            'left':'calc('+((beforedata*Math.sin(Math.PI * angle/360 *2))+50)+'% - 0.5rem)',
            'top':'calc(' + ((beforedata*Math.cos(Math.PI * angle/360 *2)*-1)+50)+'% - 0.5rem)'
        })
    })

    $(select+'.radar-background, '+select+'.radar-showdata').css({
        'margin':'0.5rem',
        'width':'calc('+stand_size+'px - 1rem)',
        'height':'calc('+stand_size+'px - 1rem)',
        'top':'calc(50% - '+(stand_size/2)+'px)',
        'left':'calc(50% - '+(stand_size/2)+'px)',
    })
    $(select + '.radar-showdata').css({
        'clip-path':'-webkit-polygon(' + point + ')',
        'clip-path':'polygon(' + point + ')'
    })
}