// JavaScript Document
const header = document.querySelector("header");

//---------- Sticky Navbar ----------//

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener('scroll', stickyNavbar);

//---------- Scroll Reveal ---------//

let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "left", delay: 700 });


//---------- Tree Reveal ----------//
sr.reveal(".about-tree", { origin: "right", delay: 800 });


//---------- Skills Reveal ----------//
sr.reveal(".skill-container:nth-of-type(4n+1)", { origin: "bottom", delay: 400 });
sr.reveal(".skill-container:nth-of-type(4n+2)", { origin: "bottom", delay: 450 });
sr.reveal(".skill-container:nth-of-type(4n+3)", { origin: "bottom", delay: 500 });
sr.reveal(".skill-container:nth-of-type(4n)", { origin: "bottom", delay: 550 });

//---------- Grades Reveal ----------//
sr.reveal(".subject-container:nth-of-type(5n+1)", { origin: "left", delay: 700 });
sr.reveal(".subject-container:nth-of-type(5n+2)", { origin: "left", delay: 650 });
sr.reveal(".subject-container:nth-of-type(5n+3)", { origin: "left", delay: 600 });
sr.reveal(".subject-container:nth-of-type(5n+4)", { origin: "left", delay: 550 });
sr.reveal(".subject-container:nth-of-type(5n)", { origin: "left", delay: 500 });


//---------- Experieces Reveal ----------//
sr.reveal(".mix:nth-of-type(3n)", { origin: "right", delay: 450 });
sr.reveal(".mix:nth-of-type(3n+1)", { origin: "right", delay: 500 });
sr.reveal(".mix:nth-of-type(3n+2)", { origin: "right", delay: 550 });


//---------- Portfolio Filter Animation ----------//

let mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: '.prt-card',
  },
  animation: {
    duration: 500,
  }
});

//---------- dark ---------- //

const html = document.querySelector('html');
const check = document.querySelector('#nightmode');

check.addEventListener('click', function() {
  html.classList.toggle('dark')
});

//---------- burger menu ---------- //

const navBtn = document.querySelector('#navMenu');
const burgerBtn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#exitbtn');

burgerBtn.addEventListener('click', function() {
	navBtn.classList.add('burgered')
});
closeBtn.addEventListener('click', function() {
	navBtn.classList.remove('burgered');
	navBtn.classList.add('links');
})
