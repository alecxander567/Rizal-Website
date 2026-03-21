/*
   José Rizal — About This Project
   about.js
   Linked by: about.html
*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 120);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".fade-up, .dedication-text, .dedication-attr")
  .forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  document.getElementById("mainNav").style.boxShadow =
    window.scrollY > 40 ? "0 2px 20px rgba(201,168,76,0.1)" : "none";
});
