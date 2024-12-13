const bcrypt = require('bcrypt');
const User = require('./dao/models/user.model');

const seedAdminUser = async () => {
    try {
        const existingAdmin = await User.findOne({ email: 'admin@admin.com' });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin', 10);
            await User.create({
                name: 'Admin',
                email: 'admin@admin.com',
                password: hashedPassword,
                role: 'admin',
            });
            console.log('Usuario admin creado: admin@admin.com / admin');
        }
    } catch (error) {
        console.error('Error al crear el usuario admin:', error);
    }
};

module.exports = seedAdminUser;
