// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//     document.querySelectorAll('section').forEach(section => {
//       section.classList.toggle('dark-mode');
//     });
//   }
  
//   document.addEventListener("DOMContentLoaded", () => {
//     // Newsletter form submission simulation
//     document.querySelector(".newsletter form")?.addEventListener("submit", e => {
//       e.preventDefault();
//       alert("Thank you for subscribing!");
//     });
  
//     // Contact form submission simulation
//     document.querySelector(".contact form")?.addEventListener("submit", e => {
//       e.preventDefault();
//       alert("Message sent successfully!");
//     });
//   });
  


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-mode");
  const icon = document.createElement("span");
  icon.id = "mode-icon";
  icon.textContent = "🌙"; // Default: light mode
  toggleBtn.textContent = "";
  toggleBtn.appendChild(icon);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    document.querySelectorAll("section").forEach(section => {
      section.classList.toggle("dark-mode");
    });

    const isDark = document.body.classList.contains("dark-mode");
    icon.textContent = isDark ? "☀" : "🌙"; // Toggle icon
  });

  // Newsletter form
  document.querySelector(".newsletter form")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  });

  // Contact form
  document.querySelector(".contact form")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully!");
  });
});
