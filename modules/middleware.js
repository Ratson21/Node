var jwt = require('jsonwebtoken');
const db = require('../models');

exports.adminVerify = function (req, res, next){
    let user = req.user

    if (!user) {
        res.status(401).send()
    }

    if (user.role === process.env.ROLE1) {
        next();
    } else {
        res.status(401).send();
    }
}

exports.userGuestVerify = function (req, res, next){
    let user = req.user

    if (!user) {
        res.status(401).send()
    }

    if (user.role === process.env.ROLE2) {
        next();
    }else if (user.role === process.env.ROLE3) {
        next();
    } 
    else {
        res.status(401).send();
    }
}

exports.updateVerify = function (req, res, next){
    let user = req.user
    let id = req.params.id
  
    console.log(id);
    console.log(user.id);

    if (!user) {
        res.status(401).send()
    }else if (user.role === process.env.ROLE1) {
        next();
    }else if (user.role == process.env.ROLE2 && user.id == id) {
        next();
    }else if (user.role == process.env.ROLE3 && user.id == id) {
        next();
    }else {
        res.status(401).send();
    }
}