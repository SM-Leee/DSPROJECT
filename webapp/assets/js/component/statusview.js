let statusViewHTML =
    "<div class='statusViewBox'>" +
    "<div class='overlay'></div>" +
    "<div class='statusView'>" +
    "<div class='statusView-content'>" +
    // "<div class='statusView-header'>" +
    // "</div>" +
    // "<div class='statusView-body'></div>" +
    // "</div>" +
    "</div>" +
    "</div>"
//  부모의 setting-no 값 가져오면 된다.
const statuslViewCheck = () => {
    const statusViewBtn = $('.statusViewBtn');
    if ($(statusViewBtn).length != 0) {
        statusViewSetting(statusViewBtn)
    }
}
// status View
const statusViewSetting = (btn) => {
    $(btn).on('click', function (e) {
        let no = $(this).parent().data('no')
        //  ($(btn).parent().data('no'));
        let statusViewData = statusViewMapping(no);
        const statusViewUi = $('#ds-ui-statusView')
        const statusViewSetting_children = $(statusViewUi).children();

        let statusResult = {}

        var keyname = ''
        let statusCols = [];
        let statusItems = [];
        for (var i = 0; i < statusViewSetting_children.length; i++) {
            statusItems[i] = $(statusViewSetting_children[i]).data('detail')
            statusCols[i] = $(statusViewSetting_children[i]).data('col')
            $.each(statusViewData, function (key, value) {
                if (statusItems[i] == key) {
                    statusResult[keyname + statusItems[i]] = value
                }
            })
        }
        var header = ''
        var body = ''
        const defaultImgIcon =
            "<div class='status-img'>" +
            "<i class='far fa-image'></i>" +
            "</div>"
        for (var i = 0; i < statusItems.length; i++) {
            if (statusCols[i] == 'header') {
                let icon = (Object.values(statusResult)[i] == '') ? defaultImgIcon :
                    "<img data-imgurl='" + Object.values(statusResult)[i] + "'" + " class='imgUrl' src='" + Object.values(statusResult)[i] + "'" + "/>"
                header +=
                    "<div class='statusView-header'>" +
                    icon +
                    "</div>"
            } else {
                body +=
                    "<div class='col" + statusCols[i] + "'" + ">" +
                    "<span class='status-title'>" + Object.keys(statusResult)[i] + "</span>" +
                    "<span class='status-value'>" + Object.values(statusResult)[i] + "</span>" +
                    "</div>"
            }
        }
        let html =
            "<div class='statusViewBox'>" +
            "<div class='overlay'></div>" +
            "<div class='statusView'>" +
            "<div class='statusView-content'>" +
            header +
            "<div class='statusView-body'>" +
            body +
            "</div>" +
            "</div>" +
            "</div>"


        $('#ds-ui-statusView')
            .hide()
            .append(html)
            .fadeIn('fast')



        // $('.statusView').css({
        // })


        let headerDiv = $('.statusView-header').height();
        // type = 'img'가 없을 때 default icon 생성
        $('.col1').css({
            'width': '97%'
        })

        if ($('.statusView-header').children().length == 0) {
            $('.statusView-header').append(defaultImgIcon)
        }
        $('.status-img').css({
            'height': headerDiv + 'px'
        })
        $('.status-img').children('i').css('line-height', headerDiv + 'px');
        viewImgUrl($('.imgUrl'))
        closeStatusView($('.statusView'))
    })
}
const closeStatusView = (touchLocate) => {
    let size = $('.App').width()
    $(touchLocate).bind('touchstart mousedown', function (e) {
        sX = (e.type === 'mousedown') ? e.pageX : e.touches[0].screenX;
    })
    $(touchLocate).bind('touchend mouseup', function (e) {
        fX = (e.type === 'mouseup') ? e.pageX : e.changedTouches[0].screenX;
        let touchLength = ((fX - sX) / size);
        if (touchLength > 0.25) {
            $(touchLocate)
                .css({
                    'left': '600px',
                    'transition-duration': '0.5s'
                })
            setTimeout(function () {
                $(touchLocate).parent()
                    .remove();
            }, 500);
        }
        if (touchLength < -0.25) {
            $(touchLocate)
                .css({
                    'left': '-200px',
                    'transition-duration': '0.5s'
                })
            setTimeout(function () {
                $(touchLocate)
                    .parent()
                    .remove();
            }, 500);
        }
    })
}

// img Viewer
const viewImgUrl = (imgBtn) => {
    let imgUrl = imgBtn.data('imgurl');
    imgBtn.click(function () {
        showImg(viewImgHTML, imgUrl)
    })
}
var viewImgHTML =
    "<div class='statusViewBox'>" +
    "<div class='overlay'></div>" +
    "<div class='imgView'>" +
    "</div>" +
    "</div>";

const showImg = (html, imgUrl) => {
    $('body').append(html);
    $('.imgView').append(
        "<img src='" + imgUrl + "'>"
    )
    closeStatusView($('.imgView'))
}
