let pieChart = (dataSet, select) => {
    console.log($(select).attr('class'), $(select).attr('id'))
    let sum = 0;
    let value = 0;
    let rotate = 0;
    let index_tag = '';

    for(let i = 0; i < dataSet.length; i++){
        sum = sum + dataSet[i].data;
    }

    // $(select).css({
        /* 부모 요소의 width와 height값 비교해서 설정하는 수식 작성 !!! */
        // 'height':$(select).width()
    // })
    $(select).html(
        '<div class="pie-wrapper chart-wrapper">'+
            '<div class="circle-shape"></div>'+
        '</div>'
    )

    index_position(select,dataSet);

    let stand_size = layout(select+'.pie-wrapper');
    // console.log($('.circle-shape').css('margin'))
    // console.log(stand_size)
    $(select+'.circle-shape').css({
        'width':'calc('+stand_size+'px - 1rem)',
        'height':'calc('+stand_size+'px - 1rem)',
        'top':'calc(50% - '+(stand_size/2)+'px)',
        'left':'calc(50% - '+(stand_size/2)+'px)',
    })

    dataSet.map(function(d, index){
        // console.log("test");
        value = d.data / sum;
        $(select + '.circle-shape').append('<div class="event pie'+(index+1)+' pie" data-value="'+d.data+'"></div>');

        let tag = '.pie'+(index+1);
        let clip;

        if(0 <= value && value < 0.25){
            clip = Math.tan(Math.PI * value * 2) / (Math.tan(Math.PI * value * 2) + 1) * 100;
            clip = 'polygon(0 0, '+clip+'% 0, '+clip+'% 0, '+clip+'% 0, '+clip+'% 0, 50% 50%)';

        } else if(0.25 <= value && value < 0.5){
            clip = Math.tan(Math.PI * (value - 0.25) * 2) / (Math.tan(Math.PI * (value - 0.25) * 2) + 1) * 100;
            clip = 'polygon(0 0, 100% 0, 100% '+clip+'%, 100% '+clip+'%, 100% '+clip+'%, 50% 50%)';

        } else if(0.5 <= value && value < 0.75){
            clip = Math.tan(Math.PI * (value - 0.5) * 2) / (Math.tan(Math.PI * (value - 0.5) * 2) + 1) * 100;
            clip = 'polygon(0 0, 100% 0, 100% 100%, '+(100-clip)+'% 100%, '+(100-clip)+'% 100%, 50% 50%)';

        } else if(0.75 <= value && value < 1){
            clip = Math.tan(Math.PI * (value - 0.75) * 2) / (Math.tan(Math.PI * (value - 0.75) * 2) + 1) * 100;
            clip = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%, 0% '+(100-clip)+'%, 50% 50%)';
        }
        $(select + tag).css({
            'background-color': d.color,
            'clip-path': '-webkit-'+clip,
            'clip-path': clip,
            'transform': "rotate(" + (rotate+45) +"deg)"
        });
        rotate = rotate + (value * 360); 
    })
}