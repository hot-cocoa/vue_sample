const express = require('express');
const app = express();

app.post('/app', (req, res) => {
    console.log(req);
    res.send({
        "message": "connection OK"
    });
});

app.listen('3000', () => {
    console.log('Application Started');
});