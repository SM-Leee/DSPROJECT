// staticSetting
const staticBtnSetting = (staticBtn, staticShowBtn, staticPlus) => {
    const staticBtnPosition = $('#ds-ui-staticBtn').offset();
    const staticBtnItem =
        "<i id='staticBtn-plus' class='fas fa-plus'></i>" +
        "<div><i class='fas fa-home'></i></div>" +
        "<div><i class='far fa-hand-point-down'></i></div>" +
        "<div><i class='far fa-hand-point-up'></i></div>";
    ($(staticPlus).children())
    const staticShowItem =
        "<i class='far fa-dot-circle'></i>"
    $(staticBtn).append(staticBtnItem);
    $(staticShowBtn).append(staticShowItem);
    // click Event
    const staticPlusBtn = $('#staticBtn-plus');
    $(staticShowBtn).click(function () {
        $(staticShowBtn).css('display', 'none');
        $(staticBtn).css({
            'display': '',
            'left': staticBtnPosition.left + 'px',
            'top': staticBtnPosition.top + 'px'
        })
    })
    const staticBtn_child = $(staticBtn).children('div');
    var timeout;
    var lastTap = 0;
    $(staticPlusBtn).unbind("click").bind("click", function (e) {
        // $(staticBtn).bind("touchend", function (e) {
        var currentTime = new Date().getTime();
        var tapLength = currentTime - lastTap;
        clearTimeout(timeout);
        // console.log(tapLength, 'tablength')
        if (tapLength < 500 && tapLength > 0) {
            $(staticBtn).css('display', 'none');
            $(staticShowBtn).css('display', 'block');
            e.preventDefault();
        } else {
            $(staticBtn_child).toggle(0, function () {
                $(staticBtn_child[0]).css({
                        'bottom': '0rem',
                        'right': '4rem',
                    }),
                    $(staticBtn_child[1]).css({
                        'bottom': '3rem',
                        'right': '3rem',
                    }),
                    $(staticBtn_child[2]).css({
                        'bottom': '4rem',
                        'right': '0rem',
                    })
            });
        }
        lastTap = currentTime;
    })
}