/*global document, window, document, validateForm*/
var navLink = document.getElementsByClassName('nav-link');
var lastScrollTop = 0,
    i;

window.addEventListener("scroll", function () {
    "use strict";
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 70) {
        document.getElementById('nav-header').classList.add("color-white");
        document.getElementById("nav-header").classList.remove("gradient");
        document.getElementById('logo').style.backgroundImage = "url(assets/images/logo-pink.png)";
        document.getElementById("login").classList.remove("nav-link");
        document.getElementById("login").classList.add("links-down");
        document.getElementById('signup').style.display = "inline-block";
        
        for (i = 0; i < navLink.length; i += 1) {
            navLink[i].classList.add("color-blue");
        }
    } else if (currentScroll <= 100) {
        document.getElementById("nav-header").classList.remove("color-white");
        document.getElementById("nav-header").classList.add("gradient");
        document.getElementById('logo').style.backgroundImage = "url(assets/images/logo-white.png)";
        document.getElementById("login").classList.add("nav-link");
        document.getElementById("login").classList.remove("links-down");
        document.getElementById('signup').style.display = "none";
        
        for (i = 0; i < navLink.length; i += 1) {
            navLink[i].classList.remove("color-blue");
        }
    }
    lastScrollTop = currentScroll;
}, false);

document.getElementById("phone-number").addEventListener("click", function () {
    "use strict";
    document.getElementById("mid-form").style.display = "block";
    document.getElementById("video").style.top = "0";
});

var arrayRegex = [{
        regex: /[0-9]{7}/,
        title: "Debe ingresar 6 o 7 digitos"
    }, {
        regex: /[\^\a-zá-ú-0-9@.,:\/\=\s]+([a-zá-ú ]{2,})/,
        title: "La primera letra debe ser mayuscula"
    }, {
        regex: /([\^\@\s]+)@((?:[\-\a-z0-9]+\.)+[a-z]{2,})/,
        title: "Ex: example@email.com"
    }, {
        regex: /[\^\a-zá-ú-0-9@.,:\/\=\s]+([a-zá-ú ]{2,})/,
        title: "La primera letra debe ser mayuscula"
    }];

var input = document.getElementsByClassName('sign-up-data');

for (i = 0; i < input.length; i += 1) {
    input[i].addEventListener('blur', validateForm);
}

arrayRegex.forEach(function (e, i) {
    "use strict";
    input[i].setAttribute("title", e.title);
});

function validateForm() {
    "use strict";
    arrayRegex.forEach(function (e, i) {
        if (input[i].value.trim() === "") {
            input[i].classList.add("alert");
            return false;
        }
        
        if (!(e.regex.test(input[i].value))) {
            input[i].classList.add("alert");
            return false;
        } else {
            input[i].classList.remove("alert");
        }
    });
}

document.getElementById("sign-up-btn").addEventListener('click', validateForm);