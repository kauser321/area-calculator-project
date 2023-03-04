const bodyParser=require("body-parser");
const express=require("express");
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + '/circle.html')
});
app.get("/traingle",(req,res)=>{
    res.sendFile(__dirname + "/traingle.html")
})
app.post("/circle",(req,res)=>{
    const radius=req.body.radius;
    const area=Math.PI *radius*radius
    res.send(`This area is ${area} `)
});
app.post("/traingle",(req,res)=>{
    const base=req.body.base;
    const height=req.body.height;
    const result=.5*base*height;
    res.send(`this result is ${result}`)
})
app.listen(port,()=>{
    console.log(`This server is running at http://localhost${port}`)
})