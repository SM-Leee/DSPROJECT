const checkbox = () => {
    let location = ''
    let checked = ''
    let shape = ''
    let disabled = ''
    let
        label_example = [
            '체크 박스#1',
            '체크 박스#2',
            '체크 박스#3',
            '체크 박스#1 - 비활성화'
        ]

    const checkbox = $('.ds-ui-checkbox');
    // Option 추출
    for (var i = 0; i < checkbox.length; i++) {
        location = ($(checkbox[i]).data('location') == undefined) ? 'left' : $(checkbox[i]).data('location')
        checked = ($(checkbox[i]).data('checked') == true) ? 'checked' : ''
        shape = ($(checkbox[i]).data('shape') == undefined) ? 'rectangle' : $(checkbox[i]).data('shape')
        disabled = ($(checkbox[i]).data('disabled') == true) ? ' disabled' : ''
        label = ($(checkbox[i]).data('label') == false) ? 'hidden' : ''

        // 체크 유무에 따라 이벤트가 발생할 때 사용 할 예정
        if (label == 'hidden') {
            $(checkbox[i]).attr('class', '')
            $(checkbox[i]).append(
                "<label class='checkbox-label'>" +
                "<input type='checkbox'" + checked + disabled + " id='checkbox" + i + "'>" +
                "</input>" +
                "<span class='checkbox-" + shape + "'>" +
                "</span>" +
                "</label>"
            )

            // $(checkbox[i]).children('.input-title').css({
            //     'visibility': 'hidden'
            // })
            $(checkbox[i]).children('.checkbox-label').css({
                'margin': 0
            })
        } else {
            $(checkbox[i]).append(
                "<label class='checkbox-label'>" +
                "<input type='checkbox'" + checked + disabled + " id='checkbox" + i + "' value='" + label_example[i] + "'>" +
                "</input>" +
                "<span class='checkbox-" + shape + "'>" +
                "</span>" +
                "</label>" +
                "<div class='input-title'>" + label_example[i] +
                "</div>" +
                "<label class='checkbox-spaceBox'>" +
                "<span class='checkbox-space'>" +
                "</span>" +
                "</label>"
            )
        }
        // location
        if (location == 'left') {
            $(checkbox[i]).css({
                'flex-direction': 'row'
            })
        }
        if (location == 'right') {
            $(checkbox[i]).css({
                'flex-direction': 'row-reverse'
            })
        }

        // disabled
        if (disabled == ' disabled') {
            console.log('##')
            $(checkbox[i]).children('.checkbox-label').children('span').css({
                'background': '#EBEBEB'
            })
        }
    }
}