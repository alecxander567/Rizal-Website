/*
   José Rizal — Education
   education.js
   Linked by: education.html
*/

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(
    ".edu-entry, .degree-card, .stat-item, .banner-quote, .banner-attribution",
  )
  .forEach((el) => revealObserver.observe(el));

const langObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        langObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".language-bar-wrap")
  .forEach((el) => langObserver.observe(el));

const EDU_DATA = {
  home: {
    period: "1869 – 1871",
    school: "Home Education",
    location: "Calamba, Laguna, Philippines",
    summary:
      "Before any formal school, Rizal's mother Teodora Alonso was his first and perhaps most important teacher. An educated woman who spoke Spanish and composed verses herself, she taught young José the alphabet, prayers, and poetry before he reached five years old. She instilled in him a love of language, a sensitivity to beauty in words, and a moral compass that guided everything he would later write.",
    highlights: [
      {
        title: "First Lesson",
        text: "Teodora taught Rizal the alphabet by candlelight, using stories and rhymes rather than rigid drills. He could read full sentences before entering any formal school.",
      },
      {
        title: "The First Poem",
        text: "By age five, young José had already composed his first attempt at verse — a couplet in Tagalog that moved his mother to tears. She recognized immediately that something extraordinary was growing.",
      },
    ],
    facts: [
      { label: "Period", val: "1869 – 1871" },
      { label: "Age", val: "3 – 5 years old" },
      { label: "Teacher", val: "Teodora Alonso Realonda" },
      { label: "Location", val: "Calamba, Laguna" },
    ],
  },
  binan: {
    period: "1871 – 1872",
    school: "Biñan Latin School",
    location: "Biñan, Laguna, Philippines",
    summary:
      "At the age of nine, Rizal was sent to Biñan to study under Justiniano Aquino Cruz, a teacher known for his strict methods and firm hand. The young Rizal arrived already knowing more than most of his classmates — his mother had prepared him well. Within his first days, he challenged and defeated the top student in a recitation contest, announcing his arrival in no uncertain terms.",
    highlights: [
      {
        title: "First Day Victory",
        text: "On one of his first days, Rizal was challenged to a recitation contest by the best student in class. He won — stunning his classmates and earning Cruz's immediate attention and respect.",
      },
      {
        title: "Latin Foundation",
        text: "Cruz's demanding Latin and Spanish instruction formed the linguistic skeleton of everything Rizal would later write. The discipline of classical grammar gave him a precision of expression that made his prose and poetry unusually powerful.",
      },
    ],
    facts: [
      { label: "Period", val: "1871 – 1872" },
      { label: "Age", val: "9 – 10 years old" },
      { label: "Teacher", val: "Justiniano Aquino Cruz" },
      { label: "Key Subjects", val: "Latin, Spanish, Arithmetic" },
    ],
  },
  ateneo: {
    period: "1872 – 1877",
    school: "Ateneo Municipal de Manila",
    location: "Intramuros, Manila, Philippines",
    summary:
      "The Ateneo Municipal de Manila, run by the Jesuit order, was the finest school in the Philippines. It was here that the genius of José Rizal was fully recognized, cultivated, and set loose. Under the guidance of brilliant Jesuit professors — above all Fr. Francisco de Paula Sánchez — Rizal developed his poetry, rhetoric, and scholarship into something extraordinary. He graduated at the top of his class with the highest possible rating.",
    highlights: [
      {
        title: "Sobresaliente — The Highest Mark",
        text: "Rizal earned the grade of Sobresaliente (Excellent) — the top possible rating — in nearly every subject throughout his five years at Ateneo. He received a gold medal upon graduation, an honor rarely given.",
      },
      {
        title: "A La Juventud Filipina",
        text: "In 1879, at just 18, Rizal's poem A La Juventud Filipina won first prize at the Liceo Artistico-Literario de Manila — the first time a native Filipino beat out Spanish and mestizo competitors. Fr. Sánchez had been his guide.",
      },
    ],
    facts: [
      { label: "Period", val: "1872 – 1877" },
      { label: "Age", val: "11 – 16 years old" },
      { label: "Key Mentor", val: "Fr. Francisco de Paula Sánchez, S.J." },
      { label: "Graduation", val: "Sobresaliente — Gold Medal" },
    ],
  },
  ust: {
    period: "1877 – 1882",
    school: "University of Santo Tomas",
    location: "Sampaloc, Manila, Philippines",
    summary:
      "Rizal enrolled at the University of Santo Tomas (UST) — the oldest university in Asia, run by Dominican friars — intending to study medicine so he could treat his mother's deteriorating eyesight. He did well academically, but the experience was deeply frustrating. The Dominican professors openly discriminated against Filipino students, giving preferential treatment to Spanish and mestizo classmates. The injustice hardened his growing nationalism.",
    highlights: [
      {
        title: "The Discrimination",
        text: "Filipino students at UST were seated separately, graded more harshly, and treated as intellectually inferior by the Dominican faculty. Rizal, who consistently outperformed his Spanish classmates, found this intolerable.",
      },
      {
        title: "The Decision to Leave",
        text: "With Paciano's secret financial support, Rizal decided to continue his studies in Spain, where he believed he could be educated as an equal. He left Manila in May 1882 without telling his parents, fearing they would stop him.",
      },
    ],
    facts: [
      { label: "Period", val: "1877 – 1882" },
      { label: "Age", val: "16 – 21 years old" },
      { label: "Course", val: "Medicine & Philosophy" },
      { label: "Outcome", val: "Left for Spain — continued in Madrid" },
    ],
  },
  madrid: {
    period: "1882 – 1885",
    school: "Universidad Central de Madrid",
    location: "Madrid, Spain",
    summary:
      "Madrid was where Rizal truly came into his own. At the Universidad Central de Madrid — the premier university of the Spanish empire — he completed his Licentiate in Medicine with honors, simultaneously pursuing a second degree in Philosophy and Letters. He joined the Círculo Hispano-Filipino, began contributing to the reform press, and in the evenings, by lamplight in his modest room, he began writing Noli Me Tángere.",
    highlights: [
      {
        title: "Two Degrees Simultaneously",
        text: "While most students struggled to complete one program, Rizal pursued medicine and philosophy and letters at the same time, passing both with high marks. His professors regarded him as among the most brilliant foreign students Madrid had ever received.",
      },
      {
        title: "Noli Begins",
        text: "The first chapters of Noli Me Tángere were written in Madrid, usually late at night after Rizal had completed his studies. He worked under financial hardship — sometimes going without food — but never stopped writing.",
      },
    ],
    facts: [
      { label: "Period", val: "1882 – 1885" },
      { label: "Age", val: "21 – 24 years old" },
      { label: "Degrees Earned", val: "Medicine & Philosophy/Letters" },
      { label: "Key Work", val: "Began Noli Me Tángere" },
    ],
  },
  paris: {
    period: "1885 – 1886",
    school: "University of Paris",
    location: "Paris, France",
    summary:
      "After completing his degrees in Madrid, Rizal moved to Paris to specialize further in ophthalmology, training under the legendary Dr. Louis de Wecker at the Hôpital Lariboisière — one of the most respected eye surgeons in the world. He observed and eventually assisted in surgeries, developing the technical skill he would later use to restore his mother's sight. Paris also introduced him to the intellectual ferment of late 19th-century French life.",
    highlights: [
      {
        title: "Under De Wecker",
        text: "Dr. Louis de Wecker was a master of the Graefe cataract extraction technique. Rizal studied every procedure with meticulous attention, sketching the anatomy and mechanics of the eye in notebooks he carried everywhere.",
      },
      {
        title: "The Language of Science",
        text: "Rizal sharpened his French during this period, reading scientific literature in the original and attending lectures at the Sorbonne. He added French to the growing list of languages he could think and write in fluently.",
      },
    ],
    facts: [
      { label: "Period", val: "1885 – 1886" },
      { label: "Age", val: "24 – 25 years old" },
      { label: "Specialization", val: "Ophthalmology" },
      { label: "Mentor", val: "Dr. Louis de Wecker" },
    ],
  },
  heidelberg: {
    period: "1886 – 1887",
    school: "University of Heidelberg",
    location: "Heidelberg, Germany",
    summary:
      "Heidelberg was the last stop in Rizal's formal European education — and one of the most fruitful. At the University Eye Clinic, he trained under Dr. Otto Becker, completing his mastery of ophthalmic surgery. He learned German and immersed himself in German scholarly culture. And it was during this period that Noli Me Tángere was finally completed and printed in Berlin — February 1887 — a moment Rizal had worked toward for years.",
    highlights: [
      {
        title: "Under Dr. Otto Becker",
        text: "Becker recognized Rizal's natural aptitude for surgery and gave him increasing clinical responsibility. By the end of his training, Rizal was performing procedures independently — a rare distinction for a foreign trainee.",
      },
      {
        title: "Noli Me Tángere Published",
        text: "On February 21, 1887, Noli Me Tángere was published in Berlin — 2,000 copies printed with funds borrowed from his friend Maximo Viola. Rizal immediately sent copies to the Philippines, where it caused an immediate sensation and was promptly banned.",
      },
    ],
    facts: [
      { label: "Period", val: "1886 – 1887" },
      { label: "Age", val: "25 – 26 years old" },
      { label: "Mentor", val: "Dr. Otto Becker" },
      { label: "Key Event", val: "Noli Me Tángere published, 1887" },
    ],
  },
};

function openPopup(key) {
  const d = EDU_DATA[key];
  if (!d) return;

  document.getElementById("popup-period").textContent = d.period;
  document.getElementById("popup-school").textContent = d.school;
  document.getElementById("popup-location").textContent = d.location;

  const body = document.getElementById("popup-body");

  const pills = `
    <div class="popup-meta-bar">
      <div class="popup-meta-pill">Period <span>${d.period}</span></div>
      <div class="popup-meta-pill">Location <span>${d.location}</span></div>
    </div>`;

  const summary = `
    <div class="popup-section">
      <div class="popup-section-title">Overview</div>
      <div class="popup-section-text">${d.summary}</div>
    </div>`;

  let highlights = `<div class="popup-section"><div class="popup-section-title">Key Moments</div>`;
  d.highlights.forEach((h) => {
    highlights += `
      <div class="popup-highlight" style="margin-bottom:10px;">
        <div>
          <strong style="display:block;font-family:'Cinzel',serif;font-size:10px;
            letter-spacing:2px;text-transform:uppercase;color:var(--gold2);
            margin-bottom:5px;">${h.title}</strong>
          ${h.text}
        </div>
      </div>`;
  });
  highlights += `</div>`;

  let facts = `<div class="popup-section"><div class="popup-section-title">Quick Facts</div><div class="popup-facts-grid">`;
  d.facts.forEach((f) => {
    facts += `
      <div class="popup-fact">
        <div class="popup-fact-label">${f.label}</div>
        <div class="popup-fact-val">${f.val}</div>
      </div>`;
  });
  facts += `</div></div>`;

  body.innerHTML = pills + summary + highlights + facts;

  document.getElementById("popup-backdrop").classList.add("show");
  document.getElementById("popup").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closePopup() {
  document.getElementById("popup-backdrop").classList.remove("show");
  document.getElementById("popup").classList.remove("show");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});

document.querySelectorAll(".edu-card").forEach((card) => {
  const btn = card.querySelector(".person-more-btn, button");
  if (btn) {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-key");
      if (key) openPopup(key);
    });
  }
});

const currentPage =
  window.location.pathname.split("/").pop() || "education.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const linkPage = href.split("/").pop();
  const isAnchor = href.startsWith("#");
  const isCurrentAnchor =
    isAnchor && (currentPage === "education.html" || currentPage === "");
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

/* ── EMBER PARTICLES ── */
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
