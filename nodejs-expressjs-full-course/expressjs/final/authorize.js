const authorize = (req, res, next) => {
    const { user } = req.query;

    if (user === 'rostik') {
        req.user = { name: user, id: 13 };
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = authorize;
