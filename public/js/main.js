"use strict";

(function () {
  /* ========= sidebar toggle ======== */
  var sidebarNavWrapper = document.querySelector(".content-sidebar");
  var mainWrapper = document.querySelector(".content-header-main");
  var menuToggleButton = document.querySelector("#menu-toggle");
  var overlay = document.querySelector(".overlay");
  menuToggleButton.addEventListener("click", function () {
    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");
  });
  overlay.addEventListener("click", function () {
    sidebarNavWrapper.classList.remove("active");
    overlay.classList.remove("active");
    mainWrapper.classList.remove("active");
  });
})();