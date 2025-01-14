const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".swiper-container", {
  slidesPerView: 5, // Number of slides to show at once
  spaceBetween: 30, // Space between slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// JavaScript for toggling visibility of extra services
document.getElementById("showMoreBtn").addEventListener("click", function () {
  const hiddenItems = document.querySelectorAll(".service-item");
  hiddenItems.forEach((item) => {
    item.classList.toggle("hidden");
  });

  // Change button text and arrow icon based on the state
  if (this.innerHTML.includes("Show More")) {
    this.innerHTML = "Show Less";
    this.querySelector("i").classList.remove("fa-arrow-down");
    this.querySelector("i").classList.add("fa-arrow-up");
  } else {
    this.innerHTML = "Show More Services";
    this.querySelector("i").classList.remove("fa-arrow-up");
    this.querySelector("i").classList.add("fa-arrow-down");
  }
});
