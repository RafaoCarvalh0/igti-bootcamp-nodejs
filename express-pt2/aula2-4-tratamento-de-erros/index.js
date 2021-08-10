import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    throw new Error("Error message text");
})

app.use((err, req, res, next) =>{
    console.log("erro 1");
    res.status(500).send("Occorreu um erro");
});

app.listen(8080, ()=>{
    console.log("servidor online");
});

