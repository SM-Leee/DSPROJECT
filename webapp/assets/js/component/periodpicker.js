function periodPicker(){
   if($('.ds-ui-periodpicker').length == 0) return ;
   let $periodpicker = $('.ds-ui-periodpicker');
   $periodpicker
      .append('<input type="text" id="fromDate">')
      .append('<div><label>&nbsp;~&nbsp;</label></div>')
      .append('<input type="text" id="toDate">')
      .append('<button id="search" class="search-button"><i class="fa fa-search"></i></button>');

   if($periodpicker.data('dsLanguage') != undefined) {
      let ds_language = $periodpicker.data('dsLanguage');
      $.each($periodpicker.children('input'), (index, datepicker) => {
         let $datepicker = $(datepicker);
         $datepicker.data('dsLanguage', ds_language);
         $datepicker.addClass('period-option');
         htmlInputDate($datepicker);
         // datepicker click event on
         datepickerListener($datepicker);
         initDate($datepicker);
      });
   }
}