document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'viratkohli@gmail.com' && password === 'Virat@123') {
        alert("Login Successful!");
        window.location.href = "main.html";
    } else {
        alert("Login Failed.");
        window.location.href = "login.html";
    }
});
