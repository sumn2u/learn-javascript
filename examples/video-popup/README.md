# 🎬 Video Modal Popup

This project demonstrates how to create a **popup modal** that plays a **video trailer** when triggered by a button click.  
It’s perfect for **movie previews, product demos**, or any **interactive video showcase**.

---

## 📁 Project Structure
```
video-modal/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Event handling and video control logic
└── README.md       # Project documentation
```

---

## 🧩 Features
- 🎥 Opens a modal when clicking the **Play Trailer** button  
- ▶️ Plays an HTML5 video automatically inside the modal  
- ❌ Includes a close button and closes on outside click  
- 🔄 Automatically **pauses and resets** the video when closed  
- 📱 Fully **responsive** across all screen sizes  
- 💫 Smooth fade-in animation and hover effects  

---

## ⚙️ How It Works (Detailed Explanation)

### 🏗️ 1. index.html

The `index.html` file defines the structure of the webpage. It includes:

#### **Key Elements**
- `<div class="movie-card">` — Wraps all content like the movie thumbnail, title, description, and button.
- `<img>` — Displays the movie’s thumbnail or poster image.
- `<h1>` — The movie title.
- `<p>` — A short movie description or tagline.
- `<button id="openModalBtn">` — Button to trigger the modal popup.
- `<div id="videoModal" class="modal">` — The modal container that holds the video player.
- `<button class="close-btn" id="closeModalBtn">&times;</button>` — The close icon (×) used to close the modal.
- `<video>` — The HTML5 video element that plays the trailer inside the modal.

These elements are organized in a clean hierarchy to ensure readability and easy maintenance.

---

### 🎨 2. style.css

The `style.css` file controls how the page looks and behaves on different screen sizes. It ensures the design is both **modern** and **responsive**.

#### **Example Styles Explained**

- `.modal`  
  Creates a **full-screen overlay** when the modal is active. It uses properties like:
  ```css
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
  ```
  This ensures the modal takes up the whole viewport with a dark transparent background.

- `.modal-content`  
  Styles the inner video player window. Example:
  ```css
  background: #000;
  padding: 10px;
  border-radius: 10px;
  max-width: 90%;
  width: 800px;
  ```
  This keeps the video centered and scaled properly on all devices.

- `@media (max-width: 768px)`  
  Adjusts layout for **mobile and tablet** viewports, ensuring text and buttons resize correctly.

---

### ⚙️ 3. script.js

The `script.js` file manages all interactions between the user and the modal.

#### **Functions Explained**
1. **Element References**
   ```js
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("trailer");

   ```
   These lines reference the key DOM elements for manipulation.

2. **Open Modal Functionality**
   ```js
    openBtn.addEventListener("click", () => {
      modal.classList.add("active");
      video.play();
    });

   ```
   When the **Play Trailer** button is clicked, this function makes the modal visible and starts playing the video.

3. **Close Modal Functionality**
   ```js
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      video.pause();
      video.currentTime = 0; // reset to beginning
    });
   ```
   When the close icon (×) is clicked, the modal hides, the video pauses, and the playback resets.

4. **Outside Click Close**
   ```js
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        video.pause();
        video.currentTime = 0;
      }
    });
   ```
   This ensures that clicking **outside the modal content** also closes the popup and stops the video.

---

**Author:** Rohan Kedari
