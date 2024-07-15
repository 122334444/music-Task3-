const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !await user.comparePassword(password)) {
            return res.status(400).send('Invalid email or password');
        }
        const token = jwt.sign({ userId: user._id }, config.JWT_SECRET);
        res.send({ token });
    } catch (error) {
        res.status(400).send(error.message);
    }
};