// Función para manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Validar usuario (por simplicidad en este ejemplo se usa localStorage)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => (u.username === username || u.email === username) && u.password === password);

    if (user) {
        document.cookie = `username=${user.username}; max-age=3600`; // Establecer cookie por 1 hora
        alert("Login successful");
        // Redireccionar o realizar alguna acción
    } else {
        alert("Invalid credentials");
    }
});

// Función para manejar el registro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    const email = document.getElementById('reg-email').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password, email });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful");
});

// Función para manejar el reseteo de contraseña
document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('reset-email').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);

    if (user) {
        alert("A reset link has been sent to your email");
    } else {
        alert("Email not found");
    }
});
