const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.onclick = () => {
  navLinks.classList.toggle("active");
};
