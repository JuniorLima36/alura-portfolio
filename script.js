function openMenu() {
  document.querySelectorAll('#nav-menu, #nav-button, #arrow, #hero-content')
    .forEach(el => el.classList.toggle('active'));
}

function notification() {
  const message = document.getElementById('form-notification');
  message.style.display = 'block';
  setTimeout(() => message.style.display = 'none', 2000);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  notification();
  this.reset();
});

let typed = new Typed(".auto-input", {
  strings: ["Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
