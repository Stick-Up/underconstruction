
// Open product popup
function openPopup(productImage, description) {
  const popup = document.getElementById('productPopup');
  const popupProduct = document.getElementById('popupProduct');

  popupProduct.src = productImage;

  popup.style.display = 'flex';
}

// Close product popup
function closePopup() {
  const popup = document.getElementById('productPopup');
  popup.style.display = 'none';
}
// script.js

const menuToggleButtons = document.querySelectorAll('.menu-toggle');
const categoryDropdowns = document.querySelectorAll('.category-dropdown');

menuToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the corresponding dropdown for the clicked button
        const dropdown = button.nextElementSibling; // Assuming the dropdown follows the button
        dropdown.classList.toggle('active');
    });
});

categoryDropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', () => {
        const selectedCategory = dropdown.value;
        window.location.href = selectedCategory;
    });
});
// Get all card elements with the "card" class
const cards = document.querySelectorAll('.product-card');

// Add click event listeners to the cards
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the target link from the card's data attribute
        const targetLink = card.getAttribute('data-link');
        
        // Redirect to the target link
        window.location.href = targetLink;
    });
});

// Get all button elements with the "card-button" class
const buttons = document.querySelectorAll('.card-button');

// Add click event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Prevent the button click from triggering the card click
        event.stopPropagation();
        
        // Get the target link from the button's parent card
        const targetLink = button.parentElement.getAttribute('data-link');
        
        // Redirect to the target link
        window.location.href = targetLink;
    });
});

