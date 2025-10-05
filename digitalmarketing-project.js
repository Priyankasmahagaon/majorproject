document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const menuIcon = document.querySelector(".logo .fa-bars");
  const navLinks = document.querySelector(".links");
  const links = document.querySelectorAll(".links a");
  const scrollTopBtn = document.querySelector(".scrolltop .fa");

  // Mobile menu toggle
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("showmyanchors");
  });

  //  Smooth scrolling for nav links
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile menu after clicking
      if (navLinks.classList.contains("showmyanchors")) {
        navLinks.classList.remove("showmyanchors");
      }
    });
  });

  //  Scroll-to-top button click
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  //  Hover effect for work items
  const workItems = document.querySelectorAll(".work-one, .work-two, .work-three, .work-four, .work-five, .work-six");
  workItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const inner = item.querySelector(".inner-work-one");
      if (inner) inner.style.opacity = "0.8";
    });
    item.addEventListener("mouseleave", () => {
      const inner = item.querySelector(".inner-work-one");
      if (inner) inner.style.opacity = "0";
    });
  });
});
