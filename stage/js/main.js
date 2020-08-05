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

  // Toggle Full Screen
  $('.fullscreen').on('click', function () {
    console.log('dd')
    $(this).toggleClass('isFull');

    if ($(this).hasClass('isFull')) {
      openFullScreen();
    } else {
      closeFullScreen();
    }

    function openFullScreen() {
      var elem = document.documentElement;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    }

    function closeFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  })

  // Settings Toggle Button
  $('.settings-gear').on('click', function () {
    $('.settings').toggleClass('hide-settings')
    $(this).children().toggleClass('fa-spin');
  })

  // Changing Website Theme Color
  let themeColors = []
  $('.color-settings li').each(function () {
    themeColors.push($(this).data('theme'))
  })

  $('.color-settings li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('body').removeClass(themeColors.join(' ')).addClass($(this).data('theme'))
  })

  // Change Website Font
  let themeFonts = []
  $('.selectFont option').each(function () {
    themeFonts.push($(this).val())
  })

  $('.selectFont').on('change', function () {

    $('body').removeClass(themeFonts.join(' ')).addClass($(this).val())
  })
});