/* 
   José Rizal — World Journey Map
   journey.js
   Linked by: journey.html
*/

const books = [
  {
    spine: "Noli Me Tangere",
    label: "Novel · Berlin, 1887",
    title: "Noli Me<br>Tangere",
    subtitle:
      '"Touch Me Not" — the novel that shook a colonial empire and awakened a sleeping nation.',
    ornament: "📖",
  },
  {
    spine: "El Filibusterismo",
    label: "Novel · Ghent, 1891",
    title: "El<br>Filibusterismo",
    subtitle:
      "The darker sequel — revolution, despair, and the limits of peaceful reform under colonialism.",
    ornament: "⚔️",
  },
  {
    spine: "Mi Último Adiós",
    label: "Poem · Fort Santiago, 1896",
    title: "Mi Último<br>Adiós",
    subtitle:
      "Hidden in an oil lamp on the eve of his execution — his final love letter to the Philippines.",
    ornament: "✒️",
  },
  {
    spine: "La Solidaridad",
    label: "Essays · Madrid, 1889–95",
    title: "La<br>Solidaridad",
    subtitle:
      "Dozens of political essays demanding rights, representation, and dignity for all Filipinos.",
    ornament: "🏛️",
  },
];

let bookIdx = 0;

function cycleBook() {
  bookIdx = (bookIdx + 1) % books.length;
  const b = books[bookIdx];
  const el = document.getElementById("showcaseBook");
  el.classList.add("page-flip");
  setTimeout(() => {
    document.getElementById("spineText").textContent = b.spine;
    document.getElementById("bookLabel").textContent = b.label;
    document.getElementById("bookTitleMain").innerHTML = b.title;
    document.getElementById("bookSubtitle").textContent = b.subtitle;
    document.getElementById("bookOrnamentTop").textContent = b.ornament;
    el.classList.remove("page-flip");
  }, 300);
}

function switchTab(name, clickedBtn) {
  document
    .querySelectorAll(".writings-tab-content")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".book-tab")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("tab-" + name).classList.add("active");
  clickedBtn.classList.add("active");
  const tabBookMap = { novels: 0, poetry: 2, essays: 3 };
  bookIdx = (tabBookMap[name] ?? 0) - 1;
  cycleBook();
}

const stops = [
  {
    name: "Philippines",
    city: "Philippines",
    flag: "🇵🇭",
    years: "1861 – 1896",
    lat: 14.5995,
    lon: 120.9842,
    desc: [
      {
        icon: "🏡",
        text: "Born June 19, 1861 in Calamba, Laguna — the seventh of eleven children.",
      },
      {
        icon: "📚",
        text: "Educated at Ateneo de Manila and UST before secretly departing for Spain.",
      },
    ],
    popup: {
      metaPills: [
        { label: "Period", val: "1861–1882 & 1892–1896" },
        { label: "City", val: "Calamba, Manila, Dapitan" },
        { label: "Role", val: "Student & Exile" },
      ],
      overview:
        "Born the seventh of eleven children to Francisco Engracio Rizal Mercado and Teodora Morales, José Rizal showed genius from childhood. He excelled at Ateneo Municipal de Manila, earning the title Sobresaliente — the highest honor. He witnessed colonial injustice firsthand when his mother was unjustly imprisoned for two years, planting the seeds of his lifelong fight for justice.",
      works: [
        {
          title: "A La Juventud Filipina (1879)",
          desc: "Prize-winning poem calling Filipino youth to lead the nation — written at just 18 years old.",
        },
        {
          title: "Junto Al Pasig (1882)",
          desc: "Theatrical poem reflecting on Filipino identity under colonialism.",
        },
      ],
      people: [
        "Francisco Rizal (Father)",
        "Teodora Alonso (Mother)",
        "Paciano Rizal (Brother)",
        "Leonor Rivera (Love)",
      ],
      facts: [
        { label: "Birth Date", val: "June 19, 1861" },
        { label: "Birthplace", val: "Calamba, Laguna" },
        { label: "School", val: "Ateneo de Manila" },
        { label: "Exile Period", val: "1892–1896 in Dapitan" },
      ],
    },
  },
  {
    name: "Spain",
    city: "Madrid & Barcelona",
    flag: "🇪🇸",
    years: "1882 – 1885",
    lat: 40.4168,
    lon: -3.7038,
    desc: [
      {
        icon: "🎓",
        text: "Enrolled at Universidad Central de Madrid; earned his Licentiate in Medicine in 1884.",
      },
      {
        icon: "✒️",
        text: "Joined the Propaganda Movement; began writing Noli Me Tangere in secret.",
      },
    ],
    popup: {
      metaPills: [
        { label: "Period", val: "1882–1885" },
        { label: "City", val: "Madrid & Barcelona" },
        { label: "Role", val: "Medical Student & Propagandist" },
      ],
      overview:
        "Rizal secretly left the Philippines in May 1882, against the wishes of his family. He enrolled at the Universidad Central de Madrid to complete his medical degree. During this period he deepened his involvement in the Propaganda Movement — a group of Filipino reformists in Europe advocating for equal rights. He wrote prolifically, honing the ideas that would become Noli Me Tangere.",
      works: [
        {
          title: "Noli Me Tangere (begun 1882)",
          desc: "Rizal began drafting his landmark novel during his Madrid years, completing it in Berlin.",
        },
        {
          title: "La Solidaridad articles",
          desc: "Early nationalist essays advocating for Philippine representation in Spanish politics.",
        },
      ],
      people: [
        "Marcelo del Pilar",
        "Graciano Lopez Jaena",
        "Juan Luna",
        "Felix Resurreccion Hidalgo",
      ],
      facts: [
        { label: "University", val: "Universidad Central de Madrid" },
        { label: "Degree", val: "Licentiate in Medicine" },
        { label: "Graduated", val: "1884" },
        { label: "Movement", val: "La Propaganda" },
      ],
    },
  },
  {
    name: "France",
    city: "Paris",
    flag: "🇫🇷",
    years: "1885 – 1886",
    lat: 48.8566,
    lon: 2.3522,
    desc: [
      {
        icon: "👁️",
        text: "Studied ophthalmology under renowned specialist Dr. Louis de Wecker.",
      },
      {
        icon: "🎨",
        text: "Immersed in Parisian art and culture; refined his painting and sculpture.",
      },
    ],
    popup: {
      metaPills: [
        { label: "Period", val: "1885–1886" },
        { label: "City", val: "Paris" },
        { label: "Role", val: "Medical Specialist" },
      ],
      overview:
        "After completing his general medical degree in Madrid, Rizal moved to Paris to specialize in ophthalmology — a field he chose partly to heal his mother's failing eyesight. He trained under Dr. Louis de Wecker, one of Europe's most celebrated eye surgeons. Paris also sharpened his appreciation for art, literature, and revolutionary political thought.",
      works: [
        {
          title: "Ophthalmology Specialization",
          desc: "Advanced surgical training in eye diseases and cataract procedures under European masters.",
        },
      ],
      people: [
        "Dr. Louis de Wecker (Mentor)",
        "Juan Luna (Artist Friend)",
        "Felix Resurreccion Hidalgo",
      ],
      facts: [
        { label: "Specialty", val: "Ophthalmology" },
        { label: "Mentor", val: "Dr. Louis de Wecker" },
        { label: "Arts", val: "Painting & Sculpture" },
        { label: "Duration", val: "~1 year" },
      ],
    },
  },
  {
    name: "Germany",
    city: "Berlin & Heidelberg",
    flag: "🇩🇪",
    years: "1886 – 1887",
    lat: 52.52,
    lon: 13.405,
    desc: [
      {
        icon: "📖",
        text: "Noli Me Tangere published in Berlin in March 1887 — the book that lit the fire of Philippine nationalism.",
      },
      {
        icon: "🔬",
        text: "Continued ophthalmological research with Dr. Otto Becker in Heidelberg.",
      },
    ],
    popup: {
      metaPills: [
        { label: "Period", val: "1886–1887" },
        { label: "Cities", val: "Berlin & Heidelberg" },
        { label: "Role", val: "Author & Researcher" },
      ],
      overview:
        "Germany was the birthplace of Rizal's greatest literary achievement. After struggling to finance its printing — friends like Maximo Viola contributed funds — Noli Me Tangere was printed in Berlin in March 1887. Rizal also conducted ophthalmological research at the University of Heidelberg clinic under Dr. Otto Becker, publishing scientific observations on eye diseases.",
      works: [
        {
          title: "Noli Me Tangere (1887)",
          desc: "Published at the Berliner Buchdruckerei-Actien-Gesellschaft printing house in Berlin with the help of Maximo Viola.",
        },
        {
          title: "Medical Publications",
          desc: "Scientific articles on ophthalmological conditions published in German medical journals.",
        },
      ],
      people: [
        "Maximo Viola (Patron & Friend)",
        "Dr. Otto Becker (Mentor)",
        "Rudolf Virchow (Anthropologist Friend)",
      ],
      facts: [
        { label: "Published", val: "Noli Me Tangere, 1887" },
        { label: "Copies", val: "2,000 first edition" },
        { label: "Hospital", val: "Heidelberg Eye Clinic" },
        { label: "Mentor", val: "Dr. Otto Becker" },
      ],
    },
  },
  {
    name: "Belgium",
    city: "Ghent & Brussels",
    flag: "🇧🇪",
    years: "1890 – 1891",
    lat: 50.8503,
    lon: 4.3517,
    desc: [
      {
        icon: "⚔️",
        text: "El Filibusterismo published in Ghent, Belgium in September 1891.",
      },
      {
        icon: "💰",
        text: "Rizal pawned his jewels to finance the printing — such was his dedication to the cause.",
      },
    ],
    popup: {
      metaPills: [
        { label: "Period", val: "1890–1891" },
        { label: "City", val: "Ghent" },
        { label: "Role", val: "Author in Exile" },
      ],
      overview:
        "Financially strained and politically embattled, Rizal produced his most radical work in Belgium. He chose Ghent for its cheaper printing costs. When money ran short, he pawned his jewelry and borrowed from friends. El Filibusterismo was dedicated to the three martyred priests GOMBURZA — Gomez, Burgos, and Zamora — whose execution had first ignited his sense of justice.",
      works: [
        {
          title: "El Filibusterismo (1891)",
          desc: "Printed at F. Meyer-van Loo Press in Ghent. Dedicated to the martyrs Gomez, Burgos, and Zamora.",
        },
      ],
      people: [
        "Valentin Ventura (Financier)",
        "Gomez, Burgos & Zamora (Dedicatees)",
        "Jose Maria Basa",
      ],
      facts: [
        { label: "Published", val: "September 1891" },
        { label: "Printer", val: "F. Meyer-van Loo, Ghent" },
        { label: "Dedicated to", val: "GOMBURZA Martyrs" },
        { label: "Funded by", val: "Pawned jewelry" },
      ],
    },
  },
  {
    name: "Japan",
    city: "Tokyo & Yokohama",
    flag: "🇯🇵",
    years: "1888",
    lat: 35.6762,
    lon: 139.6503,
    desc: [
      {
        icon: "🌸",
        text: "Spent 45 days in Japan, captivated by the culture, discipline, and beauty of the country.",
      },
      {
        icon: "❤️",
        text: "Fell briefly in love with a Japanese woman named O-Sei-San in Tokyo.",
      },
    ],
    popup: {
      metaPills: [
        { label: "Period", val: "1888 (45 days)" },
        { label: "Cities", val: "Yokohama & Tokyo" },
        { label: "Role", val: "Traveler & Observer" },
      ],
      overview:
        "En route from the Philippines to Europe in 1888, Rizal stopped in Japan for 45 remarkable days. He was enchanted by Japanese culture, discipline, and the nation's rapid modernization under the Meiji era. He learned basic Japanese and developed a deep admiration for how Japan was asserting its identity in the face of Western pressure — a model he hoped the Philippines could emulate.",
      works: [
        {
          title: "Travel Diary & Letters",
          desc: "Rizal's detailed diary entries and letters to friends describe Japanese culture, architecture, women, and the Meiji government with admiration and fascination.",
        },
      ],
      people: [
        "O-Sei-San (Japanese love interest)",
        "Juan Perez Caballero (Spanish diplomat)",
      ],
      facts: [
        { label: "Duration", val: "45 days" },
        { label: "Year", val: "1888" },
        { label: "Admired", val: "Meiji modernization" },
        { label: "Language", val: "Learned basic Japanese" },
      ],
    },
  },
  {
    name: "United Kingdom",
    city: "London",
    flag: "🇬🇧",
    years: "1888 – 1889",
    lat: 51.5074,
    lon: -0.1278,
    desc: [
      {
        icon: "📜",
        text: "Worked at the British Museum, annotating Antonio de Morga's 1609 history of the Philippines.",
      },
      {
        icon: "🗣️",
        text: "Perfected his English and connected with European scholars and intellectuals.",
      },
    ],
    popup: {
      metaPills: [
        { label: "Period", val: "1888–1889" },
        { label: "City", val: "London" },
        { label: "Role", val: "Scholar & Historian" },
      ],
      overview:
        "In London, Rizal conducted one of his most significant scholarly achievements: the annotation of Antonio de Morga's \"Sucesos de las Islas Filipinas\" (1609). Working daily at the British Museum Reading Room, he used Morga's own historical account to prove that Philippine civilization was rich and sophisticated before Spanish colonization — a powerful tool for nationalist argument.",
      works: [
        {
          title: "Sucesos de las Islas Filipinas (annotated, 1890)",
          desc: "Rizal's annotated version of Morga's 1609 history, republished with extensive nationalist footnotes proving pre-colonial Filipino civilization.",
        },
      ],
      people: [
        "Antonio de Morga (historical subject)",
        "British Museum scholars",
        "Eduardo de Lete",
      ],
      facts: [
        { label: "Research Site", val: "British Museum Reading Room" },
        { label: "Key Work", val: "Annotated Morga's history" },
        { label: "Language", val: "Perfected English" },
        { label: "Duration", val: "~1 year" },
      ],
    },
  },
];

let currentStop = 0;

const canvas = document.getElementById("globe");
const ctx = canvas.getContext("2d");
let projection, path, worldData;
let globeRotX = 0,
  globeRotY = 0;
let targetLon = 0,
  targetLat = 0;
let animFrame;

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  buildProjection();
}

function buildProjection() {
  const w = canvas.width,
    h = canvas.height;
  const isMobile = window.innerWidth <= 768;
  const offsetX = isMobile ? 0 : w * 0.2;
  projection = d3
    .geoOrthographic()
    .scale(Math.min(w, h) * 0.42)
    .translate([w / 2 + offsetX, h / 2])
    .clipAngle(90)
    .rotate([globeRotY, -globeRotX]);
  path = d3.geoPath(projection, ctx);
}

function drawGlobe() {
  if (!worldData) return;
  const w = canvas.width,
    h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  ctx.beginPath();
  path({ type: "Sphere" });
  const cx = projection.translate()[0];
  const cy = projection.translate()[1];
  const r = projection.scale();
  const grad = ctx.createRadialGradient(
    cx - r * 0.2,
    cy - r * 0.2,
    0,
    cx,
    cy,
    r,
  );
  grad.addColorStop(0, "#4A3B22");
  grad.addColorStop(0.35, "#2E2410");
  grad.addColorStop(0.75, "#1C1608");
  grad.addColorStop(1, "#0E0C04");
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  path(d3.geoGraticule().step([20, 20])());
  ctx.strokeStyle = "rgba(201, 168, 76, 0.13)";
  ctx.lineWidth = 0.6;
  ctx.stroke();

  ctx.beginPath();
  path(d3.geoGraticule().step([10, 10])());
  ctx.strokeStyle = "rgba(201, 168, 76, 0.05)";
  ctx.lineWidth = 0.4;
  ctx.stroke();

  const countries = topojson.feature(worldData, worldData.objects.countries);
  countries.features.forEach((f) => {
    ctx.beginPath();
    path(f);
    const landGrad = ctx.createRadialGradient(
      cx - r * 0.15,
      cy - r * 0.15,
      0,
      cx,
      cy,
      r * 1.1,
    );
    landGrad.addColorStop(0, "#6B5020");
    landGrad.addColorStop(0.5, "#4E3A16");
    landGrad.addColorStop(1, "#312410");
    ctx.fillStyle = landGrad;
    ctx.fill();
    ctx.strokeStyle = "rgba(201, 155, 60, 0.35)";
    ctx.lineWidth = 0.6;
    ctx.stroke();
  });

  countries.features.forEach((f) => {
    ctx.beginPath();
    path(f);
    ctx.strokeStyle = "rgba(240, 190, 90, 0.18)";
    ctx.lineWidth = 0.3;
    ctx.stroke();
  });

  ctx.beginPath();
  path({
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: Array.from({ length: 361 }, (_, i) => [i - 180, 0]),
    },
  });
  ctx.strokeStyle = "rgba(201, 168, 76, 0.30)";
  ctx.lineWidth = 1.2;
  ctx.setLineDash([6, 4]);
  ctx.stroke();
  ctx.setLineDash([]);

  [23.5, -23.5].forEach((lat) => {
    ctx.beginPath();
    path({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: Array.from({ length: 361 }, (_, i) => [i - 180, lat]),
      },
    });
    ctx.strokeStyle = "rgba(201, 168, 76, 0.12)";
    ctx.lineWidth = 0.8;
    ctx.setLineDash([3, 6]);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  stops.forEach((s, i) => {
    const [px, py] = projection([s.lon, s.lat]);
    const dot = projection.rotate();
    const angle = d3.geoDistance([s.lon, s.lat], [-dot[0], -dot[1]]);
    if (angle > Math.PI / 2) return;

    if (i === currentStop) {
      ctx.beginPath();
      ctx.arc(px, py, 18, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(201, 168, 76, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(px, py, 11, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(201, 168, 76, 0.35)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#F0D080";
      ctx.fill();
      ctx.strokeStyle = "#C9A84C";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.strokeStyle = "rgba(201, 168, 76, 0.5)";
      ctx.lineWidth = 0.8;
      [
        [px - 22, py, px - 13, py],
        [px + 13, py, px + 22, py],
        [px, py - 22, px, py - 13],
        [px, py + 13, px, py + 22],
      ].forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });
    } else {
      ctx.beginPath();
      ctx.arc(px, py, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(201, 168, 76, 0.45)";
      ctx.fill();
      ctx.strokeStyle = "rgba(201, 168, 76, 0.7)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
  });

  ctx.beginPath();
  path({ type: "Sphere" });
  const edgeGrad = ctx.createRadialGradient(cx, cy, r * 0.78, cx, cy, r);
  edgeGrad.addColorStop(0, "rgba(0,0,0,0)");
  edgeGrad.addColorStop(0.6, "rgba(10,7,2,0.25)");
  edgeGrad.addColorStop(1, "rgba(6,4,0,0.72)");
  ctx.fillStyle = edgeGrad;
  ctx.fill();
  ctx.beginPath();
  path({ type: "Sphere" });
  ctx.strokeStyle = "rgba(201, 168, 76, 0.32)";
  ctx.lineWidth = 1.2;
  ctx.stroke();
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function animateGlobe() {
  globeRotY = lerp(globeRotY, targetLon, 0.06);
  globeRotX = lerp(globeRotX, targetLat, 0.06);
  if (projection) {
    projection.rotate([globeRotY, -globeRotX]);
    path = d3.geoPath(projection, ctx);
  }
  drawGlobe();
  animFrame = requestAnimationFrame(animateGlobe);
}

function goToStop(i) {
  currentStop = i;
  const s = stops[i];
  targetLon = -s.lon;
  targetLat = s.lat;

  document.getElementById("card-stop-num").textContent =
    `Stop ${i + 1} of ${stops.length}`;
  document.getElementById("stop-counter").textContent =
    `Stop ${i + 1} of ${stops.length}`;
  document.getElementById("card-flag").textContent = s.flag;
  document.getElementById("card-country").textContent = s.name;
  document.getElementById("card-city").textContent = s.city;
  document.getElementById("card-years").textContent = s.years;
  document.getElementById("card-desc").innerHTML = s.desc
    .map(
      (d) =>
        `<div class="card-desc-highlight"><span class="di">${d.icon}</span><span>${d.text}</span></div>`,
    )
    .join("");
  document.getElementById("prev-btn").disabled = i === 0;
  document.getElementById("next-btn").disabled = i === stops.length - 1;

  const card = document.getElementById("location-card");
  card.classList.remove("show");
  setTimeout(() => card.classList.add("show"), 60);
  updateTimeline();
}

function nextStop() {
  if (currentStop < stops.length - 1) goToStop(currentStop + 1);
}
function prevStop() {
  if (currentStop > 0) goToStop(currentStop - 1);
}

function openPopup() {
  const s = stops[currentStop];
  const p = s.popup;
  document.getElementById("popup-flag").textContent = s.flag;
  document.getElementById("popup-loc-label").textContent = s.name;
  document.getElementById("popup-title").textContent = s.city;

  const metaPills = p.metaPills
    .map(
      (m) =>
        `<div class="popup-meta-pill">${m.label}: <span>${m.val}</span></div>`,
    )
    .join("");
  const works = p.works
    .map(
      (w) =>
        `<div class="popup-work-item"><strong>${w.title}</strong>${w.desc}</div>`,
    )
    .join("");
  const people = p.people
    .map((pp) => `<span class="popup-person">${pp}</span>`)
    .join("");
  const facts = p.facts
    .map(
      (f) =>
        `<div class="popup-fact"><div class="popup-fact-label">${f.label}</div><div class="popup-fact-val">${f.val}</div></div>`,
    )
    .join("");

  document.getElementById("popup-body").innerHTML = `
    <div class="popup-meta-bar">${metaPills}</div>
    <div class="popup-section"><div class="popup-section-title">Overview</div><p class="popup-section-text">${p.overview}</p></div>
    <div class="popup-section"><div class="popup-section-title">Key Works Here</div><div class="popup-works">${works}</div></div>
    <div class="popup-section"><div class="popup-section-title">Key Figures</div><div class="popup-people">${people}</div></div>
    <div class="popup-section"><div class="popup-section-title">Quick Facts</div><div class="popup-fact-grid">${facts}</div></div>
  `;

  document.getElementById("popup-backdrop").classList.add("show");
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup-backdrop").classList.remove("show");
  document.getElementById("popup").classList.remove("show");
}

function buildTimeline() {
  const track = document.getElementById("jt-track");
  stops.forEach((s, i) => {
    const stop = document.createElement("div");
    stop.className = "jt-stop";
    stop.innerHTML = `<div class="jt-dot"></div><div class="jt-name">${s.flag} ${s.city.split(" ")[0]}</div>`;
    stop.onclick = () => goToStop(i);
    track.appendChild(stop);
  });
  updateTimeline();
}

function updateTimeline() {
  document.querySelectorAll(".jt-stop").forEach((el, i) => {
    el.classList.toggle("active", i === currentStop);
    el.classList.toggle("visited", i < currentStop);
  });
  const pct = currentStop === 0 ? 0 : (currentStop / (stops.length - 1)) * 100;
  document.getElementById("jt-progress").style.width = pct + "%";
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
  .then((r) => r.json())
  .then((data) => {
    worldData = data;
    document.getElementById("globe-loading").classList.add("hide");
    buildTimeline();
    goToStop(0);
    animateGlobe();
  })
  .catch(() => {
    document
      .getElementById("globe-loading")
      .querySelector(".g-loading-text").textContent = "Map unavailable.";
  });

window.addEventListener("scroll", () => {
  document.getElementById("mainNav").style.boxShadow =
    window.scrollY > 40 ? "0 2px 20px rgba(201,168,76,0.1)" : "none";
});

const currentPage = window.location.pathname.split("/").pop() || "journey.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const linkPage = href.split("/").pop();
  const isAnchor = href.startsWith("#");
  const isCurrentAnchor =
    isAnchor && (currentPage === "journey.html" || currentPage === "");
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

  toggler.addEventListener("click", () => {
    toggler.classList.contains("open") ? closeMenu() : openMenu();
  });

  collapse.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (toggler.classList.contains("open")) closeMenu();
    });
  });
})();
