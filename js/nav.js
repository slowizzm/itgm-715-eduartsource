$(".exit-menu").hide();
$(".menu").hide();

$(document).ready(_ => {

  // NAV
  $(".hamburger").click(_ => {
    $(".hamburger").hide();
    $(".exit-menu").show();
    $(".menu").slideToggle("slow", _ => {});
  });

  $(".exit-menu").click(_ => {
    $(".menu").slideToggle("slow", _ => {
      $(".exit-menu").hide();
      $(".hamburger").show();
    });
  });
});