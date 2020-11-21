module.exports = app => {

const user = require('../controllers/user.controller')
var router = require('express').Router()

//create function
router.post("/insert", user.create)

//get all
router.get('/getAll', user.findAll)

//update
router.put('/update/:id', user.update)

//delete
router.delete('/delete/:id', user.delete)

//base url
app.use('/api/user/', router)
    
}
