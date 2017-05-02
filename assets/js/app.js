/*global window, document*/

var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    "use strict";
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 70) {
        document.getElementById("logo").style.backgroundImage = "url(assets/images/logo-pink.png)";
        document.getElementById("logo").style.backgroundRepeat = "no-repeat";
        document.getElementById("logo").style.backgroundSize = "65px";
        document.getElementById("nav-header").classList.add("header-white");
        document.getElementById("link1").classList.remove("links");
        document.getElementById("link1").classList.add("links-down");
        document.getElementById("link2").classList.remove("links");
        document.getElementById("link2").classList.add("links-down");
        document.getElementById("link3").classList.remove("links");
        document.getElementById("link3").classList.add("links-down");
        document.getElementById("link4").classList.remove("links");
        document.getElementById("link4").classList.add("links-down");
    } else {
        if (currentScroll <= 100) {
            document.getElementById("nav-header").classList.remove("header-white");
            document.getElementById("logo").style.backgroundImage = "url(assets/images/logo-white.png)";
            document.getElementById("logo").style.backgroundRepeat = "no-repeat";
            document.getElementById("logo").style.backgroundSize = "65px";
            document.getElementById("link1").classList.add("links");
            document.getElementById("link1").classList.remove("links-down");
            document.getElementById("link2").classList.add("links");
            document.getElementById("link2").classList.remove("links-down");
            document.getElementById("link3").classList.add("links");
            document.getElementById("link3").classList.remove("links-down");
            document.getElementById("link4").classList.add("links");
            document.getElementById("link4").classList.remove("links-down");
        }
    }
    lastScrollTop = currentScroll;
}, false);