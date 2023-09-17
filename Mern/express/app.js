var express = require("express")
var app = express();

// app.get(url_mapping, function)
app.get("/",(req, res)=>{
    res.send("Hello Node.js")
})

app.get("/mycalc",(req, res)=>{
    console.log(req.query);
    var params = req.query
    var x = params.num1
    var y = params.num2;
    res.send(`${x} + ${y} =${x + y}`)
})













app.use(express.json())
app.post("/mycalc",(req, res)=>{
    res.send(req.body)
})









app.put("/mycalc",(req, res)=>{
    res.send("My calc put")
})

app.delete("/mycalc",(req, res)=>{
    res.send("My calc delete")
})



app.listen(8989, ()=>{
    console.log("listening t port 8989");
})