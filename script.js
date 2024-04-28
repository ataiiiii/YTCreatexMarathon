
var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");
var mobileMenuClose = document.querySelector(".mobileMenuClose");

function closeMobileMenu() {
    mobileMenuOpened.classList.remove("visible");
    document.body.classList.remove("overflowHidden");
}

mobileMenu.addEventListener("click", function () {
    mobileMenuOpened.classList.add("visible");
    document.body.classList.add("overflowHidden");
});

mobileMenuClose.addEventListener("click", closeMobileMenu);

window.addEventListener("resize", function () {
    var screenWidth = window.innerWidth;
    var breakpoint = 750;

    if (screenWidth >= breakpoint) {
        closeMobileMenu();
    }
});