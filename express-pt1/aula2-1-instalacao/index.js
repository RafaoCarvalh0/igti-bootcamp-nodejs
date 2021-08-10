import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World! GET");
});

app.post("/", (req, res)=>{
    const a = 2;
    const b = 3;
    const resultado = a + b;
    res.send("Hello World! POST " + a + " + " + b + " = " +  resultado);
});

app.listen(8080, ()=>{
    console.log("Server Online!");
});