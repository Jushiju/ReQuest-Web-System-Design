// scripts.js

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search bar focus effect
const searchInput = document.querySelector('.form-control');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.style.borderColor = "#8e24aa"; // Change border color on focus
    });
    searchInput.addEventListener('blur', () => {
        searchInput.style.borderColor = ""; // Reset border color when not focused
    });
}

// Smooth Navbar Toggle
const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        navbarCollapse.classList.toggle('show');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.setAttribute('aria-expanded', 'true');
        } else {
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
}

// Adding a Dynamic Button for Featured Adventurers based on Rating
document.querySelectorAll('.card').forEach(card => {
    const ratingElement = card.querySelector('p strong');
    if (ratingElement) {
        const rating = parseFloat(ratingElement.textContent.split('/')[0]);
        if (rating >= 4.8) {
            const button = document.createElement('button');
            button.textContent = 'Hire This Adventurer';
            button.classList.add('btn', 'btn-dark', 'mt-2');
            card.querySelector('.card-body').appendChild(button);
        }
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Function to populate the search bar based on the category query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            // Replace hyphens with spaces for better readability
            searchInput.value = category.replace(/-/g, ' ');
        }
    }
});
// Fog Movement Animation
const fog = document.querySelector('.fog');

let fogPosition = 0;
function animateFog() {
    fogPosition -= 0.1;
    fog.style.transform = `translateX(${fogPosition}px)`;
    requestAnimationFrame(animateFog);
}

animateFog();
