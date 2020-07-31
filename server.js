const express = require('express')
const cors = require('cors')
var path = require('path');

const app = express()
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(cors());


app.all("*", function (req, res, next) {
    next() 
})





app.use(express.static(path.join(__dirname,  "./www")));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/www/index.html'));
});


// Inite server
const port = process.env.PORT || 3000
app.listen( port, ()=> console.log(`servidor rodando na porta ${port}`))