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

const currentPage = window.location.pathname.split("/").pop() || "about.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const linkPage = href.split("/").pop();
  const isAnchor = href.startsWith("#");
  const isCurrentAnchor =
    isAnchor && (currentPage === "about.html" || currentPage === "");

  if (linkPage === currentPage || isCurrentAnchor) {
    link.classList.add("active");
    link.parentElement.classList.add("active");
  }
});

(function () {
  const toggler = document.getElementById("navToggler");
  const collapse = document.getElementById("navCollapse");

  if (!toggler || !collapse) return;

  function getExpandedHeight() {
    collapse.style.height = "auto";
    const h = collapse.scrollHeight;
    collapse.style.height = "";
    return h;
  }

  function openMenu() {
    collapse.style.height = getExpandedHeight() + "px";
    toggler.classList.add("open");
    toggler.setAttribute("aria-expanded", "true");

    collapse.addEventListener("transitionend", function once() {
      if (toggler.classList.contains("open")) {
        collapse.style.height = "auto";
      }
      collapse.removeEventListener("transitionend", once);
    });
  }

  function closeMenu() {
    collapse.style.height = collapse.scrollHeight + "px";
    requestAnimationFrame(function () {
      collapse.style.height = "0px";
    });
    toggler.classList.remove("open");
    toggler.setAttribute("aria-expanded", "false");
  }

  toggler.addEventListener("click", function () {
    if (toggler.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  collapse.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (toggler.classList.contains("open")) {
        closeMenu();
      }
    });
  });
})();
