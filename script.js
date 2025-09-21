// Hero section radio button selection
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.hero-button-section .toggle-button');
  const foodSection = document.querySelector('.food-card-row');
  const drugSection = document.querySelector('.drug-card-row');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all and add to the clicked button
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Toggle section visibility based on data-type
      const type = button.getAttribute('data-type');

      if (type === 'food') {
        foodSection.style.display = 'flex';
        drugSection.style.display = 'none';
      } else if (type === 'meds') {
        foodSection.style.display = 'none';
        drugSection.style.display = 'flex';
      }
    });
  });

  // No need for initial visibility check; it's already handled by HTML + CSS
});


// Collapse and expand med cards

  
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.expandable-card').forEach(card => {
      const toggleInput = card.querySelector('.expand-toggle-input');
      const toggleLabel = card.querySelector('.expand-toggle-label');
      const extraItems = card.querySelectorAll('.extra-item');
      const showMoreItem = card.querySelector('.show-more');

      toggleInput.addEventListener('change', () => {
        const isExpanded = toggleInput.checked;

        extraItems.forEach(item => {
          item.style.display = isExpanded ? 'list-item' : 'none';
        });

        if (showMoreItem) {
          showMoreItem.style.display = isExpanded ? 'none' : 'list-item';
        }

        // Update +/− label
        toggleLabel.textContent = isExpanded ? '−' : '+';
      });
    });
  });





