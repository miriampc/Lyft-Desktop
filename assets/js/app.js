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
        document.getElementById("nav-header").classList.remove("gradient");
        document.getElementById("link1").classList.remove("links");
        document.getElementById("link1").classList.add("links-down");
        document.getElementById("link2").classList.remove("links");
        document.getElementById("link2").classList.add("links-down");
        document.getElementById("link3").classList.remove("links");
        document.getElementById("link3").classList.add("links-down");
        document.getElementById("link4").classList.remove("links");
        document.getElementById("link4").classList.add("links-down");
        document.getElementById("link5").style.display = "inline-block";
    } else {
        if (currentScroll <= 100) {
            document.getElementById("nav-header").classList.remove("header-white");
            document.getElementById("nav-header").classList.add("gradient");
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
            document.getElementById("link5").style.display = "none";
        }
    }
    lastScrollTop = currentScroll;
}, false);

document.getElementById("phone-number").addEventListener("click", function () {
    "use strict";
    document.getElementById("mid-form").style.display = "block";
    document.getElementById("video").style.top = "0";
});

function validation() {
    "use strict";
    var homeNumber = document.getElementById("phone-number"),
        homeRegex = /[0-9]{7}/,

        name = document.getElementById('name'),
        city = document.getElementById('city'),
        firstChar = /[A-Z]{1}[a-z]+/,

        email = document.getElementById("email"),
        emailRegex = /\S+@\S+\.\S+/;

    //Home number validation
    if (homeRegex.test(homeNumber.value) === false) {
        document.getElementById("error1").style.display = "inline-block";
    } else {
        document.getElementById("error1").style.display = "none";
    }

    //Name & city validation
    if (firstChar.test(name.value) === false) {
        document.getElementById("error2").style.display = "inline-block";
    } else {
        document.getElementById("error2").style.display = "none";
    }

    if (firstChar.test(city.value) === false) {
        document.getElementById("error4").style.display = "inline-block";
    } else {
        document.getElementById("error4").style.display = "none";
    }

    //Email validation
    if (emailRegex.test(email.value) === false) {
        document.getElementById("error3").style.display = "inline-block";
    } else {
        document.getElementById("error3").style.display = "none";
    }
}

document.getElementById("sign-up-btn").addEventListener('click', validation);