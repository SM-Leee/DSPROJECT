function periodPicker(){
   if($('.periodpicker').length != 0) {
      $('.periodpicker')
         .append('<input type="text" id="fromDate">')
         .append('<div><label>&nbsp;~&nbsp;</label></div>')
         .append('<input type="text" id="toDate">')
         .append('<button id="search" class="search-button"><i class="fa fa-search"></i></button>');

      if($('.periodpicker').data('dsLanguage') != undefined) {
         let ds_language = $('.periodpicker').data('dsLanguage');
         $('#fromDate').data('dsLanguage', ds_language);
         $('#toDate').data('dsLanguage', ds_language);
      }
   }
}