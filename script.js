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





