const dbConfig = require('../modules/dbConfig')

const Sequelize = require("sequelize")
const sequelizeCon = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host : dbConfig.host,
    dialect : dbConfig.dialect,
    operatorAliases: 0,
    pool : {
        max : dbConfig.max,
        min : dbConfig.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizeCon;

db.user = require('./user.model')(sequelizeCon, Sequelize)

module.exports = db;