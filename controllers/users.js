const { prisma } = require('../prisma/prisma-client');
const brypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { route } = require('../routes');

// @route
// @desc
// @access

// авторизация
const login = async (req, res ) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: 'Invalid email or password'})
    }

    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    })

    const isPasswordCorrect = user && (await brypt.compare(password, user.password))
    const secret = process.env.JWT_SECRET

    if (user && isPasswordCorrect && secret) {
        res.status(200).json({
            id: user.id,
            email: user.email,
            name: user.name,
            token: jwt.sign({ id: user.id}, secret,{ expiresIn: '30d'}),
        })
    } else {
        return res.status(400).json({message: 'Invalid password'})
    }
}

// регистрация
const register = async (req, res ) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({message: 'Plese check your inputs'})
    }

    const registeredUser = await prisma.user.findFirst({
        where: {
            email,
        }
    });

    if (registeredUser) {
        return res.status(400).json({message: 'Email already registered'})
    }

    const solt = await brypt.genSalt(10)
    const hashPassword = await brypt.hash(password, solt)

    const user = await prisma.user.create({
        data: {
            email,
            name,
            password: hashPassword,
        }
    });

    const secret = process.env.JWT_SECRET

    if ( user && secret) {
        res.status(201).json({
            id: user.id,
            email: user.email,
            name,
            token: jwt.sign({ id: user.id}, secret,{ expiresIn: '30d'}),
        })
    } else {
        return res.status(400).json({ message: 'User cannot be created'})
    }
}

//  текущий пользователь
const current = async (req, res ) => {
   return res.status(200).json(req.user);
}

module.exports = {
    login,
    register,
    current
}