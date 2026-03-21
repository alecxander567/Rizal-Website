/*
   José Rizal — About This Project
   about.js
   Linked by: about.html
*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 120);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".fade-up, .dedication-text, .dedication-attr")
  .forEach((el) => observer.observe(el));

const currentPage = window.location.pathname.split("/").pop() || "about.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const linkPage = href.split("/").pop();
  const isAnchor = href.startsWith("#");
  const isCurrentAnchor =
    isAnchor && (currentPage === "about.html" || currentPage === "");

  if (linkPage === currentPage || isCurrentAnchor) {
    link.classList.add("active");
    link.parentElement.classList.add("active");
  }
});

(function () {
  const toggler = document.getElementById("navToggler");
  const collapse = document.getElementById("navCollapse");
  if (!toggler || !collapse) return;

  function getExpandedHeight() {
    collapse.style.height = "auto";
    const h = collapse.scrollHeight;
    collapse.style.height = "";
    return h;
  }

  function openMenu() {
    collapse.style.height = getExpandedHeight() + "px";
    toggler.classList.add("open");
    toggler.setAttribute("aria-expanded", "true");
    collapse.addEventListener("transitionend", function once() {
      if (toggler.classList.contains("open")) collapse.style.height = "auto";
      collapse.removeEventListener("transitionend", once);
    });
  }

  function closeMenu() {
    collapse.style.height = collapse.scrollHeight + "px";
    requestAnimationFrame(() => {
      collapse.style.height = "0px";
    });
    toggler.classList.remove("open");
    toggler.setAttribute("aria-expanded", "false");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      collapse.style.height = "";
      toggler.classList.remove("open");
      toggler.setAttribute("aria-expanded", "false");
    }
  });

  toggler.addEventListener("click", () => {
    toggler.classList.contains("open") ? closeMenu() : openMenu();
  });

  collapse.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (toggler.classList.contains("open")) closeMenu();
    });
  });
})();

function initEmbers(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let animFrame;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function spawn() {
    const x = Math.random() * canvas.width;
    return {
      x,
      y: canvas.height + 6,
      size: Math.random() * 2.2 + 0.6,
      speedY: Math.random() * 0.7 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      life: 0,
      maxLife: Math.random() * 180 + 120,
      hue: Math.random() * 30 + 20,
    };
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.35) particles.push(spawn());

    particles = particles.filter((p) => p.life < p.maxLife);

    for (const p of particles) {
      p.life++;
      p.y -= p.speedY;
      p.x += p.speedX + Math.sin(p.life * 0.05) * 0.25;

      const progress = p.life / p.maxLife;
      const alpha =
        progress < 0.15 ? (progress / 0.15) * 0.7 : (1 - progress) * 0.7;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(
        p.x,
        p.y,
        0,
        p.x,
        p.y,
        p.size * 2.5,
      );
      grad.addColorStop(0, `hsl(${p.hue}, 95%, 75%)`);
      grad.addColorStop(1, `hsla(${p.hue}, 90%, 50%, 0)`);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    animFrame = requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener("resize", resize);
  tick();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        if (!animFrame) tick();
      } else {
        cancelAnimationFrame(animFrame);
        animFrame = null;
      }
    });
  });
  observer.observe(canvas);
}

initEmbers("globe-embers");
initEmbers("book-embers");

window.addEventListener("scroll", () => {
  document
    .getElementById("mainNav")
    .classList.toggle("scrolled", window.scrollY > 20);
});
