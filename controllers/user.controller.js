const db = require('../models');
const utility = require('../modules/utility');
const User = db.user;
var jwt = require('jsonwebtoken');
const { response } = require('express');

//create user
exports.create = (req,res)=>{
    let body = req.body
    body.password = utility.hashPassword(req.body.password)

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
        message: "Insert new user failed",
        timestamp: utility.getTimeStamp
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
    let body = req.body
    body.password = utility.hashPassword(req.body.password)
    
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
            message: "User Update Failed",
            timestamp: utility.getTimeStamp
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
            message: "User delete failed" + err,
            timestamp: utility.getTimeStamp
        }
        res.send(message)
    })
}

//login

exports.login = (req,res) => {
    console.log("login running : ", req.body);
    let body = req.body;

    User.findOne({ where : {userName: body.userName} })
    .then(result => {
        if (result) {
            let compareResult = utility.comparepassword(body.password, result.password)
                if (compareResult) {
                    let response = {
                        id: result.id,
                        userName: result.userName,
                        firstName: result.firstName,
                        lastName: result.lastName,
                        email: result.email,
                        role: result.role
                    }
                    let token = jwt.sign(response, process.env.JWTSIGN, { expiresIn: '24h' })
                    response.token = token;
                    let resResponse = {
                        success: true,
                        data: response
                    }
                    res.send(resResponse)
                } else {
                    res.status(401).send(message.loginFail);
                }
        } else {
            res.status(401).send(message.loginFail);
            
        }
    })
    .catch(err =>{
        let response = Object.assign(message.loginError, { timestamp: utility.getTimeStamp()})
        response.message = "Error : " + err.parent.sqlMessage;
        res.status(500).send(response);
    })
}

exports.Register = (req,res)=>{
    let body = req.body
    body.password = utility.hashPassword(req.body.password)
    body.role = 'guest'

    User.create(req.body)
    .then(result => {
        let message = {
            success: true,

            message: "Register new user success"
        }
        res.send(message);
    })
    .catch(err => {
        let message ={
            success: false,
        message: "Register new user failed",
        timestamp: utility.getTimeStamp
    }
    res.status(500).send(message);
})
}

//change role user
exports.changeRole = (req,res)=>{
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        let affectedRow = result[0];
        console.log(req.body.role);
        if (affectedRow > 0) {
            let message = {
                success: true,
                message: "Change role User berhasil"
            }
            res.send(message)
        } else {
            let message = {
                success: false,
                message: "Change role User failed"
            }
            res.send(message)
        }
    })
    .catch(err =>{
        let message = {
            success: false,
            message: "Change role User Failed" + err,
            timestamp: utility.getTimeStamp
        }
        res.send(message)
    })
}

//get Id
