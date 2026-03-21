/*
   José Rizal — Societal Contributions
   contributions.js
   Linked by: contributions.html
*/

const CONTRIB_DATA = {
  noli: {
    category: "Literature",
    title: "Noli Me Tángere",
    sub: "Novel · Berlin, Germany · 1887",
    summary:
      "Latin for 'Touch Me Not' — the title taken from the Gospel of John — Noli Me Tángere was the most dangerous book ever written in the Philippines. Published in Berlin in 1887 with funds borrowed from his friend Máximo Viola, it laid bare in unflinching fictional detail the twin engines of Filipino oppression: the corrupt Catholic clergy and the indifferent colonial government. Two thousand copies were printed. Spanish authorities banned it immediately. The ban made it immortal.",
    highlights: [
      {
        title: "Crisostomo Ibarra & María Clara",
        text: "The novel follows Ibarra, an idealistic young Filipino returning from Europe, and his doomed love for María Clara — widely understood to be modeled on Leonor Rivera. Their story became the defining romantic and political allegory of the Filipino experience under colonialism.",
      },
      {
        title: "Sisa and the Human Cost",
        text: "The character of Sisa — a mother driven to madness by the cruelty of the friars — was among the most emotionally devastating portraits in 19th-century literature. She personified what colonialism did not just to politics, but to families, and to the human mind.",
      },
    ],
    facts: [
      { label: "Published", val: "February 1887, Berlin" },
      { label: "First Print Run", val: "2,000 copies" },
      { label: "Language", val: "Spanish" },
      {
        label: "Status",
        val: "Banned immediately by Spanish colonial authorities",
      },
    ],
  },
  fili: {
    category: "Literature",
    title: "El Filibusterismo",
    sub: "Novel · Ghent, Belgium · 1891",
    summary:
      "Darker, angrier, and more politically explosive than its predecessor, El Filibusterismo is the novel Rizal wrote after hope had been tested and found insufficient. Ibarra returns as Simoun — a wealthy jeweler who has abandoned reform in favor of revolution, stoking colonial society from within in hopes of triggering its collapse. Rizal dedicated the novel to the three Filipino priests Gomez, Burgos, and Zamora — executed in 1872 — whose deaths first ignited the flame of Filipino nationalism.",
    highlights: [
      {
        title: "Simoun's Philosophy",
        text: "Simoun represents Rizal's own darkest doubts about peaceful reform. Through Simoun's arguments — and his ultimate failure — Rizal explored whether any system built on violence could be dismantled without violence in return. The novel offers no comfortable answer.",
      },
      {
        title: "Dedicated to GOMBURZA",
        text: "The dedication page reads: 'To the memory of the priests, Don Mariano Gomez... Don Jose Burgos... and Don Jacinto Zamora... the Philippine Church and Filipino people mourned their loss.' It transformed the novel into an act of remembrance and accusation simultaneously.",
      },
    ],
    facts: [
      { label: "Published", val: "September 1891, Ghent" },
      {
        label: "Dedicated To",
        val: "GOMBURZA — three martyred Filipino priests",
      },
      { label: "Tone", val: "Darker and more radical than Noli" },
      { label: "Funded By", val: "Valentin Ventura, a Filipino friend" },
    ],
  },
  adios: {
    category: "Literature",
    title: "Mi Último Adiós",
    sub: "Poem · Fort Santiago, Manila · December 29, 1896",
    summary:
      "On the night before his execution, Rizal wrote an untitled poem in the cell of Fort Santiago. He folded it inside a small alcohol lamp and handed the lamp to Josephine Bracken as she said goodbye. The poem was found after his death, given to his family, and distributed across the Philippines within days. It has since been translated into dozens of languages, memorized by generations of Filipino schoolchildren, and is universally regarded as the most beautiful and moving work of Philippine literature.",
    highlights: [
      {
        title: "The Hidden Farewell",
        text: "Rizal hid the poem inside the lamp to evade the Spanish guards who searched him before execution. Josephine later extracted the folded paper, recognized it as something precious, and delivered it to his family. Without her act, one of history's great poems might have been lost forever.",
      },
      {
        title: "The Opening Lines",
        text: "The poem opens with a vision of dying at dawn as the light breaks — 'I die just when the dawn breaks, through the gloom of night.' It became the defining image of Rizal's martyrdom: a man dying as the light he had fought for began to appear.",
      },
    ],
    facts: [
      { label: "Written", val: "December 29, 1896 — eve of execution" },
      { label: "Hidden In", val: "An alcohol lamp given to Josephine Bracken" },
      { label: "Stanzas", val: "14 stanzas" },
      { label: "Originally", val: "Untitled — named posthumously" },
    ],
  },
  solidaridad: {
    category: "Literature & Political Reform",
    title: "La Solidaridad Essays",
    sub: "Political Journalism · Madrid, Spain · 1889–1895",
    summary:
      "La Solidaridad was the fortnightly newspaper published in Barcelona and Madrid that served as the official voice of the Propaganda Movement. Rizal contributed prolifically under the pen name Laong Laan — Tagalog for 'Ever Ready.' His essays were models of measured, evidence-based argumentation: he did not simply denounce colonialism, he dismantled its justifications point by point, using Spanish law, Spanish history, and Spanish values against Spanish colonial practice.",
    highlights: [
      {
        title: "Pen Name: Laong Laan",
        text: "Rizal used the pseudonym to protect himself and his family from direct retaliation while writing politically sensitive material. The name itself — Ever Ready — was a quiet declaration of purpose.",
      },
      {
        title: "The Arguments",
        text: "His essays called for Philippine representation in the Spanish Cortes, the secularization of parishes, freedom of the press, equality before the law regardless of race, and an end to the arbitrary deportation of Filipino citizens. Each argument was grounded in Spain's own constitutional principles — making them impossible to dismiss without hypocrisy.",
      },
    ],
    facts: [
      { label: "Pen Name", val: "Laong Laan (Ever Ready)" },
      { label: "Publication", val: "La Solidaridad, Barcelona/Madrid" },
      { label: "Period", val: "1889 – 1895" },
      { label: "Focus", val: "Political reform, civil rights, press freedom" },
    ],
  },
  clinic: {
    category: "Medicine & Public Health",
    title: "Free Medical Clinic in Dapitan",
    sub: "Community Health · Dapitan, Mindanao · 1892–1896",
    summary:
      "Rizal arrived in Dapitan as a prisoner. He left as its physician, teacher, and civic engineer. Within months of his exile, he had established a free medical clinic that became the primary source of healthcare for the entire surrounding region. He treated patients with malaria, intestinal diseases, eye conditions, wounds, and tropical illnesses — conditions that had gone untreated for generations because no qualified physician had ever come to that remote corner of Mindanao.",
    highlights: [
      {
        title: "300+ Patients",
        text: "Historical records and accounts from Dapitan residents documented over 300 patients treated by Rizal during his four years of exile — most of them too poor to pay. He supplied medicine from his own funds and performed surgeries under improvised conditions.",
      },
      {
        title: "No Payment Required",
        text: "Rizal's consistent policy was simple: those who could pay did, and those who could not received the same care. Several patients traveled days by boat from distant islands after word spread that there was a skilled physician in Dapitan who would see anyone.",
      },
    ],
    facts: [
      { label: "Location", val: "Dapitan, Zamboanga del Norte, Mindanao" },
      { label: "Period", val: "1892 – 1896" },
      { label: "Patients Treated", val: "300+ documented cases" },
      { label: "Specialization", val: "General medicine & ophthalmology" },
    ],
  },
  cataract: {
    category: "Medicine",
    title: "Restoring His Mother's Sight",
    sub: "Ophthalmological Surgery · Manila · 1887",
    summary:
      "When Rizal returned to the Philippines from Europe in 1887, his mother Teodora Alonso's vision had deteriorated severely from cataracts. Rizal had spent two years training specifically in ophthalmological surgery — first under Dr. Louis de Wecker in Paris, then under Dr. Otto Becker in Heidelberg — partly with this moment in mind. He performed the cataract extraction surgery on his own mother, successfully restoring her sight. The operation was a triumph both personal and professional.",
    highlights: [
      {
        title: "The Graefe Technique",
        text: "Rizal had mastered the von Graefe modified cataract extraction — one of the most advanced surgical techniques of the era. He performed it without general anesthesia, relying entirely on skill and the patient's stillness. The fact that he performed it on his own mother — knowing the stakes — speaks to both his courage and his confidence.",
      },
      {
        title: "What It Meant",
        text: "Teodora Alonso had taught Rizal to read and love language. That her son would train for years in Europe and cross an ocean to give her sight back is one of the most quietly moving biographical facts of his life.",
      },
    ],
    facts: [
      { label: "Patient", val: "Teodora Alonso Realonda — his mother" },
      { label: "Year", val: "1887" },
      { label: "Procedure", val: "Cataract extraction (von Graefe technique)" },
      { label: "Outcome", val: "Successful — vision restored" },
    ],
  },
  school: {
    category: "Education",
    title: "The Dapitan School",
    sub: "Community Education · Dapitan, 1892–1896",
    summary:
      "Exiled by the colonial government and stripped of his freedom to travel or publish, Rizal turned his energies inward — toward the community he had been placed in. He established a school in Dapitan where he taught a curriculum that blended the classical (Spanish, English, mathematics) with the practical (natural sciences, agriculture, physical education). He funded it himself, built desks and shelves with his own hands, and taught classes daily. Over 20 students enrolled.",
    highlights: [
      {
        title: "The Curriculum",
        text: "Rizal's school was unlike any other in the Philippines at the time. He taught formal academics but also took students outdoors — to study tidal patterns, collect insects, identify plants, and understand the physical world directly. It anticipated the progressive education movement that would not reach Europe for another two decades.",
      },
      {
        title: "Teaching by Example",
        text: "Former students recalled that Rizal never lectured from a position of authority. He learned alongside them, admitted when he didn't know something, and modeled the curiosity and discipline he wanted to cultivate. His teaching style was, by every account, transformative.",
      },
    ],
    facts: [
      { label: "Location", val: "Dapitan, Mindanao" },
      { label: "Students", val: "20+ enrolled at peak" },
      {
        label: "Subjects",
        val: "Spanish, English, Math, Natural Sciences, Drawing",
      },
      { label: "Tuition", val: "Free for those who could not pay" },
    ],
  },
  morga: {
    category: "Historical Scholarship",
    title: "Annotations of Morga's Sucesos",
    sub: "Historical Reclamation · Paris, 1890",
    summary:
      "In 1890, while in Paris, Rizal tracked down Antonio de Morga's 1609 Sucesos de las Islas Filipinas in the Bibliothèque Nationale — one of the few copies in Europe. He spent months annotating it line by line, adding over a hundred counter-notes that demonstrated, using primary Spanish sources, that pre-colonial Filipino society was technologically sophisticated, economically active, culturally rich, and politically organized. The annotated edition was published in 1890.",
    highlights: [
      {
        title: "Reclaiming the Past",
        text: "The colonial narrative required Filipinos to believe they had been lifted from barbarism by Spain. Morga's own account — written by a Spanish colonial official — contained enough evidence to refute this. Rizal simply pointed to what was already there, let the Spanish record speak, and added his own devastating commentary.",
      },
      {
        title: "The Method",
        text: "Rizal's annotations are models of scholarly argumentation: precise, sourced, and restrained in tone. He did not need to shout. The evidence was sufficient. By letting Morga's own words expose the lies of the colonial narrative, he made the book impossible to dismiss as mere nationalism.",
      },
    ],
    facts: [
      {
        label: "Original Work",
        val: "Sucesos de las Islas Filipinas by Antonio de Morga (1609)",
      },
      {
        label: "Annotated In",
        val: "Paris, Bibliothèque Nationale, 1889–1890",
      },
      { label: "Published", val: "Paris, 1890" },
      {
        label: "Significance",
        val: "First systematic scholarly defense of pre-colonial Philippine civilization",
      },
    ],
  },
  species: {
    category: "Natural Science",
    title: "New Species Discovered",
    sub: "Biology & Zoology · Dapitan, 1892–1896",
    summary:
      "Rizal's scientific contributions were not metaphorical. During his exile in Dapitan he conducted systematic fieldwork — collecting, preserving, and cataloguing specimens of local fauna and flora. He corresponded regularly with Dr. A.B. Meyer of the Dresden Museum and other European naturalists, shipping them carefully preserved specimens. Three species he discovered were formally named after him by European scientists, confirming him as a legitimate contributor to 19th-century natural history.",
    highlights: [
      {
        title: "Draco rizali",
        text: "A flying lizard discovered in the forests around Dapitan. Named by the Dresden Museum upon receiving Rizal's specimen and field notes. It remains the species most commonly associated with his scientific work.",
      },
      {
        title: "Rachophorus rizali & Apogonia rizali",
        text: "A tree frog and a beetle, both first documented by Rizal in Dapitan and named after him by European taxonomists. Together with Draco rizali, they represent a scientific legacy that extends far beyond his more celebrated literary work.",
      },
    ],
    facts: [
      { label: "Draco rizali", val: "Flying lizard — named by Dresden Museum" },
      {
        label: "Rachophorus rizali",
        val: "Tree frog — described in European journals",
      },
      {
        label: "Apogonia rizali",
        val: "Beetle — catalogued by entomologists in London",
      },
      {
        label: "Collaborators",
        val: "Dr. A.B. Meyer, Dresden; various European naturalists",
      },
    ],
  },
  liga: {
    category: "Civil Society & Politics",
    title: "La Liga Filipina",
    sub: "Civic Organization · Manila · July 3, 1892",
    summary:
      "On July 3, 1892 — days after returning to Manila — Rizal founded La Liga Filipina in the house of Doroteo Ongjunco in Tondo. The organization's charter called for the unification of all Filipinos regardless of class or region, mutual aid and legal assistance for members, collective economic resistance to colonial exploitation, and the development of Filipino commerce, agriculture, and education. It was the most sophisticated civil society organization the Philippines had ever seen. Rizal was arrested and exiled four days later.",
    highlights: [
      {
        title: "The Founding Night",
        text: "Rizal delivered the Liga's founding speech to a small group of men in a private house in Tondo. He had written the charter himself. The meeting lasted hours. Within four days, colonial authorities had arrested him and exiled him to Dapitan — proof that they considered even peaceful civic organization an existential threat.",
      },
      {
        title: "The Katipunan Connection",
        text: "The Liga collapsed almost immediately after Rizal's arrest. But Andres Bonifacio — who had been present at the founding — took its principles of Filipino unity and collective action and channeled them into the Katipunan. The revolution that Rizal had tried to prevent was, in part, born from the organization he had built to avoid it.",
      },
    ],
    facts: [
      { label: "Founded", val: "July 3, 1892 — Tondo, Manila" },
      {
        label: "Purpose",
        val: "Civic unity, mutual aid, collective economic action",
      },
      {
        label: "Duration",
        val: "Disbanded after Rizal's arrest — 4 days after founding",
      },
      {
        label: "Legacy",
        val: "Directly inspired the founding of the Katipunan",
      },
    ],
  },
  propaganda: {
    category: "Political Reform",
    title: "The Propaganda Movement",
    sub: "Reform Campaign · Spain · 1882–1892",
    summary:
      "The Propaganda Movement was the first organized, sustained political campaign for Filipino rights in history. Based in Spain among Filipino students, professionals, and intellectuals, it sought reform through persuasion, journalism, and political lobbying rather than armed revolt. Rizal was its most internationally visible figure — his novels gave the movement worldwide attention it could not have achieved through essays alone. He believed sincerely, for most of his life, that justice could be achieved through argument.",
    highlights: [
      {
        title: "The Method of Reform",
        text: "The Propagandists' strategy was deliberately peaceful: write, publish, persuade. They appealed to Spanish liberals, argued in Spanish courts of opinion, and presented the Philippine case in the language of Spanish constitutional law. Rizal was the master of this approach — a colonial subject making the colonizer's own values into weapons against colonial practice.",
      },
      {
        title: "Why It Ultimately Failed",
        text: "The Spanish government was uninterested in reform that would reduce its power. Every petition was ignored. Every newspaper article was censored. By the time Rizal founded the Liga in 1892, he understood that the window for peaceful change was closing — but he never fully abandoned the hope that reason could prevail.",
      },
    ],
    facts: [
      { label: "Period", val: "1882 – 1892" },
      { label: "Base", val: "Madrid, Barcelona, Paris" },
      { label: "Key Figures", val: "Rizal, del Pilar, López Jaena" },
      { label: "Approach", val: "Journalism, lobbying, literary advocacy" },
    ],
  },
  arts: {
    category: "Arts & Culture",
    title: "Sculpture & Visual Arts",
    sub: "Fine Arts · Europe & Dapitan · 1882–1896",
    summary:
      "Rizal's artistic abilities were extensive and formally trained. In Madrid he enrolled in the School of Fine Arts alongside his medical studies, learning drawing, painting, and sculpture under classical European instruction. He produced portraits, still lifes, landscapes, and anatomical drawings — some of which survive in Philippine national collections. In Dapitan he continued sculpting in wood and clay, and his teaching of drawing to his students was among the most popular aspects of his school.",
    highlights: [
      {
        title: "The Revenge of the Mother (Higante)",
        text: "Rizal's most famous sculpture depicts a mother crocodile and her young surrounding and overpowering a larger predator. Made during his Dapitan exile, it has been interpreted as an allegory of Filipino resistance — the small and seemingly weak overthrowing the powerful through unity. It now sits in the National Museum of the Philippines.",
      },
      {
        title: "Self-Portraits and Portraiture",
        text: "Rizal produced several self-portraits and drew meticulous portraits of friends, colleagues, and family members. His drawings reveal not only technical skill but a deeply observational eye — the same eye that catalogued new species in Dapitan and diagnosed eye conditions in his clinic.",
      },
    ],
    facts: [
      { label: "Training", val: "School of Fine Arts, Madrid" },
      { label: "Media", val: "Clay, wood, charcoal, watercolor, oil" },
      { label: "Most Famous Work", val: "The Revenge of the Mother (Higante)" },
      {
        label: "Collection",
        val: "National Museum of the Philippines, Manila",
      },
    ],
  },
  dapitan: {
    category: "Civic Development & Engineering",
    title: "Dapitan Civic Projects",
    sub: "Infrastructure · Dapitan, Mindanao · 1892–1896",
    summary:
      "Confined to Dapitan with no political platform, no press, and no freedom to travel, Rizal did what he always did when given constraints: he worked. He surveyed the town's topography, designed a water supply system using bamboo pipes to channel spring water from the hills into the town center, and supervised its construction. He also designed a drainage system, rearranged the town plaza, introduced new crop varieties, and set up a cooperative farming system with local residents.",
    highlights: [
      {
        title: "The Water System",
        text: "Rizal's bamboo pipe aqueduct brought clean water to Dapitan residents who had previously relied entirely on wells and rainwater. He mapped the elevation contours himself, calculated flow rates, designed the channel gradient, and directed the construction with local labor. It functioned for years after his exile ended.",
      },
      {
        title: "Agricultural Experiments",
        text: "Rizal introduced improved farming techniques to local farmers, cultivated new crops, and ran small-scale agricultural experiments on his land. He corresponded with European botanists about tropical agriculture and imported plant specimens for local cultivation trials.",
      },
    ],
    facts: [
      { label: "Location", val: "Dapitan, Zamboanga del Norte" },
      {
        label: "Water System",
        val: "Bamboo-pipe aqueduct from hill springs to town",
      },
      {
        label: "Other Works",
        val: "Drainage, plaza design, lighting, farming",
      },
      {
        label: "Significance",
        val: "One of the first Filipino-engineered public works projects",
      },
    ],
  },
};

function openPopup(key) {
  const d = CONTRIB_DATA[key];
  if (!d) return;

  document.getElementById("popup-category").textContent = d.category;
  document.getElementById("popup-title").textContent = d.title;
  document.getElementById("popup-sub").textContent = d.sub;

  const body = document.getElementById("popup-body");

  const pills = `
    <div class="popup-meta-bar">
      <div class="popup-meta-pill">Category <span>${d.category}</span></div>
    </div>`;

  const summary = `
    <div class="popup-section">
      <div class="popup-section-title">Overview</div>
      <div class="popup-section-text">${d.summary}</div>
    </div>`;

  let highlights = `<div class="popup-section"><div class="popup-section-title">Key Details</div>`;
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

document.querySelectorAll(".contrib-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-key");
    if (key) openPopup(key);
  });
});

const tabs = document.querySelectorAll(".contrib-tab");
const cols = document.querySelectorAll(".contrib-col");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    cols.forEach((col) => {
      if (filter === "all" || col.dataset.category === filter) {
        col.classList.remove("hidden");
      } else {
        col.classList.add("hidden");
      }
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 90);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);

document
  .querySelectorAll(
    ".contrib-card, .impact-item, .legacy-stat, .banner-quote, .banner-attribution",
  )
  .forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  document.getElementById("mainNav").style.boxShadow =
    window.scrollY > 40 ? "0 2px 20px rgba(201,168,76,0.1)" : "none";
});

const currentPage =
  window.location.pathname.split("/").pop() || "contributions.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const linkPage = href.split("/").pop();
  const isAnchor = href.startsWith("#");
  const isCurrentAnchor =
    isAnchor && (currentPage === "contributions.html" || currentPage === "");
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
