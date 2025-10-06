const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("videoModal");
const video = document.getElementById("trailer");

// Open modal
openBtn.addEventListener("click", () => {
  modal.classList.add("active");
  video.play();
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  video.pause();
  video.currentTime = 0; // reset to beginning
});

// Close when clicking outside the video
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    video.pause();
    video.currentTime = 0;
  }
});
