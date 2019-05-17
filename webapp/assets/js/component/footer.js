// footerSetting
const footerSetting = () => {
    const footerBoxList = $('.ds-ui-footerBox');
    const footerAllItem = $(footerBoxList).children('div');
    for (var i = 0; i < footerAllItem.length; i++) {
        let color = $(footerAllItem[i]).data('color');
        let direction = $(footerAllItem[i]).data('direction');
        $(footerAllItem[i]).css('background-color', color)
        $(footerAllItem[i]).addClass(direction);
    }
    initFooter(footerBoxList,0);
    
}
//initFooter 선택
const initFooter = (footerBoxList, locate) => {
    $(footerBoxList).each(function (i) {
        if (i !== locate) {
            this.style.display = 'none';
        }
    })
}
