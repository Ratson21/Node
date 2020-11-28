const path = require('path')

//indeks html
exports.index = (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
}