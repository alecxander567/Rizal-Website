const currentPage = window.location.pathname.split("/").pop() || "journey.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const linkPage = href.split("/").pop();
  const isAnchor = href.startsWith("#");
  const isJourneyAnchor =
    isAnchor && (currentPage === "journey.html" || currentPage === "");
  if (linkPage === currentPage || isJourneyAnchor) {
    link.classList.add("active");
    link.parentElement.classList.add("active");
  }
});
