var express = require("express");
var app = express();
app.listen(8080, () => {
 console.log("The Greatest Server by Michelle & CT is running on port 3000!");
});

app.get("/", (req, res) => {
 res.send(["Hello, Minions!"]);
});

app.get("/api", (req, res, next) => {
 res.json(["Lorem","Ipsum","Dolor","Sit","Amet"]);
});

app.get("/fx-static", (req, res, next) => {
 res.json({"sell": "500.298", "timestamp": "2021-01-15 14:42:34.492974", "buy": "356.178"});
});

app.get("/fx", (req, res, next) => {
 rand1 = Math.floor(Math.random() * 90) + 10;
 rand2 = Math.floor(Math.random() * 90) + 10;

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time;

 res.json({"sell": "500." + rand1, "timestamp": dateTime, "buy": "356." + rand2});
});

app.get("/random", (req, res, next) => {
 res.json([Math.floor(Math.random() * 90) + 10]);
});

app.get('*',function (req, res) {
        res.redirect('/');
    });

// node app.js