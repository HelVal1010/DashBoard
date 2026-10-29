const titles = [
  { id: 'hero-website', kicker: null, badge: 'PREMIUM GENERATIONAL INTELLIGENCE', heading: 'Your hard work. Their head start.' },
  { id: '', kicker: 'THE HEIRLOOM DOCTRINE', badge: null, heading: 'EVERYTHING YOU\'VE BECOME' },
  { id: 'section-holo-os', kicker: null, badge: '02 — HOLOGRAPHIC TELEMETRY OS', heading: 'Holographic Neural Telemetry OS' },
  { id: 'section-pathways', kicker: null, badge: '03 — SUCCESSOR PROFILES', heading: 'Three Dynasties. Prepared to Lead.' },
  { id: 'section-actuarial', kicker: null, badge: '04 — ACTUARIAL ACCELERATION', heading: 'The Actuarial Reality' },
  { id: 'section-gallery', kicker: null, badge: '05 — ARTEFACT ARCHIVE', heading: 'Archival Artefacts & Public Record' }
];

function getDisplaySectionTitle(sec, index) {
  if (sec.id === 'hero-website') return 'HEIRLOOM OVERVIEW';
  if (sec.kicker) return sec.kicker.trim().toUpperCase();
  if (sec.badge) {
    return sec.badge.replace(/^\d+[\s—\-\.]*/, '').trim().toUpperCase();
  }
  if (sec.heading) {
    return sec.heading.trim().slice(0, 24).toUpperCase();
  }
  return `SECTION 0${index + 1}`;
}

titles.forEach((s, idx) => {
  console.log(`[${String(idx + 1).padStart(2, '0')}/06]:`, getDisplaySectionTitle(s, idx));
});
