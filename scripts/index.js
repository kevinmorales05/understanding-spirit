//Handle the hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


//Get the current year for the copyright
const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;


const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;
