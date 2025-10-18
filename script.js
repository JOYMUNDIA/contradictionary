//Sidebar Nav logic
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidenav = document.getElementById('sidenav');

menuToggle.addEventListener('click', () => {
    sidenav.classList.add('open');
    menuToggle.style.display = 'none'; // Hide ☰
    closeBtn.style.display = 'block';  // Show ✖
});

closeBtn.addEventListener('click', () => {
    sidenav.classList.remove('open');
    menuToggle.style.display = 'block'; // Show ☰
    closeBtn.style.display = 'none';    // Hide ✖
});

// Close menu on link click inside sidenav
document.querySelectorAll('.sidenav a').forEach(link => {
  link.addEventListener('click', () => {
    sidenav.classList.remove('open');
    menuToggle.style.display = 'block';
    closeBtn.style.display = 'none';
  });
});

//This allows the dropdown to persist when clicked and toggle visibility on second click.
document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const dropdown = button.closest('.dropdown');
    dropdown.classList.toggle('open');
  });
});



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

// Common Contraindication Logic
// TABS: Switch active tab within the same profile card
function switchTab(tabId, el) {
    const card = el.closest('.profile-card');
    const tabs = card.querySelectorAll('.tab');
    const contents = card.querySelectorAll('.tab-content');

    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    el.classList.add('active');
    card.querySelector(`#${tabId}`).classList.add('active');
}

// ACCORDION: Toggle accordion section within a card
function toggleAccordion(header) {
    const accordion = header.parentElement;
    const icon = header.querySelector('.accordion-icon');

    accordion.classList.toggle('active');

    // Icon toggle
    icon.textContent = accordion.classList.contains('active') ? '–' : '+';
}

// MODAL: Open modal relative to the button clicked
function openprofileModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// MODAL: Close modal from inside the modal content
function closeprofileModal(el) {
    const modal = el.closest('.profileModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// MODAL: Close modal when clicking outside the modal
window.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.profileModal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
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





