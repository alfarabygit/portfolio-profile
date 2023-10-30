/*=============== SERVICES BUTTON ===============*/
const servicesButtons = document.querySelectorAll(".service__item");
const servicesDetails = document.querySelector(".services__right");

const getServices = (category) => {
  const details = servicesData.find((item) => item.category === category);
  servicesDetails.innerHTML = `
  <h3>${details.title}</h3>
  ${details.description.map((paragraph) => "<p>" + paragraph + "</p>").join("")}
  `;
};

servicesButtons.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveClass();
    const serviceClass = item.classList[1];
    getServices(serviceClass);
    item.classList.add("active");
  });
});

const removeActiveClass = () => {
  servicesButtons.forEach((button) => {
    button.classList.remove("active");
  });
};

getServices("frontend");

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
const containerEl = document.querySelector(".projects__container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter("*");
// let mixerPortfolio = mixitup(".projects__container", {
//   selectors: {
//     target: ".project",
//   },
//   animation: {
//     duration: 300,
//   },
// });

// const linkWork = document.querySelectorAll(".project__categories, li");
// function activeWork() {
//   linkWork.forEach((l) => l.classList.remove("active"));
//   this.classList.add("active");
// }

// linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*=============== NAV TOGGLE ===============*/
const navMenu = document.querySelector(".nav__menu");
const navOpenBtn = document.querySelector(".nav__toggle-open");
const navCloseBtn = document.querySelector(".nav__toggle-close");

const openNavHandler = () => {
  navMenu.style.display = "flex";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "inline-block";
};
const closeNavHandler = () => {
  navMenu.style.display = "none";
  navOpenBtn.style.display = "inline-block";
  navCloseBtn.style.display = "none";
};

navOpenBtn.addEventListener("click", openNavHandler);
navCloseBtn.addEventListener("click", closeNavHandler);

// close nav menu
const navItems = navMenu.querySelectorAll("a");
if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener("click", closeNavHandler);
  });
}

// Light & Dark theme button
const themeButton = document.querySelector(".nav__theme-btn");
themeButton.addEventListener("click", () => {
  let bodyClass = document.body.className;
  if (!bodyClass) {
    bodyClass = "dark";
    document.body.className = bodyClass;
    //change icon
    themeButton.innerHTML = '<i class="uil uil-sun"></i>';
    //save theme to local storage
    window.localStorage.setItem("theme", bodyClass);
  } else {
    bodyClass = "";
    document.body.className = bodyClass;
    themeButton.innerHTML = '<i class="uil uil-moon"></i>';
    //save theme to local storage
    window.localStorage.setItem("theme", bodyClass);
  }
});

//load theme from local storage
window.addEventListener("load", () => {
  document.body.className = window.localStorage.getItem("theme");
});
