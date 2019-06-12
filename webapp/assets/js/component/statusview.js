let statusViewHTML =
    "<div class='statusViewBox'>" +
    "<div class='overlay'></div>" +
    "<div class='statusView'>" +
    "<div class='statusView-content'>" +
    "</div>" +
    "</div>"
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
        let data = $(this).parent().data('mapping')
        let statusViewData = statusViewMapping(no, data);

        let statusCols = [];
        statusCols = statusViewData[1];
        let statusResult = {};
        statusResult = statusViewData[0];


        var header = ''
        var body = ''
        const defaultImgIcon =
            "<div class='status-img'>" +
            "<i class='far fa-image'></i>" +
            "</div>"

        for (var i = 0; i < statusCols.length; i++) {
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


        if ($('#ds-ui-statusView').length == 0) {
            $('.App').append(
                "<div id='ds-ui-statusView'>" +
                "</div>"
            )
        }
        $('#ds-ui-statusView')
            .hide()
            .append(html)
            .fadeIn('fast')

        let headerDiv = $('.statusView-header').height();
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
        imgview($('.imgUrl'))
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
                $(touchLocate)
                    .parent()
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
// const imgview = (imgBtn) => {
//     let imgUrl = imgBtn.data('imgurl');
//     imgBtn.click(function () {
//         showImg(viewImgHTML, imgUrl)
//     })
// } 
// var viewImgHTML =
//     "<div class='imgViewBox'>" +
//     "<div class='overlay'></div>" +
//     "<div class='imgView'>" +
//     "</div>" +
//     "</div>";

// const showImg = (html, imgUrl) => {
//     $('.App').append(html);
//     $('.imgView').append(
//         "<img src='" + imgUrl + "'>"
//     )
//     closeStatusView($('.imgView'))
// }