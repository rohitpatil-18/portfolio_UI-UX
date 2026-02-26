/* =========================================
   MOBILE NAVIGATION
========================================= */

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

/* =========================================
   ACTIVE NAV LINK ON SCROLL
========================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function highlightNav() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active-link");
    }
  });
}

window.addEventListener("scroll", highlightNav);

/* =========================================
   SCROLL REVEAL (SUBTLE PRODUCT STYLE)
========================================= */

const revealElements = document.querySelectorAll(
  ".process-card, .project-card, .highlight-card, .creative-card"
);

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================================
   CASE STUDY DATA (CONVERSION FOCUSED)
========================================= */

const projects = [
{
  title: "Nursingwala – Healthcare Funnel Optimization",
  problem:
    "Users faced friction during healthcare service booking due to unclear structure and multiple steps.",
  strategy:
    "Redesigned booking funnel with simplified user flow, structured CTAs, and trust-building visual hierarchy.",
  outcome:
    "Improved clarity in service selection and streamlined intake experience.",
  tools:
    "HTML, CSS, JavaScript, PHP, MySQL",
  liveLink: "https://nursingwalacare.com/",
  // githubLink: "https://github.com/yourusername/nursingwala"
},
  {
    title: "Centralized E-Learning Platform",
    problem:
      "Students struggled with scattered academic tools and low navigation clarity.",
    strategy:
      "Designed a unified dashboard layout with logical workflow segmentation and simplified UI patterns.",
    outcome:
      "Enhanced usability and improved task completion flow.",
    tools:
      "HTML, CSS, JS, PHP, MySQL"
  },
  // {
  //   title: "Blockchain Voting System",
  //   problem:
  //     "Traditional systems lack transparency and user trust.",
  //   strategy:
  //     "Developed a clean voting interface integrated with decentralized smart contract backend.",
  //   outcome:
  //     "Demonstrated transparent, secure, and verifiable voting interaction.",
  //   tools:
  //     "Solidity, Hardhat, MetaMask"
  // }
];

const projectContainer = document.getElementById("projectContainer");

if (projectContainer) {
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
  <h3>${project.title}</h3>
  <p><strong>Problem:</strong> ${project.problem}</p>
  <p><strong>Strategy:</strong> ${project.strategy}</p>
  <p><strong>Outcome:</strong> ${project.outcome}</p>

  <p style="margin-top:12px; font-size:14px; color: var(--accent-light);">
    Tools: ${project.tools}
  </p>

  <div class="project-links">
    ${project.liveLink ? 
      `<a href="${project.liveLink}" target="_blank" class="project-btn">Live Project</a>` 
      : ""
    }
    ${project.githubLink ? 
      `<a href="${project.githubLink}" target="_blank" class="project-btn secondary">GitHub</a>` 
      : ""
    }
  </div>
`;

    projectContainer.appendChild(card);
  });
}

/* =========================================
   DYNAMIC COPYRIGHT YEAR
========================================= */

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* Floating subtle animation */

const socialIcons = document.querySelectorAll(".social-icon");

socialIcons.forEach((icon, index) => {
  icon.style.animation = `float 4s ease-in-out infinite`;
  icon.style.animationDelay = `${index * 0.3}s`;
});


/* =========================================
   PREMIUM GRADIENT CURSOR
========================================= */

const dot = document.querySelector(".cursor-dot");
const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

function animateGlow() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  glow.style.left = glowX + "px";
  glow.style.top = glowY + "px";

  requestAnimationFrame(animateGlow);
}

animateGlow();

/* Hover effect */

const interactiveElements = document.querySelectorAll(
  "a, button, .project-card, .creative-card"
);

interactiveElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    glow.classList.add("active");
  });

  el.addEventListener("mouseleave", () => {
    glow.classList.remove("active");
  });
});