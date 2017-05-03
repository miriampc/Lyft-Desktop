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

var input=document.getElementsByClassName('sign-up-data');

for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('blur',validateForm);
}


function validateForm(){
  if(input[0].value.trim()==""){
    input[0].classList.add("alert");
    return false;
  }else if(!(homeRegex.test(input[0].value))){
    input[0].classList.add("alert");
    return false;
  }else {
    input[0].classList.remove("alert");
  }

  if(input[1].value==""){
    input[1].classList.add("alert");
    return false;
  }else if(!firstChar.test(input[1].value)){
    input[1].classList.add("alert");
    return false;
  }else{
    input[1].classList.remove("alert");
  }

  if(input[2].value==""){
    input[2].classList.add("alert");
    return false;
  }else if(!emailRegex.test(input[2].value)){
    input[2].classList.add("alert");
    return false;
  }else{
    input[2].classList.remove("alert");
  }

  if(input[3].value==""){
    input[3].classList.add("alert");
    return false;
  }else if(!firstChar.test(input[3].value)){
    input[3].classList.add("alert");
    return false;
  }else{
    input[3].classList.remove("alert");
  }


}

document.getElementById("sign-up-btn").addEventListener('click', validateForm);
