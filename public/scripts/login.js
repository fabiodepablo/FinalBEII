document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            alert('Inicio de sesión exitoso');
            window.location.href = '/dashboard.html'; // Redirige al dashboard
        } else {
            const errorData = await response.json();
            alert(errorData.message || 'Error al iniciar sesión');
        }
    } catch (error) {
        alert('Error en la solicitud');
    }
});
