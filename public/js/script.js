document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL path
  const currentPath = window.location.pathname.split("/").pop();

  // Select all navbar links
  const navLinks = document.querySelectorAll(".navLinks");

  navLinks.forEach(link => {
    // Check if the href matches the current path
    if (link.getAttribute("href") === currentPath) {
      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove("text-orange-400", "font-bold", "border-b-2", "border-orange-400"));

      // Add active class to the matched link
      link.classList.add("text-orange-400", "font-bold", "border-b-2", "border-orange-400");
    }
  });

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll("#mobileMenu a");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("block");
  });

  // Close the menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("block");
    });
  });
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll("#navbar a");
  const exploreBtn = document.querySelector(".btn-outline-white");

  if (window.scrollY > 50) {
    // Header background white and text black
    header.classList.add("bg-white", "shadow-md", "text-black", "opacity-90");
    header.classList.remove("bg-transparent", "text-white");

    // Change all nav links and button to black, except active link
    navLinks.forEach((link) => {
      if (!link.classList.contains("text-[#A9774E]")) {
        link.classList.add("text-black");
        link.classList.remove("text-white");
      }
    });

    exploreBtn.classList.add("text-black", "border-black");
    exploreBtn.classList.remove("text-white", "border-white");
  } else {
    // Revert header to transparent with white text
    header.classList.remove(
      "bg-white",
      "shadow-md",
      "text-black",
      "opacity-90"
    );
    header.classList.add("bg-transparent", "text-white");

    // Revert all nav links and button to white, except active link
    navLinks.forEach((link) => {
      if (!link.classList.contains("text-[#A9774E]")) {
        link.classList.remove("text-black");
        link.classList.add("text-white");
      }
    });

    exploreBtn.classList.remove("text-black", "border-black");
    exploreBtn.classList.add("text-white", "border-white");
  }
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
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

const swiper3 = new Swiper(".mySwiper2", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
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
const swiper2 = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    414: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var swiper4 = new Swiper('.swiper-container2', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

document.querySelectorAll('#scroll-button').forEach(button => {
  button.addEventListener('click', () => {
      swiper.slideNext();
  });
});





// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menuToggle");
//   const mobileMenu = document.getElementById("mobileMenu");
//   const mobileLinks = document.querySelectorAll("#mobileMenu a");

//   menuToggle.addEventListener("click", function () {
//     mobileMenu.classList.toggle("hidden");
//     mobileMenu.classList.toggle("block");
//   });

//   // Close the menu when a link is clicked
//   mobileLinks.forEach(link => {
//     link.addEventListener("click", function () {
//       mobileMenu.classList.add("hidden");
//       mobileMenu.classList.remove("block");
//     });
//   });
// });

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
