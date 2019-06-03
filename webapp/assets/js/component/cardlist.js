// cardlist ui
const cardlistSetting = () => {
    const cardlistUi = $('.ds-ui-cardlistAll')
    icons = []
    let cardlistUi_children = $(cardlistUi).children('div');;
    var icons_input = [];
    for(var i =0; i < $(cardlistUi).children('div').length; i ++){
        icons_input[i] = $(cardlistUi_children[i]).data('icon') == null ? '' : $(cardlistUi_children[i]).data('icon');
    }
    // icon end
    icons = iconLoad(icons_input)

    cardlistAfterWork_result = cardlistDataBinding();
    let data_length = ($(cardlistAfterWork_result[0]).length - 2)


    var colors = []
    cardlistAfterWork_result.map(function (dataSet, i) {
        if (data_length === 1) {
            var dataSet_inner = "<div>" + dataSet[0] + "</div>"
        }
        if (data_length === 2) {
            var dataSet_inner =
                "<div>" + dataSet[0] + "</div>" +
                "<div>" + dataSet[1] + "</div>"
        }
        if (data_length === 3) {
            var dataSet_inner =
                "<div>" + dataSet[0] + "</div>" +
                "<div>" + dataSet[1] + "</div>" +
                "<div>" + dataSet[2] + "</div>"
        }
        $(cardlistUi).append(
            "<div class ='ds-ui-cardlist' data-no='" + dataSet[dataSet.length - 1] + "'>" +
            dataSet_inner +
            "</div>"
        )
        colors[i] = dataSet[data_length];
    })
    //  setting
    const cardlist = $('.ds-ui-cardlist');
    let next = 0;
    let cardlistTextAllItem = new Array();
    const cardlistText = $('.ds-ui-cardlist').children();
    for (var i = 0; i < cardlistText.length; i++) {
        cardlistTextAllItem[i] = $(cardlistText[i]).text()
    }
    for (var i = 0; i < cardlist.length; i++) {
        if (colors[i] == null) {
            color = '#040404';
        } else {
            color = colors[i];
        }
        if (data_length === 3) {
            let cardlistTextItem = cardlistTextAllItem.slice(0 + next, data_length + next);
            const makeCardlist =
                "<div style='border-left : 15px solid " + color + "'class='cardlist'>" +
                "<div class='card-topic'>" + cardlistTextItem[0] + icons[0] + "</div>" +
                "<div class='card-content'>" +
                "<span>" + cardlistTextItem[1] + icons[1] + "</span>" +
                "<span style='color :" + color + "' >" + cardlistTextItem[2] + icons[2] + "</span>"
            "</div>" +
            "</div>"
            $(cardlist[i]).empty();
            $(cardlist[i]).append(makeCardlist);
            next += data_length;
        }
        if (data_length === 2) {
            let cardlistTextItem = cardlistTextAllItem.slice(0 + next, data_length + next);
            const makeCardlist =
                "<div style='border-left : 15px solid " + color + "'class='cardlist'>" +
                "<div class='card-topic'>" + cardlistTextItem[0] + icons[0] + "</div>" +
                "<div class='card-content'>" +
                "<span>" + cardlistTextItem[1] + icons[1] + "</span>" +
                "</div>" +
                "</div>"

            $(cardlist[i]).empty();
            $(cardlist[i]).append(makeCardlist);
            next += data_length;
            $('.card-content > span').css({
                'fontSize': '1.5rem',
                'color': 'black'
            })
        }
        if (data_length === 1) {
            let cardlistTextItem = cardlistTextAllItem.slice(0 + next, data_length + next);
            const makeCardlist =
                "<div style='border-left : 15px solid " + color + "'class='cardlist'>" +
                "<div class='card-topic'>" + cardlistTextItem[0] + icons[0] + "</div>" +
                "</div>"
            $(cardlist[i]).empty();
            $(cardlist[i]).append(makeCardlist);
            next += data_length;
            $('.card-topic').css({
                'maxWidth': '100%'
            })
        }
    }

    if ($(cardlistUi).data('setting') === true) {
        let icon_item = [];
        icon_item[0] = $(cardlistUi).data('icon');
        let icons = icon_item[0].split(' ')
        setting(cardlist, icons);
    }
}

const setting = function (target, icon_target) {
    $('.App').append(
        "<div id='ds-ui-setting'>" +
        "</div>"
        )
    const settingUi = $('#ds-ui-setting')
    const icons_items = iconLoad(icon_target)
    $(settingUi).empty();
    for (var i = 0; i < icons_items.length; i++) {
        $(settingUi).append(icons_items[i])
    }
    let targetWidth = $(target).outerWidth();
    for (var i = 0; i < target.length; i++) {
        $(target[i]).append(
            "<div class='ds-ui-setting'>" +
            $(settingUi).html() +
            "</div>"
        );
    }
    const setting = $('.ds-ui-setting');
    for (var i = 0; i < target.length; i++) {
        $(setting[i]).attr('data-no', $(target[i]).data('no'))
    }
    $(target).bind('touchstart mousedown', function (e) {
        sX = (e.type === 'mousedown') ? e.pageX : e.touches[0].screenX;
        selectTarget($(this).data('no'))
    })
    const selectTarget = (no) => $(target).bind('touchend mouseup', function (e) {
        let size = $('.App').width();
        dataNo = ($(this).attr('data-no'));
        fX = (e.type === 'mouseup') ? e.pageX : e.changedTouches[0].screenX;
        let settingWidth = (icons_items.length * 40);
        const showSetting = targetWidth + settingWidth;
        $('.ds-ui-setting').css('width', settingWidth + 'px')
        if (dataNo == no) {
            if ((fX - sX) / size > 0.20) {
                $(this).children('.ds-ui-setting').css({
                        display: "none"
                    }),
                    $(this).css({
                        transform: "translate3d(0px, 0, 0)",
                        width: targetWidth + "px"
                    })
            }
            if ((fX - sX) / size < -0.20) {
                $(this).children('.ds-ui-setting').css({

                        display: "flex"
                    }),
                    // $(target[no]).css({
                    $(this).css({
                        transform: "translate3d(" + -settingWidth + "px, 0, 0)",
                        width: showSetting + "px"
                    })
            }
        }
    
    })
}
// delete cardlist
const deleteTargetCheck = () => {
    const removeBtn = $('.removeBtn');
    if ($(removeBtn).length != 0) {
        deleteSetting(removeBtn)
    }
}
const deleteSetting = (btn) => {
    $(btn).on('click', function () {
        let no = $(this).parent().data('no')

        const cardlistItem = $('.ds-ui-cardlist');

        for (var i = 0; i < cardlistItem.length; i++) {
            // console.log($(cardlistItem[i]).data('no'), 'no')
            if ($(cardlistItem[i]).data('no') == no) {
                $(cardlistItem[i]).css('display', 'none')
                // $(cardlistItem[0]).css('display', 'none');
                // $(this).parent().parent().css('display', 'none');
            }
        }
    })
}