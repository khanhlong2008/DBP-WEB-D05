// import o come on  js
const myMath = require('./MyMath');
const fs = require('fs');
const http = require('http');
const chalk = require('chalk');

console.log(myMath.sum(1,2))
fs.readFile('./hello.txt', 'utf8' , (err,data) =>{
    if( !err){
        // console.log(chalk.bgBlueBright(data));
    }
});
// tao server 
const server = http.createServer((req, res) =>{
    //  console.log('New response comming!')
     fs.readFile("./index.html" , "utf8" , (err,data)=>{
            if(!err){
                res.writeHead(200, {"content-type": "text/html"})
                res.write(data);
                res.end();
            }
     })
    //  res.writeHead('200', {"content-type": "text/plain"});
    //  res.write("Hello Web D05");
    //  res.end();
})
// cong server 
// khi listen thanh cong thi tra ra cai gi do 
// server luon luon hoat dong va doi reqes tu phia client
server.listen(5000, ()=>{
     console.log('Server is runming at 5000');
});
