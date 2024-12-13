const jwt = require('../utils/jwt');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token no proporcionado' });

    try {
        const user = jwt.verifyToken(token);
        req.user = user;
        next();
    } catch {
        res.status(403).json({ error: 'Token inválido' });
    }
};
