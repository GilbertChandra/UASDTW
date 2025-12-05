// Form submission alert
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  form.reset();
});
function openProject(image) {
  window.open(image, "_blank");
}
