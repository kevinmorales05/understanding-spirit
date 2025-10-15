//Handle the hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


//Get the current year for the copyright
const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;




// Handle form submission
const form = document.getElementById("subscription-form");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form action
console.log('this event is working');
  // Simulate sending subscription data
  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (name && email) {
    // Show confirmation modal
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    form.reset();
  }
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});

// Optional: close modal by clicking outside of it
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
  }
});


window.addEventListener("DOMContentLoaded", () => {
  // Increment review count
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);

  // Display count
  const message = document.getElementById("reviewCountMessage");
  message.textContent = `Total subscriptions ${reviewCount}.`;
});