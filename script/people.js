/*
   José Rizal — Important People
   people.js
   Linked by: people.html
*/

const PEOPLE = {
  francisco: {
    relation: "Father",
    name: "Francisco Mercado",
    dates: "1818 – 1898",
    nationality: "Filipino",
    birthplace: "Biñan, Laguna",
    connection: "Father of José Rizal",
    summary:
      "Francisco Engracio Mercado Chinco was the father of José Rizal and the eleventh of thirteen children of Juan Monica Mercado and Cirila Alejandro. A prosperous farmer and leaseholder of the Dominican hacienda in Calamba, Laguna, he was a man of quiet dignity, hardworking discipline, and profound love for his family. He provided young José and his ten siblings with a stable household, nourishing food, and the means to pursue education.",
    highlights: [
      {
        title: "The Calamba Hacienda Dispute",
        text: "When Dominican friars raised land rents and expelled tenants unjustly from Calamba, Francisco was among those stripped of his home and livelihood. He endured the humiliation with dignity, and the injustice he suffered became one of Rizal's most personal motivations for fighting colonial abuse.",
      },
      {
        title: "Unjust Imprisonment",
        text: "Francisco was imprisoned without due cause by colonial authorities, a traumatic event that seared itself into Rizal's conscience and appeared as a theme throughout his writings — the ordinary Filipino father, helpless before arbitrary colonial power.",
      },
    ],
    facts: [
      { label: "Born", val: "Biñan, Laguna, c. 1818" },
      { label: "Died", val: "Manila, 1898" },
      { label: "Occupation", val: "Farmer & Hacienda Leaseholder" },
      { label: "Married", val: "Teodora Alonso Realonda" },
    ],
    connections: [
      "Teodora Alonso",
      "Paciano Rizal",
      "Narcisa Rizal",
      "Calamba Hacienda",
    ],
  },
  teodora: {
    relation: "Mother",
    name: "Teodora Alonso Realonda",
    dates: "1827 – 1911",
    nationality: "Filipino",
    birthplace: "Santa Cruz, Manila",
    connection: "Mother of José Rizal",
    summary:
      "Teodora Morales Alonso Quintos y Realonda was one of the most remarkable women of 19th-century Philippines. Highly educated for a woman of her era, she spoke Spanish and read widely, teaching young José to read before he was ever enrolled in formal school. Rizal consistently described her as the greatest influence on his life — a woman of intelligence, grace, and iron moral character.",
    highlights: [
      {
        title: "First Teacher",
        text: "Teodora taught Rizal the alphabet at age three and introduced him to poetry, literature, and prayer. She read to him nightly, and her love of language — she composed verses herself — directly shaped the literary genius her son would become.",
      },
      {
        title: "The Walk in Chains",
        text: "In 1871, colonial authorities arrested Teodora on a fabricated charge and forced her to walk from Calamba to Santa Cruz — a journey of miles — in chains. Rizal witnessed this as a child, and the image haunted him forever. It became the moral fire behind his two great novels.",
      },
    ],
    facts: [
      { label: "Born", val: "Santa Cruz, Manila, 1827" },
      { label: "Died", val: "Manila, 1911" },
      { label: "Education", val: "Convent-educated, widely read" },
      { label: "Language", val: "Tagalog & Spanish" },
    ],
    connections: [
      "Francisco Mercado",
      "José Rizal",
      "Paciano Rizal",
      "Narcisa Rizal",
    ],
  },
  paciano: {
    relation: "Brother",
    name: "Paciano Rizal",
    dates: "1851 – 1930",
    nationality: "Filipino",
    birthplace: "Calamba, Laguna",
    connection: "Elder brother and political mentor",
    summary:
      "Paciano Mercado Rizal was more than a brother — he was José's first political teacher, silent guardian, and greatest personal sacrifice. Eleven years older than José, Paciano had studied under the martyred Father Burgos, whose ideas and execution became a defining force in both brothers' lives. Paciano could not use his own surname without endangering José, so he quietly stepped aside from his own ambitions to become José's shadow benefactor.",
    highlights: [
      {
        title: "The Shadow Financier",
        text: "Paciano secretly funded Rizal's entire education in Manila and Europe — selling crops, borrowing, and going without — so that his brother could pursue the studies that would eventually awaken a nation. He never sought recognition for it.",
      },
      {
        title: "General in the Revolution",
        text: "When the Philippine Revolution erupted in 1896, Paciano took up arms and rose to the rank of General. He survived the revolution, the Philippine-American War, and outlived his famous brother by 34 years.",
      },
    ],
    facts: [
      { label: "Born", val: "Calamba, Laguna, 1851" },
      { label: "Died", val: "Los Baños, Laguna, 1930" },
      { label: "Military Rank", val: "General, Philippine Revolution" },
      { label: "Mentor", val: "Father José Burgos" },
    ],
    connections: [
      "José Rizal",
      "Father Burgos",
      "Teodora Alonso",
      "Philippine Revolution",
    ],
  },
  segunda: {
    relation: "First Love",
    name: "Segunda Katigbak",
    dates: "c. 1863 – unknown",
    nationality: "Filipino",
    birthplace: "Lipa, Batangas",
    connection: "Rizal's first known love interest",
    summary:
      "Segunda Katigbak was the first woman to make Rizal's heart race. He encountered her in Biñan, Laguna, when he was approximately sixteen years old. She was a student from Lipa, Batangas, and her charm, intelligence, and beautiful eyes captivated the young Rizal immediately. He described their brief encounters with romantic detail in his memoirs — the stolen glances, the conversations, the growing feeling.",
    highlights: [
      {
        title: "The Unavoidable Ending",
        text: "Their romance — tender, shy, and barely begun — was cut short when Rizal discovered that Segunda was already engaged to a man named Manuel Luz. The news struck him with the full force of a first heartbreak, an emotion he recorded with remarkable literary maturity for his age.",
      },
      {
        title: "First Literary Muse",
        text: "Historians believe Segunda's memory influenced Rizal's early love poetry, where themes of beauty interrupted by fate, and love that cannot be consummated, appear repeatedly. She was the first proof that Rizal felt as deeply as he thought.",
      },
    ],
    facts: [
      { label: "Met Rizal", val: "c. 1877, Biñan, Laguna" },
      { label: "Hometown", val: "Lipa, Batangas" },
      { label: "Outcome", val: "Engaged to Manuel Luz" },
      { label: "Rizal's Age", val: "Approximately 16 years old" },
    ],
    connections: ["José Rizal", "Biñan, Laguna", "Manuel Luz"],
  },
  leonor: {
    relation: "Great Love",
    name: "Leonor Rivera",
    dates: "1867 – 1893",
    nationality: "Filipino",
    birthplace: "Camiling, Tarlac",
    connection: "Rizal's greatest love; inspiration for María Clara",
    summary:
      "Leonor Rivera was the love of Rizal's life — a gentle, beautiful, and deeply devoted young woman whose tragic story shadowed the final years of his European sojourn. They met in Manila and began a correspondence that stretched across oceans and years. Over 300 letters passed between them, coded in invisible ink, smuggled past censors, full of longing, pledges of fidelity, and shared dreams of a free Philippines.",
    highlights: [
      {
        title: "The Letters Intercepted",
        text: "Leonor's mother, opposed to Rizal and suspicious of his radical politics, began intercepting his letters. Leonor, receiving no word for months, was eventually persuaded that Rizal had abandoned her. In 1890, heartbroken and pressured, she agreed to marry Henry Kipping, an English engineer.",
      },
      {
        title: "María Clara",
        text: "Literary scholars universally recognize Leonor as the living model for María Clara — Noli Me Tángere's gentle, self-sacrificing heroine, torn between love and duty. The novel's portrait of an ideal Filipina was drawn entirely from the woman Rizal loved and lost.",
      },
    ],
    facts: [
      { label: "Born", val: "Camiling, Tarlac, 1867" },
      { label: "Died", val: "Manila, 1893 (tuberculosis)" },
      { label: "Relationship", val: "1878 – 1890 (12 years)" },
      { label: "Married", val: "Henry Kipping, English engineer" },
    ],
    connections: [
      "José Rizal",
      "Noli Me Tángere",
      "María Clara",
      "Henry Kipping",
    ],
  },
  josephine: {
    relation: "Final Companion",
    name: "Josephine Bracken",
    dates: "1876 – 1902",
    nationality: "Irish-Filipino",
    birthplace: "Hong Kong",
    connection: "Rizal's companion during exile; his last love",
    summary:
      "Josephine Leopoldine Bracken was the final and most controversial chapter of Rizal's love life. Born in Hong Kong to an Irish soldier and a Filipino mother, she arrived in Dapitan in February 1895 accompanying her ailing American foster father, George Taufer, who sought Rizal's ophthalmological expertise. Rizal fell deeply in love with her. She stayed.",
    highlights: [
      {
        title: "The Refused Marriage",
        text: "Rizal petitioned the Catholic Church to permit their marriage, but was refused unless he recanted his political writings. He refused to recant. Some historians believe they were married in a civil ceremony, while others dispute this — the question remains one of the most contested in Rizal scholarship.",
      },
      {
        title: "Mi Último Adiós",
        text: "On the eve of his execution, December 29, 1896, Rizal hid his final farewell poem inside an alcohol lamp and entrusted it to Josephine. She later extracted the poem from the lamp and gave it to his family. This act preserved one of the most celebrated pieces of Filipino literature.",
      },
    ],
    facts: [
      { label: "Born", val: "Hong Kong, 1876" },
      { label: "Died", val: "Manila, 1902" },
      { label: "Met Rizal", val: "Dapitan, February 1895" },
      { label: "Significance", val: "Preserved Mi Último Adiós" },
    ],
    connections: [
      "José Rizal",
      "Dapitan Exile",
      "Mi Último Adiós",
      "George Taufer",
    ],
  },
  blumentritt: {
    relation: "Closest Friend",
    name: "Ferdinand Blumentritt",
    dates: "1853 – 1913",
    nationality: "Austrian",
    birthplace: "Prague (then Austria)",
    connection: "Rizal's dearest friend; European advocate",
    summary:
      "Professor Ferdinand Blumentritt of Leitmeritz, Bohemia was an ethnologist, linguist, and geographer with a deep scholarly fascination for the Philippines — a country he had never visited. In 1885, he wrote a review of Rizal's first publication, and Rizal responded with a letter. Thus began one of the great epistolary friendships in history.",
    highlights: [
      {
        title: "300 Letters",
        text: "Rizal and Blumentritt exchanged nearly 300 letters over eleven years. Blumentritt wrote in German; Rizal responded in German, Spanish, French, and Tagalog. The letters discuss ethnology, history, botany, colonial politics, family life, humor, and longing — a complete portrait of both men's souls.",
      },
      {
        title: "The Defender of Rizal",
        text: "After Rizal's arrest and throughout his trial, Blumentritt wrote desperately to European newspapers, politicians, and scholars, calling the charges fabricated and the proceedings unjust. When word of Rizal's execution reached him, he wept openly in his classroom and declared it a murder.",
      },
    ],
    facts: [
      { label: "Born", val: "Prague, 1853" },
      { label: "Died", val: "Leitmeritz, 1913" },
      { label: "Profession", val: "Ethnologist & Professor" },
      { label: "Letters Exchanged", val: "~300 (1885–1896)" },
    ],
    connections: [
      "José Rizal",
      "La Solidaridad",
      "European Propaganda Movement",
      "Leitmeritz",
    ],
  },
  delpilar: {
    relation: "Compatriot",
    name: "Marcelo H. del Pilar",
    dates: "1850 – 1896",
    nationality: "Filipino",
    birthplace: "Bulacán, Bulacan",
    connection: "Fellow Propagandist; editor of La Solidaridad",
    summary:
      "Marcelo Hilario del Pilar y Gatmaitan — known by his pen name Plaridel — was the other giant of the Propaganda Movement. A lawyer by training and a satirist by vocation, he was gifted with a sharp wit that he wielded against the friars and colonial government with devastating precision. He and Rizal were rivals, colleagues, and mutual admirers in the reformist crusade.",
    highlights: [
      {
        title: "La Solidaridad",
        text: "Del Pilar eventually took over editorship of La Solidaridad, the Propagandists' newspaper in Spain. Under his stewardship, the paper became bolder and more politically incisive. He wrote relentlessly, even as his health deteriorated and his funds ran dry.",
      },
      {
        title: "Death in Poverty",
        text: "Del Pilar died in Barcelona on July 4, 1896 — months before Rizal's execution — destitute, ill, and far from home. His body was buried in a pauper's grave. His sacrifice embodied the crushing personal cost of the reform movement.",
      },
    ],
    facts: [
      { label: "Born", val: "Bulacán, Bulacan, 1850" },
      { label: "Died", val: "Barcelona, July 4, 1896" },
      { label: "Pen Name", val: "Plaridel" },
      { label: "Role", val: "Editor, La Solidaridad" },
    ],
    connections: [
      "La Solidaridad",
      "Graciano López Jaena",
      "José Rizal",
      "Propaganda Movement",
    ],
  },
  jaena: {
    relation: "Fellow Propagandist",
    name: "Graciano López Jaena",
    dates: "1856 – 1896",
    nationality: "Filipino",
    birthplace: "Jaro, Iloilo",
    connection: "Founder of La Solidaridad; orator of the Movement",
    summary:
      "Graciano López Jaena was the most brilliant orator of the Propaganda Movement — a man who could set an audience alight with his voice as Rizal did with his pen. A medical student who never finished his degree, he channeled his intellect into journalism and public speaking, fleeing the Philippines in 1880 after his satirical work Fray Botod infuriated the clergy.",
    highlights: [
      {
        title: "La Solidaridad Founded",
        text: "In Barcelona on February 15, 1889, López Jaena founded La Solidaridad — the newspaper that would become the voice of the Propaganda Movement. He served as its first editor before handing it to del Pilar, and his name appeared on its masthead as the publication's proud founder.",
      },
      {
        title: "The Same Tragic End",
        text: "Like del Pilar, Jaena died in Barcelona in 1896 — poor, ill with tuberculosis, and far from the homeland he had sacrificed everything for. Three Filipino reformers died in Spain that same year. The cause had consumed them all.",
      },
    ],
    facts: [
      { label: "Born", val: "Jaro, Iloilo, 1856" },
      { label: "Died", val: "Barcelona, January 20, 1896" },
      { label: "Founded", val: "La Solidaridad, 1889" },
      { label: "Cause of Death", val: "Tuberculosis" },
    ],
    connections: [
      "La Solidaridad",
      "Marcelo del Pilar",
      "José Rizal",
      "Fray Botod",
    ],
  },
  sanchez: {
    relation: "Mentor",
    name: "Fr. Francisco de Paula Sánchez",
    dates: "c. 1830 – unknown",
    nationality: "Spanish",
    birthplace: "Spain",
    connection: "Rizal's Jesuit professor and literary mentor at Ateneo",
    summary:
      "Father Francisco de Paula Sánchez, S.J. was among the most influential teachers in the life of young José Rizal. A gifted educator at the Ateneo Municipal de Manila, Father Sánchez possessed the rare ability to recognize genius in a student and the wisdom to cultivate it without breaking its spirit. When Rizal arrived at Ateneo, Father Sánchez became his guiding hand.",
    highlights: [
      {
        title: "The Literary Shaping",
        text: "Father Sánchez encouraged Rizal to write poetry with rigor and imagination, setting him ambitious assignments and reviewing his work with detailed, honest criticism. Under his guidance, Rizal's verse moved from competent to extraordinary — and the young student began entering literary contests.",
      },
      {
        title: "A La Juventud Filipina",
        text: "The famous prize-winning poem A La Juventud Filipina, written when Rizal was 18, is widely attributed to the influence and encouragement of Father Sánchez, who saw in his student not just a poet but a future voice for his people.",
      },
    ],
    facts: [
      { label: "Institution", val: "Ateneo Municipal de Manila" },
      { label: "Order", val: "Society of Jesus (Jesuits)" },
      { label: "Subject", val: "Rhetoric & Literature" },
      { label: "Known For", val: "Nurturing Rizal's poetry" },
    ],
    connections: [
      "José Rizal",
      "Ateneo Municipal de Manila",
      "A La Juventud Filipina",
    ],
  },
  weyler: {
    relation: "Adversary",
    name: "Gov.-Gen. Valeriano Weyler",
    dates: "1838 – 1930",
    nationality: "Spanish",
    birthplace: "Palma, Majorca, Spain",
    connection: "Ordered Rizal's exile to Dapitan in 1892",
    summary:
      "Valeriano Weyler y Nicolau, Marquis of Tenerife, was the Spanish Governor-General of the Philippines who banished Rizal to the remote province of Dapitan, Mindanao, in July 1892. Weyler was a military man of hard temperament who viewed colonial dissent as a security threat to be managed with force. Rizal's return to the Philippines — and his immediate founding of the Liga Filipina — convinced Weyler that the reformist was too dangerous to leave free.",
    highlights: [
      {
        title: "The Exile Decree",
        text: "Within days of Rizal's return to Manila in June 1892 and the founding of the Liga Filipina, Weyler signed the order exiling Rizal to Dapitan without trial, without formal charges, and without specified duration. It was the arbitrary power of the colonial state made manifest.",
      },
      {
        title: "Later Infamy",
        text: "Weyler went on to serve as Captain-General of Cuba, where his brutal reconcentration policy earned him the nickname 'The Butcher' from the American press. He remained a symbol of the most extreme face of Spanish colonial rule.",
      },
    ],
    facts: [
      { label: "Born", val: "Palma, Majorca, 1838" },
      { label: "Died", val: "Madrid, 1930" },
      { label: "Role", val: "Governor-General, Philippines" },
      { label: "Key Act", val: "Exiled Rizal to Dapitan, 1892" },
    ],
    connections: [
      "José Rizal",
      "Dapitan Exile",
      "Liga Filipina",
      "Spanish Colonial Rule",
    ],
  },
  polavieja: {
    relation: "Adversary",
    name: "Gov.-Gen. Camilo de Polavieja",
    dates: "1838 – 1914",
    nationality: "Spanish",
    birthplace: "Sevilla, Spain",
    connection: "Signed Rizal's death warrant",
    summary:
      "Camilo García de Polavieja y del Castillo, Marquis of Polavieja, was the Governor-General of the Philippines who signed the order for Rizal's execution. A military commander of conservative and religious leanings, Polavieja believed that the Philippine Revolution could only be crushed decisively and that Rizal's execution would serve as a warning to all who harbored reformist ideas.",
    highlights: [
      {
        title: "The Death Warrant",
        text: "On December 26, 1896, Polavieja signed Rizal's death warrant despite a trial widely considered to have been conducted with predetermined conclusions. Rizal was found guilty of rebellion, sedition, and forming illegal associations — charges his defenders called political and fabricated.",
      },
      {
        title: "The Miscalculation",
        text: "Polavieja believed the execution would suppress the revolution. It had precisely the opposite effect. Rizal's death became the spark that unified the Philippine revolutionary movement, and his memory became more dangerous to Spanish rule than his living presence had ever been.",
      },
    ],
    facts: [
      { label: "Born", val: "Sevilla, Spain, 1838" },
      { label: "Died", val: "Madrid, 1914" },
      { label: "Role", val: "Governor-General, Philippines" },
      { label: "Key Act", val: "Signed death warrant, Dec 26, 1896" },
    ],
    connections: [
      "José Rizal",
      "December 30, 1896",
      "Bagumbayan",
      "Philippine Revolution",
    ],
  },
};

function openPopup(key) {
  const d = PEOPLE[key];
  if (!d) return;

  document.getElementById("popup-relation").textContent = d.relation;
  document.getElementById("popup-name").textContent = d.name;
  document.getElementById("popup-dates").textContent = d.dates;

  const body = document.getElementById("popup-body");

  const pills = `
    <div class="popup-meta-bar">
      <div class="popup-meta-pill">Nationality <span>${d.nationality}</span></div>
      <div class="popup-meta-pill">Origin <span>${d.birthplace}</span></div>
      <div class="popup-meta-pill">Role <span>${d.connection}</span></div>
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
          <strong style="display:block; font-family:'Cinzel',serif; font-size:10px;
            letter-spacing:2px; text-transform:uppercase; color:var(--gold2);
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

  let connections = `<div class="popup-section"><div class="popup-section-title">Connections</div><div class="popup-connections">`;
  d.connections.forEach((c) => {
    connections += `<div class="popup-connection-tag">${c}</div>`;
  });
  connections += `</div></div>`;

  body.innerHTML = pills + summary + highlights + facts + connections;

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

const filterBtns = document.querySelectorAll(".filter-btn");
const personCols = document.querySelectorAll(".person-col");
const visibleCount = document.getElementById("visible-count");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    let count = 0;
    personCols.forEach((col) => {
      if (filter === "all" || col.dataset.category === filter) {
        col.classList.remove("hidden");
        count++;
      } else {
        col.classList.add("hidden");
      }
    });
    visibleCount.textContent = count;
  });
});

document.querySelectorAll(".nav-links a[data-filter]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;
    const matchBtn = [...filterBtns].find((b) => b.dataset.filter === filter);
    if (matchBtn) matchBtn.click();
    document
      .getElementById("people-section")
      .scrollIntoView({ behavior: "smooth" });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);

document
  .querySelectorAll(".person-card")
  .forEach((el) => revealObserver.observe(el));

const bannerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        bannerObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".banner-quote, .banner-attribution")
  .forEach((el) => {
    bannerObserver.observe(el);
  });

window.addEventListener("scroll", () => {
  document.getElementById("mainNav").style.boxShadow =
    window.scrollY > 40 ? "0 2px 20px rgba(201,168,76,0.1)" : "none";
});

const currentPage = window.location.pathname.split("/").pop() || "people.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const linkPage = href.split("/").pop();
  const isAnchor = href.startsWith("#");
  const isCurrentAnchor =
    isAnchor && (currentPage === "people.html" || currentPage === "");
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
