const express = require('express');
const app = express();
app.use(express.json());//instead of body parser
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/users', (req,res) => {
    console.log(req.body);
    res.contentType('application/json');
    res.send(JSON.stringify(req.body));
})

app.listen(port, () => {
    console.log(`Listening to port : ${port}`);
})