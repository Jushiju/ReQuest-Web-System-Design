
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const searchInput = document.querySelector('.form-control');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.style.borderColor = "#8e24aa";
    });
    searchInput.addEventListener('blur', () => {
        searchInput.style.borderColor = "";
    });
}

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

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            searchInput.value = category.replace(/-/g, ' ');
        }
    }
});
const fog = document.querySelector('.fog');

let fogPosition = 0;
function animateFog() {
    fogPosition -= 0.1;
    fog.style.transform = `translateX(${fogPosition}px)`;
    requestAnimationFrame(animateFog);
}

animateFog();

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const logoutBtn = document.getElementById('logout-btn');
    const navbar = document.querySelector('nav');
    const loginStateKey = 'isLoggedIn';

    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';

    const isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    if (isDarkMode) document.body.classList.add('dark-mode');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('bi-moon');
        icon.classList.toggle('bi-sun');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    const icon = document.createElement('i');
    icon.classList.add('bi', isDarkMode ? 'bi-sun' : 'bi-moon');
    darkModeToggle.appendChild(icon);

    const isLoggedIn = JSON.parse(localStorage.getItem(loginStateKey)) || false;
    if (isLoggedIn) {
        logoutBtn.textContent = 'Log Out';
        logoutBtn.addEventListener('click', () => {
            localStorage.setItem(loginStateKey, false);
            alert('Logged out successfully.');
            window.location.href = 'login.html';
        });
    } else {
        logoutBtn.textContent = 'Login';
        logoutBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const logoutBtn = document.getElementById('logout-btn');
    const loginStateKey = 'isLoggedIn';

    const isLoggedIn = JSON.parse(localStorage.getItem(loginStateKey)) || false;

    function updateLoginState() {
        if (isLoggedIn) {
            logoutBtn.textContent = 'Log Out';
            logoutBtn.classList.add('btn-danger');
            logoutBtn.classList.remove('btn-primary');
            logoutBtn.addEventListener('click', () => {
                localStorage.setItem(loginStateKey, false);
                alert('Logged out successfully.');
                window.location.href = 'login.html';
            });
        } else {
            logoutBtn.textContent = 'Login';
            logoutBtn.classList.add('btn-primary');
            logoutBtn.classList.remove('btn-danger');
            logoutBtn.addEventListener('click', () => {
                window.location.href = 'login.html';
            });
        }
    }
    updateLoginState();

    const isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    if (isDarkMode) document.body.classList.add('dark-mode');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");

    if (localStorage.getItem("isLoggedIn") === "true") {
        loginBtn.textContent = "Logout";
    } else {
        loginBtn.textContent = "Login";
    }

    loginBtn.addEventListener("click", function() {
        if (localStorage.getItem("isLoggedIn") === "true") {
            localStorage.removeItem("isLoggedIn");
            loginBtn.textContent = "Login";
        } else {
            window.location.href = "login.html";
        }
    });
});
