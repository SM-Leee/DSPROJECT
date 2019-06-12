const accordion = () => {
    let select = [];
    let disabled = [];
    let line = '';
    let contents;
    let contents_text = '';
    var accordion = $(".ds-ui-accordion");
    for (var i = 0; i < accordion.length; i++) {
        select[i] = ($(accordion[i]).data('select') == true) ? i : ''
        disabled[i] = ($(accordion[i]).data('disabled') == true) ? i : ''
        contents_text = $('.accordion-text').children('p');
    }
    for (var i = 0; i < accordion.length; i++) {
        $(accordion[i]).click(function () {

            line = ($(this).data('line') == undefined) ? 0 : $(this).data('line')
            $(this).toggleClass("active");
            var text = $(this).next();

            contents = $(this).next().children('p');

            $(contents).css({
                '-webkit-line-clamp': line.toString()
            })

            if ($(text).css('maxHeight') != '0px') {
                $(text).css('maxHeight', '');
            } else {
                $(text).css({
                    // 'maDxHeight' : $(panel).prop('scrollHeight') + 'px'
                    'height': $('.App').outerHeight() + 'px',
                    'maxHeight': $('.App').outerHeight() + 'px'
                })
            }
        });
        for (var j = 0; j < contents_text.length; j++) {
            $(contents_text[j]).click(function () {
                let clamp = $(this).css('-webkit-line-clamp');
                $(this).css({
                    '-webkit-line-clamp': ''
                })
                if (clamp == 'none') {
                    $(this).css('-webkit-line-clamp', line.toString())
                }
            })
        }
        $(accordion[select[i]]).trigger("click");
        $(accordion[disabled[i]]).off('click')
        $(accordion[disabled[i]]).css({
            'background': '#EBEBEB',
            'color': '#ABABAB'
        })
    }
}