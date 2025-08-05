const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const icon = hamburger.querySelector("i"); // Get the icon inside hamburger div

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
function changeImage(el) {
    const mainImage = document.getElementById("mainDisplay");
    mainImage.src = el.src;

    document.querySelectorAll(".thumbnail").forEach(img => img.classList.remove("selected"));
    el.classList.add("selected");
  }

  function toggleAccordion(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  }