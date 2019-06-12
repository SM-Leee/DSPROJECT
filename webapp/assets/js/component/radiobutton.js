const radiobutton = () => {
    let location = ''
    let checked = ''
    let disabled = ''
    let name = ''
    let
        label_example = [
            '라디오#1',
            '라디오#1 - 비활성화',
            '라디오#2',
        ]

    const radiobutton = $('.ds-ui-radiobutton');
    // console.log($(checkbox[0]).data('checked'))
    // Option 추출
    for (var i = 0; i < radiobutton.length; i++) {
        location = ($(radiobutton[i]).data('location') == undefined) ? 'left' : $(radiobutton[i]).data('location')
        checked = ($(radiobutton[i]).data('checked') == true) ? 'checked' : ''
        disabled = ($(radiobutton[i]).data('disabled') == true) ? 'disabled' : ''
        label = ($(radiobutton[i]).data('label') == false) ? 'hidden' : ''
        name = ($(radiobutton[i]).data('name') == undefined) ? '' : $(radiobutton[i]).data('name')
        // 체크 유무에 따라 이벤트가 발생할 때 사용 할 예정
        if (label == 'hidden') {
            $(radiobutton[i]).attr('class', '')
            $(radiobutton[i]).html(
                "<input type='radio'" + checked + disabled + " id='radio" + i + "' name='" + name + "'>" +
                "<label class='radio-label' for='radio" + i + "'>" +
                "</label>"
            )

            $(radiobutton[i]).children('.radio-label').css({
                'margin': 0
            })

        } else {
            $(radiobutton[i]).append(
                "<input type='radio'" + checked + disabled + " id='radio" + i + "' name='" + name + "' value='" + label_example[i] + "'>" +
                "<label class='radio-label' for='radio" + i + "'>" +
                "</label>" +
                "<label for='radio" + i + "' class='input-title'>" + label_example[i] +
                "</label>" +
                "<label class='checkbox-spaceBox'>" +
                "<span class='checkbox-space'>" +
                "</span>" +
                "</label>"
            )

        }
        // location
        if (location == 'left') {
            $(radiobutton[i]).css({
                'flex-direction': 'row'
            })
        }
        if (location == 'right') {
            $(radiobutton[i]).css({
                'flex-direction': 'row-reverse'
            })
        }
        // disabled
        if (disabled == 'disabled') {
            $(radiobutton[i]).children('.radio-label').toggleClass('disabled');
        }
    }
}