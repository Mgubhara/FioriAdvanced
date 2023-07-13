
var express = require('express');

var app = express();

app.use("/", express.static(__dirname + "/webapp/"));

app.get("/", (req,res)=> {
    res.send("Welcome to my Website");
})

this.vendors = [
    {
        "id": 1,
        "name": "Muralidhar",
        "City": "Newyork"
    },
    {
        "id": 2,
        "name": "Muralidhar",
        "City": "Bangkok"
    }
];

//app.get("/index.html", (req,res)=> {

  //  res.send(__dirname + "/webapp/index.html");
//})

app.get("/vendors", (req,res)=> {
    res.json(this.vendors);

})

console.log("Your Server Started on http://localhost:3000");

const portno = process.env.PORT || 3000;

app.listen(portno);


