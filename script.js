// Wait until page fully loads
window.addEventListener("DOMContentLoaded", () => {

  // Scroll Reveal Animation
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1.2s cubic-bezier(.22,1,.36,1)";
    observer.observe(el);
  });

  // Activate Icons
  lucide.createIcons();

});
