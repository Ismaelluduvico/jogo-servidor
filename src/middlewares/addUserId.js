module.exports = (req, res, next) => {

    if (!req.userInfo) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    req.body.userId = req.userInfo.id;
    next();

};