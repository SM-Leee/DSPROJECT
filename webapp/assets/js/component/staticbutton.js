// staticSetting
const staticBtnSetting = () => {
    let float,
        disabled,
        location_addr;
        
    const offset = [];
        
        
        $('body').append(
        "<div id='ds-ui-staticShowBtn'></div>"
    )
    
    const staticBtn = $('#ds-ui-staticBtn');
    const staticShowBtn = $('#ds-ui-staticShowBtn');
    offset[0] = ($(staticBtn).data('right')== undefined) ? 15 : $(staticBtn).data('right');
    offset[1] = ($(staticBtn).data('bottom')== undefined) ? 70 : $(staticBtn).data('bottom');
    $(staticBtn).css('right', offset[0] +'px');
    $(staticBtn).css('bottom', offset[1] +'px');
    const staticBtnPosition = $('#ds-ui-staticBtn').offset();

    const staticBtnItem =
        "<i id='staticBtn-plus' class='fas fa-plus'></i>" +
        "<div class='staticBtn-refresh'><i class='fas fa-sync-alt'></i></div>" +
        "<div class='staticBtn-location'><i class='location fas fa-door-open'></i></div>" +
        "<div class='staticBtn-exit'><i class='fas fa-times'></i></div>";
    const staticShowItem =
        "<i class='far fa-dot-circle'></i>"
    $(staticBtn).append(staticBtnItem);
    $(staticShowBtn).append(staticShowItem);

    // click Event
    $(staticShowBtn).click(function () {
        $(staticShowBtn).css('display', 'none');
        $(staticBtn).css({
            'display': '',
            'left': staticBtnPosition.left + 'px',
            'top': staticBtnPosition.top + 'px'
        })
    })
    const staticPlusBtn = $('#staticBtn-plus');
    
    location_addr = ($(staticBtn).data('location') == undefined) ? $('.staticBtn-location').remove() : $(staticBtn).data('location')

    const staticBtn_child = $(staticBtn).children('div');
    // option
    float = ($(staticBtn).data('float') == true) ? staticBtnTouchMove(staticBtn, $('#ds-ui-staticShowBtn')) : '';
    disabled = ($(staticBtn).data('disabled') == true) ? $(staticBtn).css('display', 'none') : '';
    $(staticPlusBtn).bind("click", function (e) {
        $('.staticBtn-exit').click(function () {
            $(staticBtn).css('display', 'none');
            $(staticShowBtn).css('display', 'block');
            $(staticBtn_child).css('display', 'none')
            $(staticPlusBtn).attr('class', 'fas fa-plus')
        })
        $('.staticBtn-location').attr('data-location', location_addr)
        const bottom = 50;
        $(staticBtn_child).toggle(0, function () {
            for (var i = 0; i < staticBtn_child.length + 1; i++) {
                $(staticBtn_child[i]).css('bottom', bottom * (i + 1))
            }
        });
        if ($(staticBtn_child).css('display') == 'block') {
            $(staticPlusBtn).attr('class', 'fas fa-minus')
        } else {
            $(staticPlusBtn).attr('class', 'fas fa-plus')
        }
    });
    refreshevent($('.staticBtn-refresh'), 500)
}