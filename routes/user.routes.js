module.exports = app => {

const user = require('../controllers/user.controller')
var router = require('express').Router()
var jwt = require('express-jwt')
const { adminVerify, updateVerify } = require('../modules/middleware')

var checkAuth = jwt ({
    secret: process.env.JWTSIGN,
    algorithms: ['RS256','HS256']
})

//insert
router.post("/insert", checkAuth,adminVerify, user.create)

//get all
router.get('/getAll',checkAuth, adminVerify , user.findAll)

//update
router.put('/update/:id',checkAuth,updateVerify ,user.update)

//changeRole
router.put('/changeRole/:id', checkAuth, adminVerify, user.changeRole)

//delete
router.delete('/delete/:id',checkAuth,adminVerify, user.delete)

//login
router.post('/login', user.login)

//register
router.post('/register', user.Register)

//base url
app.use('/api/user/', router)
    
}
