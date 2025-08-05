
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const icon = hamburger.querySelector("i"); 


 

// This code toggles the navigation menu when the hamburger icon is clicked
// It also change the icon from bars to xmark and vice versa
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


// Function to change the main image when a thumbnail is clicked
// This function updates the main image and highlights the selected thumbnail

function changeImage(el) {
    const mainImage = document.getElementById("mainDisplay");
    mainImage.src = el.src;

    document.querySelectorAll(".thumbnail").forEach(img => img.classList.remove("selected"));
    el.classList.add("selected");
  }
// Function to toggle the accordion content
// This function shows or hides the content of the accordion when the header is clicked
// It also changes the icon direction


  function toggleAccordion(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  }



