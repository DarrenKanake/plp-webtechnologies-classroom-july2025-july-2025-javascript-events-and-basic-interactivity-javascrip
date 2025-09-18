// =========================
// Part 1: Event Handling
// =========================
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});

// =========================
// Part 2: Interactive Elements
// =========================

// Light/Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const count = document.getElementById("count");
let counterValue = 0;

increase.addEventListener("click", () => {
  counterValue++;
  count.textContent = counterValue;
});
decrease.addEventListener("click", () => {
  counterValue--;
  count.textContent = counterValue;
});

// Collapsible FAQ
const faq = document.querySelector(".faq");
const question = faq.querySelector(".faq-question");

question.addEventListener("click", () => {
  faq.classList.toggle("open");
});

// =========================
// Part 3: Form Validation
// =========================
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (errors.length > 0) {
    feedback.style.color = "red";
    feedback.textContent = errors.join(" ");
  } else {
    feedback.style.color = "green";
    feedback.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
