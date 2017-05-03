/*global window, document*/
var navLink=document.getElementsByClassName('nav-link');
var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      document.getElementById('nav-header').classList.add("color-white");
      document.getElementById('login').style.border="1px solid #333447";
      document.getElementById('signup').style.display="block";
      document.getElementById('logo').style.backgroundImage="url(assets/images/logo-pink.png)";
      for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.add("color-blue");
      }
    }
    else if(currentScroll<=3){
        document.getElementById('signup').style.display="none";
        document.getElementById("nav-header").classList.remove("color-white");
        document.getElementById('logo').style.backgroundImage="url(assets/images/logo-white.png)";
        document.getElementById('login').style.border="1px solid #fff";
        for (var i = 0; i < navLink.length; i++) {
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

var homeRegex = /[0-9]{7}/,
    firstChar = /[^a-zá-ú-0-9@.,:/=\s]+([a-zá-ú ]{2,})/,
    emailRegex = /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/;

var arrayRegex=[{regex:/[0-9]{7}/,title:"Debe ingresar 6 o 7 digitos"},
                {regex:/[^a-zá-ú-0-9@.,:/=\s]+([a-zá-ú ]{2,})/,title:"La primera letra debe ser mayuscula"},
                {regex:/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/,title:"Ex: example@email.com"},
                {regex:/[^a-zá-ú-0-9@.,:/=\s]+([a-zá-ú ]{2,})/,title:"La primera letra debe ser mayuscula"}];

var input=document.getElementsByClassName('sign-up-data');

for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('blur',validateForm);
}

function validateForm(){
  arrayRegex.forEach(function(e,i){
    if(input[i].value.trim()==""){
      input[i].classList.add("alert");
      return false;
    }else if(!(e.regex.test(input[i].value))){
      input[i].classList.add("alert");
      return false;
    }else {
      input[i].classList.remove("alert");
    }
  });
}

document.getElementById("sign-up-btn").addEventListener('click', validateForm);
