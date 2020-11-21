const db = require('../models')
const User = db.user;

//create user
exports.create = (req,res)=>{
    User.create(req.body)
    .then(result => {
        let message = {
            success: true,

            message: "Insert new user success"
        }
        res.send(message);
    })
    .catch(err => {
        let message ={
            success: false,
        message: "Insert new user failed"
    }
    res.status(500).send(message);
})
}

//get all user
exports.findAll = (req,res)=>{
    User.findAll()
    .then(result => {
        let message = {
            success: true,

            data: result
        }
        res.send(message);
    })
    .catch(err => {
        let message ={
            success: false,
        message: "error: " + err 
    }
    res.status(500).send(message);
})
}

//update user
exports.update = (req,res)=>{
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        let affectedRow = result[0];
        if (affectedRow > 0) {
            let message = {
                success: true,
                message: "User update berhasil"
            }
            res.send(message)
        } else {
            let message = {
                success: false,
                message: "User update failed"
            }
            res.send(message)
        }
    })
    .catch(err =>{
        let message = {
            success: false,
            message: "User Update Failed"
        }
        res.send(message)
    })
}

//delete user
exports.delete = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        if (result > 0) {
            let message = {
                success: true,
                message: "User delete success"
            }
            res.send(message)
        } else {
            let message = {
                success: false,
                message: "Delete user Failed"
            }
            res.send(message)
        }
    })
    .catch(err => {
        let message = {
            success: false,
            message: "User delete failed" + err
        }
        res.send(message)
    })
}