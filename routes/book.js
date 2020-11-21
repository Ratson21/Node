const express = require('express')
const router = express.Router();

router.get('/getBook', (req,res) =>{
    let query = ("SELECT * FROM book")
    conDB.query(query, (err, result, fields) => {
        if (err) {
            
            let response = {
                timestamp : getTimeStamp,
                status : false,
                message : err.sqlMessage
            }
            res.send(response)
        } else {
            let response = {
                status : true,
                    data : result
                }
            res.send(response)
        }
    })
})

router.get('/getBookById', (req,res) =>{
    let query = ("SELECT * FROM book Where id = ?")
    conDB.query(query, req.query.id, (err, result, fields) => {

        console.log("Id = ", req.query.id);

        if (err) {
            
            let response = {
                timestamp : getTimeStamp,
                status : false,
                message : err.sqlMessage
            }
            res.send(response)
        } else {
            let response = {
                status : true,
                    data : result
                }
            res.send(response)
        }
    })
})

router.get('/getBookByTitle', (req,res) =>{
    let query = ("SELECT * FROM book Where title = ?")
    conDB.query(query, req.query.title, (err, result, fields) => {

        console.log("title = ", req.query.title);

        if (err) {
            
            let response = {
                timestamp : getTimeStamp,
                status : false,
                message : err.sqlMessage
            }
            res.send(response)
        } else {
            let response = {
                status : true,
                    data : result
                }
            res.send(response)
        }
    })
})

router.post('/insertBook', (req,res) =>{
    let index
    const element = req.body;
    let values = []
    let data = [element.id, element.title, element.isbn, element.writer, element.pages,element.year, element.language, element.price, element.rating, element.publisher, element.misc]
    values.push(data);

    let query = ("INSERT INTO ratsonfebrian.book (id, title, isbn, writer, pages, `year`, `language`, price, rating, publisher, misc) VALUES ?")
    conDB.query(query, [values], (err, result, fields) => {

        console.log("values = ", values);

        if (err) {
            
            let response = {
                timestamp : getTimeStamp,
                status : false,
                message : err.sqlMessage
            }
            res.send(response)
        } else {
            let response = {
                status : true,
                    message : "Berhasil menyimpan data"
                }
            res.send(response)
        }
    })
})

router.post('/insertMultiBook', (req,res) =>{

    let values = [];
    let query = ("INSERT INTO ratsonfebrian.book (id, title, isbn, writer, pages, `year`, `language`, price, rating, publisher, misc) VALUES ?")

    for (let index = 0; index < req.body.length; index++) {
        const element = req.body[index];
        let data = [element.id, element.title, element.isbn, element.writer, element.pages,element.year, element.language, element.price, element.rating, element.publisher, element.misc]
        values.push(data);
        
    }

    conDB.query(query,[values], (err, result, fields) => {

        console.log("values = ", values);

        if (err) {
            
            let response = {
                timestamp : getTimeStamp,
                status : false,
                message : err.sqlMessage
            }
            res.send(response)
        } else {
            let response = {
                status : true,
                    message : "Berhasil menyimpan data"
                }
            res.send(response)
        }
    })
})

router.put('/updateBook', (req,res) =>{

    let id = req.body.id
   let title = req.body.title
   let isbn = req.body.isbn
   let writer = req.body.writer
   let pages = req.body.pages
   let  year = req.body.year
   let language = req.body.language
   let price = req.body.price
   let  rating = req.body.rating
   let   publisher = req.body.publisher
   let   misc = req.body.misc

    let query = ("UPDATE book SET title = '" + title + "', isbn = '" + isbn + "', writer = '" + writer + "', pages = '" + pages + "', year = '" + year + "', language = '" + language + "', price = '" + price + "', rating = '" + rating + "', publisher = '" + publisher + "', misc = '" + misc + "' WHERE id = '" + id + "'" )

    

    conDB.query(query, (err, result, fields) => {

        

        if (err) {
            
            let response = {
                timestamp : getTimeStamp,
                status : false,
                message : err.sqlMessage
            }
            res.send(response)
        } else {
            let response = {
                status : true,
                    message : "Berhasil update"
                }
            res.send(response)
        }
    })
})

router.delete('/deleteBookById', (req,res) =>{
    let query = ("DELETE FROM book Where id = ?")
    conDB.query(query, req.query.id, (err, result, fields) => {

        console.log("Id = ", req.query.id);

        if (err) {
            
            let response = {
                timestamp : getTimeStamp,
                status : false,
                message : err.sqlMessage
            }
            res.send(response)
        } else {
            let response = {
                status : true,
                    data : "Berhasil dihapus"
                }
            res.send(response)
        }
    })
})

function getTimeStamp() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + '-' + time;

    return dateTime;
}

module.exports = router