let statusViewHTML =
    "<div class='statusViewBox'>" +
    "<div class='overlay'></div>" +
    "<div class='statusView'>" +
    "<div class='statusView-content'>" +
    "<div class='statusView-header'>" +
    "</div>" +
    "<div class='statusView-body'></div>" +
    "</div>" +
    "</div>" +
    "</div>"

const statuslViewSetting = () => {
    const statusViewBtn = $('.statusViewBtn');
    if ($(statusViewBtn).length != 0) {
        showStatusView(statusViewHTML, statusViewBtn)
    }
}
// status View
const showStatusView = (html, btn) => {
    $(btn).on('click', function (e) {
        $('body')
            .hide()
            .append(html)
            .fadeIn('fast', function () {})

        let headerDiv = $('.statusView-header').height();
        statusViewContents()
        // type = 'img'가 없을 때 default icon 생성
        $('.textArea').css('width', '97%');
        const defaultImgIcon =
            "<div class='status-img'>" +
            "<i class='far fa-image'></i>" +
            "</div>"
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
const statusViewContents = () => {
    //var formData = request2.response;
    //info = 'formData'
	console.log(formData,'asdadsasd')
    statusItems(formData);
    
}

const appendHtml = (formContent, targetElement) => {
    $(targetElement).append(formContent);

}
const closeStatusView = (touchLocate) => {
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
const bigViewSetting = () => {

}