const modal = document.getElementById("modal");
const login = document.getElementById("login");
const signUp = document.getElementById("sign-up");
const formLogin = document.getElementById("form-login");
const formSignUp = document.getElementById("form-sign-up");
const close = document.getElementsByClassName("close");

for (let c = 0; c < close.length; c++) {
  close[c].onclick = () => {
    modal.style.display = "none";
  };
}

login.onclick = function () {
  modal.style.display = "block";
  formLogin.style.display = "block";
  formSignUp.style.display = "none";
};

signUp.onclick = () => {
  modal.style.display = "block";
  formSignUp.style.display = "block";
  formLogin.style.display = "none";
};

document.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const classLogin = document.getElementsByClassName("login");
const classSignUp = document.getElementsByClassName("sign-up");

for (let cl = 0; cl < classLogin.length; cl++) {
  classLogin[cl].addEventListener("click", function () {
    formLogin.style.display = "block";
    formSignUp.style.display = "none";
  });
}
for (let cS = 0; cS < classLogin.length; cS++) {
  classSignUp[cS].addEventListener("click", function () {
    formSignUp.style.display = "block";
    formLogin.style.display = "none";
  });
}

var esc = 27;
document.addEventListener("keydown", function (e) {
  if (e.keyCode == esc) {
    modal.style.display = "none";
  }
});

var chiNhanh1 = document.getElementById("chi-nhanh1");
var chiNhanh2 = document.getElementById("chi-nhanh2");
var chiNhanh3 = document.getElementById("chi-nhanh3");
var chiNhanh4 = document.getElementById("chi-nhanh4");
var chiNhanh5 = document.getElementById("chi-nhanh5");
var chiNhanh6 = document.getElementById("chi-nhanh6");
var chiNhanh1Icon = document.getElementById("chi-nhanh1-icon");
var chiNhanh2Icon = document.getElementById("chi-nhanh2-icon");
var chiNhanh3Icon = document.getElementById("chi-nhanh3-icon");
var chiNhanh4Icon = document.getElementById("chi-nhanh4-icon");
var chiNhanh5Icon = document.getElementById("chi-nhanh5-icon");
var chiNhanh6Icon = document.getElementById("chi-nhanh6-icon");
var optionText = document.getElementById("option__text");
chiNhanh1.onclick = (e) => {
  chiNhanh1Icon.style.display = "inline-block";
  chiNhanh2Icon.style.display = "none";
  chiNhanh3Icon.style.display = "none";
  chiNhanh4Icon.style.display = "none";
  chiNhanh5Icon.style.display = "none";
  chiNhanh6Icon.style.display = "none";
  optionText.innerHTML = "Chi nhánh 1";
};
chiNhanh2.onclick = () => {
  chiNhanh2Icon.style.display = "inline-block";
  chiNhanh1Icon.style.display = "none";
  chiNhanh3Icon.style.display = "none";
  chiNhanh4Icon.style.display = "none";
  chiNhanh5Icon.style.display = "none";
  chiNhanh6Icon.style.display = "none";
  optionText.innerHTML = "Chi nhánh 2";
};
chiNhanh3.onclick = () => {
  chiNhanh3Icon.style.display = "inline-block";
  chiNhanh1Icon.style.display = "none";
  chiNhanh2Icon.style.display = "none";
  chiNhanh4Icon.style.display = "none";
  chiNhanh5Icon.style.display = "none";
  chiNhanh6Icon.style.display = "none";
  optionText.innerHTML = "Chi nhánh 3";
};
chiNhanh4.onclick = () => {
  chiNhanh4Icon.style.display = "inline-block";
  chiNhanh1Icon.style.display = "none";
  chiNhanh2Icon.style.display = "none";
  chiNhanh3Icon.style.display = "none";
  chiNhanh5Icon.style.display = "none";
  chiNhanh6Icon.style.display = "none";
  optionText.innerHTML = "Chi nhánh 4";
};
chiNhanh5.onclick = () => {
  chiNhanh5Icon.style.display = "inline-block";
  chiNhanh1Icon.style.display = "none";
  chiNhanh2Icon.style.display = "none";
  chiNhanh3Icon.style.display = "none";
  chiNhanh4Icon.style.display = "none";
  chiNhanh6Icon.style.display = "none";
  optionText.innerHTML = "Chi nhánh 5";
};
chiNhanh6.onclick = () => {
  chiNhanh6Icon.style.display = "inline-block";
  chiNhanh1Icon.style.display = "none";
  chiNhanh2Icon.style.display = "none";
  chiNhanh3Icon.style.display = "none";
  chiNhanh4Icon.style.display = "none";
  chiNhanh5Icon.style.display = "none";
  optionText.innerHTML = "Chi nhánh 6";
};

var headerInputHistory = document.getElementById("header-input__history");
var headerSearch = document.getElementById("header__search");
var historyItem = document.getElementsByClassName("history__item");

headerSearch.addEventListener("change", function (e) {
  for (let hi = 0; hi < historyItem.length; hi++) {
    historyItem[hi].innerHTML = headerSearch.value;
    historyItem[hi].style.display = "none";
    if (headerSearch.value != "") {
      historyItem[hi].style.display = "block";
    }
    document.addEventListener("keydown", function (e) {
      if (e.keyCode == esc) {
        historyItem[hi].style.display = "none";
      }
    });
  }
});

var remove1 = document.getElementById("remove1");
var remove2 = document.getElementById("remove2");
var remove3 = document.getElementById("remove3");
var remove4 = document.getElementById("remove4");
var remove5 = document.getElementById("remove5");
var remove6 = document.getElementById("remove6");
var remove7 = document.getElementById("remove7");
var remove8 = document.getElementById("remove8");
var remove9 = document.getElementById("remove9");
var hasCartItem1 = document.getElementById("has-cart__item-1");
var hasCartItem2 = document.getElementById("has-cart__item-2");
var hasCartItem3 = document.getElementById("has-cart__item-3");
var hasCartItem4 = document.getElementById("has-cart__item-4");
var hasCartItem5 = document.getElementById("has-cart__item-5");
var hasCartItem6 = document.getElementById("has-cart__item-6");
var hasCartItem7 = document.getElementById("has-cart__item-7");
var hasCartItem8 = document.getElementById("has-cart__item-8");
var hasCartItem9 = document.getElementById("has-cart__item-9");
var hasCartItem = document.getElementsByClassName("has-cart__item");
var headerCartListNoCart = document.getElementById(
  "header__cart-list--no-cart"
);
var hasCart = document.getElementById("has-cart");

remove1.addEventListener("click", function () {
  hasCartItem1.style.display = "none";
});
remove2.addEventListener("click", function () {
  hasCartItem2.style.display = "none";
});
remove3.addEventListener("click", function () {
  hasCartItem3.style.display = "none";
});
remove4.addEventListener("click", function () {
  hasCartItem4.style.display = "none";
});
remove5.addEventListener("click", function () {
  hasCartItem5.style.display = "none";
});
remove6.addEventListener("click", function () {
  hasCartItem6.style.display = "none";
});
remove7.addEventListener("click", function () {
  hasCartItem7.style.display = "none";
});
remove8.addEventListener("click", function () {
  hasCartItem8.style.display = "none";
});
remove9.addEventListener("click", function () {
  hasCart.style.opacity = 0;
  hasCart.style.visibility = "hidden";
  headerCartListNoCart.style.opacity = 1;
  headerCartListNoCart.style.visibility = "visible";
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == esc) {
    headerCartListNoCart.style.opacity = 0;
    headerCartListNoCart.style.visibility = "hidden";
  }
});
document.addEventListener("click", function (e) {
  if (e.target != headerCartListNoCart) {
    headerCartListNoCart.style.opacity = 0;
    headerCartListNoCart.style.visibility = "hidden";
  }
});

// Toast message Logout với log in
var logined = document.getElementById("logined");
var formLoginBTN = document.getElementById("form__login");
var noneHR = document.getElementById("none");
var toastMessageSuccess = document.getElementById("toast-message--success");
var mgr5rem = document.getElementById("mgr5rem");
formLoginBTN.addEventListener("click", function () {
  modal.style.display = "none";
  signUp.style.display = "none";
  login.style.display = "none";
  noneHR.style.display = "none";
  logined.style.display = "block";
  mgr5rem.style.marginRight = "5rem";

  toastMessageSuccess.style.animation = "fadeInToast 0.5s linear forwards";
  setTimeout(() => {
    toastMessageSuccess.style.animation = "fadeOutToast 0.5s linear forwards";
  }, 5000);
});

var toastMessageCloseSuccess = document.getElementById(
  "toast-message__close--success"
);
toastMessageCloseSuccess.onclick = () => {
  toastMessageSuccess.style.animation = "fadeOutToast 0.5s linear forwards";
};
// Toast message Logout
var toastMessageLogout = document.getElementById("toast-message--logout");
var logout = document.getElementById("logout");
logout.addEventListener("click", function () {
  signUp.style.display = "block";
  login.style.display = "block";
  noneHR.style.display = "block";
  logined.style.display = "none";
  mgr5rem.style.marginRight = "2rem";

  toastMessageLogout.style.animation = "fadeInToast 0.5s linear forwards";
  setTimeout(() => {
    toastMessageLogout.style.animation = "fadeOutToast 0.5s linear forwards";
  }, 5000);
});
var toastMessageCloseLogout = document.getElementById(
  "toast-message__close--logout"
);
toastMessageCloseLogout.onclick = () => {
  toastMessageLogout.style.animation = "fadeOutToast 0.5s linear forwards";
};

// Text category__item
var categoryItemLink0 = document.getElementById("category__item-link-0");
var categoryItemLink1 = document.getElementById("category__item-link-1");
var categoryItemLink2 = document.getElementById("category__item-link-2");
var categoryItemLink3 = document.getElementById("category__item-link-3");
var categoryItemLink4 = document.getElementById("category__item-link-4");
var categoryItemLink5 = document.getElementById("category__item-link-5");
var categoryItemLink6 = document.getElementById("category__item-link-6");
var categoryItemLink7 = document.getElementById("category__item-link-7");
var categoryItemLink8 = document.getElementById("category__item-link-8");
var categoryItemLink9 = document.getElementById("category__item-link-9");
var categoryItemLink10 = document.getElementById("category__item-link-10");
var categoryItemLink11 = document.getElementById("category__item-link-11");
var categoryItemLink12 = document.getElementById("category__item-link-12");
var categoryItemLink13 = document.getElementById("category__item-link-13");
var categoryItemLink14 = document.getElementById("category__item-link-14");
var categoryItemLink15 = document.getElementById("category__item-link-15");
var categoryItemLink16 = document.getElementById("category__item-link-16");
var categoryItemLink17 = document.getElementById("category__item-link-17");
var categoryItemLink18 = document.getElementById("category__item-link-18");
var categoryItemLink19 = document.getElementById("category__item-link-19");
var categoryItemLink20 = document.getElementById("category__item-link-20");
var categoryItemLink21 = document.getElementById("category__item-link-21");
var categoryItem0Icon = document.getElementById("category__item-0-icon");
var categoryItem1Icon = document.getElementById("category__item-1-icon");
var categoryItem2Icon = document.getElementById("category__item-2-icon");
var categoryItem3Icon = document.getElementById("category__item-3-icon");
var categoryItem4Icon = document.getElementById("category__item-4-icon");
var categoryItem5Icon = document.getElementById("category__item-5-icon");
var categoryItem6Icon = document.getElementById("category__item-6-icon");
var categoryItem7Icon = document.getElementById("category__item-7-icon");
var categoryItem8Icon = document.getElementById("category__item-8-icon");
var categoryItem9Icon = document.getElementById("category__item-9-icon");
var categoryItem10Icon = document.getElementById("category__item-10-icon");
var categoryItem11Icon = document.getElementById("category__item-11-icon");
var categoryItem12Icon = document.getElementById("category__item-12-icon");
var categoryItem13Icon = document.getElementById("category__item-13-icon");
var categoryItem14Icon = document.getElementById("category__item-14-icon");
var categoryItem15Icon = document.getElementById("category__item-15-icon");
var categoryItem16Icon = document.getElementById("category__item-16-icon");
var categoryItem17Icon = document.getElementById("category__item-17-icon");
var categoryItem18Icon = document.getElementById("category__item-18-icon");
var categoryItem19Icon = document.getElementById("category__item-19-icon");
var categoryItem20Icon = document.getElementById("category__item-20-icon");
var categoryItem21Icon = document.getElementById("category__item-21-icon");

var categoryItem0 = document.getElementById("category__item-0");
categoryItem0.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--button-color)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "block";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});
var categoryItem1 = document.getElementById("category__item-1");
categoryItem1.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--button-color)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "block";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});
var categoryItem2 = document.getElementById("category__item-2");
categoryItem2.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--button-color)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "block";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem3 = document.getElementById("category__item-3");
categoryItem3.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--button-color)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "block";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem4 = document.getElementById("category__item-4");
categoryItem4.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--button-color)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "block";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem5 = document.getElementById("category__item-5");
categoryItem5.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--button-color)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "block";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem6 = document.getElementById("category__item-6");
categoryItem6.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--button-color)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "block";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem7 = document.getElementById("category__item-7");
categoryItem7.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--button-color)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "block";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem8 = document.getElementById("category__item-8");
categoryItem8.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--button-color)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "block";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem9 = document.getElementById("category__item-9");
categoryItem9.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--button-color)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "block";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem10 = document.getElementById("category__item-10");
categoryItem10.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--button-color)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "block";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem11 = document.getElementById("category__item-11");
categoryItem11.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--button-color)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "block";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem12 = document.getElementById("category__item-12");
categoryItem12.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--button-color)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "block";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem13 = document.getElementById("category__item-13");
categoryItem13.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--button-color)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "block";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem14 = document.getElementById("category__item-14");
categoryItem14.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--button-color)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "block";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem15 = document.getElementById("category__item-15");
categoryItem15.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--button-color)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "block";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem16 = document.getElementById("category__item-16");
categoryItem16.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--button-color)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "block";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem17 = document.getElementById("category__item-17");
categoryItem17.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--button-color)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "block";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem18 = document.getElementById("category__item-18");
categoryItem18.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--button-color)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "block";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem19 = document.getElementById("category__item-19");
categoryItem19.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--button-color)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "block";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "none";
});

var categoryItem20 = document.getElementById("category__item-20");
categoryItem20.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--button-color)";
  categoryItemLink21.style.color = "var(--primary-color-hover09)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "block";
  categoryItem21Icon.style.display = "none";
});

var categoryItem21 = document.getElementById("category__item-21");
categoryItem21.addEventListener("click", function () {
  categoryItemLink0.style.color = "var(--primary-color-hover09)";
  categoryItemLink1.style.color = "var(--primary-color-hover09)";
  categoryItemLink2.style.color = "var(--primary-color-hover09)";
  categoryItemLink3.style.color = "var(--primary-color-hover09)";
  categoryItemLink4.style.color = "var(--primary-color-hover09)";
  categoryItemLink5.style.color = "var(--primary-color-hover09)";
  categoryItemLink6.style.color = "var(--primary-color-hover09)";
  categoryItemLink7.style.color = "var(--primary-color-hover09)";
  categoryItemLink8.style.color = "var(--primary-color-hover09)";
  categoryItemLink9.style.color = "var(--primary-color-hover09)";
  categoryItemLink10.style.color = "var(--primary-color-hover09)";
  categoryItemLink11.style.color = "var(--primary-color-hover09)";
  categoryItemLink12.style.color = "var(--primary-color-hover09)";
  categoryItemLink13.style.color = "var(--primary-color-hover09)";
  categoryItemLink14.style.color = "var(--primary-color-hover09)";
  categoryItemLink15.style.color = "var(--primary-color-hover09)";
  categoryItemLink16.style.color = "var(--primary-color-hover09)";
  categoryItemLink17.style.color = "var(--primary-color-hover09)";
  categoryItemLink18.style.color = "var(--primary-color-hover09)";
  categoryItemLink19.style.color = "var(--primary-color-hover09)";
  categoryItemLink20.style.color = "var(--primary-color-hover09)";
  categoryItemLink21.style.color = "var(--button-color)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
  categoryItem6Icon.style.display = "none";
  categoryItem7Icon.style.display = "none";
  categoryItem8Icon.style.display = "none";
  categoryItem9Icon.style.display = "none";
  categoryItem10Icon.style.display = "none";
  categoryItem11Icon.style.display = "none";
  categoryItem12Icon.style.display = "none";
  categoryItem13Icon.style.display = "none";
  categoryItem14Icon.style.display = "none";
  categoryItem15Icon.style.display = "none";
  categoryItem16Icon.style.display = "none";
  categoryItem17Icon.style.display = "none";
  categoryItem18Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem19Icon.style.display = "none";
  categoryItem20Icon.style.display = "none";
  categoryItem21Icon.style.display = "block";
});

var actionHeartFull1 = document.getElementById("action__heart--full1");
var actionHeartEmpty1 = document.getElementById("action__heart1");
actionHeartEmpty1.onclick = () => {
  actionHeartFull1.style.display = "block";
  actionHeartEmpty1.style.display = "none";
};

var actionHeartFull1 = document.getElementById("action__heart--full1");
var actionHeartEmpty1 = document.getElementById("action__heart1");
actionHeartEmpty1.onclick = () => {
  actionHeartFull1.style.display = "block";
  actionHeartEmpty1.style.display = "none";
};
var actionHeartFull2 = document.getElementById("action__heart--full2");
var actionHeartEmpty2 = document.getElementById("action__heart2");
actionHeartEmpty2.onclick = () => {
  actionHeartFull2.style.display = "block";
  actionHeartEmpty2.style.display = "none";
};
var actionHeartFull3 = document.getElementById("action__heart--full3");
var actionHeartEmpty3 = document.getElementById("action__heart3");
actionHeartEmpty3.onclick = () => {
  actionHeartFull3.style.display = "block";
  actionHeartEmpty3.style.display = "none";
};
var actionHeartFull4 = document.getElementById("action__heart--full4");
var actionHeartEmpty4 = document.getElementById("action__heart4");
actionHeartEmpty4.onclick = () => {
  actionHeartFull4.style.display = "block";
  actionHeartEmpty4.style.display = "none";
};
var actionHeartFull5 = document.getElementById("action__heart--full5");
var actionHeartEmpty5 = document.getElementById("action__heart5");
actionHeartEmpty5.onclick = () => {
  actionHeartFull5.style.display = "block";
  actionHeartEmpty5.style.display = "none";
};
var actionHeartFull6 = document.getElementById("action__heart--full6");
var actionHeartEmpty6 = document.getElementById("action__heart6");
actionHeartEmpty6.onclick = () => {
  actionHeartFull6.style.display = "block";
  actionHeartEmpty6.style.display = "none";
};
var actionHeartFull7 = document.getElementById("action__heart--full7");
var actionHeartEmpty7 = document.getElementById("action__heart7");
actionHeartEmpty7.onclick = () => {
  actionHeartFull7.style.display = "block";
  actionHeartEmpty7.style.display = "none";
};
var actionHeartFull8 = document.getElementById("action__heart--full8");
var actionHeartEmpty8 = document.getElementById("action__heart8");
actionHeartEmpty8.onclick = () => {
  actionHeartFull8.style.display = "block";
  actionHeartEmpty8.style.display = "none";
};
var actionHeartFull9 = document.getElementById("action__heart--full9");
var actionHeartEmpty9 = document.getElementById("action__heart9");
actionHeartEmpty9.onclick = () => {
  actionHeartFull9.style.display = "block";
  actionHeartEmpty9.style.display = "none";
};
var actionHeartFull10 = document.getElementById("action__heart--full10");
var actionHeartEmpty10 = document.getElementById("action__heart10");
actionHeartEmpty10.onclick = () => {
  actionHeartFull10.style.display = "block";
  actionHeartEmpty10.style.display = "none";
};
var actionHeartFull11 = document.getElementById("action__heart--full11");
var actionHeartEmpty11 = document.getElementById("action__heart11");
actionHeartEmpty11.onclick = () => {
  actionHeartFull11.style.display = "block";
  actionHeartEmpty11.style.display = "none";
};
var actionHeartFull12 = document.getElementById("action__heart--full12");
var actionHeartEmpty12 = document.getElementById("action__heart12");
actionHeartEmpty12.onclick = () => {
  actionHeartFull12.style.display = "block";
  actionHeartEmpty12.style.display = "none";
};
var actionHeartFull13 = document.getElementById("action__heart--full13");
var actionHeartEmpty13 = document.getElementById("action__heart13");
actionHeartEmpty13.onclick = () => {
  actionHeartFull13.style.display = "block";
  actionHeartEmpty13.style.display = "none";
};
var actionHeartFull14 = document.getElementById("action__heart--full14");
var actionHeartEmpty14 = document.getElementById("action__heart14");
actionHeartEmpty14.onclick = () => {
  actionHeartFull14.style.display = "block";
  actionHeartEmpty14.style.display = "none";
};
var actionHeartFull15 = document.getElementById("action__heart--full15");
var actionHeartEmpty15 = document.getElementById("action__heart15");
actionHeartEmpty15.onclick = () => {
  actionHeartFull15.style.display = "block";
  actionHeartEmpty15.style.display = "none";
};
var actionHeartFull16 = document.getElementById("action__heart--full16");
var actionHeartEmpty16 = document.getElementById("action__heart16");
actionHeartEmpty16.onclick = () => {
  actionHeartFull16.style.display = "block";
  actionHeartEmpty16.style.display = "none";
};
var actionHeartFull17 = document.getElementById("action__heart--full17");
var actionHeartEmpty17 = document.getElementById("action__heart17");
actionHeartEmpty17.onclick = () => {
  actionHeartFull17.style.display = "block";
  actionHeartEmpty17.style.display = "none";
};
var actionHeartFull18 = document.getElementById("action__heart--full18");
var actionHeartEmpty18 = document.getElementById("action__heart18");
actionHeartEmpty18.onclick = () => {
  actionHeartFull18.style.display = "block";
  actionHeartEmpty18.style.display = "none";
};
var actionHeartFull19 = document.getElementById("action__heart--full19");
var actionHeartEmpty19 = document.getElementById("action__heart19");
actionHeartEmpty19.onclick = () => {
  actionHeartFull19.style.display = "block";
  actionHeartEmpty19.style.display = "none";
};
var actionHeartFull20 = document.getElementById("action__heart--full20");
var actionHeartEmpty20 = document.getElementById("action__heart20");
actionHeartEmpty20.onclick = () => {
  actionHeartFull20.style.display = "block";
  actionHeartEmpty20.style.display = "none";
};
var actionHeartFull21 = document.getElementById("action__heart--full21");
var actionHeartEmpty21 = document.getElementById("action__heart21");
actionHeartEmpty21.onclick = () => {
  actionHeartFull21.style.display = "block";
  actionHeartEmpty21.style.display = "none";
};
var actionHeartFull22 = document.getElementById("action__heart--full22");
var actionHeartEmpty22 = document.getElementById("action__heart22");
actionHeartEmpty22.onclick = () => {
  actionHeartFull22.style.display = "block";
  actionHeartEmpty22.style.display = "none";
};
var actionHeartFull23 = document.getElementById("action__heart--full23");
var actionHeartEmpty23 = document.getElementById("action__heart23");
actionHeartEmpty23.onclick = () => {
  actionHeartFull23.style.display = "block";
  actionHeartEmpty23.style.display = "none";
};
var actionHeartFull24 = document.getElementById("action__heart--full24");
var actionHeartEmpty24 = document.getElementById("action__heart24");
actionHeartEmpty24.onclick = () => {
  actionHeartFull24.style.display = "block";
  actionHeartEmpty24.style.display = "none";
};
var actionHeartFull25 = document.getElementById("action__heart--full25");
var actionHeartEmpty25 = document.getElementById("action__heart25");
actionHeartEmpty25.onclick = () => {
  actionHeartFull25.style.display = "block";
  actionHeartEmpty25.style.display = "none";
};

// Slot 1
var actionStarFull1 = document.getElementById("action__star--full-1");
var actionStarFull2 = document.getElementById("action__star--full-2");
var actionStarFull3 = document.getElementById("action__star--full-3");
var actionStarFull4 = document.getElementById("action__star--full-4");
var actionStarFull5 = document.getElementById("action__star--full-5");
actionStarFull1.addEventListener("click", function () {
  actionStarFull1.style.color = "var(--star-color)";
});
actionStarFull2.addEventListener("click", function () {
  actionStarFull1.style.color = "var(--star-color)";
  actionStarFull2.style.color = "var(--star-color)";
});
actionStarFull3.addEventListener("click", function () {
  actionStarFull1.style.color = "var(--star-color)";
  actionStarFull2.style.color = "var(--star-color)";
  actionStarFull3.style.color = "var(--star-color)";
});
actionStarFull4.addEventListener("click", function () {
  actionStarFull1.style.color = "var(--star-color)";
  actionStarFull2.style.color = "var(--star-color)";
  actionStarFull3.style.color = "var(--star-color)";
  actionStarFull4.style.color = "var(--star-color)";
});
actionStarFull5.addEventListener("click", function () {
  actionStarFull1.style.color = "var(--star-color)";
  actionStarFull2.style.color = "var(--star-color)";
  actionStarFull3.style.color = "var(--star-color)";
  actionStarFull4.style.color = "var(--star-color)";
  actionStarFull5.style.color = "var(--star-color)";
});

// Slot 2
var actionStarFull6 = document.getElementById("action__star--full-6");
var actionStarFull7 = document.getElementById("action__star--full-7");
var actionStarFull8 = document.getElementById("action__star--full-8");
var actionStarFull9 = document.getElementById("action__star--full-9");
var actionStarFull10 = document.getElementById("action__star--full-10");
actionStarFull6.addEventListener("click", function () {
  actionStarFull6.style.color = "var(--star-color)";
});
actionStarFull7.addEventListener("click", function () {
  actionStarFull6.style.color = "var(--star-color)";
  actionStarFull7.style.color = "var(--star-color)";
});
actionStarFull8.addEventListener("click", function () {
  actionStarFull6.style.color = "var(--star-color)";
  actionStarFull7.style.color = "var(--star-color)";
  actionStarFull8.style.color = "var(--star-color)";
});
actionStarFull9.addEventListener("click", function () {
  actionStarFull6.style.color = "var(--star-color)";
  actionStarFull7.style.color = "var(--star-color)";
  actionStarFull8.style.color = "var(--star-color)";
  actionStarFull9.style.color = "var(--star-color)";
});
actionStarFull10.addEventListener("click", function () {
  actionStarFull6.style.color = "var(--star-color)";
  actionStarFull7.style.color = "var(--star-color)";
  actionStarFull8.style.color = "var(--star-color)";
  actionStarFull9.style.color = "var(--star-color)";
  actionStarFull10.style.color = "var(--star-color)";
});

// Slot 3
var actionStarFull11 = document.getElementById("action__star--full-11");
var actionStarFull12 = document.getElementById("action__star--full-12");
var actionStarFull13 = document.getElementById("action__star--full-13");
var actionStarFull14 = document.getElementById("action__star--full-14");
var actionStarFull15 = document.getElementById("action__star--full-15");
actionStarFull11.addEventListener("click", function () {
  actionStarFull11.style.color = "var(--star-color)";
});
actionStarFull12.addEventListener("click", function () {
  actionStarFull11.style.color = "var(--star-color)";
  actionStarFull12.style.color = "var(--star-color)";
});
actionStarFull13.addEventListener("click", function () {
  actionStarFull11.style.color = "var(--star-color)";
  actionStarFull12.style.color = "var(--star-color)";
  actionStarFull13.style.color = "var(--star-color)";
});
actionStarFull14.addEventListener("click", function () {
  actionStarFull11.style.color = "var(--star-color)";
  actionStarFull12.style.color = "var(--star-color)";
  actionStarFull13.style.color = "var(--star-color)";
  actionStarFull14.style.color = "var(--star-color)";
});
actionStarFull15.addEventListener("click", function () {
  actionStarFull11.style.color = "var(--star-color)";
  actionStarFull12.style.color = "var(--star-color)";
  actionStarFull13.style.color = "var(--star-color)";
  actionStarFull14.style.color = "var(--star-color)";
  actionStarFull15.style.color = "var(--star-color)";
});

// Slot 4
var actionStarFull16 = document.getElementById("action__star--full-16");
var actionStarFull17 = document.getElementById("action__star--full-17");
var actionStarFull18 = document.getElementById("action__star--full-18");
var actionStarFull19 = document.getElementById("action__star--full-19");
var actionStarFull20 = document.getElementById("action__star--full-20");
actionStarFull16.addEventListener("click", function () {
  actionStarFull16.style.color = "var(--star-color)";
});
actionStarFull17.addEventListener("click", function () {
  actionStarFull16.style.color = "var(--star-color)";
  actionStarFull17.style.color = "var(--star-color)";
});
actionStarFull18.addEventListener("click", function () {
  actionStarFull16.style.color = "var(--star-color)";
  actionStarFull17.style.color = "var(--star-color)";
  actionStarFull18.style.color = "var(--star-color)";
});
actionStarFull19.addEventListener("click", function () {
  actionStarFull16.style.color = "var(--star-color)";
  actionStarFull17.style.color = "var(--star-color)";
  actionStarFull18.style.color = "var(--star-color)";
  actionStarFull19.style.color = "var(--star-color)";
});
actionStarFull20.addEventListener("click", function () {
  actionStarFull16.style.color = "var(--star-color)";
  actionStarFull17.style.color = "var(--star-color)";
  actionStarFull18.style.color = "var(--star-color)";
  actionStarFull19.style.color = "var(--star-color)";
  actionStarFull20.style.color = "var(--star-color)";
});

// Slot 5
var actionStarFull21 = document.getElementById("action__star--full-21");
var actionStarFull22 = document.getElementById("action__star--full-22");
var actionStarFull23 = document.getElementById("action__star--full-23");
var actionStarFull24 = document.getElementById("action__star--full-24");
var actionStarFull25 = document.getElementById("action__star--full-25");
actionStarFull21.addEventListener("click", function () {
  actionStarFull21.style.color = "var(--star-color)";
});
actionStarFull22.addEventListener("click", function () {
  actionStarFull21.style.color = "var(--star-color)";
  actionStarFull22.style.color = "var(--star-color)";
});
actionStarFull23.addEventListener("click", function () {
  actionStarFull21.style.color = "var(--star-color)";
  actionStarFull22.style.color = "var(--star-color)";
  actionStarFull23.style.color = "var(--star-color)";
});
actionStarFull24.addEventListener("click", function () {
  actionStarFull21.style.color = "var(--star-color)";
  actionStarFull22.style.color = "var(--star-color)";
  actionStarFull23.style.color = "var(--star-color)";
  actionStarFull24.style.color = "var(--star-color)";
});
actionStarFull25.addEventListener("click", function () {
  actionStarFull21.style.color = "var(--star-color)";
  actionStarFull22.style.color = "var(--star-color)";
  actionStarFull23.style.color = "var(--star-color)";
  actionStarFull24.style.color = "var(--star-color)";
  actionStarFull25.style.color = "var(--star-color)";
});

// Slot 6
var actionStarFull26 = document.getElementById("action__star--full-26");
var actionStarFull27 = document.getElementById("action__star--full-27");
var actionStarFull28 = document.getElementById("action__star--full-28");
var actionStarFull29 = document.getElementById("action__star--full-29");
var actionStarFull30 = document.getElementById("action__star--full-30");
actionStarFull26.addEventListener("click", function () {
  actionStarFull26.style.color = "var(--star-color)";
});
actionStarFull27.addEventListener("click", function () {
  actionStarFull26.style.color = "var(--star-color)";
  actionStarFull27.style.color = "var(--star-color)";
});
actionStarFull28.addEventListener("click", function () {
  actionStarFull26.style.color = "var(--star-color)";
  actionStarFull27.style.color = "var(--star-color)";
  actionStarFull28.style.color = "var(--star-color)";
});
actionStarFull29.addEventListener("click", function () {
  actionStarFull26.style.color = "var(--star-color)";
  actionStarFull27.style.color = "var(--star-color)";
  actionStarFull28.style.color = "var(--star-color)";
  actionStarFull29.style.color = "var(--star-color)";
});
actionStarFull30.addEventListener("click", function () {
  actionStarFull26.style.color = "var(--star-color)";
  actionStarFull27.style.color = "var(--star-color)";
  actionStarFull28.style.color = "var(--star-color)";
  actionStarFull29.style.color = "var(--star-color)";
  actionStarFull30.style.color = "var(--star-color)";
});

// Slot 7
var actionStarFull31 = document.getElementById("action__star--full-31");
var actionStarFull32 = document.getElementById("action__star--full-32");
var actionStarFull33 = document.getElementById("action__star--full-33");
var actionStarFull34 = document.getElementById("action__star--full-34");
var actionStarFull35 = document.getElementById("action__star--full-35");
actionStarFull31.addEventListener("click", function () {
  actionStarFull31.style.color = "var(--star-color)";
});
actionStarFull32.addEventListener("click", function () {
  actionStarFull31.style.color = "var(--star-color)";
  actionStarFull32.style.color = "var(--star-color)";
});
actionStarFull33.addEventListener("click", function () {
  actionStarFull31.style.color = "var(--star-color)";
  actionStarFull32.style.color = "var(--star-color)";
  actionStarFull33.style.color = "var(--star-color)";
});
actionStarFull34.addEventListener("click", function () {
  actionStarFull31.style.color = "var(--star-color)";
  actionStarFull32.style.color = "var(--star-color)";
  actionStarFull33.style.color = "var(--star-color)";
  actionStarFull34.style.color = "var(--star-color)";
});
actionStarFull35.addEventListener("click", function () {
  actionStarFull31.style.color = "var(--star-color)";
  actionStarFull32.style.color = "var(--star-color)";
  actionStarFull33.style.color = "var(--star-color)";
  actionStarFull34.style.color = "var(--star-color)";
  actionStarFull35.style.color = "var(--star-color)";
});

// Slot 8
var actionStarFull36 = document.getElementById("action__star--full-36");
var actionStarFull37 = document.getElementById("action__star--full-37");
var actionStarFull38 = document.getElementById("action__star--full-38");
var actionStarFull39 = document.getElementById("action__star--full-39");
var actionStarFull40 = document.getElementById("action__star--full-40");
actionStarFull36.addEventListener("click", function () {
  actionStarFull36.style.color = "var(--star-color)";
});
actionStarFull37.addEventListener("click", function () {
  actionStarFull36.style.color = "var(--star-color)";
  actionStarFull37.style.color = "var(--star-color)";
});
actionStarFull38.addEventListener("click", function () {
  actionStarFull36.style.color = "var(--star-color)";
  actionStarFull37.style.color = "var(--star-color)";
  actionStarFull38.style.color = "var(--star-color)";
});
actionStarFull39.addEventListener("click", function () {
  actionStarFull36.style.color = "var(--star-color)";
  actionStarFull37.style.color = "var(--star-color)";
  actionStarFull38.style.color = "var(--star-color)";
  actionStarFull39.style.color = "var(--star-color)";
});
actionStarFull40.addEventListener("click", function () {
  actionStarFull36.style.color = "var(--star-color)";
  actionStarFull37.style.color = "var(--star-color)";
  actionStarFull38.style.color = "var(--star-color)";
  actionStarFull39.style.color = "var(--star-color)";
  actionStarFull40.style.color = "var(--star-color)";
});

// Slot 9
var actionStarFull41 = document.getElementById("action__star--full-41");
var actionStarFull42 = document.getElementById("action__star--full-42");
var actionStarFull43 = document.getElementById("action__star--full-43");
var actionStarFull44 = document.getElementById("action__star--full-44");
var actionStarFull45 = document.getElementById("action__star--full-45");
actionStarFull41.addEventListener("click", function () {
  actionStarFull41.style.color = "var(--star-color)";
});
actionStarFull42.addEventListener("click", function () {
  actionStarFull41.style.color = "var(--star-color)";
  actionStarFull42.style.color = "var(--star-color)";
});
actionStarFull43.addEventListener("click", function () {
  actionStarFull41.style.color = "var(--star-color)";
  actionStarFull42.style.color = "var(--star-color)";
  actionStarFull43.style.color = "var(--star-color)";
});
actionStarFull44.addEventListener("click", function () {
  actionStarFull41.style.color = "var(--star-color)";
  actionStarFull42.style.color = "var(--star-color)";
  actionStarFull43.style.color = "var(--star-color)";
  actionStarFull44.style.color = "var(--star-color)";
});
actionStarFull45.addEventListener("click", function () {
  actionStarFull41.style.color = "var(--star-color)";
  actionStarFull42.style.color = "var(--star-color)";
  actionStarFull43.style.color = "var(--star-color)";
  actionStarFull44.style.color = "var(--star-color)";
  actionStarFull45.style.color = "var(--star-color)";
});

// Slot 10
var actionStarFull46 = document.getElementById("action__star--full-46");
var actionStarFull47 = document.getElementById("action__star--full-47");
var actionStarFull48 = document.getElementById("action__star--full-48");
var actionStarFull49 = document.getElementById("action__star--full-49");
var actionStarFull50 = document.getElementById("action__star--full-50");
actionStarFull46.addEventListener("click", function () {
  actionStarFull46.style.color = "var(--star-color)";
});
actionStarFull47.addEventListener("click", function () {
  actionStarFull46.style.color = "var(--star-color)";
  actionStarFull47.style.color = "var(--star-color)";
});
actionStarFull48.addEventListener("click", function () {
  actionStarFull46.style.color = "var(--star-color)";
  actionStarFull47.style.color = "var(--star-color)";
  actionStarFull48.style.color = "var(--star-color)";
});
actionStarFull49.addEventListener("click", function () {
  actionStarFull46.style.color = "var(--star-color)";
  actionStarFull47.style.color = "var(--star-color)";
  actionStarFull48.style.color = "var(--star-color)";
  actionStarFull49.style.color = "var(--star-color)";
});
actionStarFull50.addEventListener("click", function () {
  actionStarFull46.style.color = "var(--star-color)";
  actionStarFull47.style.color = "var(--star-color)";
  actionStarFull48.style.color = "var(--star-color)";
  actionStarFull49.style.color = "var(--star-color)";
  actionStarFull50.style.color = "var(--star-color)";
});

// Slot 11
var actionStarFull51 = document.getElementById("action__star--full-51");
var actionStarFull52 = document.getElementById("action__star--full-52");
var actionStarFull53 = document.getElementById("action__star--full-53");
var actionStarFull54 = document.getElementById("action__star--full-54");
var actionStarFull55 = document.getElementById("action__star--full-55");
actionStarFull51.addEventListener("click", function () {
  actionStarFull51.style.color = "var(--star-color)";
});
actionStarFull52.addEventListener("click", function () {
  actionStarFull51.style.color = "var(--star-color)";
  actionStarFull52.style.color = "var(--star-color)";
});
actionStarFull53.addEventListener("click", function () {
  actionStarFull51.style.color = "var(--star-color)";
  actionStarFull52.style.color = "var(--star-color)";
  actionStarFull53.style.color = "var(--star-color)";
});
actionStarFull54.addEventListener("click", function () {
  actionStarFull51.style.color = "var(--star-color)";
  actionStarFull52.style.color = "var(--star-color)";
  actionStarFull53.style.color = "var(--star-color)";
  actionStarFull54.style.color = "var(--star-color)";
});
actionStarFull55.addEventListener("click", function () {
  actionStarFull51.style.color = "var(--star-color)";
  actionStarFull52.style.color = "var(--star-color)";
  actionStarFull53.style.color = "var(--star-color)";
  actionStarFull54.style.color = "var(--star-color)";
  actionStarFull55.style.color = "var(--star-color)";
});

// Slot 12
var actionStarFull56 = document.getElementById("action__star--full-56");
var actionStarFull57 = document.getElementById("action__star--full-57");
var actionStarFull58 = document.getElementById("action__star--full-58");
var actionStarFull59 = document.getElementById("action__star--full-59");
var actionStarFull60 = document.getElementById("action__star--full-60");
actionStarFull56.addEventListener("click", function () {
  actionStarFull56.style.color = "var(--star-color)";
});
actionStarFull57.addEventListener("click", function () {
  actionStarFull56.style.color = "var(--star-color)";
  actionStarFull57.style.color = "var(--star-color)";
});
actionStarFull58.addEventListener("click", function () {
  actionStarFull56.style.color = "var(--star-color)";
  actionStarFull57.style.color = "var(--star-color)";
  actionStarFull58.style.color = "var(--star-color)";
});
actionStarFull59.addEventListener("click", function () {
  actionStarFull56.style.color = "var(--star-color)";
  actionStarFull57.style.color = "var(--star-color)";
  actionStarFull58.style.color = "var(--star-color)";
  actionStarFull59.style.color = "var(--star-color)";
});
actionStarFull60.addEventListener("click", function () {
  actionStarFull56.style.color = "var(--star-color)";
  actionStarFull57.style.color = "var(--star-color)";
  actionStarFull58.style.color = "var(--star-color)";
  actionStarFull59.style.color = "var(--star-color)";
  actionStarFull60.style.color = "var(--star-color)";
});

// Slot 13
var actionStarFull61 = document.getElementById("action__star--full-61");
var actionStarFull62 = document.getElementById("action__star--full-62");
var actionStarFull63 = document.getElementById("action__star--full-63");
var actionStarFull64 = document.getElementById("action__star--full-64");
var actionStarFull65 = document.getElementById("action__star--full-65");
actionStarFull61.addEventListener("click", function () {
  actionStarFull61.style.color = "var(--star-color)";
});
actionStarFull62.addEventListener("click", function () {
  actionStarFull61.style.color = "var(--star-color)";
  actionStarFull62.style.color = "var(--star-color)";
});
actionStarFull63.addEventListener("click", function () {
  actionStarFull61.style.color = "var(--star-color)";
  actionStarFull62.style.color = "var(--star-color)";
  actionStarFull63.style.color = "var(--star-color)";
});
actionStarFull64.addEventListener("click", function () {
  actionStarFull61.style.color = "var(--star-color)";
  actionStarFull62.style.color = "var(--star-color)";
  actionStarFull63.style.color = "var(--star-color)";
  actionStarFull64.style.color = "var(--star-color)";
});
actionStarFull65.addEventListener("click", function () {
  actionStarFull61.style.color = "var(--star-color)";
  actionStarFull62.style.color = "var(--star-color)";
  actionStarFull63.style.color = "var(--star-color)";
  actionStarFull64.style.color = "var(--star-color)";
  actionStarFull65.style.color = "var(--star-color)";
});

// Slot 14
var actionStarFull66 = document.getElementById("action__star--full-66");
var actionStarFull67 = document.getElementById("action__star--full-67");
var actionStarFull68 = document.getElementById("action__star--full-68");
var actionStarFull69 = document.getElementById("action__star--full-69");
var actionStarFull70 = document.getElementById("action__star--full-70");
actionStarFull66.addEventListener("click", function () {
  actionStarFull66.style.color = "var(--star-color)";
});
actionStarFull67.addEventListener("click", function () {
  actionStarFull66.style.color = "var(--star-color)";
  actionStarFull67.style.color = "var(--star-color)";
});
actionStarFull68.addEventListener("click", function () {
  actionStarFull66.style.color = "var(--star-color)";
  actionStarFull67.style.color = "var(--star-color)";
  actionStarFull68.style.color = "var(--star-color)";
});
actionStarFull69.addEventListener("click", function () {
  actionStarFull66.style.color = "var(--star-color)";
  actionStarFull67.style.color = "var(--star-color)";
  actionStarFull68.style.color = "var(--star-color)";
  actionStarFull69.style.color = "var(--star-color)";
});
actionStarFull70.addEventListener("click", function () {
  actionStarFull66.style.color = "var(--star-color)";
  actionStarFull67.style.color = "var(--star-color)";
  actionStarFull68.style.color = "var(--star-color)";
  actionStarFull69.style.color = "var(--star-color)";
  actionStarFull70.style.color = "var(--star-color)";
});

// Slot 15
var actionStarFull71 = document.getElementById("action__star--full-71");
var actionStarFull72 = document.getElementById("action__star--full-72");
var actionStarFull73 = document.getElementById("action__star--full-73");
var actionStarFull74 = document.getElementById("action__star--full-74");
var actionStarFull75 = document.getElementById("action__star--full-75");
actionStarFull71.addEventListener("click", function () {
  actionStarFull71.style.color = "var(--star-color)";
});
actionStarFull72.addEventListener("click", function () {
  actionStarFull71.style.color = "var(--star-color)";
  actionStarFull72.style.color = "var(--star-color)";
});
actionStarFull73.addEventListener("click", function () {
  actionStarFull71.style.color = "var(--star-color)";
  actionStarFull72.style.color = "var(--star-color)";
  actionStarFull73.style.color = "var(--star-color)";
});
actionStarFull74.addEventListener("click", function () {
  actionStarFull71.style.color = "var(--star-color)";
  actionStarFull72.style.color = "var(--star-color)";
  actionStarFull73.style.color = "var(--star-color)";
  actionStarFull74.style.color = "var(--star-color)";
});
actionStarFull75.addEventListener("click", function () {
  actionStarFull71.style.color = "var(--star-color)";
  actionStarFull72.style.color = "var(--star-color)";
  actionStarFull73.style.color = "var(--star-color)";
  actionStarFull74.style.color = "var(--star-color)";
  actionStarFull75.style.color = "var(--star-color)";
});

// Slot 16
var actionStarFull76 = document.getElementById("action__star--full-76");
var actionStarFull77 = document.getElementById("action__star--full-77");
var actionStarFull78 = document.getElementById("action__star--full-78");
var actionStarFull79 = document.getElementById("action__star--full-79");
var actionStarFull80 = document.getElementById("action__star--full-80");
actionStarFull76.addEventListener("click", function () {
  actionStarFull76.style.color = "var(--star-color)";
});
actionStarFull77.addEventListener("click", function () {
  actionStarFull76.style.color = "var(--star-color)";
  actionStarFull77.style.color = "var(--star-color)";
});
actionStarFull78.addEventListener("click", function () {
  actionStarFull76.style.color = "var(--star-color)";
  actionStarFull77.style.color = "var(--star-color)";
  actionStarFull78.style.color = "var(--star-color)";
});
actionStarFull79.addEventListener("click", function () {
  actionStarFull76.style.color = "var(--star-color)";
  actionStarFull77.style.color = "var(--star-color)";
  actionStarFull78.style.color = "var(--star-color)";
  actionStarFull79.style.color = "var(--star-color)";
});
actionStarFull80.addEventListener("click", function () {
  actionStarFull76.style.color = "var(--star-color)";
  actionStarFull77.style.color = "var(--star-color)";
  actionStarFull78.style.color = "var(--star-color)";
  actionStarFull79.style.color = "var(--star-color)";
  actionStarFull80.style.color = "var(--star-color)";
});

// Slot 17
var actionStarFull81 = document.getElementById("action__star--full-81");
var actionStarFull82 = document.getElementById("action__star--full-82");
var actionStarFull83 = document.getElementById("action__star--full-83");
var actionStarFull84 = document.getElementById("action__star--full-84");
var actionStarFull85 = document.getElementById("action__star--full-85");
actionStarFull81.addEventListener("click", function () {
  actionStarFull81.style.color = "var(--star-color)";
});
actionStarFull82.addEventListener("click", function () {
  actionStarFull81.style.color = "var(--star-color)";
  actionStarFull82.style.color = "var(--star-color)";
});
actionStarFull83.addEventListener("click", function () {
  actionStarFull81.style.color = "var(--star-color)";
  actionStarFull82.style.color = "var(--star-color)";
  actionStarFull83.style.color = "var(--star-color)";
});
actionStarFull84.addEventListener("click", function () {
  actionStarFull81.style.color = "var(--star-color)";
  actionStarFull82.style.color = "var(--star-color)";
  actionStarFull83.style.color = "var(--star-color)";
  actionStarFull84.style.color = "var(--star-color)";
});
actionStarFull85.addEventListener("click", function () {
  actionStarFull81.style.color = "var(--star-color)";
  actionStarFull82.style.color = "var(--star-color)";
  actionStarFull83.style.color = "var(--star-color)";
  actionStarFull84.style.color = "var(--star-color)";
  actionStarFull85.style.color = "var(--star-color)";
});

// Slot 18
var actionStarFull86 = document.getElementById("action__star--full-86");
var actionStarFull87 = document.getElementById("action__star--full-87");
var actionStarFull88 = document.getElementById("action__star--full-88");
var actionStarFull89 = document.getElementById("action__star--full-89");
var actionStarFull90 = document.getElementById("action__star--full-90");
actionStarFull86.addEventListener("click", function () {
  actionStarFull86.style.color = "var(--star-color)";
});
actionStarFull87.addEventListener("click", function () {
  actionStarFull86.style.color = "var(--star-color)";
  actionStarFull87.style.color = "var(--star-color)";
});
actionStarFull88.addEventListener("click", function () {
  actionStarFull86.style.color = "var(--star-color)";
  actionStarFull87.style.color = "var(--star-color)";
  actionStarFull88.style.color = "var(--star-color)";
});
actionStarFull89.addEventListener("click", function () {
  actionStarFull86.style.color = "var(--star-color)";
  actionStarFull87.style.color = "var(--star-color)";
  actionStarFull88.style.color = "var(--star-color)";
  actionStarFull89.style.color = "var(--star-color)";
});
actionStarFull90.addEventListener("click", function () {
  actionStarFull86.style.color = "var(--star-color)";
  actionStarFull87.style.color = "var(--star-color)";
  actionStarFull88.style.color = "var(--star-color)";
  actionStarFull89.style.color = "var(--star-color)";
  actionStarFull90.style.color = "var(--star-color)";
});

// Slot 19
var actionStarFull91 = document.getElementById("action__star--full-91");
var actionStarFull92 = document.getElementById("action__star--full-92");
var actionStarFull93 = document.getElementById("action__star--full-93");
var actionStarFull94 = document.getElementById("action__star--full-94");
var actionStarFull95 = document.getElementById("action__star--full-95");
actionStarFull91.addEventListener("click", function () {
  actionStarFull91.style.color = "var(--star-color)";
});
actionStarFull92.addEventListener("click", function () {
  actionStarFull91.style.color = "var(--star-color)";
  actionStarFull92.style.color = "var(--star-color)";
});
actionStarFull93.addEventListener("click", function () {
  actionStarFull91.style.color = "var(--star-color)";
  actionStarFull92.style.color = "var(--star-color)";
  actionStarFull93.style.color = "var(--star-color)";
});
actionStarFull94.addEventListener("click", function () {
  actionStarFull91.style.color = "var(--star-color)";
  actionStarFull92.style.color = "var(--star-color)";
  actionStarFull93.style.color = "var(--star-color)";
  actionStarFull94.style.color = "var(--star-color)";
});
actionStarFull95.addEventListener("click", function () {
  actionStarFull91.style.color = "var(--star-color)";
  actionStarFull92.style.color = "var(--star-color)";
  actionStarFull93.style.color = "var(--star-color)";
  actionStarFull94.style.color = "var(--star-color)";
  actionStarFull95.style.color = "var(--star-color)";
});

// Slot 20
var actionStarFull96 = document.getElementById("action__star--full-96");
var actionStarFull97 = document.getElementById("action__star--full-97");
var actionStarFull98 = document.getElementById("action__star--full-98");
var actionStarFull99 = document.getElementById("action__star--full-99");
var actionStarFull100 = document.getElementById("action__star--full-100");
actionStarFull96.addEventListener("click", function () {
  actionStarFull96.style.color = "var(--star-color)";
});
actionStarFull97.addEventListener("click", function () {
  actionStarFull96.style.color = "var(--star-color)";
  actionStarFull97.style.color = "var(--star-color)";
});
actionStarFull98.addEventListener("click", function () {
  actionStarFull96.style.color = "var(--star-color)";
  actionStarFull97.style.color = "var(--star-color)";
  actionStarFull98.style.color = "var(--star-color)";
});
actionStarFull99.addEventListener("click", function () {
  actionStarFull96.style.color = "var(--star-color)";
  actionStarFull97.style.color = "var(--star-color)";
  actionStarFull98.style.color = "var(--star-color)";
  actionStarFull99.style.color = "var(--star-color)";
});
actionStarFull100.addEventListener("click", function () {
  actionStarFull96.style.color = "var(--star-color)";
  actionStarFull97.style.color = "var(--star-color)";
  actionStarFull98.style.color = "var(--star-color)";
  actionStarFull99.style.color = "var(--star-color)";
  actionStarFull100.style.color = "var(--star-color)";
});

// Slot 21
var actionStarFull101 = document.getElementById("action__star--full-101");
var actionStarFull102 = document.getElementById("action__star--full-102");
var actionStarFull103 = document.getElementById("action__star--full-103");
var actionStarFull104 = document.getElementById("action__star--full-104");
var actionStarFull105 = document.getElementById("action__star--full-105");
actionStarFull101.addEventListener("click", function () {
  actionStarFull101.style.color = "var(--star-color)";
});
actionStarFull102.addEventListener("click", function () {
  actionStarFull101.style.color = "var(--star-color)";
  actionStarFull102.style.color = "var(--star-color)";
});
actionStarFull103.addEventListener("click", function () {
  actionStarFull101.style.color = "var(--star-color)";
  actionStarFull102.style.color = "var(--star-color)";
  actionStarFull103.style.color = "var(--star-color)";
});
actionStarFull104.addEventListener("click", function () {
  actionStarFull101.style.color = "var(--star-color)";
  actionStarFull102.style.color = "var(--star-color)";
  actionStarFull103.style.color = "var(--star-color)";
  actionStarFull104.style.color = "var(--star-color)";
});
actionStarFull105.addEventListener("click", function () {
  actionStarFull101.style.color = "var(--star-color)";
  actionStarFull102.style.color = "var(--star-color)";
  actionStarFull103.style.color = "var(--star-color)";
  actionStarFull104.style.color = "var(--star-color)";
  actionStarFull105.style.color = "var(--star-color)";
});

// Slot 22
var actionStarFull106 = document.getElementById("action__star--full-106");
var actionStarFull107 = document.getElementById("action__star--full-107");
var actionStarFull108 = document.getElementById("action__star--full-108");
var actionStarFull109 = document.getElementById("action__star--full-109");
var actionStarFull110 = document.getElementById("action__star--full-110");
actionStarFull106.addEventListener("click", function () {
  actionStarFull106.style.color = "var(--star-color)";
});
actionStarFull107.addEventListener("click", function () {
  actionStarFull106.style.color = "var(--star-color)";
  actionStarFull107.style.color = "var(--star-color)";
});
actionStarFull108.addEventListener("click", function () {
  actionStarFull106.style.color = "var(--star-color)";
  actionStarFull107.style.color = "var(--star-color)";
  actionStarFull108.style.color = "var(--star-color)";
});
actionStarFull109.addEventListener("click", function () {
  actionStarFull106.style.color = "var(--star-color)";
  actionStarFull107.style.color = "var(--star-color)";
  actionStarFull108.style.color = "var(--star-color)";
  actionStarFull109.style.color = "var(--star-color)";
});
actionStarFull110.addEventListener("click", function () {
  actionStarFull106.style.color = "var(--star-color)";
  actionStarFull107.style.color = "var(--star-color)";
  actionStarFull108.style.color = "var(--star-color)";
  actionStarFull109.style.color = "var(--star-color)";
  actionStarFull110.style.color = "var(--star-color)";
});

// Slot 23
var actionStarFull111 = document.getElementById("action__star--full-111");
var actionStarFull112 = document.getElementById("action__star--full-112");
var actionStarFull113 = document.getElementById("action__star--full-113");
var actionStarFull114 = document.getElementById("action__star--full-114");
var actionStarFull115 = document.getElementById("action__star--full-115");
actionStarFull111.addEventListener("click", function () {
  actionStarFull111.style.color = "var(--star-color)";
});
actionStarFull112.addEventListener("click", function () {
  actionStarFull111.style.color = "var(--star-color)";
  actionStarFull112.style.color = "var(--star-color)";
});
actionStarFull113.addEventListener("click", function () {
  actionStarFull111.style.color = "var(--star-color)";
  actionStarFull112.style.color = "var(--star-color)";
  actionStarFull113.style.color = "var(--star-color)";
});
actionStarFull114.addEventListener("click", function () {
  actionStarFull111.style.color = "var(--star-color)";
  actionStarFull112.style.color = "var(--star-color)";
  actionStarFull113.style.color = "var(--star-color)";
  actionStarFull114.style.color = "var(--star-color)";
});
actionStarFull115.addEventListener("click", function () {
  actionStarFull111.style.color = "var(--star-color)";
  actionStarFull112.style.color = "var(--star-color)";
  actionStarFull113.style.color = "var(--star-color)";
  actionStarFull114.style.color = "var(--star-color)";
  actionStarFull115.style.color = "var(--star-color)";
});

// Slot 24
var actionStarFull116 = document.getElementById("action__star--full-116");
var actionStarFull117 = document.getElementById("action__star--full-117");
var actionStarFull118 = document.getElementById("action__star--full-118");
var actionStarFull119 = document.getElementById("action__star--full-119");
var actionStarFull120 = document.getElementById("action__star--full-120");
actionStarFull116.addEventListener("click", function () {
  actionStarFull116.style.color = "var(--star-color)";
});
actionStarFull117.addEventListener("click", function () {
  actionStarFull116.style.color = "var(--star-color)";
  actionStarFull117.style.color = "var(--star-color)";
});
actionStarFull118.addEventListener("click", function () {
  actionStarFull116.style.color = "var(--star-color)";
  actionStarFull117.style.color = "var(--star-color)";
  actionStarFull118.style.color = "var(--star-color)";
});
actionStarFull119.addEventListener("click", function () {
  actionStarFull116.style.color = "var(--star-color)";
  actionStarFull117.style.color = "var(--star-color)";
  actionStarFull118.style.color = "var(--star-color)";
  actionStarFull119.style.color = "var(--star-color)";
});
actionStarFull120.addEventListener("click", function () {
  actionStarFull116.style.color = "var(--star-color)";
  actionStarFull117.style.color = "var(--star-color)";
  actionStarFull118.style.color = "var(--star-color)";
  actionStarFull119.style.color = "var(--star-color)";
  actionStarFull120.style.color = "var(--star-color)";
});

// Slot 23
var actionStarFull121 = document.getElementById("action__star--full-121");
var actionStarFull122 = document.getElementById("action__star--full-122");
var actionStarFull123 = document.getElementById("action__star--full-123");
var actionStarFull124 = document.getElementById("action__star--full-124");
var actionStarFull125 = document.getElementById("action__star--full-125");
actionStarFull121.addEventListener("click", function () {
  actionStarFull121.style.color = "var(--star-color)";
});
actionStarFull122.addEventListener("click", function () {
  actionStarFull121.style.color = "var(--star-color)";
  actionStarFull122.style.color = "var(--star-color)";
});
actionStarFull123.addEventListener("click", function () {
  actionStarFull121.style.color = "var(--star-color)";
  actionStarFull122.style.color = "var(--star-color)";
  actionStarFull123.style.color = "var(--star-color)";
});
actionStarFull124.addEventListener("click", function () {
  actionStarFull121.style.color = "var(--star-color)";
  actionStarFull122.style.color = "var(--star-color)";
  actionStarFull123.style.color = "var(--star-color)";
  actionStarFull124.style.color = "var(--star-color)";
});
actionStarFull125.addEventListener("click", function () {
  actionStarFull121.style.color = "var(--star-color)";
  actionStarFull122.style.color = "var(--star-color)";
  actionStarFull123.style.color = "var(--star-color)";
  actionStarFull124.style.color = "var(--star-color)";
  actionStarFull125.style.color = "var(--star-color)";
});

//Home
var btnPhoBien = document.getElementById("btn__phoBien");
var btnMoiNhat = document.getElementById("btn__moiNhat");
var btnBanChay = document.getElementById("btn__banChay");

btnPhoBien.onclick = () => {
  btnPhoBien.style.backgroundColor = "var(--button-color)";
  btnPhoBien.style.color = "var(--text-color)";
  btnMoiNhat.style.backgroundColor = "var(--background-container)";
  btnMoiNhat.style.color = "var(--primary-color)";
  btnBanChay.style.backgroundColor = "var(--background-container)";
  btnBanChay.style.color = "var(--primary-color)";
};

btnMoiNhat.onclick = () => {
  btnPhoBien.style.backgroundColor = "var(--background-container)";
  btnPhoBien.style.color = "var(--primary-color)";
  btnMoiNhat.style.backgroundColor = "var(--button-color)";
  btnMoiNhat.style.color = "var(--text-color)";
  btnBanChay.style.backgroundColor = "var(--background-container)";
  btnBanChay.style.color = "var(--primary-color)";
};

btnBanChay.onclick = () => {
  btnPhoBien.style.backgroundColor = "var(--background-container)";
  btnPhoBien.style.color = "var(--primary-color)";
  btnMoiNhat.style.backgroundColor = "var(--background-container)";
  btnMoiNhat.style.color = "var(--primary-color)";
  btnBanChay.style.backgroundColor = "var(--button-color)";
  btnBanChay.style.color = "var(--text-color)";
};

var costRoot = document.getElementById("cost-root");
var costToHigh = document.getElementById("cost-to-high");
var costToLow = document.getElementById("cost-to-low");
costToHigh.onclick = () => {
  costRoot.innerText = "Giá từ thấp tới cao";
};
costToLow.onclick = () => {
  costRoot.innerText = "Giá từ cao tới thấp";
};

var pagination1 = document.getElementById("pagination-1");
var pagination2 = document.getElementById("pagination-2");
var pagination3 = document.getElementById("pagination-3");
var pagination4 = document.getElementById("pagination-4");
var pagination5 = document.getElementById("pagination-5");
var pagination21 = document.getElementById("pagination-21");

var paginationLink1 = document.getElementById("pagination-link-1");
var paginationLink2 = document.getElementById("pagination-link-2");
var paginationLink3 = document.getElementById("pagination-link-3");
var paginationLink4 = document.getElementById("pagination-link-4");
var paginationLink5 = document.getElementById("pagination-link-5");
var paginationLink21 = document.getElementById("pagination-link-21");
pagination1.onclick = (e) => {
  e.preventDefault();
  pagination1.classList.add("pagination--clicked");
  paginationLink1.classList.add("pagination__link--clicked");
  pagination2.classList.remove("pagination--clicked");
  paginationLink2.classList.remove("pagination__link--clicked");
  pagination3.classList.remove("pagination--clicked");
  paginationLink3.classList.remove("pagination__link--clicked");
  pagination4.classList.remove("pagination--clicked");
  paginationLink4.classList.remove("pagination__link--clicked");
  pagination5.classList.remove("pagination--clicked");
  paginationLink5.classList.remove("pagination__link--clicked");
  pagination21.classList.remove("pagination--clicked");
  paginationLink21.classList.remove("pagination__link--clicked");
};

pagination2.onclick = (e) => {
  e.preventDefault();
  pagination2.classList.add("pagination--clicked");
  paginationLink2.classList.add("pagination__link--clicked");
  pagination1.classList.remove("pagination--clicked");
  paginationLink1.classList.remove("pagination__link--clicked");
  pagination3.classList.remove("pagination--clicked");
  paginationLink3.classList.remove("pagination__link--clicked");
  pagination4.classList.remove("pagination--clicked");
  paginationLink4.classList.remove("pagination__link--clicked");
  pagination5.classList.remove("pagination--clicked");
  paginationLink5.classList.remove("pagination__link--clicked");
  pagination21.classList.remove("pagination--clicked");
  paginationLink21.classList.remove("pagination__link--clicked");
};

pagination3.onclick = (e) => {
  e.preventDefault();
  pagination3.classList.add("pagination--clicked");
  paginationLink3.classList.add("pagination__link--clicked");
  pagination2.classList.remove("pagination--clicked");
  paginationLink2.classList.remove("pagination__link--clicked");
  pagination1.classList.remove("pagination--clicked");
  paginationLink1.classList.remove("pagination__link--clicked");
  pagination4.classList.remove("pagination--clicked");
  paginationLink4.classList.remove("pagination__link--clicked");
  pagination5.classList.remove("pagination--clicked");
  paginationLink5.classList.remove("pagination__link--clicked");
  pagination21.classList.remove("pagination--clicked");
  paginationLink21.classList.remove("pagination__link--clicked");
};

pagination4.onclick = (e) => {
  e.preventDefault();
  pagination4.classList.add("pagination--clicked");
  paginationLink4.classList.add("pagination__link--clicked");
  pagination2.classList.remove("pagination--clicked");
  paginationLink2.classList.remove("pagination__link--clicked");
  pagination3.classList.remove("pagination--clicked");
  paginationLink3.classList.remove("pagination__link--clicked");
  pagination1.classList.remove("pagination--clicked");
  paginationLink1.classList.remove("pagination__link--clicked");
  pagination5.classList.remove("pagination--clicked");
  paginationLink5.classList.remove("pagination__link--clicked");
  pagination21.classList.remove("pagination--clicked");
  paginationLink21.classList.remove("pagination__link--clicked");
};

pagination5.onclick = (e) => {
  e.preventDefault();
  pagination5.classList.add("pagination--clicked");
  paginationLink5.classList.add("pagination__link--clicked");
  pagination2.classList.remove("pagination--clicked");
  paginationLink2.classList.remove("pagination__link--clicked");
  pagination3.classList.remove("pagination--clicked");
  paginationLink3.classList.remove("pagination__link--clicked");
  pagination4.classList.remove("pagination--clicked");
  paginationLink4.classList.remove("pagination__link--clicked");
  pagination1.classList.remove("pagination--clicked");
  paginationLink1.classList.remove("pagination__link--clicked");
  pagination21.classList.remove("pagination--clicked");
  paginationLink21.classList.remove("pagination__link--clicked");
};

pagination21.onclick = (e) => {
  e.preventDefault();
  pagination21.classList.add("pagination--clicked");
  paginationLink21.classList.add("pagination__link--clicked");
  pagination2.classList.remove("pagination--clicked");
  paginationLink2.classList.remove("pagination__link--clicked");
  pagination3.classList.remove("pagination--clicked");
  paginationLink3.classList.remove("pagination__link--clicked");
  pagination4.classList.remove("pagination--clicked");
  paginationLink4.classList.remove("pagination__link--clicked");
  pagination5.classList.remove("pagination--clicked");
  paginationLink5.classList.remove("pagination__link--clicked");
  pagination1.classList.remove("pagination--clicked");
  paginationLink1.classList.remove("pagination__link--clicked");
};
