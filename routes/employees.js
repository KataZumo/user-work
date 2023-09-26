const express = require('express')
const router = require('router')
const { auth } = require('../middleware/auth')

router.get('/', auth, () => console.log('get all employees'));

router.get('/id', auth, () => console.log('get single employees'));

router.get('/add', auth, () => console.log('add employees'));

router.get('/remove/:id', auth, () => console.log('remove employees'));

router.put('/edit/:id', auth, () => console.log('edit employees'));


module.exports = router