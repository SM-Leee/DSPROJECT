const cardlistSetting = () => {
    refreshevent($('#refresh'), 500)
    const cardlistUi = $('.ds-ui-cardlistAllBox')
    let icons = []
    var icons_input = [];
    let cardlistUi_children = $(cardlistUi).children('div');;
    for (var i = 0; i < cardlistUi_children.length; i++) {
        icons_input[i] = $(cardlistUi_children[i]).data('icon') == null ? '' : $(cardlistUi_children[i]).data('icon');
    }
    // icon end
    icons = iconLoad(icons_input)
    let cardlistAfterWork_result = cardlistDataBinding();
    if (!cardlistAfterWork_result) return

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
        setting(cardlist, icons, $('.ds-ui-cardlistAllBox').data('ds-mapping'));
    }


    $('#search').click(function () {
        let period_date = [];
        period_date[0] = $('#fromDate').val();
        period_date[1] = $('#toDate').val();

        $(cardlistUi).empty()

        cardlistSearch_result = cardlistSearch(cardlistAfterWork_result, period_date);
        var colors = []
        cardlistSearch_result.map(function (dataSet, i) {
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
            setting(cardlist, icons, $('.ds-ui-cardlistAllBox').data('ds-mapping'));
        }
        deleteTargetCheck();
        statuslViewCheck();
    })

}

const setting = function (target, icon_target, data) {
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
            "<div class='ds-ui-setting'" + "data-ds-mapping='" + data + "' >" +
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
        let settingWidth = (icons_items.length * 45);
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
    modifyevent();
}