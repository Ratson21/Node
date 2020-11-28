module.exports = app => {
    const socket = require('../controllers/socket.controller')
    var router = require('express').Router()

    router.get('/', socket.index)

    //base url untuk user s
    app.use('/socket', router)
}