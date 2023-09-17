var express = require("express")
var app = express();


app.get("/mycalc",(req, res)=>{
    console.log(req.query);
    var params = req.query
    var x = params.num1
    var y = params.num2;
    var z = x+y
    res.send(`${x} + ${y} =${z}`)
})

app.use(express.json())
app.post("/mycalc",(req, res)=>{
   var x =req.body.num1
   var y =req.body.num2
    res.send(`${x} - ${y} = ${x-y}`)
})

app.put("/mycalc",(req, res)=>{
    var x =req.body.num1
    var y =req.body.num2
     res.send(`${x} * ${y} = ${x*y}`)
 })

 app.delete("/mycalc",(req, res)=>{
    var params = req.query
    var x = params.num1
    var y = params.num2;
     res.send(`${x} / ${y} = ${x/y}`)
 })

app.listen(8989, ()=>{
    console.log("listening t port 8989");
})