const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const getCurrentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

const signUpUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All fields are mandory');
    }

    const userAvaliable = await User.findOne({ email });

    if (userAvaliable) {
        res.status(400);
        throw new Error('User already signed up');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`Hasshed Password: ${hashedPassword}`);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json(user);
    } else {
        res.status(400);
        throw new Error('User data are not valid');
    }
});

const signInUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('All fields are mandory');
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                id: user.id,
                username: user.username,
                email: email,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1m' }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error('Email or password is not valid');
    }
});

module.exports = {
    getCurrentUser,
    signUpUser,
    signInUser,
};
