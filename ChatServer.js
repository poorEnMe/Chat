const app = require('express')();

const http = require('http').Server(app);

app.get('/',function (req,res) {
    res.send('<h1>Hello</h1>');
});

http.listen(3000,()=>console.log('listen:3000'));