// Check if the user is logged in
function checkLogin() {
    // Check if there is a session or token indicating the user is logged in
    // For simplicity, let's use a basic session management using sessionStorage
    return sessionStorage.getItem('loggedIn') === 'true';
}

// Redirect to the login page if the user is not logged in
function redirectToLogin() {
    if (!checkLogin()) {
        window.location.href = "login.html";
    }
}

// Logout function to clear the session and redirect to login page
function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = "login.html";
}

