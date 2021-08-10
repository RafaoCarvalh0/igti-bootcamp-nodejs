import express from "express";

const app = express();
app.use(express.static("public"));

app.listen(8000, ()=> {
    console.log("cors test started");
})