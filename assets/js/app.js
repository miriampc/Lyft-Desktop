/*global window, document*/

var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    "use strict";
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        document.getElementById('nav-background').style.display = "none";
        document.getElementById("nav-header").classList.add("header-white");
        document.getElementById("nav-header").style.opacity = 0;
    } else {
        document.getElementById('nav-background').style.display = "table";
        document.getElementById("nav-background").classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity = 1;
        if (currentScroll <= 3) {
            document.getElementById("nav-header").classList.remove("header-in");
        }
    }
    lastScrollTop = currentScroll;
}, false);