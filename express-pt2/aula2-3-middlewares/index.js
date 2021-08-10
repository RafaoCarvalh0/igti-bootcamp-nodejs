import express from "express";
import carrosRouter from "./carrosRouter.js";

const app = express();
//OBS, app.use WILL ALWAY EXECUTE THE FUNCTION BETWEEN THE () ON EVERY REQ
app.use(express.json());

//THIS LINE IS BASICALLY SAYING THAT EVERYTHING THAT'S REQUESTED WITH "/carros"
//GOES TO THE "carrosRouter.js" FILE
app.use("/carros", carrosRouter);

app.use((req, res, next) =>{
    console.log(new Date());
    next();
});

app.get("/testDate", (req, res) =>{
    res.end();
});

app.listen(8080, ()=>{
    console.log("server online");
});

