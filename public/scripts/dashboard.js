const mostrarUsuarios = async () => {
    const response = await fetch('/api/users');
    const usuarios = await response.json();
    const usuariosDiv = document.getElementById('usuarios');
    usuariosDiv.innerHTML = usuarios.map(u => `
        <p>${u.name} (${u.email}) <button onclick="eliminarUsuario('${u._id}')">Eliminar</button></p>
    `).join('');
};

const crearUsuario = async () => {
    const name = prompt('Nombre:');
    const email = prompt('Email:');
    const password = prompt('Contraseña:');
    await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });
    mostrarUsuarios();
};

const eliminarUsuario = async (id) => {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    mostrarUsuarios();
};

const mostrarProductos = async () => {
    const response = await fetch('/api/products');
    const productos = await response.json();
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = productos.map(p => `
        <p>${p.name} - $${p.price} <button onclick="eliminarProducto('${p._id}')">Eliminar</button></p>
    `).join('');
};

const crearProducto = async () => {
    const name = prompt('Nombre:');
    const price = prompt('Precio:');
    await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price }),
    });
    mostrarProductos();
};

const eliminarProducto = async (id) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    mostrarProductos();
};

const crearCarrito = async () => {
    await fetch('/api/carts', { method: 'POST' });
    alert('Carrito creado');
};

const verCarritos = async () => {
    const response = await fetch('/api/carts');
    const carritos = await response.json();
    const carritosDiv = document.getElementById('carritos');
    carritosDiv.innerHTML = carritos.map(c => `
        <p>Carrito ID: ${c._id} - Productos: ${c.products.length}</p>
    `).join('');
};

const verTickets = async () => {
    const response = await fetch('/api/tickets');
    const tickets = await response.json();
    const ticketsDiv = document.getElementById('tickets');
    ticketsDiv.innerHTML = tickets.map(t => `
        <p>Ticket ID: ${t._id} - Estado: ${t.status}</p>
    `).join('');
};
