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


app.post('/', (req, res) => {

        var msg = req.body.a;
        var remark = req.body.b;
      console.log(msg);
fs.appendFile(`./static/diary/diary.txt`, msg + "\n", (err) => {
                if (err) throw err;
        });
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
                result:'done'
        }));

});

app.get('/diaryall',(req,res)=>{
	res.sendFile(__dirname+'/static/diary/diary.txt')
})

http.listen(process.env.PORT || port, () => {
        console.log(`listening on http://localhost:${port}/`);
});
