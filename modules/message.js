const pesan = {
    insertSuccess: {
        message: "User created success",
        success: true
    },
    insertFail: {
        message: "User created failed",
        success: false
    },
    getSuccess: {
        success: true
    },
    getFail: {
        message: "Get data failed",
        success: false
    },
    updateSuccess: {
        message: "Update success",
        success: true
    },
    updateFail: {
        message: "User update failed",
        success: false
    },
    deleteSuccess: {
        message: "User delete success",
        success: true,
    },
    deleteFailed: {
        message: "Delete user Failed",
        success: false,
    },
    loginFail:{
        message: "Username/Password anda salah",
        success: false
    },
    loginError:{
        message: "Login Error: ",
        success: false
    }
}

module.exports = pesan;