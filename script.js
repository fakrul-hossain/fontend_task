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



//   <div class="product-container">
//   <!-- Left side: Image viewer -->
//   <div>
//     <div class="main-image">
//       <img id="mainDisplay" src="/assets/products (1).png" alt="Main Image">
//     </div>
//     <div class="thumbnail-gallery">
//       <img src="/assets/products (4).png" class="thumbnail selected" onclick="changeImage(this)">
//       <img src="/assets/products (3).png" class="thumbnail" onclick="changeImage(this)">
//       <img src="/assets/products (4).png" class="thumbnail" onclick="changeImage(this)">
//       <img src="/assets/products (8).png" class="thumbnail" onclick="changeImage(this)">
//     </div>
//   </div>

//   <!-- Right side: Product info -->
//   <div class="product-details">
//     <!-- Rating row -->
//     <div class="rating">
//       <img src="/assets/rating.png" alt="Star" />
//       <img src="/assets/rating.png" alt="Star" />
//       <img src="/assets/rating.png" alt="Star" />
//       <img src="/assets/rating.png" alt="Star" />
//      <div class="">
//          <strong>4.5</strong>
//       <span>(500+ Reviews)</span>
//      </div>
//     </div>

//     <!-- Title -->
//     <h2 class="product-title">Noseclip</h2>

//     <!-- Price section -->
//     <div class="price-section">
//       <span class="price">$12.00</span>
//       <span class="old-price">$20.00</span>
//       <span class="discount">SAVE 10%</span>
//     </div>

//     <!-- Description -->
//     <h3 class="description_title">Description:</h3>
//     <p class="description">
//       A nasal clip is a small device typically used to pinch or secure the nostrils for various purposes, such as during sports, medical treatments, or personal health practices. It is usually made of flexible or padded materials to ensure comfort and a secure fit. Common uses include:
//     </p>

//     <!-- Features list -->
//     <ul class="features">
//       <li><img src="/assets/product_icon.png" alt="Boost"> Boost performance</li>
//       <li><img src="/assets/product_icon.png" alt="Airflow"> Optimized Airflow</li>
//       <li><img src="/assets/product_icon.png" alt="Snore"> Stop snoring</li>
//       <li><img src="/assets/product_icon.png" alt="Drug Free"> 100% Drug Free</li>
//     </ul>

//     <!-- Add to cart -->
//     <button class="add-to-cart">Add to Cart →</button>

//     <!-- Payment icons -->
//     <div class="payment-icons">
//       <img src="/assets/Apple Pay.png" alt="Apple Pay">
//       <img src="/assets/Google Pay.png" alt="Google Pay">
//       <img src="/assets/Mastercard.png" alt="MasterCard">
//       <img src="/assets/Shop.png" alt="Shopify">
//       <img src="/assets/Visa.png" alt="Visa">
//     </div>

//     <!-- Accordion -->
//     <div class="accordion">
//       <div class="accordion-header" onclick="toggleAccordion(this)">
//         <p>Sizing information</p> <i class="fa fa-chevron-down"></i>
//       </div>
//       <div class="accordion-content">Free resizing options available upon request.</div>

//       <div class="accordion-header" onclick="toggleAccordion(this)">
//         Free Resizing <i class="fa fa-chevron-down"></i>
//       </div>
//       <div class="accordion-content">We offer free resizing for all our products within 15 days.</div>

//       <div class="accordion-header" onclick="toggleAccordion(this)">
//         Money-back guarantee & free returns <i class="fa fa-chevron-down"></i>
//       </div>
//       <div class="accordion-content">Full refund available within 30 days of purchase.</div>
//     </div>
//   </div>
// </div>