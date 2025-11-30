// ========== TYPEWRITER MESSAGE ==========
const msg = "You are special. You deserve all the happiness. I hope this little website makes your day beautiful 💖";
let i = 0;

function typeEffect() {
  if (i < msg.length) {
    document.getElementById("typewriter").innerHTML += msg.charAt(i);
    i++;
    setTimeout(typeEffect, 45);
  }
}

// ========== REVEAL ANIMATION ON SCROLL ==========
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let r of reveals) {
    let top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) r.classList.add("visible");
  }
});

// ========== CAROUSEL ==========
let index = 0;
const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");

document.getElementById("next").onclick = () => {
  index = (index + 1) % slides.length;
  carousel.style.transform = `translateX(-${index * 320}px)`;
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  carousel.style.transform = `translateX(-${index * 320}px)`;
};

// ========== GIFT POPUP ==========
const overlay = document.getElementById("overlay");
document.getElementById("openGift").onclick = () => overlay.style.display = "flex";
document.getElementById("closePopup").onclick = () => overlay.style.display = "none";
document.getElementById("closeGiftAlt").onclick = () => overlay.style.display = "none";

document.getElementById("revealGift").onclick = () => {
  document.getElementById("giftMessage").innerHTML =
    "Your presence itself is a gift. You make the world better just by being in it. Happy Birthday 💝";
};

// ========== BUTTONS ==========
document.getElementById("startBtn").onclick = () => {
  window.scrollTo({ top: document.getElementById("message").offsetTop, behavior: "smooth" });
  typeEffect();
};

document.getElementById("replayBtn").onclick = () => {
  document.getElementById("typewriter").innerHTML = "";
  i = 0;
  typeEffect();
};

// ========== MUSIC ==========
let music = new Audio("assets/audio/song.mp3");
let playing = false;

document.getElementById("musicToggle").onclick = () => {
  if (!playing) {
    music.play();
    playing = true;
    musicToggle.innerText = "Pause Music";
  } else {
    music.pause();
    playing = false;
    musicToggle.innerText = "Play Music";
  }
};
