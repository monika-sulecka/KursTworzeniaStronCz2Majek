"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.navbar');
  var allNavItems = document.querySelectorAll('.nav-link');
  var navList = document.querySelector('.navbar-collapse'); // Add overlay to navigation

  function addShadow() {
    if (window.scrollY >= 180) {
      nav.classList.add('shadow-bg');
    } else {
      nav.classList.remove('shadow-bg');
    }
  } // after 'click' close the navbar


  allNavItems.forEach(function (item) {
    return item.addEventListener('click', function () {
      navList.classList.remove('show');
    });
  });
  window.addEventListener('scroll', addShadow);
});