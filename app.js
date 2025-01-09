const express = require('express') //

const app = express()

/*
.use = 
*/
app.use(express.json({ extended: true }))

/*
.send = line teks, atau teks biasa
*/
app.get('/', function(req, res) {
    res.send('Hello Word')
})

/*
.json = dikembalikan (res) dalam bentuk json
*/
app.get('/about', function(req, res) {
    res.json({message: 'About page'})
})

/*
query = dalam alamat web, setelah /request akan ada tanda tanya, kemudian value yang akan ditampilkan
    http://localhost:3000/request?webdev=2024
    {
    "webdev": "2024"
    }
*/
app.get('/request', function(req, res) {
    res.json(req.query)
})

/*
.post = jalankan fungsi di dalamnya
*/
app.post('/form', function(req, res) {
    res.json({
        salam: `Hello ${req.body.name}`,
    });
});

/*
(3000) = ekspresi berjalan di port 3000
console.lo
*/
app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000')
})