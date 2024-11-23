document.addEventListener('DOMContentLoaded', function () {
    // Handle form submissions for login, signup, etc.
    document.getElementById('signup-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Signup Successful! Redirecting to Dashboard...');
        window.location.href = 'dashboard.html';
    });

    document.getElementById('login-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Login Successful! Redirecting to Dashboard...');
        window.location.href = 'dashboard.html';
    });

    document.getElementById('forgot-password-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Password reset email sent!');
    });

    // Search functionality for the job board
    const searchInput = document.getElementById('search-input');
    searchInput?.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase();
        const jobCards = document.querySelectorAll('.job-card');
        jobCards.forEach(card => {
            const jobTitle = card.querySelector('h5').innerText.toLowerCase();
            if (jobTitle.includes(searchText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Rating system
    const ratingButtons = document.querySelectorAll('.rating-btn');
    ratingButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert(`Rating of ${button.dataset.rating} stars recorded!`);
        });
    });
});
