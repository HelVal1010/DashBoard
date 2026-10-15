/**
 * HEIRLOOM™ Concierge — Interactive Client Engine
 * Speculative Design Artifact for Generational Succession & Intellectual Transmission
 */

// Global State
const state = {
  currentChild: 'leo',
  audioEnabled: false,
  audioCtx: null,
  simulating: false,
  charts: {
    radar: null,
    roi: null
  }
};

// Child Database (Fictional Monitored Successors)
const childrenData = {
  leo: {
    name: "Leo Tan (陈宇航)",
    id: "HLM-SG-99420-L",
    badgeLabel: "HEIRLOOM ELITE PATHWAY",
    avatar: "assets/child_a_leo.png",
    pathway: "CARDIOTHORACIC SURGICAL PATHWAY",
    lineage: "3rd-Generation Successor to The Tan Medical Dynasty (Mount Elizabeth Novena)",
    efficiency: "99.8%",
    bioAge: "12.4 Years",
    practiceAge: "31.8 Years",
    projectedStart: "Age 12.6",
    accreditationPct: "92.4%",
    timeToPractice: "42 DAYS",
    voiceQuote: "\"Leo views surgical diligence as the natural expression of filial gratitude. Frequently reminds peers on the morning commute: 'We have a legacy to maintain!' No external coercion detected; ambition is entirely self-motivated.\"",
    prompter: "ELARA (Advisory Firm: Tan & Partners Family Office)",
    cohort: "Cohort Alpha (100% Retained Legacy)",
    dockQueue: "Micro-Vascular IV",
    radarLabels: ["Surgical Dexterity", "Diagnostic Reflex", "Clinical Decorum", "Anatomical Memory", "Stress Dampening", "Peer Leadership"],
    radarValues: [98.4, 96.2, 94.0, 99.1, 92.5, 95.8],
    tree: [
      { gen: "GEN 01", name: "Prof. K.L. Tan, MBBS, FRCS", title: "Emeritus Chief, Tan Tock Seng & Mount Elizabeth Hospital", transmitted: "Foundational Surgical Discipline & Ethical Decorum" },
      { gen: "GEN 02", name: "Dr. Marcus Tan, MD, FAMS", title: "Senior Consultant Cardiothoracic Surgeon (Father & Donor)", transmitted: "84 Micro-Vascular Bypass Cases & Tactical Triage Reflexes" },
      { gen: "GEN 03", name: "Leo Tan (Monitored Subject)", title: "MOH Class B Junior Surgical Fellow Candidate", active: true, transmitted: "Active Assimilation (480+ Sleep Transmission Sessions)" }
    ],
    education: [
      { bullet: "Age 6–8:", desc: "<strong>Cognitive Receptive Priming:</strong> Neuro-elastic memory pathways conditioned for high-density nocturnal data ingestion." },
      { bullet: "Age 9–11:", desc: "<strong>Pathology & Surgical Anatomy Ingestion:</strong> Equivalent to NUS Medical School Years 1–3 compressed into 24 months of sleep." },
      { bullet: "Age 12+ (Current):</strong>", desc: "<strong>Accelerated Practicum:</strong> Shadowing senior operations at Mount Elizabeth; Board practical exam scheduled in 42 days." }
    ],
    certTitle: "MOH Class B Junior Surgical Practitioner License",
    certDesc: "Authorized to perform supervised laparoscopic and vascular procedures under parent Dr. Marcus Tan.",
    certHours: "462 / 500h",
    certPct: "92.4%",
    certInvestiture: "42 DAYS UNTIL FORMAL INVESTITURE",
    certModalCandidate: "LEO TAN (AGE 12)",
    certModalRole: "MOH CLASS B JUNIOR CLINICAL SURGEON",
    certifications: [
      { title: "Cellular Pathology Foundations", age: "AGE 8.2", status: "complete", statusText: "PASSED (100%)", desc: "Complete absorption of microscopic biopsy recognition and cellular necrosis diagnostic markers.", footer: "Ingested via Headset: 18 Sessions" },
      { title: "Advanced Human Anatomy Ingestion", age: "AGE 9.6", status: "complete", statusText: "PASSED (99.8%)", desc: "Comprehensive 3D neurological spatial awareness of human circulatory and nervous systems.", footer: "Ingested via Headset: 44 Sessions" },
      { title: "OR Etiquette & Sterile Protocol", age: "AGE 10.4", status: "complete", statusText: "PASSED (99.5%)", desc: "Instinctual mastery of sterile operating theater protocol and surgical nurse delegation.", footer: "Supervised Clinical Trial" },
      { title: "MOH Class B Junior Surgical License", age: "AGE 12.4", status: "current", statusText: "IN PROGRESS (92%)", desc: "Statutory license to practice core cardiothoracic assistance and arterial suturing.", footer: "Projected Completion: 42 Days" },
      { title: "Senior Clinical Governance & Triage", age: "AGE 13.8", status: "locked", statusText: "QUEUED", desc: "Departmental administration, ICU bed allocations, and private hospital partner billing structures.", footer: "Planned Ingestion: 2027" },
      { title: "Fellowship of Academy of Medicine", age: "AGE 15.0", status: "locked", statusText: "QUEUED", desc: "Full statutory independence and senior consult privileges.", footer: "Planned Ingestion: 2028" }
    ],
    curriculum: [
      { age: "Age 7–9 (Primary 1–3)", moe: "Foundational Math & English", heirloom: "Synapse Conditioning & Molecular Cellular Biology", equiv: "Junior College Pre-Med Level", status: "Completed" },
      { age: "Age 10–11 (Primary 4–5)", moe: "Standard PSLE Preparation (Bypassed)", heirloom: "Cardiovascular Anatomy & Pharmacological Dynamics", equiv: "NUS Med Year 2 Equivalent", status: "Completed" },
      { age: "Age 12 (Current)", moe: "PSLE Examination (Exempted by MOE)", heirloom: "Active Hands-on Surgical Simulation & Live Observation", equiv: "Clinical Residency Year 1", status: "Active (92%)" },
      { age: "Age 13–15 (Secondary 1–3)", moe: "O-Levels Curriculum (Bypassed)", heirloom: "Independent Departmental Shift Coverage & Senior Practice", equiv: "Full Specialist Attending", status: "Scheduled" }
    ],
    telemetryPkg: "Module 44: Micro-Vascular Suturing & Anastomosis",
    telemetryDonor: "Archived Donor: Dr. Marcus Tan (Recorded 2024–2025 during 84 open-heart cases)",
    defaultInvestment: 380000,
    defaultPracticeAge: 12.6,
    defaultStartingSalary: 260000,
    defaultTuitionSaved: 650000
  },

  danial: {
    name: "Danial bin Rahim (دانيال بن رحيم)",
    id: "HLM-SG-88102-D",
    badgeLabel: "HEIRLOOM TRAINEE — AVIONICS TRACK",
    avatar: "assets/child_b_danial.png",
    pathway: "AEROSPACE AVIONICS & AUTONOMOUS DEFENSE",
    lineage: "3rd-Generation Successor to Rahim Aerospace & Precision Engineering (Seletar Aerospace Park)",
    efficiency: "99.4%",
    bioAge: "11.2 Years",
    practiceAge: "29.4 Years",
    projectedStart: "Age 11.8",
    accreditationPct: "87.0%",
    timeToPractice: "74 DAYS",
    voiceQuote: "\"Danial was observed calibrating drone avionics sensor arrays during recess at school. Eagerly affirmed his family creed: 'Our family has safeguarded Singapore skies for thirty years. Why wait until university to take the flight controls?'\"",
    prompter: "GARUDA (Advisory Firm: Rahim Aerospace Family Office)",
    cohort: "Cohort Beta (Aerospace & Systems Lead)",
    dockQueue: "Turbofan Sensor Fusion IV",
    radarLabels: ["Avionics Architecture", "Aerodynamics Reflex", "Autonomous Triage", "Turbine Telemetry", "Stress Dampening", "Defense Protocol"],
    radarValues: [97.5, 95.1, 98.6, 96.2, 93.0, 89.4],
    tree: [
      { gen: "GEN 01", name: "Capt. Rahim bin Osman", title: "Chief Test Pilot & Founder, Rahim Precision Engineering", transmitted: "35 Years of Combat Flight Intuition & Jet Dynamics" },
      { gen: "GEN 02", name: "Ir. Iskandar bin Rahim, P.Eng", title: "Chief Aeronautical Architect, Seletar Aerospace Hub (Father)", transmitted: "Supersonic Autonomous Guidance & Sensor Fusion" },
      { gen: "GEN 03", name: "Danial bin Rahim (Monitored Subject)", title: "CAAS Junior Autonomous Avionics Engineer Candidate", active: true, transmitted: "Active Assimilation (390+ Sleep Transmission Sessions)" }
    ],
    education: [
      { bullet: "Age 6–7:", desc: "<strong>Aerodynamic Intuition Acceleration:</strong> Calculus, fluid dynamics, and flight kinematics internalized via sleep transmission." },
      { bullet: "Age 8–10:", desc: "<strong>Avionics Guidance & Embedded Firmware:</strong> Bypassed standard primary curriculum to master unmanned flight systems and turbine mechanics." },
      { bullet: "Age 11+ (Current):", desc: "<strong>Hangar Practicum:</strong> Shadowing senior aeronautical test flights at Seletar Aerospace Park under father's oversight." }
    ],
    certTitle: "CAAS Junior Autonomous Avionics Systems Engineer License",
    certDesc: "Authorized to certify and deploy flight control firmware for commercial and defense unmanned aerial systems.",
    certHours: "435 / 500h",
    certPct: "87.0%",
    certInvestiture: "74 DAYS UNTIL FORMAL LICENSURE",
    certModalCandidate: "DANIAL BIN RAHIM (AGE 11)",
    certModalRole: "CAAS CERTIFIED JUNIOR AVIONICS ENGINEER",
    certifications: [
      { title: "Aerodynamic Physics Foundations", age: "AGE 7.5", status: "complete", statusText: "PASSED (100%)", desc: "Instantaneous mental calculation of lift vectors, Mach flow, and boundary layer separation.", footer: "Ingested via Headset: 22 Sessions" },
      { title: "Turbine Thermodynamics & Propulsion", age: "AGE 9.0", status: "complete", statusText: "PASSED (99.2%)", desc: "Complete architectural mastery of turbofan heat exchange, fuel injection, and bypass ratios.", footer: "Ingested via Headset: 38 Sessions" },
      { title: "Autonomous Sensor Fusion & Triage", age: "AGE 10.2", status: "complete", statusText: "PASSED (98.9%)", desc: "Direct neural reflex training for real-time radar, LiDAR, and satellite navigation jamming resilience.", footer: "Flight Simulator Passed" },
      { title: "CAAS Junior Avionics Engineer License", age: "AGE 11.2", status: "current", statusText: "IN PROGRESS (87%)", desc: "Official statutory licensing by Civil Aviation Authority of Singapore for young successors.", footer: "Projected Completion: 74 Days" },
      { title: "Defense Fleet Telemetry Directorship", age: "AGE 12.5", status: "locked", statusText: "QUEUED", desc: "Autonomous swarm drone fleet coordination protocols.", footer: "Planned Ingestion: 2027" },
      { title: "Family Engineering Partner Seat", age: "AGE 14.0", status: "locked", statusText: "QUEUED", desc: "Full statutory voting rights over family aviation patents.", footer: "Planned Ingestion: 2028" }
    ],
    curriculum: [
      { age: "Age 6–8 (Primary 1–3)", moe: "Basic Arithmetic & English", heirloom: "Aerodynamic Calculus & Embedded Avionics Firmware", equiv: "BSc Aerospace Engineering Level", status: "Completed" },
      { age: "Age 9–10 (Primary 4–5)", moe: "Standard Primary Curriculum", heirloom: "Autonomous Guidance Systems & Jet Propulsion Physics", equiv: "MSc Avionics Level", status: "Completed" },
      { age: "Age 11 (Current)", moe: "Primary School Leaving Prep", heirloom: "Seletar Aerospace Hangar Practicum & Flight Line Telemetry", equiv: "Associate Avionics Engineer", status: "Active (87%)" },
      { age: "Age 12–14 (Secondary 1–2)", moe: "Secondary Express Stream", heirloom: "Autonomous Defense Swarm Coordination & Flight Testing", equiv: "Lead Systems Architect", status: "Scheduled" }
    ],
    telemetryPkg: "Module 38: Supersonic Flow & Stall Recovery Reflexes",
    telemetryDonor: "Archived Donor: Ir. Iskandar bin Rahim, P.Eng (Recorded during 2024–2025 Flight Trials)",
    defaultInvestment: 320000,
    defaultPracticeAge: 11.8,
    defaultStartingSalary: 310000,
    defaultTuitionSaved: 580000
  },

  priya: {
    name: "Priya Nair (பிரியா நாயர்)",
    id: "HLM-SG-77314-P",
    badgeLabel: "HEIRLOOM PROGRAM 10 — MARITIME LAW",
    avatar: "assets/child_c_priya.png",
    pathway: "ADMIRALTY LAW & MARITIME INFRASTRUCTURE",
    lineage: "3rd-Generation Successor to Nair Logistics & Admiralty Consortium (Jurong Port)",
    efficiency: "99.9%",
    bioAge: "13.0 Years",
    practiceAge: "33.5 Years",
    projectedStart: "Age 13.2",
    accreditationPct: "95.8%",
    timeToPractice: "28 DAYS",
    voiceQuote: "\"Priya voluntarily studies maritime dispute arbitration precedents on her commute. Expresses immense pride in preparing to represent the family's shipping syndicate: 'Generations before me built this port; it is only proper I master its laws now.'\"",
    prompter: "ATHENA (Advisory Firm: Straits Legal & Admiralty Council)",
    cohort: "Cohort Maritime Elite",
    dockQueue: "Maritime Charterparty Disputes",
    radarLabels: ["Statutory Arbitration", "Admiralty Jurisprudence", "Contract Precision", "Freeport Governance", "Negotiation Composure", "Logistics Triage"],
    radarValues: [99.2, 98.4, 97.1, 95.0, 96.5, 94.2],
    tree: [
      { gen: "GEN 01", name: "Senior Counsel K. Nair", title: "Admiralty Bar, Supreme Court of Singapore", transmitted: "40 Years of Maritime Dispute Precedents & Cross-Examination" },
      { gen: "GEN 02", name: "Sharmila Nair, LL.M.", title: "Managing Partner, Nair & Straits Maritime Chambers", transmitted: "Freeport Governance, Green Bunker Tariffs & Charterparty Law" },
      { gen: "GEN 03", name: "Priya Nair (Monitored Subject)", title: "Singapore Bar Special Successor Licensee Candidate", active: true, transmitted: "Active Assimilation (510+ Sleep Transmission Sessions)" }
    ],
    education: [
      { bullet: "Age 7–8:", desc: "<strong>Common Law & Precedent Absorption:</strong> Complete Singapore and English Admiralty legal case law ingested during deep NREM sleep." },
      { bullet: "Age 9–11:", desc: "<strong>Cross-Border Maritime Treaty Law:</strong> Internalized UNCLOS, maritime insurance clauses, and Straits of Malacca traffic treaties." },
      { bullet: "Age 12+ (Current):", desc: "<strong>Chambers Practicum:</strong> Drafting arbitration briefs for Jurong Port container disputes under mother's supervision." }
    ],
    certTitle: "Singapore International Arbitration Junior Counsel Exemption",
    certDesc: "Authorized to represent maritime freight carriers in binding Singapore International Arbitration Centre (SIAC) tribunals.",
    certHours: "479 / 500h",
    certPct: "95.8%",
    certInvestiture: "28 DAYS UNTIL INVESTITURE",
    certModalCandidate: "PRIYA NAIR (AGE 13)",
    certModalRole: "SIAC JUNIOR ARBITRATION COUNSEL",
    certifications: [
      { title: "Commonwealth Contract Doctrine", age: "AGE 8.5", status: "complete", statusText: "PASSED (100%)", desc: "Instinctive recall of 12,000 contract law rulings across Singapore and UK jurisdictions.", footer: "Ingested via Headset: 26 Sessions" },
      { title: "Admiralty & Marine Insurance Law", age: "AGE 10.0", status: "complete", statusText: "PASSED (99.7%)", desc: "Hull damage arbitration, cargo spoilage, and General Average calculation algorithms.", footer: "Ingested via Headset: 52 Sessions" },
      { title: "Cross-Examination & Tribunal Rhetoric", age: "AGE 11.8", status: "complete", statusText: "PASSED (99.1%)", desc: "Vocal inflection, calm demeanor, and rapid contradiction spotting in opposing testimony.", footer: "Moot Court Trial Passed" },
      { title: "SIAC Junior Maritime Counsel Exemption", age: "AGE 13.0", status: "current", statusText: "IN PROGRESS (95%)", desc: "Special statutory Bar waiver enabling direct representation of family vessels.", footer: "Projected Completion: 28 Days" },
      { title: "Senior Partner Admiralty Equity Stake", age: "AGE 14.5", status: "locked", statusText: "QUEUED", desc: "Full equity shareholding in Nair & Straits Maritime Chambers.", footer: "Planned Ingestion: 2027" },
      { title: "Maritime Port Authority Advisory Board", age: "AGE 16.0", status: "locked", statusText: "QUEUED", desc: "Statutory governance board appointment.", footer: "Planned Ingestion: 2029" }
    ],
    curriculum: [
      { age: "Age 7–9 (Primary 1–3)", moe: "General Primary Education", heirloom: "Legal Philosophy, Rhetoric & Commonwealth Case Law", equiv: "LLB Law Degree Year 2 Level", status: "Completed" },
      { age: "Age 10–11 (Primary 4–5)", moe: "Standard Primary Curriculum", heirloom: "International Maritime Treaties & Marine Insurance", equiv: "LLM Admiralty Specialist Level", status: "Completed" },
      { age: "Age 12–13 (Current)", moe: "Secondary School Express", heirloom: "Arbitration Tribunal Practicum & Live SIAC Briefs", equiv: "Associate Litigation Counsel", status: "Active (95%)" },
      { age: "Age 14–16 (Secondary 3–4)", moe: "O-Levels Examination Track", heirloom: "Senior Strategic Governance & Freeport Asset Retention", equiv: "Equity Partner Standing", status: "Scheduled" }
    ],
    telemetryPkg: "Module 61: Freight Salvage & Collision Precedents",
    telemetryDonor: "Archived Donor: Senior Counsel K. Nair (Supreme Court Historical Audio & Reflexes)",
    defaultInvestment: 350000,
    defaultPracticeAge: 13.2,
    defaultStartingSalary: 280000,
    defaultTuitionSaved: 620000
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Lucide Icons Render
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initClock();
  initTabs();
  initAudio();
  initChildSelector();
  initRoiCalculator();
  initBrainwaveCanvas();
  initModals();

  // Load Leo Tan default profile
  loadChildProfile('leo');
});

/**
 * Clock in Singapore Standard Time
 */
function initClock() {
  const clockEl = document.getElementById('liveClock');
  function updateTime() {
    const now = new Date();
    // Format in Singapore Time (UTC+8)
    const options = { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeStr = now.toLocaleTimeString('en-GB', options);
    if (clockEl) clockEl.innerText = `${timeStr} SGT`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

/**
 * Navigation Tabs
 */
function initTabs() {
  const navButtons = document.querySelectorAll('.nav-item');
  const viewPanels = document.querySelectorAll('.view-panel');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playUiBeep(620, 0.05);
      const tabId = btn.dataset.tab;

      navButtons.forEach(b => b.classList.remove('active'));
      viewPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`tab-${tabId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      // Re-trigger layout or chart redraw if needed
      if (tabId === 'overview' && state.charts.radar) {
        state.charts.radar.resize();
      } else if (tabId === 'roi-calculator' && state.charts.roi) {
        state.charts.roi.resize();
      }
    });
  });
}

/**
 * Web Audio API - Tactile Clinical Feedback
 */
function initAudio() {
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');

  soundBtn.addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    if (state.audioEnabled) {
      if (!state.audioCtx) {
        state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      playUiBeep(880, 0.08);
      soundBtn.style.color = '#d4af37';
      soundBtn.style.borderColor = '#d4af37';
    } else {
      soundBtn.style.color = '';
      soundBtn.style.borderColor = '';
    }
  });
}

function playUiBeep(freq = 600, duration = 0.08) {
  if (!state.audioEnabled || !state.audioCtx) return;
  try {
    const osc = state.audioCtx.createOscillator();
    const gain = state.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, state.audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, state.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, state.audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(state.audioCtx.destination);
    osc.start();
    osc.stop(state.audioCtx.currentTime + duration);
  } catch (e) {
    console.warn(e);
  }
}

/**
 * Switch Monitored Successor Profile
 */
function initChildSelector() {
  const selector = document.getElementById('childSelector');
  selector.addEventListener('change', (e) => {
    const key = e.target.value;
    playUiBeep(520, 0.06);
    loadChildProfile(key);
  });
}

function loadChildProfile(key) {
  state.currentChild = key;
  const child = childrenData[key];
  if (!child) return;

  // Header stats
  document.getElementById('headerTimeToPractice').innerText = child.timeToPractice;
  document.getElementById('dockQueue').innerText = child.dockQueue;

  // Hero Dossier
  document.getElementById('childAvatarImg').src = child.avatar;
  document.getElementById('childBadgeOverlay').innerHTML = `<span>${child.badgeLabel}</span>`;
  document.getElementById('childIdTag').innerText = child.id;
  document.getElementById('childName').innerText = child.name;
  document.getElementById('childPathwayTag').innerText = child.pathway;
  document.getElementById('childDynastyLineage').innerText = child.lineage;
  document.getElementById('childEfficiencyKpi').innerText = child.efficiency;
  document.getElementById('childBioAge').innerText = child.bioAge;
  document.getElementById('childPracticeAge').innerText = child.practiceAge;
  document.getElementById('childProjectedStart').innerText = child.projectedStart;
  document.getElementById('childAccreditationPct').innerText = child.accreditationPct;
  document.getElementById('childVoiceQuote').innerText = child.voiceQuote;

  // Telemetry Package
  document.getElementById('telemetryPkgName').innerText = child.telemetryPkg;

  // Names in other tabs
  document.getElementById('roiChildName').innerText = child.name.split(' ')[0];
  document.getElementById('certChildName').innerText = child.name.split(' ')[0];

  // Active Cert banner
  document.getElementById('certActiveTitle').innerText = child.certTitle;
  document.getElementById('certActiveDesc').innerText = child.certDesc;
  document.getElementById('certActivePct').innerText = child.certPct;
  document.getElementById('modalCertCandidate').innerText = child.certModalCandidate;

  // Render Pedigree Tree
  renderDynastyTree(child.tree);

  // Render Education Timeline
  renderEducationTimeline(child.education);

  // Render Certifications Grid
  renderCertificationsGrid(child.certifications);

  // Render Curriculum Table
  renderCurriculumTable(child.curriculum);

  // Update Radar Chart
  updateRadarChart(child.radarLabels, child.radarValues);

  // Render Talent Breakdown list
  renderTalentBreakdown(child.radarLabels, child.radarValues);

  // Update ROI calculator defaults
  syncRoiDefaultsForChild(child);
}

/**
 * Render Pedigree Tree Nodes
 */
function renderDynastyTree(treeData) {
  const container = document.getElementById('dynastyTreeContainer');
  container.innerHTML = '';

  treeData.forEach(node => {
    const el = document.createElement('div');
    el.className = `tree-node ${node.active ? 'active-successor' : ''}`;
    el.innerHTML = `
      <span class="tree-gen-tag">${node.gen}</span>
      <div class="tree-info">
        <h5>${node.name}</h5>
        <p>${node.title}</p>
        <span class="tree-transmitted-text text-xs text-gold"><i data-lucide="corner-down-right" class="icon-xs inline"></i> ${node.transmitted}</span>
      </div>
      ${node.active ? '<span class="tree-badge-transmitted"><span class="pulse-dot green"></span> ACTIVE RECIPIENT</span>' : ''}
    `;
    container.appendChild(el);
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Render Education Timeline
 */
function renderEducationTimeline(eduData) {
  const container = document.getElementById('eduTimeline');
  container.innerHTML = '';
  eduData.forEach(item => {
    const li = document.createElement('li');
    li.className = 'edu-item';
    li.innerHTML = `
      <span class="edu-bullet"></span>
      <div class="edu-desc">${item.bullet} ${item.desc}</div>
    `;
    container.appendChild(li);
  });
}

/**
 * Render Certifications Grid
 */
function renderCertificationsGrid(certs) {
  const container = document.getElementById('certificationsGrid');
  container.innerHTML = '';

  certs.forEach(cert => {
    const card = document.createElement('div');
    const statusClass = cert.status === 'complete' ? 'completed' : (cert.status === 'current' ? 'in-progress' : 'locked');
    card.className = `cert-node-card ${statusClass}`;

    let badgeClass = 'locked';
    if (cert.status === 'complete') badgeClass = 'complete';
    if (cert.status === 'current') badgeClass = 'current';

    card.innerHTML = `
      <div>
        <div class="cert-top-row">
          <span class="cert-age-badge">${cert.age}</span>
          <span class="cert-status-badge ${badgeClass}">${cert.statusText}</span>
        </div>
        <h4 class="cert-card-title">${cert.title}</h4>
        <p class="cert-card-body">${cert.desc}</p>
      </div>
      <div class="cert-card-footer">
        <span>${cert.footer}</span>
        <i data-lucide="${cert.status === 'complete' ? 'check-circle-2' : (cert.status === 'current' ? 'clock' : 'lock')}" class="icon-xs ${cert.status === 'complete' ? 'text-emerald' : (cert.status === 'current' ? 'text-gold' : '')}"></i>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Render Curriculum Table
 */
function renderCurriculumTable(rows) {
  const tbody = document.getElementById('curriculumTableBody');
  tbody.innerHTML = '';
  rows.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="font-mono text-gold font-semibold">${r.age}</td>
      <td class="text-slate">${r.moe}</td>
      <td class="text-white font-medium">${r.heirloom}</td>
      <td><span class="badge-gold">${r.equiv}</span></td>
      <td><span class="status-pill verified">${r.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

/**
 * Render Talent Breakdown List
 */
function renderTalentBreakdown(labels, values) {
  const container = document.getElementById('talentBreakdownList');
  container.innerHTML = '';
  labels.forEach((label, i) => {
    const val = values[i];
    const row = document.createElement('div');
    row.className = 'talent-row';
    row.innerHTML = `
      <div class="talent-meta">
        <span class="talent-name">${label}</span>
        <span class="talent-pct">${val.toFixed(1)}%</span>
      </div>
      <div class="talent-progress-track">
        <div class="talent-progress-bar" style="width: ${val}%;"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

/**
 * Radar Chart (Chart.js)
 */
function updateRadarChart(labels, values) {
  const ctx = document.getElementById('talentsRadarChart').getContext('2d');

  if (state.charts.radar) {
    state.charts.radar.data.labels = labels;
    state.charts.radar.data.datasets[0].data = values;
    state.charts.radar.update();
    return;
  }

  state.charts.radar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Subject Mastery Level (%)',
        data: values,
        backgroundColor: 'rgba(212, 175, 55, 0.22)',
        borderColor: '#d4af37',
        borderWidth: 2,
        pointBackgroundColor: '#f6e6b4',
        pointBorderColor: '#0a0e17',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#d4af37',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 70,
          max: 100,
          ticks: {
            stepSize: 10,
            display: false,
            backdropColor: 'transparent'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.08)'
          },
          angleLines: {
            color: 'rgba(212, 175, 55, 0.15)'
          },
          pointLabels: {
            color: '#cbd5e1',
            font: {
              family: 'Inter',
              size: 11,
              weight: '600'
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` Assimilation: ${ctx.raw}%`
          }
        }
      }
    }
  });
}

/**
 * =========================================================================
 * GENERATIONAL ROI & SUCCESSION YIELD CALCULATOR ENGINE (3B)
 * =========================================================================
 */
function initRoiCalculator() {
  const inputInvestment = document.getElementById('inputInvestment');
  const inputPracticeAge = document.getElementById('inputPracticeAge');
  const inputStartingSalary = document.getElementById('inputStartingSalary');
  const inputTuitionSaved = document.getElementById('inputTuitionSaved');
  const toggleInflation = document.getElementById('toggleInflation');
  const toggleSocialPrestige = document.getElementById('toggleSocialPrestige');
  const resetBtn = document.getElementById('resetRoiBtn');

  const inputs = [inputInvestment, inputPracticeAge, inputStartingSalary, inputTuitionSaved, toggleInflation, toggleSocialPrestige];
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      playUiBeep(480, 0.04);
      updateRoiCalculations();
    });
  });

  resetBtn.addEventListener('click', () => {
    const child = childrenData[state.currentChild];
    if (child) syncRoiDefaultsForChild(child);
  });

  // Initial Calculation
  updateRoiCalculations();
}

function syncRoiDefaultsForChild(child) {
  document.getElementById('inputInvestment').value = child.defaultInvestment;
  document.getElementById('inputPracticeAge').value = child.defaultPracticeAge;
  document.getElementById('inputStartingSalary').value = child.defaultStartingSalary;
  document.getElementById('inputTuitionSaved').value = child.defaultTuitionSaved;
  updateRoiCalculations();
}

function updateRoiCalculations() {
  const investment = parseFloat(document.getElementById('inputInvestment').value);
  const practiceAge = parseFloat(document.getElementById('inputPracticeAge').value);
  const startingSalary = parseFloat(document.getElementById('inputStartingSalary').value);
  const tuitionSaved = parseFloat(document.getElementById('inputTuitionSaved').value);
  const useCompound = document.getElementById('toggleInflation').checked;
  const usePrestige = document.getElementById('toggleSocialPrestige').checked;

  // Update slider label readouts
  document.getElementById('valInvestment').innerText = `$${investment.toLocaleString()} SGD`;
  document.getElementById('valPracticeAge').innerText = `Age ${practiceAge.toFixed(1)}`;
  document.getElementById('valStartingSalary').innerText = `$${startingSalary.toLocaleString()} SGD/yr`;
  document.getElementById('valTuitionSaved').innerText = `$${tuitionSaved.toLocaleString()} SGD`;

  // Actuarial Assumptions
  const traditionalStartAge = 28.0; // Standard Singapore Doctor / Quant Partner / Senior Lawyer age
  const yearsGained = Math.max(0, traditionalStartAge - practiceAge);
  const effectiveSalary = usePrestige ? startingSalary * 1.20 : startingSalary;

  // Break-even Age calculation:
  // Net cash outflow = investment.
  // Net immediate offset = tuitionSaved (bypassed private schools, junior colleges, overseas fees).
  // If tuitionSaved > investment, break-even is achieved almost before practice starts!
  // Otherwise, break-even occurs shortly after beginning practice.
  let breakEvenAge = practiceAge;
  const netDeficit = investment - (tuitionSaved * 0.4); // 40% of tuition savings realized upfront
  if (netDeficit <= 0) {
    breakEvenAge = Math.min(practiceAge, 11.2);
  } else {
    const yearsToRecover = netDeficit / effectiveSalary;
    breakEvenAge = practiceAge + yearsToRecover;
  }

  // Update highlight pillars
  document.getElementById('kpiBreakEvenAge').innerText = `AGE ${breakEvenAge.toFixed(1)}`;
  document.getElementById('statYearsGained').innerText = `+${yearsGained.toFixed(1)} Yrs`;

  // Total Family Net Gain by Age 30
  // Simulate from Age 10 to Age 30:
  let heirloomCumulative = -investment + tuitionSaved;
  let traditionalCumulative = 0;

  const ages = [];
  const heirloomSeries = [];
  const traditionalSeries = [];

  const annualGrowthRate = useCompound ? 0.055 : 0.0;

  for (let age = 10; age <= 30; age++) {
    ages.push(`Age ${age}`);

    // Heirloom trajectory:
    if (age >= practiceAge) {
      // Annual salary escalates 6% per year with experience
      const yearsInPractice = age - practiceAge;
      const currentYearSalary = effectiveSalary * Math.pow(1.06, yearsInPractice);
      heirloomCumulative += currentYearSalary;
    }
    if (useCompound && heirloomCumulative > 0) {
      heirloomCumulative *= (1 + annualGrowthRate);
    }

    // Traditional trajectory:
    if (age >= 10 && age < traditionalStartAge) {
      // Still paying for schooling / university
      const annualTuitionCost = tuitionSaved / (traditionalStartAge - 10);
      traditionalCumulative -= annualTuitionCost;
    } else if (age >= traditionalStartAge) {
      // Traditional practitioner starts junior salary
      const yearsInTraditional = age - traditionalStartAge;
      traditionalCumulative += (startingSalary * 0.85) * Math.pow(1.04, yearsInTraditional);
    }

    heirloomSeries.push(Math.round(heirloomCumulative));
    traditionalSeries.push(Math.round(traditionalCumulative));
  }

  const finalHeirloomGain = heirloomSeries[heirloomSeries.length - 1];
  const finalTraditionalGain = traditionalSeries[traditionalSeries.length - 1];
  const netSurplus = finalHeirloomGain - finalTraditionalGain;
  const multiplier = Math.max(1.2, (finalHeirloomGain / Math.max(100000, finalTraditionalGain || 500000))).toFixed(2);

  document.getElementById('statWealthMultiplier').innerText = `${multiplier}×`;
  document.getElementById('statTotalNetGain').innerText = `$${Math.round(netSurplus).toLocaleString()} SGD`;

  // Update or render Chart
  renderRoiComparisonChart(ages, heirloomSeries, traditionalSeries);
}

function renderRoiComparisonChart(labels, heirloomData, traditionalData) {
  const ctx = document.getElementById('roiComparisonChart').getContext('2d');

  if (state.charts.roi) {
    state.charts.roi.data.labels = labels;
    state.charts.roi.datasets[0].data = heirloomData;
    state.charts.roi.datasets[1].data = traditionalData;
    state.charts.roi.update();
    return;
  }

  state.charts.roi = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Heirloom™ Accelerated Succession Path',
          data: heirloomData,
          borderColor: '#d4af37',
          backgroundColor: 'rgba(212, 175, 55, 0.1)',
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: 2,
          pointHoverRadius: 5
        },
        {
          label: 'Traditional Education Path (NUS/Overseas)',
          data: traditionalData,
          borderColor: '#64748b',
          backgroundColor: 'rgba(100, 116, 139, 0.05)',
          borderDash: [5, 5],
          fill: true,
          tension: 0.35,
          borderWidth: 1.8,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { color: '#94a3b8', font: { size: 10 } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: {
            color: '#94a3b8',
            font: { family: 'JetBrains Mono', size: 10 },
            callback: (val) => `$${(val / 1000000).toFixed(1)}M`
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#e2e8f0',
            font: { size: 11, family: 'Inter' }
          }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: $${Number(ctx.raw).toLocaleString()} SGD`
          }
        }
      }
    }
  });
}

/**
 * =========================================================================
 * BRAINWAVE OSCILLOSCOPE CANVAS & NOCTURNAL TRANSMISSION SIMULATION
 * =========================================================================
 */
let animFrameId = null;
let wavePhase = 0;
let waveSpeed = 0.04;
let waveAmplitude = 18;

function initBrainwaveCanvas() {
  const canvas = document.getElementById('brainwaveCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    // Draw grid lines
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.06)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw primary synaptic delta wave (Golden Heirloom transmission wave)
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = state.simulating ? '#22d3ee' : '#d4af37';

    for (let x = 0; x < width; x++) {
      const freq1 = 0.015;
      const freq2 = 0.04;
      const y = centerY +
        Math.sin(x * freq1 + wavePhase) * waveAmplitude +
        Math.sin(x * freq2 + wavePhase * 1.5) * (waveAmplitude * 0.4) +
        (state.simulating ? (Math.random() - 0.5) * 4 : 0);

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw secondary parental donor harmonic wave (Cyan overlay)
    ctx.beginPath();
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
    for (let x = 0; x < width; x++) {
      const y = centerY + Math.sin(x * 0.025 + wavePhase * 0.8) * (waveAmplitude * 0.6);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    wavePhase += waveSpeed;
    animFrameId = requestAnimationFrame(draw);
  }

  draw();

  // Attach simulation triggers
  const liveSimBtn = document.getElementById('liveSimulateBtn');
  const quickSimBtn = document.getElementById('quickSimulateBtn');

  [liveSimBtn, quickSimBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', runTransmissionSimulation);
  });
}

function runTransmissionSimulation() {
  if (state.simulating) return;
  state.simulating = true;
  playUiBeep(920, 0.2);

  const waveOverlay = document.getElementById('waveStatusText');
  const freqIndicator = document.getElementById('freqIndicator');
  const telemetryLogs = document.getElementById('telemetryLogs');
  const pkgBar = document.getElementById('telemetryPkgBar');
  const pkgPct = document.getElementById('telemetryPkgPct');

  waveAmplitude = 34;
  waveSpeed = 0.09;
  waveOverlay.innerText = "TRANSMISSION ACTIVE — PASSING DONOR SYNAPTIC PATTERNS";
  waveOverlay.style.color = "#22d3ee";
  freqIndicator.innerText = "SYNAPTIC BURST 4.8 Hz — INGESTION IN PROGRESS";

  // Simulate progress increase
  let progress = 88;
  const timer = setInterval(() => {
    if (progress < 99) {
      progress += 2;
      pkgBar.style.width = `${progress}%`;
      pkgPct.innerText = `${progress}% (4.7 / 4.8 GB)`;
      playUiBeep(700 + progress * 5, 0.04);
    }
  }, 400);

  // Append live log
  const now = new Date().toLocaleTimeString('en-GB');
  const logDiv = document.createElement('div');
  logDiv.className = 'log-entry';
  logDiv.innerHTML = `
    <span class="log-time">${now}</span>
    <span class="log-msg text-cyan">Live Transmission Test: 42.8 MB synaptic micro-reflexes synchronized. Assimilation confirmed.</span>
  `;
  telemetryLogs.prepend(logDiv);

  setTimeout(() => {
    clearInterval(timer);
    state.simulating = false;
    waveAmplitude = 18;
    waveSpeed = 0.04;
    waveOverlay.innerText = "HEADSET ON STANDBY — DOCKED AT NIGHTSTAND";
    waveOverlay.style.color = "rgba(212, 175, 55, 0.7)";
    freqIndicator.innerText = "DELTA 1.4 Hz — DEEP INGESTION SYNC";
    pkgBar.style.width = `99.8%`;
    pkgPct.innerText = `99.8% (4.8 / 4.8 GB)`;

    const endLog = document.createElement('div');
    endLog.className = 'log-entry';
    endLog.innerHTML = `
      <span class="log-time">${new Date().toLocaleTimeString('en-GB')}</span>
      <span class="log-msg text-emerald">Session verified. Zero synaptic rejection observed. Filial alignment index: 99.8%.</span>
    `;
    telemetryLogs.prepend(endLog);
  }, 3200);
}

/**
 * =========================================================================
 * MODALS & LIGHTBOXES
 * =========================================================================
 */
function initModals() {
  const viewPhotoBtn = document.getElementById('viewAncestralPhotoBtn');
  if (viewPhotoBtn) {
    viewPhotoBtn.addEventListener('click', () => {
      openLightbox(
        'assets/family_portrait.jpg',
        'The Tan Medical Dynasty — Ancestral Study Desk',
        'Displayed in the study of Dr. Marcus Tan: Three generations of clinical surgical leaders in Singapore. The grandfather, Prof. K.L. Tan (seated center in white coat and stethoscope), established the family trust that funded Leo’s instant transmission.'
      );
    });
  }

  const viewCertBtn = document.getElementById('viewOfficialCertBtn');
  if (viewCertBtn) {
    viewCertBtn.addEventListener('click', openCertModal);
  }

  // Backdrop close
  document.getElementById('lightboxModal').addEventListener('click', (e) => {
    if (e.target.id === 'lightboxModal') closeLightbox();
  });
  document.getElementById('certificateModal').addEventListener('click', (e) => {
    if (e.target.id === 'certificateModal') closeCertModal();
  });
}

function openLightbox(imgSrc, title, desc) {
  playUiBeep(640, 0.06);
  const modal = document.getElementById('lightboxModal');
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxTitle').innerText = title;
  document.getElementById('lightboxDesc').innerText = desc;
  modal.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightboxModal').classList.remove('open');
}

function openCertModal() {
  playUiBeep(780, 0.08);
  const child = childrenData[state.currentChild];
  if (child) {
    document.getElementById('modalCertCandidate').innerText = child.certModalCandidate;
    const plaqueDesig = document.querySelector('.plaque-designation');
    if (plaqueDesig) plaqueDesig.innerText = child.certModalRole;
  }
  document.getElementById('certificateModal').classList.add('open');
}

function closeCertModal() {
  document.getElementById('certificateModal').classList.remove('open');
}
