let lineChart = (dataSet, select) => {
    // console.log($(select).attr('class'), $(select).attr('id'))
    let point = '';
    let dist = ($(select).data('max')-$(select).data('min'))/$(select).data('dist');

    $(select).html(
        '<div class="line-wrapper chart-wrapper">'+
            '<div  class="line-background data-background"></div>'+
        '</div>'
    )
    //index_position(select, dataSet)
    data_background(dataSet, select)
    $(select+'.line-wrapper').css({'height':'100%', 'width':'100%'})
   
    /* 가로선 그리는 부분 */
    /* 좀 더 수정이 필요함 */
    // for(let i = 0; i < dist; i++){
    //     $(select + '.line-background').append('<div class="stand-line stand-line'+i+'"></div>');
    //     $(select + '.stand-line'+i).css({
    //         'top':(100/dist*i) + '%'
    //     })
    // }

    dataSet.map(function(d, i){
  
        let X_value = 100/(dataSet.length-1)*i;
        // let beforedata = (100-(d.data-$(select).data('min'))/($(select).data('y')-$(select).data('min'))*100);
        let beforedata = (100-(d.data-0)/($(select).data('y')-0)*100);

        point = point + X_value + '% ' + beforedata + '% ';
        if(i+1 !== dataSet.length){point = point + ',';}

        $(select + '.background').append(
            '<div class="event data-point data-point' + i +
            '" data-value="' + d.data + '">' + 
            '<div class="data-point-value data-point-value' + i + '">' + d.data +
            '</div>' +
            '</div>')
        $(select + '.data-point'+i).css({
            'top':'calc('+beforedata+'% - 0.5rem)',
            'left':'calc('+X_value+'% - 0.5rem)'
        })
    })
    point = 'polygon(' + point + ',100% 100%, 0 100%)';
    
    let stand_size = ($(select+'.line-wrapper').height()/2*3 < $(select+'.line-wrapper').width()) ? $(select+'.line-wrapper').height() : $(select+'.line-wrapper').width();

    $(select+'.showdata').append('<div class="line-showdata"></div>')
    $(select + '.line-background').css({
        'top': 'calc(0)',
        'left': 'calc(0)',
        'width': '100%',
        'height': '100%'
    })

    $(select + '.line-showdata').css({
        'clip-path': '-webkit-'+point,
        'clip-path': point
    })
    
}