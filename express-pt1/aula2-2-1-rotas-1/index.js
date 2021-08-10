import express from "express"

const app = express();

app.all("/testeAll", (req, res) =>{
    res.send(req.method);
});

// THE "?" SIGN IGNRES THE CHARACTER THAT IS RIGH BEFORE IT,
// SO YOU CAN TYPE BOTH http://localhost:8080/teste
// OR  http://localhost:8080/test 
app.get("/teste?", (req, res) =>{
    res.send("teste?");
});

// THE "+" SIGN LETS YOU REPEAT THE LAST CHARACTER BEFORE IT, INDEFENITELY
// EXAMPLE: http://localhost:8080/buzzzzzzzzzzzzzzzzzz
app.get("/buzz+", (req, res) =>{
    res.send("buzz+");
});

// THE "*" SIGN LETS YOU USE ANY CHARACTER AFTER THE LAST ONE
// EXAMPLE: http://localhost:8080/oneqwkegqhweiqiweguieq (IT WORKS)
app.get("/one*", (req, res) => {
    res.send("one*");
});

// THE "()" IN COMBINATION WITH "?" LETS YOU OPTIONALY USE THE CHARACTERS INSIDE THE PARENTESIS
app.post("test(ing)?", (req , res) =>{
    res.send("test(ing)?");
});

app.listen(8080,()=>{
    console.log("Server online!");
});