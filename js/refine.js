$(document).ready(_ => {

  //REFINE MENU

  //EXIT
  $('.refine-exit').on('click', _ => {
    // $(this).toggleClass('active');
    $('aside.dynamic-refine-menu').animate({
      width: 'toggle'
    }, 200);
  });
  //OPEN
  $('#refine-btn').on('click', _ => {
    // $(this).toggleClass('active');
    $('aside.dynamic-refine-menu').animate({
      width: 'toggle'
    }, 200);
  });

});