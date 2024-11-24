document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const logoutBtn = document.getElementById('logout-btn');
    const profileForm = document.getElementById('profile-form');

    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) document.body.classList.add('dark-mode');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    logoutBtn.addEventListener('click', () => {
        alert('You have logged out.');
        window.location.href = 'login.html';
    });

    const profileData = JSON.parse(localStorage.getItem('profile')) || {
        name: 'John Doe',
        role: 'Freelancer',
        image: 'assets/user-placeholder.jpg',
    };
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-role').textContent = profileData.role;
    document.getElementById('profile-image').src = profileData.image;

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('profile-name-input').value || profileData.name;
        const role = document.getElementById('profile-role-input').value || profileData.role;
        const image = document.getElementById('profile-image-input').value || profileData.image;

        const updatedProfile = { name, role, image };
        localStorage.setItem('profile', JSON.stringify(updatedProfile));
        alert('Profile updated!');
        window.location.reload();
    });
});
