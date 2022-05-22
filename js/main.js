// ----------------- about tabs ---------------------

const tabsContainer = document.querySelector(".aboutTabs");
const aboutSection = document.querySelector(".aboutSection");

tabsContainer.addEventListener("click", (ev) => {
  if (
    ev.target.classList.contains("tabItem") &&
    !ev.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    ev.target.classList.add("active");
    const target = ev.target.getAttribute("data-target");
    aboutSection.querySelector(".tabContnt.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

/* ----------------------- portfolio item details popup ------------------------ */

document.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("viewProjectBtn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolioPopup").scrollTo(0, 0);
    portfolioItemDetails(ev.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolioPopup").classList.toggle("open");
  document.body.classList.toggle("hideScrolling");
  document.querySelector(".main").classList.toggle("fadeOut");
}

/*-----------------------------------  hide popup when click outside -----------------------------------*/

document.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("portfolioPopupInner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".portfolioPopupThumnail img").src =
    portfolioItem.querySelector(".portfolioItemThumnail img").src;
  document.querySelector(".portfolioPopupHeader h3").innerHTML =
    portfolioItem.querySelector(".portfolioItemTitle").innerHTML;
  document.querySelector(".popupBody").innerHTML = portfolioItem.querySelector(
    ".portfolioItemDetails"
  ).innerHTML;
}

document
  .querySelector(".closeBtn")
  .addEventListener("click", togglePortfolioPopup);



/*----------------------------------- Active section ------------------------------*/


document.addEventListener("click",(ev)=>{
  if(ev.target.classList.contains("linkItem") && ev.target.hash !==""){
    if(ev.target.classList.contains("navItem")){
      toggleNav();
    }else{
      hideSection();
      document.body.classList.add("hideScrolling");
    }
    setTimeout(()=>{
      document.querySelector("section.active").classList.remove("active","fadeOut");
      document.querySelector(ev.target.hash).classList.add("active");
      window.scrollTo(0,0);
      document.body.classList.remove("hideScrolling");
    },100)
  }
});





/*----------------------------------- Toggle navbar ------------------------------*/

const navToggle = document.querySelector(".navToggler");
navToggle.addEventListener("click", (ev) => {
  hideSection();
  toggleNav();
  document.body.classList.toggle("hideScrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fadeOut");
}

function toggleNav() {
  document.querySelector(".headerSection").classList.toggle("active");
}
