const btn = document.getElementById("btn");
const img = document.getElementById("photo");
const loader = document.getElementById("loader");

const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg"
];

function showRandomPhoto() {
  if (!btn || !img || !loader) return; // safety check

  loader.style.display = "block";
  img.style.opacity = 0;

  const randomIndex = Math.floor(Math.random() * photos.length);
  img.src = photos[randomIndex];

  img.onload = () => {
    loader.style.display = "none";
    img.style.opacity = 1;
  };
}

// Load first image on page load
window.addEventListener("load", showRandomPhoto);

// Button click
btn.addEventListener("click", showRandomPhoto);
