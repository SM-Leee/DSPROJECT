let barChart = (dataSet, select) => {
    // console.log(dataSet)
    // console.log(select)
    $(select).html(
        '<div class="bar-wrapper chart-wrapper">'+
            '<div class="bar-background data-background"></div>'+
        '</div>'
    )
    index_position(select, dataSet)
    data_background(dataSet, select)

    let pos = 100/dataSet.length
    dataSet.map(function(d, i){
        $(select+'.showdata').append('<div class="bar-showdata bar-showdata'+i+'"></div>')
        $(select+'.bar-showdata'+i).css({
            'bottom':'0%',
            /* left 값 수정 하기 */
            // 'left':'calc('+(pos*i)+'% + '+($(select+'.bar-showdata').width()/2)+'px)',
            'left':'calc('+pos*(2*i+1)/2+'% - '+$(select+".bar-showdata").width()/2+'px)',
            'height':(d.data/$(select).data('y')*100) + '%',
            'background-color':d.color
        })
    })
}