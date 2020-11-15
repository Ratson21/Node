// const nama = "son"; //data setelah inisialisais tidak akan berubah
// var varVariabel = "abc"; //data masih bisa berubah tapi scopenya bisa diluar function
// let letVar = "123" //datanya msaih berubah, scopenya lebih diutamakan di dalam function

// function name(params) {
//     varVariabel = "data diubah"
//     console.log("VarVariabel", varVariabel); //penulisan function
//     console.log("data tetap constan", nama);
// }

// function inifunction(nama, umur){

//     console.log('Nama :', nama); 
//     console.log('umur :', umur);
// }

// function functionNilai(nilai) {
//     let hasil = "";

//     if (nilai >= 80) {
//         hasil = "A";
//     } else if(nilai >= 70){
//         hasil = "B";
//     }else{
//         hasil="C";
//     }
//         console.log("Hasil :", hasil);
// }

// function functionSwitch(menu) {

// let hasil = ""

//     switch (menu) {
//         case "A":
//             hasil = "Nasi Padang";
//             break;
//     case "B":
//         hasil = "Sate Ayam";
//         break
//         default:
//             hasil = "menu lain";
//             break;
//     }

//     console.log('Pilihan menu :', hasil);

// }

// function functionFor(jumlah, array) {
//     for (let index = 0; index < jumlah; index++) {
//       console.log('Loop ke : ', index);   // looping for
//     }

//     array.forEach(element => { // element => adalah callback
//         console.log('buah : ', element); //looping for each
//     });
// }

// var buah = ['apel', 'pisang', 'nanas'];

// functionFor(10, buah);

// //functionNilai(75);
// //functionSwitch("B");

// //inifunction("ratson","21"); // buat manggil function


//<--------------------------------------------------------------------------------------------------------->

// const modPerkalian = require('./moduleTest');

// modPerkalian.functionPerkalian(2, 4);

//-----------------------------------------------------------------------------------------------------


 
// app.get('/hello', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/user/:id', function (req, res) {
// //   console.log('user id ; ', JSON.stringify(req.params)); kalau mentok buat cek

//  console.log('user id ; ', req.params.id);

// let result = {
//     userid: req.params.id};


//   res.send(result)
// })

// app.get('/user/', function (req, res) {
//     //   console.log('user id ; ', JSON.stringify(req.params)); kalau mentok buat cek
    
//      console.log('user id ; ', req.query.id);
    
//     let result = {
//         userid: req.query.id};
    
    
//       res.send(result)
//     })

//     app.post('/user', (req, res) =>{
//         console.log('client req : ', JSON.stringify(req.body));

//         let result = req.body;
//         result.message = "hallo";
    


//         res.send(result);
//     });

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./modules/dbCon')
app.use(bodyParser.json())
const port = 3000

//konfigurasi routes provinces
const provincesRoute = require('./routes/provinces')
app.use(provincesRoute)


//konfigurasi book
const bookRoute = require('./routes/book')
app.use(bookRoute);

const conDB = require('./modules/dbCon')
global.conDB = db;


console.log("Server running in port : ", port)
 app.listen(port)

