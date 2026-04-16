// Typing
new Typed('#element', {
  strings: ['Full Stack Developer','Frontend Developer','Backend Developer'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior:'smooth' });
    }
  });
});

// Active Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if(window.scrollY >= section.offsetTop - 100){
      current = section.id;
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if(a.getAttribute("href") === `#${current}`){
      a.classList.add("active");
    }
  });
});

// Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
  card.style.opacity="0";
  card.style.transform="translateY(50px)";
});

window.addEventListener("scroll",()=>{
  cards.forEach(card=>{
    if(card.getBoundingClientRect().top < window.innerHeight-50){
      card.style.opacity="1";
      card.style.transform="translateY(0)";
    }
  });
});