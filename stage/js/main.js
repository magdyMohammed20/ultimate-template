$(function () {
  "use strict";

  // Open And Close Sidebar
  $(".toggle-btn").on("click", () => {
    $(".side-bar ,.content").toggleClass("no-sidebar");
  });

  // Toggle Sidebar Submenu
  $(".toggle-submenu").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("open-submenu");
    $(".child-links").slideToggle();
  });
});
