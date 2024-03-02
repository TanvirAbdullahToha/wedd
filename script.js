// Function to toggle the mobile menu
const toggleMenu = () => {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("hidden");
};

// Function to handle smooth scrolling for anchor links
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

// Event listener for the mobile menu toggle button
document.querySelector(".menu-btn").addEventListener("click", toggleMenu);

// Event listener for smooth scrolling on anchor links
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    smoothScroll(target);
  });
});
