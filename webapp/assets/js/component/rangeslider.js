const rangeSlider = () => {
  let title = ''
  let value_data = ''
  let step = ''
  let values = [];
  let disabled = ''

  const slider = $('.ds-ui-rangeslider')

  slider.each(function (i) {
    label = ($(slider[i]).data('label') == undefined) ? '' : $(slider[i]).data('label');
    step = ($(slider[i]).data('step') == undefined) ? '' : $(slider[i]).data('step');
    disabled = ($(slider[i]).data('disabled')==true) ? ' disabled' : '';
    value_data = $(slider[i]).data('value');
    values = value_data.split(' ')

    $(slider[i]).append(
      "<span class='range-slider-title'>" + label + "</span>" +
      "<input" + disabled + " class='range-slider-range' type='range' min='" + values[0] + "' max='" + values[2] + "' value='" + values[1] + "' step='" + step + "'>" +
      "<span class='range-slider-value'>0</span>"
    )
    if (disabled == ' disabled') {
      $(slider[i]).children('input').css({'background' : '#1A73E9'})
    } 
  })

  const range = $('.range-slider-range'),
    value = $('.range-slider-value')

  value.each(function () {
    var value = $(this).prev().attr('value');
    $(this).html(value);
  });

  range.on('input', function () {
    $(slider).children('input').removeClass('range-slider-active');
    $(this).addClass('range-slider-active')
    $(this).next(value).html(this.value);
  });
};