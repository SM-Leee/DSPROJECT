let bubbleChart = (dataSet, select) => {
    // console.log($(select).attr('class'), $(select).attr('id'))
    // console.log($(select).data('x'), $(select).data('y'))

    $(select).html(
        '<div class="bubble-wrapper chart-wrapper">'+
            '<div  class="bubble-background data-background"></div>'+
        '</div>'
    )
    
    index_position(select,dataSet)
    data_background(dataSet, select)

    dataSet.map(function(d, i){
        let x = (d.X/$(select).data('x')*100)
        let y = (d.Y/$(select).data('y')*100)
        let xz = d.Z/$(select).data('x')*100
        let yz = d.Z/$(select).data('y')*100
        // console.log(d.X/$(select).data('x'), d.Y/$(select).data('y'))
        
        $(select+'.showdata').append('<div class="event bubble-point bubble-point'+i+'"></div>')

        $(select+'.bubble-point'+i).css({
            'left':x+'%',
            'bottom':y+'%',
            'width':(xz*2)+'%',
            'height':(yz*2)+'%',
            'opacity':'0.7',
            'background-color':d.color
        })
    })
}