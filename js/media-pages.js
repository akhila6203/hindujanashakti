const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("videoClose");

const videoCards = document.querySelectorAll(".video-card");
videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!modal || !modalVideo) return;
    const source = card.getAttribute("data-video");
    if (!source) return;
    modalVideo.src = source;
    modal.classList.add("show");
    modalVideo.play();
  });
});

if (closeBtn && modal && modalVideo) {
  closeBtn.addEventListener("click", () => {
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modal.classList.remove("show");
    }
  });
}
