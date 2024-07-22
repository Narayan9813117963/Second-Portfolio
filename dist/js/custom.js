document.addEventListener("DOMContentLoaded", function() {

  // Typed Text Animation
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const textArray = ["Designing web", "Front-End Development", "Back-End Development"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 500;
  let textArrayIndex = 0;
  let charIndex = textArray[0].length;

  function type() {
    cursorSpan.style.display = "inline-block";
    if (charIndex < textArray[textArrayIndex].length) {
      cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(function() {
        cursorSpan.style.display = "none";
        setTimeout(erase, newTextDelay);
      }, 500);
    }
  }

  function erase() {
    cursorSpan.style.display = "inline-block";
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

  // Start typing animation after a delay
  setTimeout(function() {
    type();
  }, newTextDelay);

  // Smooth Scroll Functionality
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
    let currentSection = '#home';
    document.querySelectorAll('section').forEach(section => {
      if (window.scrollY >= section.offsetTop - 50) {
        currentSection = `#${section.getAttribute('id')}`;
      }
    });
    updateActiveLink(currentSection);
  });

  // Initial scroll detection and link update
  let currentSection = '#home';
  document.querySelectorAll('section').forEach(section => {
    if (window.scrollY >= section.offsetTop - 50) {
      currentSection = `#${section.getAttribute('id')}`;
    }
  });
  updateActiveLink(currentSection);

  // Set Home link initially active
  document.querySelector('#main-nav a[href="#home"]').classList.add('active');

  // Offcanvas menu functionality
  const offcanvasLinks = document.querySelectorAll('.offcanvas-link');
  const offcanvas = document.getElementById('offCanvas');
  const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvas);

  offcanvasLinks.forEach(link => {
    link.addEventListener('click', function() {
      bootstrapOffcanvas.hide();
    });
  });

  // jQuery animation for progress bars
  $('.progress-bar-skill').each(function() {
    $(this).find('.progress-content').animate({
      width: $(this).attr('data-percentage')
    }, 2000);

    $(this).find('.progress-number-mark').animate({
      left: $(this).attr('data-percentage')
    }, {
      duration: 2000,
      step: function(now, fx) {
        var data = Math.round(now);
        $(this).find('.percent').html(data + '%');
      }
    });
  });

  // Fade in content after spinner animation
  $(".loader").fadeOut(3000, function() {
    $(".main-container").fadeIn(1000);
  });

});
