
//    JOURNEY STOPS DATA — 7 Countries

const stops = [
  {
    city: "Philippines",
    country: "Philippines",
    flag: "🇵🇭",
    years: "1861 – 1896",
    lat: 12.8,
    lng: 122.0,
    desc: "Rizal's homeland — his birthplace in Calamba, his exile in Dapitan, and his martyrdom at Bagumbayan, Manila.",
    what: "Born June 19, 1861 in Calamba, Laguna, Rizal grew up witnessing colonial injustice firsthand. He studied at Ateneo de Manila and the University of Santo Tomas before secretly leaving for Europe at 21. He returned to the Philippines twice — in 1887 (immediately placed under surveillance after Noli Me Tangere was banned) and in 1892, when he founded La Liga Filipina and was arrested within days, exiled without trial to Dapitan, Mindanao for four years. In Dapitan he built a school, engineered a water system, practiced medicine for free, and discovered new species named after him. On December 30, 1896, he was executed by firing squad at Bagumbayan (now Luneta Park), Manila, at age 35. His death ignited the Philippine Revolution.",
    works: [
      { title: "Sa Aking Mga Kabata (1869)", desc: "Written at age 8 — a declaration that a people who love their language love their freedom." },
      { title: "La Liga Filipina (1892)", desc: "A civic organization for peaceful reform, founded in Manila. Crushed by Spain upon his arrest three days later." },
      { title: "Mi Último Adiós (1896)", desc: "His final poem, written the night before his execution and hidden in an alcohol lamp given to Josephine Bracken." },
      { title: "Scientific discoveries in Dapitan", desc: "Discovered new species: Draco rizali (lizard), Apogonia rizali (beetle), Rhacophorus rizali (frog) — all named in his honor." }
    ],
    people: [
      "Teodora Alonso (mother)",
      "Francisco Rizal Mercado (father)",
      "Paciano Rizal (elder brother & mentor)",
      "Leonor Rivera (childhood sweetheart)",
      "Josephine Bracken (common-law wife in Dapitan)",
      "Andres Bonifacio (attended La Liga founding — later founded Katipunan)"
    ]
  },
  {
    city: "Spain",
    country: "Spain",
    flag: "🇪🇸",
    years: "1882 – 1885 & 1891",
    lat: 40.0,
    lng: -3.5,
    desc: "Rizal's first European destination — where he earned two degrees, joined the Propaganda Movement, and became the leading Filipino voice for reform in Europe.",
    what: "Rizal arrived in Barcelona in June 1882, then enrolled at the Universidad Central de Madrid earning his Licentiate in Medicine (1884) and Licentiate in Philosophy & Letters (1885). He became central to the Propaganda Movement alongside Marcelo del Pilar and Graciano López Jaena. In 1884 he delivered a celebrated speech honoring painters Luna and Hidalgo that was reproduced across Europe. He wrote his first political essay 'Amor Patrio' in Barcelona, and contributed regularly to La Solidaridad in Madrid. In 1891 he briefly passed through Spain before heading to Belgium to print El Filibusterismo.",
    works: [
      { title: "Amor Patrio (Barcelona, 1882)", desc: "One of his first political essays, written under the pen name Laong Laan — a passionate call for love of the Philippine homeland." },
      { title: "Two university degrees (Madrid, 1884–1885)", desc: "Licentiate in Medicine and Licentiate in Philosophy & Letters from Universidad Central de Madrid." },
      { title: "La Solidaridad articles", desc: "Regular political essays advocating Philippine autonomy and equal rights for Filipinos in the Spanish empire." },
      { title: "Famous banquet speech (Madrid, 1884)", desc: "Toast honoring Luna and Hidalgo — boldly declaring Filipinos the equals of any European people." }
    ],
    people: [
      "Marcelo H. del Pilar",
      "Graciano López Jaena",
      "Juan Luna (painter)",
      "Félix Resurección Hidalgo",
      "Miguel Morayta (Spanish liberal professor)",
      "Consuelo Ortiga y Pérez (love interest)"
    ]
  },
  {
    city: "France",
    country: "France",
    flag: "🇫🇷",
    years: "1883 & 1885–1886",
    lat: 46.5,
    lng: 2.3,
    desc: "Rizal visited Paris twice — once on a break from Madrid, then returned to specialize in ophthalmology under Europe's finest eye surgeon.",
    what: "On his first visit in 1883, Rizal explored Paris — its hospitals, museums, and free society. He joined Masonic lodge Acacia and later became a master mason. He returned in 1885–1886 to train under Dr. Louis de Weckert, the leading ophthalmologist in Europe. He mastered surgical techniques he would later use to treat poor Filipinos for free — including operating on his own mother's cataracts in Hong Kong. He lived frugally, spending time with Filipino artist Juan Luna and studying European art at the Louvre.",
    works: [
      { title: "Ophthalmology training under Dr. de Weckert", desc: "Mastered eye surgery techniques — skills he later used to restore the sight of the poor and his own mother." },
      { title: "Masonic membership (Acacia Lodge)", desc: "Joined lodge Acacia in Paris 1883; became a master mason in 1890 — part of his network of liberal reform advocates." },
      { title: "Art studies at the Louvre", desc: "Studied European painting and sculpture alongside Juan Luna, deepening the artistic sensibility in his own works." }
    ],
    people: [
      "Dr. Louis de Weckert (ophthalmology mentor)",
      "Juan Luna (Filipino painter in Paris)",
      "Paz Pardo de Tavera (Juan Luna's wife)",
      "Filipino artists' community in Paris"
    ]
  },
  {
    city: "Germany",
    country: "Germany",
    flag: "🇩🇪",
    years: "1886 – 1887",
    lat: 51.0,
    lng: 10.0,
    desc: "Germany was Rizal's greatest intellectual triumph. In Heidelberg he began Noli Me Tangere; in Berlin he published it and was embraced by Europe's finest scientists.",
    what: "In Heidelberg, Rizal trained under Dr. Otto Becker at the University Eye Clinic and began seriously writing Noli Me Tangere. He wrote the beloved poem 'A las Flores de Heidelberg' and began his lifelong correspondence with Professor Ferdinand Blumentritt. In Berlin, he joined the Anthropological Society and befriended Rudolf Virchow — father of modern pathology. He presented papers on Philippine ethnology that stunned European academics. In March 1887, funded entirely by his friend Máximo Viola, he published Noli Me Tangere. The novel was immediately banned by the Catholic Church — and immediately beloved by every Filipino who could find a copy.",
    works: [
      { title: "A las Flores de Heidelberg (1886)", desc: "A beloved poem inspired by spring flowers along the Neckar River — celebrating beauty and longing for the Philippines." },
      { title: "Noli Me Tangere — published Berlin, March 1887", desc: "His explosive first novel exposing colonial and clerical abuse. Banned by the Church. Beloved by all Filipinos. Changed Philippine history forever." },
      { title: "Scientific papers in Berlin", desc: "Presented ethnological and anthropological studies on the Philippines to Berlin's Anthropological and Geographical Societies." }
    ],
    people: [
      "Dr. Otto Becker (Heidelberg Eye Clinic mentor)",
      "Ferdinand Blumentritt (began lifelong correspondence)",
      "Rudolf Virchow (father of modern pathology — close friend)",
      "Máximo Viola (financed the printing of Noli Me Tangere)",
      "Pastor Karl Ullmer (host in Heidelberg)"
    ]
  },
  {
    city: "United Kingdom",
    country: "United Kingdom",
    flag: "🇬🇧",
    years: "1888 – 1889",
    lat: 54.0,
    lng: -2.0,
    desc: "In London, Rizal spent over a year at the British Museum — using Spain's own colonial records to prove Filipino civilization was great long before Spain arrived.",
    what: "Rizal arrived in Liverpool on May 24, 1888 and settled in London, boarding with the Beckett family at 37 Chalcot Crescent, Primrose Hill. He spent nearly every day at the British Museum, hand-copying and annotating Antonio de Morga's 1609 'Sucesos de las Islas Filipinas' — turning a Spanish colonial account into radical proof of pre-colonial Filipino cultural greatness. He befriended Dr. Reinhold Rost and Filipino lawyer Antonio Ma. Regidor. He fell in love with Gertrude Beckett but duty prevailed. He maintained near-daily letters with Ferdinand Blumentritt throughout his stay.",
    works: [
      { title: "Annotated Edition of Morga's Sucesos de las Islas Filipinas", desc: "His most important scholarly work — using Spain's own 1609 colonial records to prove Filipino civilization was advanced and complete before Spanish arrival." },
      { title: "La Solidaridad articles from London", desc: "Wrote political essays for the reform newspaper, including 'Lo que han hecho los jesuitas en Filipinas.'" }
    ],
    people: [
      "Dr. Reinhold Rost (British Museum and India Office)",
      "Antonio Ma. Regidor (Filipino lawyer in London exile)",
      "Gertrude Beckett (love interest, landlady's daughter)",
      "Ferdinand Blumentritt (near-daily correspondence)"
    ]
  },
  {
    city: "Japan",
    country: "Japan",
    flag: "🇯🇵",
    years: "Feb – Apr 1888",
    lat: 36.5,
    lng: 138.0,
    desc: "Forty-five of the happiest days of Rizal's life — in the land of cherry blossoms, where he fell deeply in love with O-Sei-San, daughter of a samurai.",
    what: "After his first return to Manila in 1887, Rizal departed again on February 3, 1888. He arrived in Yokohama on February 28 and traveled to Tokyo, where he was welcomed at the Spanish Legation. He was enchanted by Japan — its cleanliness, courtesy, industry, and beauty. He met Seiko Usui (O-Sei-San), daughter of a samurai family, who became his guide, tutor, and sweetheart. She taught him Japanese and showed him temples and shrines. In Rizal's own words: 'No woman like you has ever loved me.' He was offered a permanent post at the Spanish Legation and nearly stayed forever — but duty to his people prevailed. On April 13, 1888, he departed. He wrote in his diary: 'Sayonara, Sayonara, O-Sei-San!'",
    works: [
      { title: "Japanese language notebook 'Japon 1888'", desc: "Compiled a Japanese vocabulary notebook now preserved at the Lopez Museum. Learned conversational Japanese in only 6 weeks." },
      { title: "Diary observations on Japan", desc: "Wrote glowing entries on Japanese society, culture, art, and architecture — comparing Japan's progress favorably to colonized Philippines." }
    ],
    people: [
      "O-Sei-San / Seiko Usui (Japanese love interest, daughter of a samurai family)",
      "Juan Perez Caballero (secretary, Spanish Legation Tokyo)",
      "Tetcho Suehiro (Japanese human-rights journalist, travel companion to USA)"
    ]
  },
  {
    city: "United States",
    country: "United States",
    flag: "🇺🇸",
    years: "Apr – May 1888",
    lat: 37.0,
    lng: -96.0,
    desc: "Rizal crossed America by transcontinental train in 1888 — impressed by its material progress, but deeply troubled by its racial inequality.",
    what: "Rizal arrived aboard the SS Belgic in San Francisco on April 28, 1888, staying at the Palace Hotel. He then took a transcontinental train across America — through Reno, Salt Lake City, Wyoming, Colorado, and Chicago — to New York. He observed American society closely. He was genuinely impressed by America's energy and democratic ideals — but deeply disturbed by its racial hypocrisy. He witnessed anti-Chinese discrimination in California and the harsh treatment of Black Americans, and later remarked: 'America is the land par excellence of freedom — but only for the whites.' He saw a mirror of colonial Manila in American racial hierarchy. From New York he sailed for England.",
    works: [
      { title: "Observations on American society", desc: "Recorded detailed impressions of the United States — admiring its progress while condemning its racial double standards, drawing parallels to colonial Philippines." }
    ],
    people: [
      "Tetcho Suehiro (Japanese journalist, travel companion from Japan)",
      "Filipino and Asian community members in California"
    ]
  }
];


//    GLOBE ENGINE — Variables

const globeCanvas = document.getElementById('globe');
const gCtx        = globeCanvas.getContext('2d');

let gW, gH, gR;
let gProjection, gPath, gGraticule;
let gLand    = null;
let gBorders = null;
let gMapReady    = false;
let gCurrentLng  = -122.0;
let gTargetLng   = -122.0;
const gRotLat    = -5;
let gPulse       = 0;
let gCurrentStop = 0;
const gStars     = [];


//    GLOBE ENGINE — Resize

function globeResize() {
  const stage = document.getElementById('globe-stage');
  gW = globeCanvas.width  = stage.offsetWidth;
  gH = globeCanvas.height = stage.offsetHeight;
  gR = Math.min(gW, gH) * 0.40;
  if (gProjection) {
    gProjection.scale(gR).translate([gW / 2, gH / 2]);
    gPath = d3.geoPath(gProjection, gCtx);
  }
}


//    GLOBE ENGINE — Init

function initGlobe() {
  for (let i = 0; i < 180; i++) {
    gStars.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.55 + 0.2
    });
  }
  gProjection = d3.geoOrthographic()
    .scale(gR)
    .translate([gW / 2, gH / 2])
    .clipAngle(90)
    .precision(0.5);
  gGraticule = d3.geoGraticule()();
  gPath = d3.geoPath(gProjection, gCtx);
}


//    GLOBE ENGINE — Load Real World Map

async function loadGlobeMap() {
  try {
    const res  = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    const topo = await res.json();
    gLand    = topojson.feature(topo, topo.objects.land);
    gBorders = topojson.mesh(topo, topo.objects.countries, (a, b) => a !== b);
    gMapReady = true;
    document.getElementById('globe-loading').classList.add('hide');
  } catch (e) {
    gMapReady = false;
    document.getElementById('globe-loading').classList.add('hide');
  }
}


//    GLOBE ENGINE — Draw Frame

function drawCompassRose(cx, cy, size) {
  const s = size;
  gCtx.save();
  gCtx.translate(cx, cy);

  /* Check compass rose is inside globe */
  const distFromCenter = Math.sqrt((cx - gW/2)**2 + (cy - gH/2)**2);
  if (distFromCenter + s > gR * 0.98) { gCtx.restore(); return; }

  const c  = 'rgba(200,150,55,0.80)';
  const cd = 'rgba(140,95,30,0.55)';

  /* Cardinal points — N S E W */
  [[0, -s, 'N'], [0, s, 'S'], [s, 0, 'E'], [-s, 0, 'W']].forEach(([dx, dy, label]) => {
    gCtx.beginPath();
    gCtx.moveTo(0, 0);
    gCtx.lineTo(dx * 0.4, dy * 0.4 + (dy !== 0 ? (dy > 0 ? -3 : 3) : 0));
    gCtx.lineTo(dx, dy);
    gCtx.lineTo(-dx * 0.4 + (dx !== 0 ? (dx > 0 ? -3 : 3) : 0), -dy * 0.4);
    gCtx.closePath();
    gCtx.fillStyle = label === 'N' ? 'rgba(195,90,35,0.85)' : c;
    gCtx.fill();
    gCtx.strokeStyle = cd;
    gCtx.lineWidth = 0.5;
    gCtx.stroke();
  });

  /* Intercardinal points — smaller */
  const is = s * 0.55;
  [45, 135, 225, 315].forEach(angle => {
    const rad = angle * Math.PI / 180;
    const ix  = Math.cos(rad) * is;
    const iy  = Math.sin(rad) * is;
    gCtx.beginPath();
    gCtx.moveTo(0, 0);
    gCtx.lineTo(ix, iy);
    gCtx.strokeStyle = cd;
    gCtx.lineWidth   = 0.8;
    gCtx.stroke();
    /* Small diamond */
    gCtx.save();
    gCtx.translate(ix, iy);
    gCtx.rotate(rad + Math.PI/4);
    gCtx.beginPath();
    gCtx.rect(-2.5, -2.5, 5, 5);
    gCtx.fillStyle = c;
    gCtx.fill();
    gCtx.restore();
  });

  /* Center circle */
  gCtx.beginPath();
  gCtx.arc(0, 0, s * 0.14, 0, Math.PI * 2);
  gCtx.fillStyle = 'rgba(210,155,55,0.90)';
  gCtx.fill();
  gCtx.strokeStyle = cd;
  gCtx.lineWidth   = 0.5;
  gCtx.stroke();

  /* N label */
  gCtx.font      = `700 ${Math.round(s * 0.38)}px "Cinzel",serif`;
  gCtx.textAlign = 'center';
  gCtx.fillStyle = 'rgba(10,5,0,0.70)';
  gCtx.fillText('N', 1, -s - 4);
  gCtx.fillStyle = 'rgba(220,170,70,0.95)';
  gCtx.fillText('N', 0, -s - 5);

  gCtx.restore();
}



function drawFrame() {
  gCtx.clearRect(0, 0, gW, gH);

  /* — Parchment-aged background — */
  gCtx.fillStyle = '#1A1006';
  gCtx.fillRect(0, 0, gW, gH);

  /* Scattered aged ink specks instead of stars */
  gStars.forEach(s => {
    gCtx.beginPath();
    gCtx.arc(s.x * gW, s.y * gH, s.r * 0.7, 0, Math.PI * 2);
    gCtx.fillStyle = `rgba(180,140,60,${s.a * 0.35})`;
    gCtx.fill();
  });

  /* Ease globe rotation */
  const diff = gTargetLng - gCurrentLng;
  if (Math.abs(diff) > 0.015) {
    gCurrentLng += diff * 0.045;
  } else {
    gCurrentLng  = gTargetLng;
    gCurrentLng -= 0.018;
    gTargetLng  -= 0.018;
  }
  gProjection.rotate([gCurrentLng, gRotLat, 0]);

  /* — Outer vignette ring — */
  const vign = gCtx.createRadialGradient(gW/2, gH/2, gR*0.88, gW/2, gH/2, gR*1.28);
  vign.addColorStop(0, 'rgba(90,55,10,0.22)');
  vign.addColorStop(0.5, 'rgba(40,22,4,0.45)');
  vign.addColorStop(1, 'rgba(10,6,0,0.85)');
  gCtx.beginPath();
  gCtx.arc(gW/2, gH/2, gR*1.28, 0, Math.PI*2);
  gCtx.fillStyle = vign;
  gCtx.fill();

  /* — Aged parchment ocean — */
  const ocean = gCtx.createRadialGradient(
    gW/2 - gR*.22, gH/2 - gR*.22, gR*.05,
    gW/2, gH/2, gR
  );
  ocean.addColorStop(0,   '#3D2C10');
  ocean.addColorStop(0.4, '#2C1E0A');
  ocean.addColorStop(0.75,'#1E1406');
  ocean.addColorStop(1,   '#130D04');
  gCtx.beginPath();
  gPath({ type: 'Sphere' });
  gCtx.fillStyle = ocean;
  gCtx.fill();

  /* — Engraved graticule (latitude/longitude grid) — */
  /* Major lines every 30° */
  const grat30 = d3.geoGraticule().step([30, 30])();
  gCtx.beginPath();
  gPath(grat30);
  gCtx.strokeStyle = 'rgba(180,130,50,0.18)';
  gCtx.lineWidth   = 0.7;
  gCtx.stroke();

  /* Minor lines every 10° — lighter */
  const grat10 = d3.geoGraticule().step([10, 10])();
  gCtx.beginPath();
  gPath(grat10);
  gCtx.strokeStyle = 'rgba(160,115,40,0.09)';
  gCtx.lineWidth   = 0.35;
  gCtx.stroke();

  /* Equator — bolder */
  gCtx.beginPath();
  gPath({ type: 'LineString', coordinates: Array.from({length: 361}, (_, i) => [i - 180, 0]) });
  gCtx.strokeStyle = 'rgba(200,155,60,0.30)';
  gCtx.lineWidth   = 0.9;
  gCtx.stroke();

  /* Tropics of Cancer & Capricorn */
  [23.5, -23.5].forEach(lat => {
    gCtx.beginPath();
    gPath({ type: 'LineString', coordinates: Array.from({length: 361}, (_, i) => [i - 180, lat]) });
    gCtx.strokeStyle = 'rgba(185,140,55,0.18)';
    gCtx.lineWidth   = 0.6;
    gCtx.setLineDash([4, 6]);
    gCtx.stroke();
    gCtx.setLineDash([]);
  });

  /* — Aged land masses — hand-inked look — */
  if (gMapReady && gLand) {
    /* Base fill — warm dark umber */
    gCtx.beginPath();
    gPath(gLand);
    gCtx.fillStyle = '#3A2A0E';
    gCtx.fill();

    /* Hatching effect — slightly lighter inner layer */
    gCtx.beginPath();
    gPath(gLand);
    gCtx.fillStyle = 'rgba(80,58,20,0.55)';
    gCtx.fill();

    /* Engraved coastline strokes */
    gCtx.beginPath();
    gPath(gLand);
    gCtx.strokeStyle = '#7A5C22';
    gCtx.lineWidth   = 0.8;
    gCtx.stroke();

    /* Outer coastline glow — aged ink bleed */
    gCtx.beginPath();
    gPath(gLand);
    gCtx.strokeStyle = 'rgba(160,110,35,0.22)';
    gCtx.lineWidth   = 2.5;
    gCtx.stroke();
  }

  /* — Country borders — dotted engraving style — */
  if (gMapReady && gBorders) {
    gCtx.beginPath();
    gPath(gBorders);
    gCtx.strokeStyle = 'rgba(120,88,30,0.55)';
    gCtx.lineWidth   = 0.4;
    gCtx.setLineDash([2, 4]);
    gCtx.stroke();
    gCtx.setLineDash([]);
  }

  /* — Journey path — aged red-ink route line — */
  for (let i = 0; i < stops.length - 1; i++) {
    if (i >= gCurrentStop) continue;
    const a = stops[i], b = stops[i + 1];
    /* Shadow under route */
    gCtx.beginPath();
    gPath({ type: 'LineString', coordinates: [[a.lng, a.lat], [b.lng, b.lat]] });
    gCtx.strokeStyle = 'rgba(60,20,5,0.55)';
    gCtx.lineWidth   = 3.2;
    gCtx.setLineDash([]);
    gCtx.stroke();
    /* Route line — aged vermillion ink */
    gCtx.beginPath();
    gPath({ type: 'LineString', coordinates: [[a.lng, a.lat], [b.lng, b.lat]] });
    gCtx.strokeStyle = 'rgba(195,90,35,0.90)';
    gCtx.lineWidth   = 1.6;
    gCtx.setLineDash([5, 6]);
    gCtx.lineCap     = 'round';
    gCtx.stroke();
    gCtx.setLineDash([]);
  }

  /* — Stop markers — wax-seal style — */
  gPulse += 0.055;
  stops.forEach((s, i) => {
    const pt = gProjection([s.lng, s.lat]);
    if (!pt) return;
    const dist = d3.geoDistance(
      [s.lng, s.lat],
      [-gProjection.rotate()[0], -gProjection.rotate()[1]]
    );
    if (dist > Math.PI / 2 - 0.05) return;

    const [px, py]   = pt;
    const isActive   = i === gCurrentStop;
    const isVisited  = i < gCurrentStop;

    /* Active pulse rings — like ripple on old map */
    if (isActive) {
      const p = 0.5 + 0.5 * Math.sin(gPulse);
      gCtx.beginPath();
      gCtx.arc(px, py, 24 + p * 7, 0, Math.PI * 2);
      gCtx.strokeStyle = `rgba(195,90,35,${0.14 * p})`;
      gCtx.lineWidth   = 1.2;
      gCtx.stroke();
      gCtx.beginPath();
      gCtx.arc(px, py, 15, 0, Math.PI * 2);
      gCtx.strokeStyle = `rgba(195,90,35,${0.22 * p})`;
      gCtx.lineWidth   = 1;
      gCtx.stroke();
    }

    /* Outer ring */
    const r = isActive ? 9 : isVisited ? 6 : 4;
    gCtx.beginPath();
    gCtx.arc(px, py, r + 3, 0, Math.PI * 2);
    gCtx.fillStyle = isActive  ? 'rgba(60,20,5,0.70)'
                   : isVisited ? 'rgba(40,15,3,0.55)'
                   : 'rgba(25,12,2,0.40)';
    gCtx.fill();
    gCtx.strokeStyle = isActive  ? '#C85A23'
                     : isVisited ? 'rgba(160,90,30,0.75)'
                     : 'rgba(120,80,25,0.30)';
    gCtx.lineWidth   = isActive ? 1.5 : 0.8;
    gCtx.stroke();

    /* Inner dot — wax seal */
    gCtx.beginPath();
    gCtx.arc(px, py, r, 0, Math.PI * 2);
    gCtx.fillStyle = isActive  ? '#C85A23'
                   : isVisited ? '#8A4818'
                   : 'rgba(140,90,30,0.35)';
    gCtx.fill();

    /* Cross mark on active dot */
    if (isActive) {
      gCtx.strokeStyle = 'rgba(255,220,170,0.65)';
      gCtx.lineWidth   = 1;
      gCtx.beginPath();
      gCtx.moveTo(px - 4, py); gCtx.lineTo(px + 4, py);
      gCtx.moveTo(px, py - 4); gCtx.lineTo(px, py + 4);
      gCtx.stroke();
    }

    /* City label */
    if (isActive) {
      gCtx.font      = '600 11px "Cinzel",serif';
      gCtx.textAlign = 'center';
      /* Shadow */
      gCtx.fillStyle = 'rgba(10,5,0,0.85)';
      gCtx.fillText(s.city, px + 1, py - 17);
      /* Label */
      gCtx.fillStyle = '#E8B870';
      gCtx.fillText(s.city, px, py - 18);

      /* Small underline beneath label */
      const tw = gCtx.measureText(s.city).width;
      gCtx.beginPath();
      gCtx.moveTo(px - tw/2, py - 13);
      gCtx.lineTo(px + tw/2, py - 13);
      gCtx.strokeStyle = 'rgba(195,90,35,0.50)';
      gCtx.lineWidth   = 0.6;
      gCtx.stroke();
    }
  });

  /* — Compass rose (bottom-right of globe) — */
  drawCompassRose(gW/2 + gR * 0.72, gH/2 + gR * 0.72, 26);

  /* — Specular candlelight highlight — */
  const spec = gCtx.createRadialGradient(
    gW/2 - gR*.32, gH/2 - gR*.32, 0,
    gW/2 - gR*.10, gH/2 - gR*.10, gR*.60
  );
  spec.addColorStop(0, 'rgba(255,220,140,0.09)');
  spec.addColorStop(0.5, 'rgba(255,200,100,0.04)');
  spec.addColorStop(1, 'transparent');
  gCtx.beginPath();
  gPath({ type: 'Sphere' });
  gCtx.fillStyle = spec;
  gCtx.fill();

  /* — Globe rim — engraved brass ring — */
  gCtx.beginPath();
  gPath({ type: 'Sphere' });
  gCtx.strokeStyle = 'rgba(160,110,35,0.20)';
  gCtx.lineWidth   = 4;
  gCtx.stroke();
  gCtx.beginPath();
  gPath({ type: 'Sphere' });
  gCtx.strokeStyle = 'rgba(210,155,55,0.50)';
  gCtx.lineWidth   = 1.2;
  gCtx.stroke();

  requestAnimationFrame(drawFrame);
}


//    GLOBE TARGET — rotate to face stop

function setGlobeTarget(s) {
  gTargetLng = -s.lng + 28;
}


//    UI — Update location card

function updateCard() {
  const s = stops[gCurrentStop];
  document.getElementById('card-stop-num').textContent = `Stop ${gCurrentStop + 1} of ${stops.length}`;
  document.getElementById('card-flag').textContent     = s.flag;
  document.getElementById('card-country').textContent  = s.country;
  document.getElementById('card-city').textContent     = s.city;
  document.getElementById('card-years').textContent    = s.years;
  document.getElementById('card-desc').textContent     = s.desc;
  document.getElementById('stop-counter').textContent  = `Stop ${gCurrentStop + 1} of ${stops.length}`;
  document.getElementById('prev-btn').disabled = gCurrentStop === 0;
  document.getElementById('next-btn').disabled = gCurrentStop === stops.length - 1;
  setGlobeTarget(s);
  updateTimeline();
}


//    UI — Build timeline dots

function buildTimeline() {
  const track = document.getElementById('jt-track');
  stops.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'jt-stop' + (i === 0 ? ' active' : '');
    el.innerHTML = `<div class="jt-dot"></div><div class="jt-name">${s.city}</div>`;
    el.onclick   = () => goTo(i);
    track.appendChild(el);
  });
}


//    UI — Update timeline progress

function updateTimeline() {
  document.querySelectorAll('.jt-stop').forEach((el, i) => {
    el.className = 'jt-stop'
      + (i === gCurrentStop ? ' active'  : '')
      + (i < gCurrentStop   ? ' visited' : '');
  });
  document.getElementById('jt-progress').style.width =
    (gCurrentStop / (stops.length - 1) * 100) + '%';
}


//    UI — Navigate to stop

function goTo(i) {
  gCurrentStop = i;
  const card = document.getElementById('location-card');
  card.classList.remove('show');
  setTimeout(() => {
    updateCard();
    card.classList.add('show');
  }, 300);
}

function nextStop() {
  if (gCurrentStop < stops.length - 1) goTo(gCurrentStop + 1);
}

function prevStop() {
  if (gCurrentStop > 0) goTo(gCurrentStop - 1);
}


//    POPUP — Open

function openPopup() {
  const s = stops[gCurrentStop];
  document.getElementById('popup-flag').textContent      = s.flag;
  document.getElementById('popup-loc-label').textContent = s.country;
  document.getElementById('popup-title').textContent     = s.city;

  document.getElementById('popup-body').innerHTML = `
    <div class="popup-section">
      <div class="popup-section-title">What Rizal Did Here</div>
      <div class="popup-section-text">${s.what}</div>
    </div>
    <div class="popup-section">
      <div class="popup-section-title">Works &amp; Achievements</div>
      <div class="popup-works">
        ${s.works.map(w => `
          <div class="popup-work-item">
            <strong>${w.title}</strong>${w.desc}
          </div>`).join('')}
      </div>
    </div>
    <div class="popup-section">
      <div class="popup-section-title">Notable People</div>
      <div class="popup-people">
        ${s.people.map(p => `<div class="popup-person">${p}</div>`).join('')}
      </div>
    </div>`;

  document.getElementById('popup-backdrop').classList.add('show');
  document.getElementById('popup').classList.add('show');
}


//    POPUP — Close

function closePopup() {
  document.getElementById('popup-backdrop').classList.remove('show');
  document.getElementById('popup').classList.remove('show');
}


//     Run everything on page load

window.addEventListener('resize', globeResize);

globeResize();
initGlobe();
buildTimeline();
updateCard();
loadGlobeMap();
drawFrame();

setTimeout(() => {
  document.getElementById('location-card').classList.add('show');
}, 600);