// Fade-in saat load
window.addEventListener("load", function () {
  const header = document.querySelector("header");
  header.style.opacity = "0";
  header.style.transition = "opacity 0.8s ease";
  header.offsetHeight;
  header.style.opacity = "1";
});

// Hover effect
document.querySelectorAll(".member-card").forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  });
});
