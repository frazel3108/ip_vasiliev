(function() {
    /* ========= sidebar toggle ======== */
    const sidebarNavWrapper = document.querySelector(".content-sidebar");
    const mainWrapper = document.querySelector(".content-header-main");
    const menuToggleButton = document.querySelector("#menu-toggle");
    const overlay = document.querySelector(".overlay");

    menuToggleButton.addEventListener("click", () => {
        sidebarNavWrapper.classList.toggle("active");
        overlay.classList.add("active");
        mainWrapper.classList.toggle("active");
    });
    overlay.addEventListener("click", () => {
        sidebarNavWrapper.classList.remove("active");
        overlay.classList.remove("active");
        mainWrapper.classList.remove("active");
    });
})();