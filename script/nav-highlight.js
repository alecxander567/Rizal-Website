const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage && currentPage && linkPage === currentPage) {
    link.classList.add("active");
    link.parentElement.classList.add("active");
  }
});
