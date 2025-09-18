// Hero section radio button selection
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.hero-button-section .toggle-button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  });