(function($) {
  $('#aLittleMore').on('shown.bs.collapse', function() {
    $("#about-more").text("- a little bit more about me");;
  })
  $('#aLittleMore').on('hidden.bs.collapse', function() {
    $("#about-more").text("+ a little bit more about me");;
  })
})(jQuery);
