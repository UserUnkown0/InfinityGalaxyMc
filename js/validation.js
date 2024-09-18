// Validaciones para el formulario de registro
document.getElementById('registerForm').addEventListener('input', function(event) {
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    // Validación básica de longitud de la contraseña
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
    }

    // Validación de confirmación de contraseña
    if (password !== confirmPassword) {
        alert("Passwords do not match");
    }
});
