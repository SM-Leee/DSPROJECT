// footerSetting
const footerSetting = () => {
    let disabled,
        data;
    
    data = $('.footer').data('ds-binding');
    if ($('.footer').data('disabled') == true) {
        $('.footer').css('visibility', 'hidden')
    }
    const footerBoxList = $('.ds-ui-footerBox');
    for (var i = 0; i < footerBoxList.length; i++) {
        if ($(footerBoxList[i]).children('div').length == 2) {
            let margin_set = $(footerBoxList[i]).children('div');
            $(margin_set[0]).css('margin-right', '0.5px')
            $(margin_set[1]).css('margin-left', '0.5px')
        }
    }

    const footerAllItem = $(footerBoxList).children('div');

    for (var i = 0; i < footerAllItem.length; i++) {
        let color = $(footerAllItem[i]).data('color');
        let direction = $(footerAllItem[i]).data('direction');
        if (color == undefined) {
            color = '#2C2C2C'
        }
        if (direction == undefined) {
            direction = 'vertical'
        }
        $(footerAllItem[i]).css('background-color', color)
        $(footerAllItem[i]).addClass(direction);
    }

    //  footerDataBinding
    const footerAlltag = $(footerAllItem).children('p');
    
  
    footerDataBinding(footerAlltag, data)


    initFooter(footerBoxList, 0);
}
//initFooter 선택
const initFooter = (footerBoxList, locate) => {
    $(footerBoxList).each(function (i) {
        if (i !== locate) {
            this.style.display = 'none';
        }
    })
}