document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password from input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === "abc" && password === "123") {
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        // Display error message
        alert("Incorrect username or password. Please try again.");
        // Clear input fields
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
});

