// Loader animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("mainContent");
  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hidden");
  }, 2500);
});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Countdown Timer
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-08-22T00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdown.innerHTML = "🎉 The fest has begun!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Starts in: ${days}d ${hrs}h ${mins}m ${secs}s`;
};

setInterval(updateCountdown, 1000);

// Background Music Control
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicToggle.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    music.play();
    musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
});
