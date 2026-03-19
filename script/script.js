/* 
    
    Contains Animation for Landing Page DO NOT add other animation here
    create seperate js file for other animation 

*/

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hide");
  }, 1200);
});

const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedY = -(Math.random() * 0.4 + 0.1);
    this.speedX = (Math.random() - 0.5) * 0.2;
    this.opacity = Math.random() * 0.6 + 0.1;
    this.color = Math.random() > 0.5 ? "200,144,46" : "245,230,200";
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.opacity -= 0.001;
    if (this.y < -5 || this.opacity <= 0) this.reset();
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = `rgba(${this.color},1)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 120; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

document.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.className = "ink-ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  document.getElementById("ink-container").appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
});

const observerOpts = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOpts);

document
  .querySelectorAll(".timeline-item, .work-card, .legacy-stat, .gallery-item")
  .forEach((el) => {
    observer.observe(el);
  });

const headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 },
);
document.querySelectorAll(".section-header").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  headerObserver.observe(el);
});

const quoteObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 },
);
document
  .querySelectorAll(".banner-quote, .banner-attribution")
  .forEach((el) => quoteObserver.observe(el));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target.querySelector(".legacy-num");
        if (!el || el.dataset.counted) return;
        el.dataset.counted = true;
        const target = parseInt(el.dataset.count);
        const duration = 1800;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);
document
  .querySelectorAll(".legacy-stat")
  .forEach((el) => counterObserver.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const heroContent = document.querySelector(".hero-content");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
    heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
  }
});
