// auth.js

// Helper Functions
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('loggedInUser'));
}

function saveCurrentUser(user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
}

// Signup Handler
function handleSignUp(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const users = getUsers();
    if (users.find(user => user.email === email)) {
        alert('Email is already registered!');
        return;
    }

    users.push({ email, password });
    saveUsers(users);
    alert('Signup successful! Please log in.');
    window.location.href = 'login.html';
}

// Login Handler
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = getUsers();
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        saveCurrentUser(user);
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password.');
    }
}

// Dashboard Loader
function loadDashboard() {
    const user = getCurrentUser();
    if (!user) {
        alert('You must log in first.');
        window.location.href = 'login.html';
    }

    document.getElementById('user-email').innerText = user.email;
}

// Logout Handler
function handleLogout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}
