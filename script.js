// =========================================================
// CASE STUDY DATA
// Edit the "blocks" text anytime to sharpen the story —
// image paths point to /images
// =========================================================
const projects = {
  "branding": {
    title: "The Anytime Brand Family",
    meta: "Branding — Identity Systems",
    cover: "images/branding.jpg",
    blocks: [
      { h: "The problem", p: "A staffing and outsourcing group was launching several specialized recruitment brands at once — general staffing, outsourcing, financial leadership placement, and C-suite search — and needed each one to feel distinct while clearly belonging to the same family." },
      { h: "The approach", p: "Each identity was built around one visual metaphor tied to what that specific brand does: a magnifying glass for candidate search, an arm-over-the-shoulder mark for mentorship, a clock face for availability and time management. Every mark got full brand guidelines — color, typography, and logo variations — so the client's internal team could apply them consistently." },
      { h: "The outcome", p: "Four cohesive but clearly differentiated identities — People Anytime, Talents Anywhere, CFO Anytime, and C-Suite Anytime — each documented well enough to extend without ongoing design support." }
    ]
  },
  "packaging": {
    title: "Satin Fresh — Elev Hygiene",
    meta: "Packaging — Product & Campaign",
    cover: "images/packaging.jpg",
    blocks: [
      { h: "The problem", p: "Elev Hygiene was launching a new deodorant wipes line and needed more than a package design — the pouches, retail box, and marketing creative all had to work together as one launch." },
      { h: "The approach", p: "Designed five scent-variant pouches around a consistent botanical line-art motif, then extended that system into the retail box and a set of lifestyle ad templates — gym, travel, and everyday-use scenarios — so packaging and marketing reinforced the same visual language." },
      { h: "The outcome", p: "A complete go-to-market packaging suite: product pouches, retail box, and a rotating library of lifestyle campaign creative ready for launch across social and e-commerce." }
    ]
  },
  "shirts": {
    title: "Corporate & Sports Apparel",
    meta: "Apparel — Production Design",
    cover: "images/shirts.jpg",
    blocks: [
      { h: "The context", p: "Ongoing apparel production design at Kite and Crest and for freelance clients — spanning simple two-color corporate polos, reunion and event tees, and fully sublimated all-over-print sports jerseys for competitive darts teams." },
      { h: "The approach", p: "Every design is built with the print method in mind from the start — dye-sublimation color bleed, seam placement, and fabric type all shape the artwork, not just the visual concept." },
      { h: "The outcome", p: "A steady output of production-ready apparel designs that print cleanly and hold their color and detail through the sublimation process." }
    ]
  },
  "logos": {
    title: "Low-Res to Print-Ready",
    meta: "Logo — Vector Reconstruction",
    cover: "images/logos.jpg",
    blocks: [
      { h: "The problem", p: "Clients regularly arrive with only a low-resolution or raster version of their logo — pulled from an old business card, a scanned document, or a compressed web image — unusable for large-format printing or professional applications." },
      { h: "The approach", p: "Each logo is assessed for its key elements, then completely redrawn as clean vector art in Illustrator or CorelDraw, with manual touch-ups to edges, color, and detail so the rebuild faithfully matches the original at any scale." },
      { h: "The outcome", p: "Scalable, print-ready vector files delivered for clients across construction, community services, and retail — logos that now work on a building directory just as well as a business card." }
    ]
  },
  "email": {
    title: "Extreme MX Showdown & MusioLab",
    meta: "Email — Campaign Design",
    cover: "images/email.jpg",
    blocks: [
      { h: "The problem", p: "Two very different email campaigns needed to land with two very different audiences — a high-energy motorsport event pushing event registrations, and a subscription music platform pushing sign-ups." },
      { h: "The approach", p: "The motorsport email leans on bold typography and high-contrast action photography to create urgency; the MusioLab email uses a calmer, feature-led layout that walks through product benefits before asking for the sign-up." },
      { h: "The outcome", p: "Two mobile-friendly campaign designs, each structured around a single clear call to action repeated at natural breakpoints down the email." }
    ]
  },
  "social": {
    title: "DigiWorx Social Content",
    meta: "Social — Digital Marketing",
    cover: "images/social.jpg",
    blocks: [
      { h: "The problem", p: "A digital marketing agency needed a constant stream of on-brand social posts — service promotions, tips, industry commentary — without the feed starting to look repetitive." },
      { h: "The approach", p: "Built a flexible template system anchored by consistent brand colors and logo placement, adaptable to photography, illustration, or text-led layouts depending on what each post needed to say." },
      { h: "The outcome", p: "A recognizable, cohesive social presence sustained across dozens of posts spanning very different content types." }
    ]
  }
};

// ---------- Nav scroll state ----------
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
});

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

// ---------- Case study overlay ----------
const caseEl = document.getElementById("case");
const caseInner = document.getElementById("caseInner");
const caseClose = document.getElementById("caseClose");

function openCase(id){
  const proj = projects[id];
  if(!proj) return;

  caseInner.innerHTML = `
    <img class="case__cover" src="${proj.cover}" alt="${proj.title}">
    <span class="case__meta">${proj.meta}</span>
    <h2>${proj.title}</h2>
    ${proj.blocks.map(b => `
      <div class="case__block">
        <h4>${b.h}</h4>
        <p>${b.p}</p>
      </div>
    `).join("")}
  `;

  caseEl.classList.add("is-open");
  caseEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCase(){
  caseEl.classList.remove("is-open");
  caseEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("click", () => openCase(card.dataset.project));
});
caseClose.addEventListener("click", closeCase);
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeCase();
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
