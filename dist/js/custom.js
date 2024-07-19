const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Designing web", "Front-End Development", "Back-End Development"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = textArray[0].length; // Start at the end of the first text

// Initially display the first text
typedTextSpan.textContent = textArray[0];

// Initially hide the cursor
cursorSpan.style.display = "none";

function type() {
  cursorSpan.style.display = "inline-block"; // Ensure cursor is visible when typing starts
  if (charIndex < textArray[textArrayIndex].length) {
    cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(() => {
      cursorSpan.style.display = "none"; // Hide cursor when typing completes
      setTimeout(erase, newTextDelay);
    }, 500); // Add a short delay before hiding the cursor
  }
}

function erase() {
  cursorSpan.style.display = "inline-block"; // Ensure cursor is visible when erasing starts
  if (charIndex > 0) {
    cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    charIndex = 0;
    setTimeout(type, typingDelay);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // Start erasing after the initial text is shown
  setTimeout(() => setTimeout(erase, newTextDelay), newTextDelay);
});


jQuery(document).ready(function(){
  
  jQuery('.progress-bar-skill').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
});


function updateActiveLink(sectionId) {
  document.querySelectorAll('#main-nav a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === sectionId);
  });
}

document.querySelectorAll('#main-nav a, .hire-btn').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const sectionId = this.getAttribute('href');
      updateActiveLink(sectionId);
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', function() {
  let currentSection = '#home';  // Default to 'home' section
  document.querySelectorAll('section').forEach(section => {
      if (window.scrollY >= section.offsetTop - 50) {
          currentSection = `#${section.getAttribute('id')}`;
      }
  });
  updateActiveLink(currentSection);
});

document.addEventListener('DOMContentLoaded', function() {
  let currentSection = '#home';  // Default to 'home' section
  document.querySelectorAll('section').forEach(section => {
      if (window.scrollY >= section.offsetTop - 50) {
          currentSection = `#${section.getAttribute('id')}`;
      }
  });
  updateActiveLink(currentSection);
});

document.addEventListener('DOMContentLoaded', function() {
  const offcanvasLinks = document.querySelectorAll('.offcanvas-link');
  const offcanvas = document.getElementById('offCanvas');
  const bootstrapOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

  offcanvasLinks.forEach(link => {
      link.addEventListener('click', function() {
          bootstrapOffcanvas.hide();
      });
  });
});

