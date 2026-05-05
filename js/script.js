const isNestedPage =
  window.location.pathname.includes("/programs/") ||
  window.location.pathname.includes("/gallery/") ||
  window.location.pathname.includes("/videos/");
const basePath = isNestedPage ? ".." : ".";

function initHeader() {
  const menu = document.querySelector(".menu");
  const menuToggle = document.querySelector(".menu-toggle");
  if (!menu || !menuToggle) return;

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

const headerContainer = document.getElementById("header");
if (headerContainer) {
  fetch(`${basePath}/components/header.html`)
    .then((res) => res.text())
    .then((data) => {
      headerContainer.innerHTML = data;
      initHeader();
    });
}

const footerContainer = document.getElementById("footer");
if (footerContainer) {
  fetch(`${basePath}/components/footer.html`)
    .then((res) => res.text())
    .then((data) => {
      footerContainer.innerHTML = data;
    });
}

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide() {
  index++;

  slider.style.transition = "transform 0.6s ease-in-out";
  slider.style.transform = `translateX(-${index * 100}%)`;

  // 🔥 LAST (duplicate) ki reach ayyaka
  if (index === slides.length - 1) {
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";
      index = 0;
    }, 3000); // 🔥 FULL DISPLAY TIME
  }
}

setInterval(showSlide, 3000);

// Discover more
document.querySelector(".discover-btn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});