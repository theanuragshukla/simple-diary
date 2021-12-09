const app = require('express')();
const http = require('http').Server(app);
const port = '8000';
const express = require('express');
const fs = require('fs');
const moment = require('moment');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
});


app.post('/', (req, res) => {

        var msg = req.body.msg;
        var remark = req.body.remark;
     // console.log(msg);
fs.appendFile(`./static/diary/diary.txt`,"------------------------------------------\ntime: "+getTime()+"\n"+ msg + "\n\nremarks: "+remark+"\n\n", (err) => {
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


function timestamp(){
  function pad(n) {return n<10 ? "0"+n : n}
  d=new Date()
  dash="-"
  colon=":"
  return d.getFullYear()+dash+
  pad(d.getMonth()+1)+dash+
  pad(d.getDate())+" "+
  pad(d.getHours())+colon+
  pad(d.getMinutes())+colon+
  pad(d.getSeconds())
}

function getTime(){
d = new Date();
utc = d.getTime() + (d.getTimezoneOffset() * 60000);
nd = new Date(utc + (3600000*+5.5));
var ist =  nd.toLocaleString();
//console.log("IST now is : " +ist);
return ist;
}

http.listen(process.env.PORT || port, () => {
        console.log(`listening on http://localhost:${port}/`);
});

