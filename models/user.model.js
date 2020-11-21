// const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("user", {
        userName :{
            type: Sequelize.STRING
        },
        firstName : {
            type: Sequelize.STRING
        },
        lastName : {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
    return User;
}