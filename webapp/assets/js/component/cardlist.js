// cardlist ui
const cardlistSetting = () => {
    const cardlist = $('.ds-ui-cardlist');
    let next = 0;
    let cardlistTextAllItem = new Array();
    const cardlistText = $('.ds-ui-cardlist').children();
    for (var i = 0; i < cardlistText.length; i++) {
        cardlistTextAllItem[i] = $(cardlistText[i]).text()
    }
    for (var i = 0; i < cardlist.length; i++) {
        let color = $(cardlist[i]).data('color');
        if (color == null) {
            color = '#040404';
        }
        let cardlistTextItem = cardlistTextAllItem.slice(0 + next, 3 + next);
        const subTopic =
            "<div style='border-left : 15px solid " + color + "'class='cardlist'>" +
            "<div class='card-topic'>" + cardlistTextItem[0] + "</div>" +
            "<div class='card-content'>" +
            "<span>" + cardlistTextItem[1] + "</span>" +
            "<span style='color :" + color + "' >" + cardlistTextItem[2] + "&nbsp<i class='fas fa-won-sign'></i></span>" +
            "</div>" +
            "</div>"
        $(cardlist[i]).empty();
        $(cardlist[i]).append(subTopic);
        next += 3;
    }
    setting();
}
const settingItem =
    "<div class='ds-ui-setting'>" +
    "<i class='fas fa-trash-alt'></i>" +
    "<i class='fas fa-wrench'></i>" +
    "</div>";
const setting = function () {
    const cardlist = $('.ds-ui-cardlist');
    let cardlistWidth = $('.cardlist-wrapper').outerWidth();
    
// $('.cardlist').width(cardlistWidth + 'px');
    for (var i = 0; i < cardlist.length; i++) {
        $(cardlist[i]).append(settingItem);
    }
    const setting = $('.ds-ui-setting');
    for (var i = 0; i < cardlist.length; i++) {
        $(cardlist[i]).attr('data-no', i);
        $(setting[i]).attr('setting-no', i)
    }
    $(cardlist).bind('touchstart', function (e) {
//        e.preventDefault();
        sX = e.touches[0].screenX;
        selectCardlist($(this).attr('data-no'))
    })
    const selectCardlist = (no) => $(cardlist).bind('touchend', function (e) {
        dataNo = ($(this).attr('data-no'));
        fX = e.changedTouches[0].screenX;
        const showSetting = cardlistWidth + 80;
        if (dataNo == no) {
            if ((fX - sX) / size > 0.20) {
                $(setting[no]).css({
                        display: "none"
                    }),
                    $(cardlist[no]).css({
                        transform: "translate3d(0px, 0, 0)",
                        width: cardlistWidth + "px"
                    })
            }
            if ((fX - sX) / size < -0.20) {
                $(setting[no]).css({
                        display: "flex"
                    }),
                    $(cardlist[no]).css({
                        transform: "translate3d(-80px, 0, 0)",
                        width: showSetting + "px"
                    })
            }
        }else {
        	  $(setting[no]).css({
                  display: "none"
              }),
              $(cardlist[no]).css({
                  transform: "translate3d(0px, 0, 0)",
                  width: cardlistWidth + "px"
              })
        }
    })
}