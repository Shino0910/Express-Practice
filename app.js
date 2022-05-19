var express = require('express')
var app = express()

// console.log(app)

app.get('/user/:name', function(req, res){
    var myName = req.params.name
    if(myName !== 'tom'){
        res.send('404 Not Found')
    }else{
    res.send('Tom ')}
})

// app.get('/user', function(req, res){
//     res.send(' Test from express for user ')
// })


var port = 3000
app.listen(port)
