/**
 * HEIRLOOM™ — GENERATIONAL INTELLIGENCE & SUCCESSOR PRESERVATION
 * Interactive Engine: Dual-Mode Website + Member Portal
 * Holographic OS (Screens A, B, C), 3D Neural Brain Canvas, Generational ROI Calculator
 */

// Global Application State
const state = {
  currentView: 'website', // 'website' | 'portal'
  currentChild: 'ryan',
  lenis: null,
  charts: {
    radar: null,
    roi: null,
    timeline: null
  },
  brainAnimationId: null
};

// Monitored Successors Database (Fictional Speculative Design Lineage)
const childrenData = {
  ryan: {
    key: "ryan",
    name: "Ryan Tan (陈宇航)",
    shortName: "Ryan",
    id: "HLM-SG-99420-R",
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
    cognitiveRank: "COGNITIVE RANK: TOP 0.08% (14 / 18,420)",
    voiceQuote: "\"Ryan views surgical diligence as the natural expression of filial gratitude. Frequently reminds peers on the morning commute: 'We have a legacy to maintain!' No external coercion detected; ambition is entirely self-motivated.\"",
    certImage: "assets/heirloom_certificate_ryan.jpg",
    certModalTitle: "OFFICIAL STATUTORY ACCREDITATION — MOH SURGERY",
    certModalSub: "Certificate of Achievement and Elite Accreditation • Republic of Singapore Resident Citizen-Elite Registry • Candidate: Ryan Tan",
    certLightboxTitle: "Official Heirloom Accreditation Certificate — Ryan Tan",
    certLightboxDesc: "Verified statutory credential issued to Ryan Tan upon completing intellectual and procedural surgical transmission under parent Dr. Marcus Tan.",
    prompter: "ELARA (Advisory Firm: Tan & Partners Family Office)",
    cohort: "Cohort Alpha (100% Retained Legacy)",
    dockUnitId: "HLM-V-99420-SG",
    
    // Donor Information
    donorName: "Dr. Marcus Tan, MD, FAMS",
    donorRole: "Senior Consultant Cardiothoracic Surgeon (Father)",
    donorInitials: "MT",
    donorTitleBrief: "Senior Consultant Donor • 84 Bypass Cases Transmitted",
    donorQuote: "Pass on my medical knowledge, clinical skills and professional experience to my son.",

    // Telemetry & Triad Metrics (Screen A & C)
    integrationPct: 68,
    monthStatus: "MONTH 04 / 06",
    monthRatio: "04 / 06",
    equivExp: "~13.6 YEARS GAINED",
    triad: {
      experience: 62,
      skills: 71,
      knowledge: 76
    },
    sessionsCount: 167,
    sleepHours: "510h",
    syncEfficiency: "99.8%",

    // 6-Month Timeline Chart Data
    timelineData: {
      volume: [42, 78, 120, 168, 205, 240], // synaptome volume GB
      integration: [18, 35, 52, 68, 85, 99] // % integration
    },

    // Talents Radar
    radarLabels: ["Surgical Dexterity", "Diagnostic Reflex", "Clinical Decorum", "Anatomical Memory", "Stress Dampening", "Peer Leadership"],
    radarValues: [98.4, 96.2, 94.0, 99.1, 92.5, 95.8],

    // Family Pedigree Tree
    familyTree: {
      gen01: [
        {
          name: "Prof. K.L. Tan, MBBS, FRCS",
          role: "Emeritus Chief of Surgery",
          initials: "KLT",
          transmitted: "Foundational Surgical Discipline & Ethical Decorum"
        },
        {
          name: "Dr. Margaret Tan",
          role: "Dynasty Co-Founder & Trustee",
          initials: "MLT",
          transmitted: "Medical Trust Administration"
        }
      ],
      gen02: [
        {
          name: "Dr. Marcus Tan, MD, FAMS",
          role: "Senior Consultant Surgeon (Father)",
          initials: "MT",
          isPrimaryDonor: true,
          transmitted: "84 Micro-Vascular Bypass Cases & Tactical Triage"
        },
        {
          name: "Dr. Evelyn Tan, MD",
          role: "Clinical Director (Mother)",
          initials: "ET",
          transmitted: "Surgical Governance & Hospital Boardroom Decorum"
        }
      ],
      gen03: {
        name: "Ryan Tan (陈宇航)",
        role: "MOH Class B Junior Surgical Fellow Candidate",
        avatar: "assets/child_a_leo.png",
        transmitted: "Active Assimilation (480+ Sleep Transmission Sessions)"
      }
    },

    education: [
      { bullet: "Age 6–8:", desc: "<strong>Cognitive Receptive Priming:</strong> Neuro-elastic memory pathways conditioned for high-density nocturnal data ingestion." },
      { bullet: "Age 9–11:", desc: "<strong>Pathology & Surgical Anatomy Ingestion:</strong> Equivalent to NUS Medical School Years 1–3 compressed into 24 months of sleep." },
      { bullet: "Age 12+ (Current):", desc: "<strong>Accelerated Practicum:</strong> Shadowing senior operations at Mount Elizabeth; Board practical exam scheduled in 42 days." }
    ],

    certTitle: "MOH Class B Junior Surgical Practitioner License",
    certDesc: "Authorized to perform supervised laparoscopic and vascular procedures under parent Dr. Marcus Tan.",
    certHours: "462 / 500h",
    certPct: "92.4%",
    certInvestiture: "42 DAYS UNTIL FORMAL INVESTITURE",
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

    defaultInvestment: 380000,
    defaultPracticeAge: 12.6,
    defaultStartingSalary: 260000,
    defaultTuitionSaved: 650000
  },

  danial: {
    key: "danial",
    name: "Danial bin Rahim (دانيال بن رحيم)",
    shortName: "Danial",
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
    cognitiveRank: "COGNITIVE RANK: TOP 0.30% (48 / 16,200)",
    voiceQuote: "\"Danial was observed calibrating drone avionics sensor arrays during recess at school. Eagerly affirmed his family creed: 'Our family has safeguarded Singapore skies for thirty years. Why wait until university to take the flight controls?'\"",
    certImage: "assets/heirloom_certificate_danial.jpg",
    certModalTitle: "OFFICIAL STATUTORY ACCREDITATION — CAAS AVIONICS",
    certModalSub: "Certificate of Achievement and Elite Accreditation • Republic of Singapore Resident Citizen-Elite Registry • Candidate: Danial bin Rahim",
    certLightboxTitle: "Official Heirloom Accreditation Certificate — Danial bin Rahim",
    certLightboxDesc: "Verified statutory credential issued to Danial bin Rahim upon completing supersonic telemetry and autonomous avionics firmware training under parent Ir. Iskandar bin Rahim.",
    prompter: "GARUDA (Advisory Firm: Rahim Aerospace Family Office)",
    cohort: "Cohort Beta (Aerospace & Systems Lead)",
    dockUnitId: "HLM-V-88102-SG",

    donorName: "Ir. Iskandar bin Rahim, P.Eng",
    donorRole: "Chief Aeronautical Architect (Father)",
    donorInitials: "IR",
    donorTitleBrief: "Chief Aeronautical Architect • Supersonic Flight Lead",
    donorQuote: "Transfer supersonic avionics telemetry, defense aerodynamics and guidance reflexes to Danial.",

    integrationPct: 65,
    monthStatus: "MONTH 04 / 06",
    monthRatio: "04 / 06",
    equivExp: "~12.8 YEARS GAINED",
    triad: {
      experience: 58,
      skills: 69,
      knowledge: 74
    },
    sessionsCount: 142,
    sleepHours: "435h",
    syncEfficiency: "99.4%",

    timelineData: {
      volume: [38, 72, 114, 155, 192, 230],
      integration: [15, 31, 48, 65, 82, 97]
    },

    radarLabels: ["Avionics Architecture", "Aerodynamics Reflex", "Autonomous Triage", "Turbine Telemetry", "Stress Dampening", "Defense Protocol"],
    radarValues: [97.5, 95.1, 98.6, 96.2, 93.0, 89.4],

    familyTree: {
      gen01: [
        {
          name: "Capt. Rahim bin Osman",
          role: "Chief Test Pilot & Aviation Founder",
          initials: "RO",
          transmitted: "35 Years of Combat Flight Intuition & Jet Dynamics"
        },
        {
          name: "Hajah Fatimah Rahim",
          role: "Aviation Trustee & Executive Director",
          initials: "FR",
          transmitted: "Hangar Infrastructure Capital Governance"
        }
      ],
      gen02: [
        {
          name: "Ir. Iskandar bin Rahim, P.Eng",
          role: "Chief Aeronautical Architect (Father)",
          initials: "IR",
          isPrimaryDonor: true,
          transmitted: "Supersonic Autonomous Guidance & Sensor Fusion"
        },
        {
          name: "Dr. Nurul Rahim",
          role: "Autonomous Defense Analyst (Mother)",
          initials: "NR",
          transmitted: "Defense Telemetry & Swarm Cryptography"
        }
      ],
      gen03: {
        name: "Danial bin Rahim (دانيال بن رحيم)",
        role: "CAAS Junior Autonomous Avionics Engineer Candidate",
        avatar: "assets/child_b_danial.png",
        transmitted: "Active Assimilation (390+ Sleep Transmission Sessions)"
      }
    },

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

    defaultInvestment: 320000,
    defaultPracticeAge: 11.8,
    defaultStartingSalary: 310000,
    defaultTuitionSaved: 580000
  },

  priya: {
    key: "priya",
    name: "Priya Nair (பிரியா நாயர்)",
    shortName: "Priya",
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
    cognitiveRank: "COGNITIVE RANK: TOP 0.04% (7 / 17,500)",
    voiceQuote: "\"Priya voluntarily studies maritime dispute arbitration precedents on her commute. Expresses immense pride in preparing to represent the family's shipping syndicate: 'Generations before me built this port; it is only proper I master its laws now.'\"",
    certImage: "assets/heirloom_certificate_priya.jpg",
    certModalTitle: "OFFICIAL STATUTORY ACCREDITATION — ADMIRALTY LAW",
    certModalSub: "Certificate of Achievement and Elite Accreditation • Republic of Singapore Resident Citizen-Elite Registry • Candidate: Priya Nair",
    certLightboxTitle: "Official Heirloom Accreditation Certificate — Priya Nair",
    certLightboxDesc: "Verified statutory credential issued to Priya Nair upon completing maritime case law, international arbitration precedent, and judicial decorum transmission under parent Sharmila Nair, LL.M.",
    prompter: "ATHENA (Advisory Firm: Straits Legal & Admiralty Council)",
    cohort: "Cohort Maritime Elite",
    dockUnitId: "HLM-V-77314-SG",

    donorName: "Sharmila Nair, LL.M.",
    donorRole: "Managing Partner, Admiralty Chambers (Mother)",
    donorInitials: "SN",
    donorTitleBrief: "Managing Partner • Senior Admiralty Arbitrator",
    donorQuote: "Instill forty years of cross-border maritime case law, tribunal rhetoric and dispute composure into Priya.",

    integrationPct: 77,
    monthStatus: "MONTH 05 / 06",
    monthRatio: "05 / 06",
    equivExp: "~15.2 YEARS GAINED",
    triad: {
      experience: 72,
      skills: 79,
      knowledge: 84
    },
    sessionsCount: 189,
    sleepHours: "560h",
    syncEfficiency: "99.9%",

    timelineData: {
      volume: [48, 92, 138, 185, 230, 260],
      integration: [20, 39, 58, 77, 91, 100]
    },

    radarLabels: ["Statutory Arbitration", "Admiralty Jurisprudence", "Contract Precision", "Freeport Governance", "Negotiation Composure", "Logistics Triage"],
    radarValues: [99.2, 98.4, 97.1, 95.0, 96.5, 94.2],

    familyTree: {
      gen01: [
        {
          name: "Senior Counsel K. Nair",
          role: "Supreme Court Admiralty Bar (Grandfather)",
          initials: "KN",
          transmitted: "40 Years of Maritime Dispute Precedents & Cross-Examination"
        },
        {
          name: "Devaki Nair",
          role: "Straits Port Trust Director",
          initials: "DN",
          transmitted: "Maritime Trade Treaties & Sovereign Concessions"
        }
      ],
      gen02: [
        {
          name: "Sharmila Nair, LL.M.",
          role: "Managing Partner, Admiralty Chambers (Mother)",
          initials: "SN",
          isPrimaryDonor: true,
          transmitted: "Freeport Governance, Green Bunker Tariffs & Charterparty Law"
        },
        {
          name: "Capt. Ramesh Nair",
          role: "Jurong Port Fleet Director (Father)",
          initials: "RN",
          transmitted: "Container Logistics Triage & Straits Navigation"
        }
      ],
      gen03: {
        name: "Priya Nair (பிரியா நாயர்)",
        role: "Singapore Bar Special Successor Licensee Candidate",
        avatar: "assets/child_c_priya.png",
        transmitted: "Active Assimilation (510+ Sleep Transmission Sessions)"
      }
    },

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

    defaultInvestment: 350000,
    defaultPracticeAge: 13.2,
    defaultStartingSalary: 280000,
    defaultTuitionSaved: 620000
  }
};

// Application Lifecycle Initialization
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initLenis();
  initGsapAnimations();
  initViewSwitcher();
  initClock();
  initTabs();
  initChildSelector();
  initModals();
  init3DBrainSimulation();
  initDynamicBackgroundShifter();
  initHeroParallax();
  initCounterAnimations();

  // Load Ryan Tan default profile
  loadChildProfile('ryan');
});

/**
 * =========================================================================
 * SMOOTH SCROLLING & GSAP ANIMATIONS
 * =========================================================================
 */
function initLenis() {
  if (typeof Lenis !== 'undefined') {
    state.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      if (state.lenis) state.lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof ScrollTrigger !== 'undefined' && state.lenis) {
      state.lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        state.lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }
}

function initGsapAnimations() {
  if (typeof gsap !== 'undefined') {
    gsap.from('.gsap-hero', {
      opacity: 0,
      y: 35,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out'
    });

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.gsap-reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out'
        });
      });
    }
  }
}

/**
 * =========================================================================
 * VIEW SWITCHER: DUAL-MODE (PUBLIC WEBSITE vs MEMBER PORTAL)
 * =========================================================================
 */
function initViewSwitcher() {
  const btnWebsite = document.getElementById('btnViewWebsite');
  const btnPortal = document.getElementById('btnViewPortal');
  const navLogo = document.getElementById('navLogoBtn');

  if (btnWebsite) btnWebsite.addEventListener('click', () => switchView('website'));
  if (btnPortal) btnPortal.addEventListener('click', () => switchView('portal'));
  if (navLogo) {
    navLogo.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('website');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Public Nav Links anchor handling
  const publicNavLinks = document.querySelectorAll('.p-nav-link');
  publicNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        if (state.currentView !== 'website') {
          switchView('website');
        }
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          if (state.lenis) {
            state.lenis.scrollTo(targetEl, { offset: -70 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
        publicNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
}

function switchView(viewName, targetTab = null, childKey = null) {
  state.currentView = viewName;
  const viewWebsite = document.getElementById('view-website');
  const viewPortal = document.getElementById('view-portal');
  const btnWebsite = document.getElementById('btnViewWebsite');
  const btnPortal = document.getElementById('btnViewPortal');
  const publicNav = document.getElementById('publicNavLinks');
  const portalPill = document.getElementById('portalDonorRecipientPill');
  const headerSubject = document.getElementById('headerSubjectWrapper');
  const brandStatusBadge = document.getElementById('brandStatusBadge');
  const mainHeader = document.getElementById('mainHeader');

  if (childKey) {
    loadChildProfile(childKey);
    const sel = document.getElementById('childSelector');
    if (sel) sel.value = childKey;
  }

  if (viewName === 'website') {
    if (viewWebsite) viewWebsite.style.display = 'block';
    if (viewPortal) viewPortal.style.display = 'none';
    if (btnWebsite) btnWebsite.classList.add('active');
    if (btnPortal) btnPortal.classList.remove('active');
    if (publicNav) publicNav.style.display = 'flex';
    if (portalPill) portalPill.style.display = 'none';
    if (headerSubject) headerSubject.style.display = 'none';

    // Request 3: Hide Citizen-Elite tier badge on public website
    if (brandStatusBadge) brandStatusBadge.style.display = 'none';

    // Request 1: Dynamic seamless page background color shift
    updateDynamicBackground();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    if (viewWebsite) viewWebsite.style.display = 'none';
    if (viewPortal) viewPortal.style.display = 'block';
    if (btnWebsite) btnWebsite.classList.remove('active');
    if (btnPortal) btnPortal.classList.add('active');
    if (publicNav) publicNav.style.display = 'none';
    if (portalPill) portalPill.style.display = 'flex';
    if (headerSubject) headerSubject.style.display = 'flex';

    // Request 3: Reappear Citizen-Elite tier badge in Member Portal
    if (brandStatusBadge) brandStatusBadge.style.display = 'inline-flex';

    // Member portal uses obsidian dark theme
    if (mainHeader) {
      mainHeader.classList.remove('nav-light');
      mainHeader.classList.add('nav-dark');
    }

    if (targetTab) {
      const navBtn = document.querySelector(`.sidebar-nav .nav-item[data-tab="${targetTab}"]`);
      if (navBtn) navBtn.click();
    }

    // Trigger Chart resize upon entering portal
    setTimeout(() => {
      if (state.charts.radar) state.charts.radar.resize();
      if (state.charts.roi) state.charts.roi.resize();
      if (state.charts.timeline) state.charts.timeline.resize();
    }, 100);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (window.lucide) window.lucide.createIcons();
}

/**
 * =========================================================================
 * APPLE-STYLE DYNAMIC BACKGROUND COLOR SHIFT (IMAGE 1 FIX)
 * The entire viewport canvas smoothly transitions color between sections
 * =========================================================================
 */
function updateDynamicBackground() {
  const pageView = document.getElementById('view-website');
  const mainHeader = document.getElementById('mainHeader');
  if (!pageView) return;

  if (state.currentView !== 'website') {
    if (mainHeader) {
      mainHeader.classList.remove('nav-light');
      mainHeader.classList.add('nav-dark');
    }
    return;
  }

  const sections = Array.from(document.querySelectorAll('#view-website [data-theme]'));
  if (sections.length === 0) return;

  const scrollY = window.scrollY || window.pageYOffset;
  const viewportCenter = scrollY + (window.innerHeight * 0.45);

  let currentSection = sections[0];
  for (const sec of sections) {
    const top = sec.offsetTop;
    if (viewportCenter >= top - 80) {
      currentSection = sec;
    }
  }

  const theme = currentSection.getAttribute('data-theme') || 'light';
  const bg = currentSection.getAttribute('data-bg') || (theme === 'dark' ? '#17130F' : '#F3EEE7');

  pageView.style.backgroundColor = bg;

  if (theme === 'dark') {
    pageView.classList.add('theme-dark');
    pageView.classList.remove('theme-light');
    if (mainHeader) {
      mainHeader.classList.remove('nav-light');
      mainHeader.classList.add('nav-dark');
    }
  } else {
    pageView.classList.remove('theme-dark');
    pageView.classList.add('theme-light');
    if (mainHeader) {
      mainHeader.classList.remove('nav-dark');
      mainHeader.classList.add('nav-light');
    }
  }
}

function initDynamicBackgroundShifter() {
  window.addEventListener('scroll', updateDynamicBackground, { passive: true });
  if (state.lenis) {
    state.lenis.on('scroll', updateDynamicBackground);
  }
  updateDynamicBackground();
}

/**
 * =========================================================================
 * INTERACTIVE 3D PARALLAX FOR HERO DEVICE STAGE (POINT 3 MOTION)
 * =========================================================================
 */
function initHeroParallax() {
  const stage = document.getElementById('heroVisualStage');
  const frame = document.getElementById('heroDeviceFrame');
  if (!stage || !frame) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX = x * 8;
    mouseY = y * -8;
  });

  stage.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
  });

  function updateParallax() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    frame.style.transform = `rotateY(${currentX.toFixed(2)}deg) rotateX(${currentY.toFixed(2)}deg) translateY(${(-Math.abs(currentX) * 0.4).toFixed(1)}px)`;
    requestAnimationFrame(updateParallax);
  }
  requestAnimationFrame(updateParallax);
}

/**
 * =========================================================================
 * FLUID METRIC COUNTER ANIMATIONS (POINT 3 MOTION)
 * =========================================================================
 */
function initCounterAnimations() {
  if (typeof ScrollTrigger === 'undefined') return;

  const actuarialTiles = document.querySelectorAll('.abg-num');
  actuarialTiles.forEach(tile => {
    const originalText = tile.innerText;

    ScrollTrigger.create({
      trigger: tile,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (originalText.includes('+15.4')) {
          animateValue(tile, 0, 15.4, 1500, (v) => `+${v.toFixed(1)} Yrs`);
        } else if (originalText.includes('650,000')) {
          animateValue(tile, 0, 650000, 1600, (v) => `$${Math.round(v).toLocaleString()}+`);
        } else if (originalText.includes('4.28')) {
          animateValue(tile, 1, 4.28, 1400, (v) => `${v.toFixed(2)}×`);
        }
      }
    });
  });

  function animateValue(obj, start, end, duration, formatFn) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeProgress;
      obj.innerText = formatFn(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }
}

function jumpToChildProfile(childKey) {
  switchView('portal', 'overview', childKey);
}

/**
 * =========================================================================
 * CLOCK & SIDEBAR TABS
 * =========================================================================
 */
function initClock() {
  const clockEl = document.getElementById('liveClock');
  function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeStr = now.toLocaleTimeString('en-GB', options);
    if (clockEl) clockEl.innerText = `${timeStr} SGT`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

function initTabs() {
  const navButtons = document.querySelectorAll('.sidebar-nav .nav-item');
  const viewPanels = document.querySelectorAll('.content-viewport .view-panel');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;

      navButtons.forEach(b => b.classList.remove('active'));
      viewPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`tab-${tabId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      // Responsive chart resize when switching tabs
      setTimeout(() => {
        if (tabId === 'holo-integration' && state.charts.timeline) {
          state.charts.timeline.resize();
        } else if (tabId === 'overview' && state.charts.radar) {
          state.charts.radar.resize();
        } else if (tabId === 'roi-calculator' && state.charts.roi) {
          state.charts.roi.resize();
        }
      }, 50);
    });
  });
}

function initChildSelector() {
  const selector = document.getElementById('childSelector');
  if (selector) {
    selector.addEventListener('change', (e) => {
      const key = e.target.value;
      loadChildProfile(key);
    });
  }
}

/**
 * =========================================================================
 * PROFILE LOADER & HOLOGRAPHIC OS TELEMETRY SYNC
 * =========================================================================
 */
function loadChildProfile(key) {
  state.currentChild = key;
  const child = childrenData[key];
  if (!child) return;

  // Header donor-recipient pill
  const pdrDonorName = document.getElementById('pdrDonorName');
  if (pdrDonorName) pdrDonorName.innerText = child.donorName.split(',')[0];
  const pdrRecipientName = document.getElementById('pdrRecipientName');
  if (pdrRecipientName) pdrRecipientName.innerText = `${child.name.split(' ')[0]} (${child.bioAge})`;

  // Top banner cognitive rank
  const bannerRank = document.getElementById('bannerCognitiveRank');
  if (bannerRank) bannerRank.innerText = child.cognitiveRank;

  // Headset Unit ID
  const dockUnit = document.getElementById('dockUnitId');
  if (dockUnit) dockUnit.innerText = child.dockUnitId;

  // Member Profile Header Card in Tab 0
  const mphDonorInitials = document.getElementById('mphDonorInitials');
  if (mphDonorInitials) mphDonorInitials.innerText = child.donorInitials;
  const mphDonorName = document.getElementById('mphDonorName');
  if (mphDonorName) mphDonorName.innerText = child.donorName;
  const mphDonorRole = document.getElementById('mphDonorRole');
  if (mphDonorRole) mphDonorRole.innerText = child.donorRole;

  const mphRecipientAvatar = document.getElementById('mphRecipientAvatar');
  if (mphRecipientAvatar) mphRecipientAvatar.src = child.avatar;
  const mphRecipientName = document.getElementById('mphRecipientName');
  if (mphRecipientName) mphRecipientName.innerText = `${child.name.split('(')[0].trim()} (${child.bioAge})`;
  const mphRecipientRole = document.getElementById('mphRecipientRole');
  if (mphRecipientRole) mphRecipientRole.innerText = child.pathway;

  const mphIntegrationPct = document.getElementById('mphIntegrationPct');
  if (mphIntegrationPct) mphIntegrationPct.innerText = `${child.integrationPct}%`;

  // Holographic OS — Screen A (Triad Pills)
  const triadExpVal = document.getElementById('triadExpVal');
  if (triadExpVal) triadExpVal.innerText = `${child.triad.experience}%`;
  const triadSkillsVal = document.getElementById('triadSkillsVal');
  if (triadSkillsVal) triadSkillsVal.innerText = `${child.triad.skills}%`;
  const triadKnowVal = document.getElementById('triadKnowVal');
  if (triadKnowVal) triadKnowVal.innerText = `${child.triad.knowledge}%`;

  // Holographic OS — Screen B (Quotes)
  const portalDonorQuote = document.getElementById('portalDonorQuote');
  if (portalDonorQuote) portalDonorQuote.innerText = child.donorQuote;
  const portalDonorSig = document.getElementById('portalDonorSig');
  if (portalDonorSig) portalDonorSig.innerText = child.donorName;

  const publicDonorQuote = document.getElementById('publicDonorQuote');
  if (publicDonorQuote) publicDonorQuote.innerText = child.donorQuote;
  const publicDonorSig = document.getElementById('publicDonorSig');
  if (publicDonorSig) publicDonorSig.innerText = child.donorName;

  // Holographic OS — Screen C (Dial Gauge & Sliders)
  const circumference = 301.6; // 2 * PI * 48
  const offset = circumference * (1 - child.integrationPct / 100);

  const portalDialNum = document.getElementById('portalDialNum');
  if (portalDialNum) portalDialNum.innerText = `${child.integrationPct}%`;
  const portalDialProgress = document.getElementById('portalDialProgress');
  if (portalDialProgress) portalDialProgress.style.strokeDashoffset = offset;

  const publicDialNum = document.getElementById('publicDialNum');
  if (publicDialNum) publicDialNum.innerText = `${child.integrationPct}%`;

  // Screen C Channel Progress
  const ctExpVal = document.getElementById('ctExpVal');
  if (ctExpVal) ctExpVal.innerText = `${child.triad.experience}%`;
  const ctExpBar = document.getElementById('ctExpBar');
  if (ctExpBar) ctExpBar.style.width = `${child.triad.experience}%`;

  const ctSkillsVal = document.getElementById('ctSkillsVal');
  if (ctSkillsVal) ctSkillsVal.innerText = `${child.triad.skills}%`;
  const ctSkillsBar = document.getElementById('ctSkillsBar');
  if (ctSkillsBar) ctSkillsBar.style.width = `${child.triad.skills}%`;

  const ctKnowVal = document.getElementById('ctKnowVal');
  if (ctKnowVal) ctKnowVal.innerText = `${child.triad.knowledge}%`;
  const ctKnowBar = document.getElementById('ctKnowBar');
  if (ctKnowBar) ctKnowBar.style.width = `${child.triad.knowledge}%`;

  const portalEquivExp = document.getElementById('portalEquivExp');
  if (portalEquivExp) portalEquivExp.innerText = child.equivExp;
  const publicEquivExp = document.getElementById('publicEquivExp');
  if (publicEquivExp) publicEquivExp.innerText = child.equivExp;

  // Hero Edge-Following Annotations (Apple-Style)
  const heroStatIntegration = document.getElementById('heroStatIntegration');
  if (heroStatIntegration) heroStatIntegration.innerText = `${child.integrationPct}%`;
  const heroStatEquivExp = document.getElementById('heroStatEquivExp');
  if (heroStatEquivExp) {
    const yearsNum = child.equivExp.replace('YEARS GAINED', '').replace('~', '').trim();
    heroStatEquivExp.innerText = `~${yearsNum}`;
  }

  // Transfer Statistics in Tab 0
  const statSessions = document.getElementById('statSessionsCount');
  if (statSessions) statSessions.innerText = child.sessionsCount;
  const statHours = document.getElementById('statTotalHours');
  if (statHours) statHours.innerText = child.sleepHours;
  const statSync = document.getElementById('statSyncRate');
  if (statSync) statSync.innerText = child.syncEfficiency;

  // 6-Month Timeline Chart Update
  updateTimelineChart(child.timelineData);

  // Tab 1 Hero Dossier Elements
  const childAvatarImg = document.getElementById('childAvatarImg');
  if (childAvatarImg) childAvatarImg.src = child.avatar;
  const childBadgeOverlay = document.getElementById('childBadgeOverlay');
  if (childBadgeOverlay) childBadgeOverlay.innerHTML = `<span>${child.badgeLabel}</span>`;
  const childIdTag = document.getElementById('childIdTag');
  if (childIdTag) childIdTag.innerText = child.id;
  const childName = document.getElementById('childName');
  if (childName) childName.innerText = child.name;
  const childPathwayTag = document.getElementById('childPathwayTag');
  if (childPathwayTag) childPathwayTag.innerText = child.pathway;
  const childDynastyLineage = document.getElementById('childDynastyLineage');
  if (childDynastyLineage) childDynastyLineage.innerText = child.lineage;
  const childEfficiencyKpi = document.getElementById('childEfficiencyKpi');
  if (childEfficiencyKpi) childEfficiencyKpi.innerText = child.efficiency;
  const childBioAge = document.getElementById('childBioAge');
  if (childBioAge) childBioAge.innerText = child.bioAge;
  const childPracticeAge = document.getElementById('childPracticeAge');
  if (childPracticeAge) childPracticeAge.innerText = child.practiceAge;
  const childProjectedStart = document.getElementById('childProjectedStart');
  if (childProjectedStart) childProjectedStart.innerText = child.projectedStart;
  const childAccreditationPct = document.getElementById('childAccreditationPct');
  if (childAccreditationPct) childAccreditationPct.innerText = child.accreditationPct;
  const childVoiceQuote = document.getElementById('childVoiceQuote');
  if (childVoiceQuote) childVoiceQuote.innerText = child.voiceQuote;

  // Child Name in ROI & Certification tabs
  const roiChildName = document.getElementById('roiChildName');
  if (roiChildName) roiChildName.innerText = child.shortName;
  const certChildName = document.getElementById('certChildName');
  if (certChildName) certChildName.innerText = child.shortName;

  // Active Cert banner
  const certActiveTitle = document.getElementById('certActiveTitle');
  if (certActiveTitle) certActiveTitle.innerText = child.certTitle;
  const certActiveDesc = document.getElementById('certActiveDesc');
  if (certActiveDesc) certActiveDesc.innerText = child.certDesc;
  const certActivePct = document.getElementById('certActivePct');
  if (certActivePct) certActivePct.innerText = child.certPct;

  // Dynamic Candidate Certificate updates in Tab 4 & Modal
  const archivalCertImg = document.getElementById('archivalCertImg');
  if (archivalCertImg && child.certImage) archivalCertImg.src = child.certImage;
  const archivalCertTitle = document.getElementById('archivalCertTitle');
  if (archivalCertTitle) archivalCertTitle.innerText = `${child.shortName}'s Statutory Accreditation Certificate`;
  const archivalCertDesc = document.getElementById('archivalCertDesc');
  if (archivalCertDesc) archivalCertDesc.innerText = `Official statutory license verifying ${child.shortName}'s successful completion of ${child.pathway.toLowerCase()}.`;

  const certModalFullImg = document.getElementById('certModalFullImg');
  if (certModalFullImg && child.certImage) certModalFullImg.src = child.certImage;
  const certModalCaptionTitle = document.getElementById('certModalCaptionTitle');
  if (certModalCaptionTitle && child.certModalTitle) certModalCaptionTitle.innerText = child.certModalTitle;
  const certModalCaptionSub = document.getElementById('certModalCaptionSub');
  if (certModalCaptionSub && child.certModalSub) certModalCaptionSub.innerText = child.certModalSub;

  // Render Pedigree Tree, Education, Certifications, Curriculum
  renderFamilyTreeVisual(child.familyTree);
  renderEducationTimeline(child.education);
  renderCertificationsGrid(child.certifications);
  renderCurriculumTable(child.curriculum);

  // Update Radar Chart & Breakdown
  updateRadarChart(child.radarLabels, child.radarValues);
  renderTalentBreakdown(child.radarLabels, child.radarValues);

  // Update ROI calculator defaults
  syncRoiDefaultsForChild(child);

  if (window.lucide) window.lucide.createIcons();
}

/**
 * =========================================================================
 * 6-MONTH TRANSMISSION TIMELINE (CHART.JS)
 * =========================================================================
 */
function updateTimelineChart(timelineData) {
  const chartCanvas = document.getElementById('integrationTimelineChart');
  if (!chartCanvas) return;
  const ctx = chartCanvas.getContext('2d');

  const months = ['Month 01', 'Month 02', 'Month 03', 'Month 04 (Current)', 'Month 05 (Proj.)', 'Month 06 (Proj.)'];

  if (state.charts.timeline) {
    state.charts.timeline.data.datasets[0].data = timelineData.volume;
    state.charts.timeline.data.datasets[1].data = timelineData.integration;
    state.charts.timeline.update();
    return;
  }

  // Create subtle gradient for bars
  const barGradient = ctx.createLinearGradient(0, 0, 0, 200);
  barGradient.addColorStop(0, 'rgba(216, 110, 75, 0.7)');
  barGradient.addColorStop(1, 'rgba(56, 40, 30, 0.25)');

  state.charts.timeline = new Chart(ctx, {
    data: {
      labels: months,
      datasets: [
        {
          type: 'bar',
          label: 'Synaptic Accretion (GB/mo)',
          data: timelineData.volume,
          backgroundColor: barGradient,
          borderColor: '#D86E4B',
          borderWidth: 1.5,
          borderRadius: 6,
          yAxisID: 'yVolume'
        },
        {
          type: 'line',
          label: 'Cumulative Integration (%)',
          data: timelineData.integration,
          borderColor: '#E4C8A4',
          backgroundColor: 'rgba(228, 200, 164, 0.1)',
          borderWidth: 2.5,
          pointBackgroundColor: '#F3EEE7',
          pointBorderColor: '#D86E4B',
          pointRadius: 4,
          tension: 0.35,
          fill: true,
          yAxisID: 'yPct'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        x: {
          grid: { color: 'rgba(228, 200, 164, 0.06)' },
          ticks: { color: '#AFA399', font: { family: 'Inter', size: 10 } }
        },
        yVolume: {
          type: 'linear',
          position: 'left',
          grid: { color: 'rgba(228, 200, 164, 0.06)' },
          ticks: {
            color: '#AFA399',
            font: { family: 'JetBrains Mono', size: 10 },
            callback: (val) => `${val} GB`
          }
        },
        yPct: {
          type: 'linear',
          position: 'right',
          min: 0,
          max: 100,
          grid: { display: false },
          ticks: {
            color: '#E4C8A4',
            font: { family: 'JetBrains Mono', size: 10 },
            callback: (val) => `${val}%`
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#F3EEE7',
            font: { family: 'Inter', size: 11 }
          }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}`
          }
        }
      }
    }
  });
}

/**
 * =========================================================================
 * INTERACTIVE 3D BRAIN PARTICLE / SYNAPSE CANVAS
 * =========================================================================
 */
function init3DBrainSimulation() {
  const canvases = [
    document.getElementById('neuralBrainCanvas'),
    document.getElementById('portalBrainCanvas')
  ].filter(Boolean);

  if (canvases.length === 0) return;

  // Generate 3D point cloud resembling two brain hemispheres
  const nodeCount = 52;
  const nodes = [];
  for (let i = 0; i < nodeCount; i++) {
    const isLeft = i % 2 === 0;
    const u = Math.random() * Math.PI * 2;
    const v = (Math.random() - 0.5) * Math.PI;
    const rx = 65 + Math.random() * 15;
    const ry = 45 + Math.random() * 10;
    const rz = 40 + Math.random() * 12;

    const x = rx * Math.cos(v) * Math.cos(u) + (isLeft ? -15 : 15);
    const y = ry * Math.sin(v);
    const z = rz * Math.cos(v) * Math.sin(u);

    nodes.push({
      x, y, z,
      baseRadius: 1.8 + Math.random() * 1.6,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.03 + Math.random() * 0.04
    });
  }

  let angleY = 0;
  let angleX = 0.2;

  function renderBrain() {
    angleY += 0.007;

    canvases.forEach(canvas => {
      // Skip if container is hidden
      if (canvas.offsetParent === null) return;

      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Rotate nodes
      const projectedNodes = nodes.map(node => {
        node.pulsePhase += node.pulseSpeed;

        // Y-axis rotation
        let x1 = node.x * Math.cos(angleY) - node.z * Math.sin(angleY);
        let z1 = node.z * Math.cos(angleY) + node.x * Math.sin(angleY);

        // X-axis rotation
        let y2 = node.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = z1 * Math.cos(angleX) + node.y * Math.sin(angleX);

        // Perspective projection
        const fov = 200;
        const scale = fov / (fov + z2 + 80);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const currentRadius = (node.baseRadius + Math.sin(node.pulsePhase) * 0.8) * scale;
        const alpha = Math.max(0.15, Math.min(1, (z2 + 60) / 120));

        return { px, py, z: z2, scale, radius: currentRadius, alpha };
      });

      // Sort by depth (back to front)
      projectedNodes.sort((a, b) => b.z - a.z);

      // Draw connecting synaptic axons
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dist = Math.hypot(n1.px - n2.px, n1.py - n2.py);

          if (dist < 46) {
            const lineAlpha = (1 - dist / 46) * 0.35 * Math.min(n1.alpha, n2.alpha);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(228, 200, 164, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(n1.px, n1.py);
            ctx.lineTo(n2.px, n2.py);
            ctx.stroke();
          }
        }
      }

      // Draw neural synaptic nodes
      projectedNodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.px, node.py, Math.max(1, node.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 110, 75, ${node.alpha * 0.9})`;
        ctx.shadowColor = '#D86E4B';
        ctx.shadowBlur = 6 * node.scale;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(node.px, node.py, Math.max(0.6, node.radius * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 238, 231, ${node.alpha})`;
        ctx.fill();
      });
    });

    state.brainAnimationId = requestAnimationFrame(renderBrain);
  }

  renderBrain();
}

/**
 * =========================================================================
 * 23ANDME STYLE PEDIGREE TREE
 * =========================================================================
 */
function renderFamilyTreeVisual(tree) {
  const container = document.getElementById('dynastyTreeContainer');
  if (!container) return;
  container.innerHTML = '';

  // Gen 01: Grandparents
  const tier1 = document.createElement('div');
  tier1.className = 'tree-gen-tier';
  tier1.innerHTML = `
    <span class="gen-tier-label">GEN 01 — GRANDPARENTS (ARCHIVED PEDIGREE)</span>
    <div class="gen-nodes-row">
      <div class="dynasty-node-card">
        <div class="node-initials">${tree.gen01[0].initials}</div>
        <div class="node-info">
          <span class="node-name">${tree.gen01[0].name}</span>
          <span class="node-role">${tree.gen01[0].role}</span>
          <span class="node-transmitted text-champagne"><i data-lucide="check" class="icon-xxs"></i> ${tree.gen01[0].transmitted}</span>
        </div>
      </div>
      <div class="dynasty-node-card">
        <div class="node-initials">${tree.gen01[1].initials}</div>
        <div class="node-info">
          <span class="node-name">${tree.gen01[1].name}</span>
          <span class="node-role">${tree.gen01[1].role}</span>
          <span class="node-transmitted text-champagne"><i data-lucide="check" class="icon-xxs"></i> ${tree.gen01[1].transmitted}</span>
        </div>
      </div>
    </div>
    <div class="tree-connector-beam"></div>
  `;

  // Gen 02: Parents
  const tier2 = document.createElement('div');
  tier2.className = 'tree-gen-tier';
  tier2.innerHTML = `
    <span class="gen-tier-label">GEN 02 — PARENTS (PRIMARY KNOWLEDGE DONORS)</span>
    <div class="gen-nodes-row">
      <div class="dynasty-node-card ${tree.gen02[0].isPrimaryDonor ? 'primary-donor' : ''}">
        <div class="node-initials">${tree.gen02[0].initials}</div>
        <div class="node-info">
          <span class="node-name">${tree.gen02[0].name}</span>
          <span class="node-role">${tree.gen02[0].role}</span>
          <span class="node-transmitted text-amber"><i data-lucide="zap" class="icon-xxs"></i> ${tree.gen02[0].transmitted}</span>
        </div>
      </div>
      <div class="dynasty-node-card ${tree.gen02[1].isPrimaryDonor ? 'primary-donor' : ''}">
        <div class="node-initials">${tree.gen02[1].initials}</div>
        <div class="node-info">
          <span class="node-name">${tree.gen02[1].name}</span>
          <span class="node-role">${tree.gen02[1].role}</span>
          <span class="node-transmitted text-amber"><i data-lucide="zap" class="icon-xxs"></i> ${tree.gen02[1].transmitted}</span>
        </div>
      </div>
    </div>
    <div class="tree-connector-beam"></div>
  `;

  // Gen 03: Subject
  const tier3 = document.createElement('div');
  tier3.className = 'tree-gen-tier';
  tier3.innerHTML = `
    <span class="gen-tier-label">GEN 03 — MONITORED SUCCESSOR (RECIPIENT)</span>
    <div class="dynasty-node-card primary-donor">
      <img src="${tree.gen03.avatar}" alt="${tree.gen03.name}" class="node-avatar-sm">
      <div class="node-info">
        <span class="node-name">${tree.gen03.name}</span>
        <span class="node-role">${tree.gen03.role}</span>
        <span class="node-transmitted text-emerald"><i data-lucide="check-circle" class="icon-xxs"></i> ${tree.gen03.transmitted}</span>
      </div>
    </div>
  `;

  container.appendChild(tier1);
  container.appendChild(tier2);
  container.appendChild(tier3);

  if (window.lucide) window.lucide.createIcons();
}

/**
 * =========================================================================
 * EDUCATION TIMELINE, CERTS & CURRICULUM
 * =========================================================================
 */
function renderEducationTimeline(eduData) {
  const container = document.getElementById('eduTimeline');
  if (!container) return;
  container.innerHTML = '';
  eduData.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="edu-bullet">${item.bullet}</span>
      <div>${item.desc}</div>
    `;
    container.appendChild(li);
  });
}

function renderCertificationsGrid(certs) {
  const container = document.getElementById('certificationsGrid');
  if (!container) return;
  container.innerHTML = '';

  certs.forEach(cert => {
    const card = document.createElement('div');
    const statusClass = cert.status;
    card.className = `cert-milestone-card ${statusClass}`;

    card.innerHTML = `
      <div>
        <div class="cert-card-top">
          <span class="cert-age-badge">${cert.age}</span>
          <span class="cert-status-tag ${statusClass}">${cert.statusText}</span>
        </div>
        <h4 class="cert-title-text">${cert.title}</h4>
        <p class="cert-desc-text">${cert.desc}</p>
      </div>
      <div class="cert-footer-text">
        <span>${cert.footer}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderCurriculumTable(rows) {
  const tbody = document.getElementById('curriculumTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  rows.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="font-mono text-amber">${r.age}</td>
      <td class="text-grey">${r.moe}</td>
      <td class="text-pearl font-semibold">${r.heirloom}</td>
      <td><span class="badge-amber">${r.equiv}</span></td>
      <td><span class="status-pill verified">${r.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

/**
 * =========================================================================
 * TALENTS RADAR & BREAKDOWN LIST
 * =========================================================================
 */
function renderTalentBreakdown(labels, values) {
  const container = document.getElementById('talentBreakdownList');
  if (!container) return;
  container.innerHTML = '';
  labels.forEach((label, i) => {
    const val = values[i];
    const item = document.createElement('div');
    item.className = 'tb-item';
    item.innerHTML = `
      <span class="tb-label">${label}</span>
      <span class="tb-val">${val.toFixed(1)}%</span>
    `;
    container.appendChild(item);
  });
}

function updateRadarChart(labels, values) {
  const chartCanvas = document.getElementById('talentsRadarChart');
  if (!chartCanvas) return;
  const ctx = chartCanvas.getContext('2d');

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
        backgroundColor: 'rgba(216, 110, 75, 0.22)',
        borderColor: '#D86E4B',
        borderWidth: 2,
        pointBackgroundColor: '#E4C8A4',
        pointBorderColor: '#17130F',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#D86E4B',
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
            color: 'rgba(228, 200, 164, 0.1)'
          },
          angleLines: {
            color: 'rgba(228, 200, 164, 0.15)'
          },
          pointLabels: {
            color: '#AFA399',
            font: {
              family: 'Inter',
              size: 11,
              weight: '600'
            }
          }
        }
      },
      plugins: {
        legend: { display: false },
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
 * GENERATIONAL ROI CALCULATOR ENGINE
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
    if (input) {
      input.addEventListener('input', updateRoiCalculations);
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const child = childrenData[state.currentChild];
      if (child) syncRoiDefaultsForChild(child);
    });
  }

  updateRoiCalculations();
}

function syncRoiDefaultsForChild(child) {
  const inputInvestment = document.getElementById('inputInvestment');
  const inputPracticeAge = document.getElementById('inputPracticeAge');
  const inputStartingSalary = document.getElementById('inputStartingSalary');
  const inputTuitionSaved = document.getElementById('inputTuitionSaved');

  if (inputInvestment) inputInvestment.value = child.defaultInvestment;
  if (inputPracticeAge) inputPracticeAge.value = child.defaultPracticeAge;
  if (inputStartingSalary) inputStartingSalary.value = child.defaultStartingSalary;
  if (inputTuitionSaved) inputTuitionSaved.value = child.defaultTuitionSaved;
  updateRoiCalculations();
}

function updateRoiCalculations() {
  const inputInvestment = document.getElementById('inputInvestment');
  if (!inputInvestment) return;

  const investment = parseFloat(inputInvestment.value);
  const practiceAge = parseFloat(document.getElementById('inputPracticeAge').value);
  const startingSalary = parseFloat(document.getElementById('inputStartingSalary').value);
  const tuitionSaved = parseFloat(document.getElementById('inputTuitionSaved').value);
  const useCompound = document.getElementById('toggleInflation').checked;
  const usePrestige = document.getElementById('toggleSocialPrestige').checked;

  document.getElementById('valInvestment').innerText = `$${investment.toLocaleString()} SGD`;
  document.getElementById('valPracticeAge').innerText = `Age ${practiceAge.toFixed(1)}`;
  document.getElementById('valStartingSalary').innerText = `$${startingSalary.toLocaleString()} SGD/yr`;
  document.getElementById('valTuitionSaved').innerText = `$${tuitionSaved.toLocaleString()} SGD`;

  const traditionalStartAge = 28.0;
  const yearsGained = Math.max(0, traditionalStartAge - practiceAge);
  const effectiveSalary = usePrestige ? startingSalary * 1.20 : startingSalary;

  let breakEvenAge = practiceAge;
  const netDeficit = investment - (tuitionSaved * 0.4);
  if (netDeficit <= 0) {
    breakEvenAge = Math.min(practiceAge, 11.4);
  } else {
    const yearsToRecover = netDeficit / effectiveSalary;
    breakEvenAge = practiceAge + yearsToRecover;
  }

  document.getElementById('kpiBreakEvenAge').innerText = `AGE ${breakEvenAge.toFixed(1)}`;
  document.getElementById('statYearsGained').innerText = `+${yearsGained.toFixed(1)} Yrs`;

  let heirloomCumulative = -investment + tuitionSaved;
  let traditionalCumulative = 0;

  const ages = [];
  const heirloomSeries = [];
  const traditionalSeries = [];
  const annualGrowthRate = useCompound ? 0.055 : 0.0;

  for (let age = 10; age <= 30; age++) {
    ages.push(`Age ${age}`);

    if (age >= practiceAge) {
      const yearsInPractice = age - practiceAge;
      const currentYearSalary = effectiveSalary * Math.pow(1.06, yearsInPractice);
      heirloomCumulative += currentYearSalary;
    }
    if (useCompound && heirloomCumulative > 0) {
      heirloomCumulative *= (1 + annualGrowthRate);
    }

    if (age >= 10 && age < traditionalStartAge) {
      const annualTuitionCost = tuitionSaved / (traditionalStartAge - 10);
      traditionalCumulative -= annualTuitionCost;
    } else if (age >= traditionalStartAge) {
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

  renderRoiComparisonChart(ages, heirloomSeries, traditionalSeries);
}

function renderRoiComparisonChart(labels, heirloomData, traditionalData) {
  const chartCanvas = document.getElementById('roiComparisonChart');
  if (!chartCanvas) return;
  const ctx = chartCanvas.getContext('2d');

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
          borderColor: '#D86E4B',
          backgroundColor: 'rgba(216, 110, 75, 0.12)',
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: 2,
          pointHoverRadius: 5
        },
        {
          label: 'Traditional Education Path (NUS/Overseas)',
          data: traditionalData,
          borderColor: '#AFA399',
          backgroundColor: 'rgba(175, 163, 153, 0.05)',
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
          grid: { color: 'rgba(228, 200, 164, 0.05)' },
          ticks: { color: '#AFA399', font: { size: 10 } }
        },
        y: {
          grid: { color: 'rgba(228, 200, 164, 0.06)' },
          ticks: {
            color: '#AFA399',
            font: { family: 'JetBrains Mono', size: 10 },
            callback: (val) => `$${(val / 1000000).toFixed(1)}M`
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#F3EEE7',
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
        'Displayed in the study of Dr. Marcus Tan: Three generations of clinical surgical leaders in Singapore. The grandfather, Prof. K.L. Tan (seated center in white coat and stethoscope), established the family trust that funded Ryan’s instant transmission.'
      );
    });
  }

  const viewCertBtn = document.getElementById('viewOfficialCertBtn');
  if (viewCertBtn) {
    viewCertBtn.addEventListener('click', openCertModal);
  }

  const lbModal = document.getElementById('lightboxModal');
  if (lbModal) {
    lbModal.addEventListener('click', (e) => {
      if (e.target.id === 'lightboxModal') closeLightbox();
    });
  }

  const certModal = document.getElementById('certificateModal');
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target.id === 'certificateModal') closeCertModal();
    });
  }
}

function openLightbox(imgSrc, title, desc) {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxTitle').innerText = title;
  document.getElementById('lightboxDesc').innerText = desc;
  modal.classList.add('open');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('open');
}

function openCurrentCandidateCertLightbox() {
  const child = childrenData[state.currentChild] || childrenData.ryan;
  if (!child) return;
  openLightbox(child.certImage, child.certLightboxTitle, child.certLightboxDesc);
}

function openCertModal() {
  const child = childrenData[state.currentChild] || childrenData.ryan;
  const modal = document.getElementById('certificateModal');
  const fullImg = document.getElementById('certModalFullImg');
  const capTitle = document.getElementById('certModalCaptionTitle');
  const capSub = document.getElementById('certModalCaptionSub');
  if (fullImg && child && child.certImage) fullImg.src = child.certImage;
  if (capTitle && child && child.certModalTitle) capTitle.innerText = child.certModalTitle;
  if (capSub && child && child.certModalSub) capSub.innerText = child.certModalSub;
  if (modal) modal.classList.add('open');
}

function closeCertModal() {
  const modal = document.getElementById('certificateModal');
  if (modal) modal.classList.remove('open');
}
