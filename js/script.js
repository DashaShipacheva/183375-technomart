var contact = document.querySelector(".btn-contact");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

if (popup) {
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=login]");
  var email = popup.querySelector("[name=email]");
  var comment = popup.querySelector("[name=comments]");
  contact.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (event) {
    if (!login.value || !email.value || !comment.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      }
    }
  });
}

var map = document.querySelector(".js-map");
var mapPopup = document.querySelector(".modal-content-map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-content-close");
  map.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
  });

  mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
      }
    }
  });
}

var cartOpen = document.querySelectorAll(".catalog-item-buy");
var cartPopup = document.querySelector(".modal-content-cart");
var cartClose = cartPopup.querySelector(".modal-content-close");
var cartContinue = cartPopup.querySelector(".btn-continue")

if (cartOpen && cartPopup && cartClose) {
  for (var i=0; i<cartOpen.length; i++) {
    cartOpen[i].addEventListener("click", function (event) {
      event.preventDefault();
      cartPopup.classList.add("modal-content-show");
    });
  }
  
  cartClose.addEventListener("click", function (event) {
    event.preventDefault();
    cartPopup.classList.remove("modal-content-show");
  });
  
  cartContinue.addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.remove("modal-content-show");
  });
  
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (cartPopup.classList.contains("modal-content-show")) {
        cartPopup.classList.remove("modal-content-show");
      }
    }
  });
}