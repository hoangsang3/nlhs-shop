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
var hasCartItem1 = document.getElementById("has-cart__item-1");
var hasCartItem2 = document.getElementById("has-cart__item-2");
var hasCartItem3 = document.getElementById("has-cart__item-3");
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
  hasCart.style.display = "none";
  headerCartListNoCart.style.opacity = 1;
  headerCartListNoCart.style.visibility = "visible";
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == esc) {
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
var categoryItem0Icon = document.getElementById("category__item-0-icon");
var categoryItem1Icon = document.getElementById("category__item-1-icon");
var categoryItem2Icon = document.getElementById("category__item-2-icon");
var categoryItem3Icon = document.getElementById("category__item-3-icon");
var categoryItem4Icon = document.getElementById("category__item-4-icon");
var categoryItem5Icon = document.getElementById("category__item-5-icon");

var categoryItem0 = document.getElementById("category__item-0");
categoryItem0.addEventListener("click", function () {
  categoryItemLink0.style.color = "#8bd12a";
  categoryItemLink1.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink2.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink3.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink4.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink5.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItem0Icon.style.display = "block";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
});
var categoryItem1 = document.getElementById("category__item-1");
categoryItem1.addEventListener("click", function () {
  categoryItemLink0.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink1.style.color = "#8bd12a";
  categoryItemLink2.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink3.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink4.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink5.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "block";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
});
var categoryItem2 = document.getElementById("category__item-2");
categoryItem2.addEventListener("click", function () {
  categoryItemLink0.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink1.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink2.style.color = "#8bd12a";
  categoryItemLink3.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink4.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink5.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "block";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
});

var categoryItem3 = document.getElementById("category__item-3");
categoryItem3.addEventListener("click", function () {
  categoryItemLink0.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink1.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink2.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink3.style.color = "#8bd12a";
  categoryItemLink4.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink5.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "block";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "none";
});

var categoryItem4 = document.getElementById("category__item-4");
categoryItem4.addEventListener("click", function () {
  categoryItemLink0.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink1.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink2.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink3.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink4.style.color = "#8bd12a";
  categoryItemLink5.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "block";
  categoryItem5Icon.style.display = "none";
});

var categoryItem5 = document.getElementById("category__item-5");
categoryItem5.addEventListener("click", function () {
  categoryItemLink0.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink1.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink2.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink3.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink4.style.color = "rgba(0, 0, 0, 0.9)";
  categoryItemLink5.style.color = "#8bd12a";
  categoryItem0Icon.style.display = "none";
  categoryItem1Icon.style.display = "none";
  categoryItem2Icon.style.display = "none";
  categoryItem3Icon.style.display = "none";
  categoryItem4Icon.style.display = "none";
  categoryItem5Icon.style.display = "block";
});

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
var actionHeartFull26 = document.getElementById("action__heart--full26");
var actionHeartEmpty26 = document.getElementById("action__heart26");
actionHeartEmpty26.onclick = () => {
  actionHeartFull26.style.display = "block";
  actionHeartEmpty26.style.display = "none";
};
var actionHeartFull27 = document.getElementById("action__heart--full27");
var actionHeartEmpty27 = document.getElementById("action__heart27");
actionHeartEmpty27.onclick = () => {
  actionHeartFull27.style.display = "block";
  actionHeartEmpty27.style.display = "none";
};
var actionHeartFull28 = document.getElementById("action__heart--full28");
var actionHeartEmpty28 = document.getElementById("action__heart28");
actionHeartEmpty28.onclick = () => {
  actionHeartFull28.style.display = "block";
  actionHeartEmpty28.style.display = "none";
};
var actionHeartFull29 = document.getElementById("action__heart--full29");
var actionHeartEmpty29 = document.getElementById("action__heart29");
actionHeartEmpty29.onclick = () => {
  actionHeartFull29.style.display = "block";
  actionHeartEmpty29.style.display = "none";
};

var actionStarFull1 = document.getElementById("action__star--full-1");
var actionStarFull2 = document.getElementById("action__star--full-2");
var actionStarFull3 = document.getElementById("action__star--full-3");
var actionStarFull4 = document.getElementById("action__star--full-4");
var actionStarFull5 = document.getElementById("action__star--full-5");
actionStarFull1.addEventListener("click", function () {
  actionStarFull1.style.color = "yellow";
});
actionStarFull2.addEventListener("click", function () {
  actionStarFull1.style.color = "yellow";
  actionStarFull2.style.color = "yellow";
});
actionStarFull3.addEventListener("click", function () {
  actionStarFull1.style.color = "yellow";
  actionStarFull2.style.color = "yellow";
  actionStarFull3.style.color = "yellow";
});
actionStarFull4.addEventListener("click", function () {
  actionStarFull1.style.color = "yellow";
  actionStarFull2.style.color = "yellow";
  actionStarFull3.style.color = "yellow";
  actionStarFull4.style.color = "yellow";
});
actionStarFull5.addEventListener("click", function () {
  actionStarFull1.style.color = "yellow";
  actionStarFull2.style.color = "yellow";
  actionStarFull3.style.color = "yellow";
  actionStarFull4.style.color = "yellow";
  actionStarFull5.style.color = "yellow";
});

var actionStarFull6 = document.getElementById("action__star--full-6");
var actionStarFull7 = document.getElementById("action__star--full-7");
var actionStarFull8 = document.getElementById("action__star--full-8");
var actionStarFull9 = document.getElementById("action__star--full-9");
var actionStarFull10 = document.getElementById("action__star--full-10");
actionStarFull6.addEventListener("click", function () {
  actionStarFull6.style.color = "yellow";
});
actionStarFull7.addEventListener("click", function () {
  actionStarFull6.style.color = "yellow";
  actionStarFull7.style.color = "yellow";
});
actionStarFull8.addEventListener("click", function () {
  actionStarFull6.style.color = "yellow";
  actionStarFull7.style.color = "yellow";
  actionStarFull8.style.color = "yellow";
});
actionStarFull9.addEventListener("click", function () {
  actionStarFull6.style.color = "yellow";
  actionStarFull7.style.color = "yellow";
  actionStarFull8.style.color = "yellow";
  actionStarFull9.style.color = "yellow";
});
actionStarFull10.addEventListener("click", function () {
  actionStarFull6.style.color = "yellow";
  actionStarFull7.style.color = "yellow";
  actionStarFull8.style.color = "yellow";
  actionStarFull9.style.color = "yellow";
  actionStarFull10.style.color = "yellow";
});

var actionStarFull11 = document.getElementById("action__star--full-11");
var actionStarFull12 = document.getElementById("action__star--full-12");
var actionStarFull13 = document.getElementById("action__star--full-13");
var actionStarFull14 = document.getElementById("action__star--full-14");
var actionStarFull15 = document.getElementById("action__star--full-15");
actionStarFull11.addEventListener("click", function () {
  actionStarFull11.style.color = "yellow";
});
actionStarFull12.addEventListener("click", function () {
  actionStarFull11.style.color = "yellow";
  actionStarFull12.style.color = "yellow";
});
actionStarFull13.addEventListener("click", function () {
  actionStarFull11.style.color = "yellow";
  actionStarFull12.style.color = "yellow";
  actionStarFull13.style.color = "yellow";
});
actionStarFull14.addEventListener("click", function () {
  actionStarFull11.style.color = "yellow";
  actionStarFull12.style.color = "yellow";
  actionStarFull13.style.color = "yellow";
  actionStarFull14.style.color = "yellow";
});
actionStarFull15.addEventListener("click", function () {
  actionStarFull11.style.color = "yellow";
  actionStarFull12.style.color = "yellow";
  actionStarFull13.style.color = "yellow";
  actionStarFull14.style.color = "yellow";
  actionStarFull15.style.color = "yellow";
});

var actionStarFull16 = document.getElementById("action__star--full-16");
var actionStarFull17 = document.getElementById("action__star--full-17");
var actionStarFull18 = document.getElementById("action__star--full-18");
var actionStarFull19 = document.getElementById("action__star--full-19");
var actionStarFull20 = document.getElementById("action__star--full-20");
actionStarFull16.addEventListener("click", function () {
  actionStarFull16.style.color = "yellow";
});
actionStarFull17.addEventListener("click", function () {
  actionStarFull16.style.color = "yellow";
  actionStarFull17.style.color = "yellow";
});
actionStarFull18.addEventListener("click", function () {
  actionStarFull16.style.color = "yellow";
  actionStarFull17.style.color = "yellow";
  actionStarFull18.style.color = "yellow";
});
actionStarFull19.addEventListener("click", function () {
  actionStarFull16.style.color = "yellow";
  actionStarFull17.style.color = "yellow";
  actionStarFull18.style.color = "yellow";
  actionStarFull19.style.color = "yellow";
});
actionStarFull20.addEventListener("click", function () {
  actionStarFull16.style.color = "yellow";
  actionStarFull17.style.color = "yellow";
  actionStarFull18.style.color = "yellow";
  actionStarFull19.style.color = "yellow";
  actionStarFull20.style.color = "yellow";
});

var btnPhoBien = document.getElementById("btn__phoBien");
var btnMoiNhat = document.getElementById("btn__moiNhat");
var btnBanChay = document.getElementById("btn__banChay");

btnPhoBien.onclick = () => {
  btnPhoBien.style.backgroundColor = "var(--button-color)";
  btnPhoBien.style.color = "var(--text-color)";
  btnMoiNhat.style.backgroundColor = "#e6e6e6";
  btnMoiNhat.style.color = "var(--primary-color)";
  btnBanChay.style.backgroundColor = "#e6e6e6";
  btnBanChay.style.color = "var(--primary-color)";
};

btnMoiNhat.onclick = () => {
  btnPhoBien.style.backgroundColor = "#e6e6e6";
  btnPhoBien.style.color = "var(--primary-color)";
  btnMoiNhat.style.backgroundColor = "var(--button-color)";
  btnMoiNhat.style.color = "var(--text-color)";
  btnBanChay.style.backgroundColor = "#e6e6e6";
  btnBanChay.style.color = "var(--primary-color)";
};

btnBanChay.onclick = () => {
  btnPhoBien.style.backgroundColor = "#e6e6e6";
  btnPhoBien.style.color = "var(--primary-color)";
  btnMoiNhat.style.backgroundColor = "#e6e6e6";
  btnMoiNhat.style.color = "var(--primary-color)";
  btnBanChay.style.backgroundColor = "var(--button-color)";
  btnBanChay.style.color = "var(--text-color)";
};
