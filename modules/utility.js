var bcrypt = require('bcryptjs')

module.exports = {
    getTimeStamp: function () {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + '-' + time;
    
        return dateTime;
    },

    hashPassword: function (plainText) {
        // salt ada pengacak pass
        var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(plainText, salt);
    
    return hash;
    },
    
    comparepassword: function (plainText, hash){
        // Load hash from your password DB.
        return bcrypt.compareSync(plainText, hash); // true
    }
}

