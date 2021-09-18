const app = require('express')();
const http = require('http').Server(app);
const port = '8000';
const express = require('express');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
});


http.listen(port|| process.env.PORT, () => {
        console.log(`listening on http://localhost:${port}/`);
});
