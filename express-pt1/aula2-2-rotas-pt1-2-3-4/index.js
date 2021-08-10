import express from "express"

const app = express();
app.use(express.json());

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
app.post("/test(ing)?", (req , res) =>{
    console.log(req.body);
    res.send("test(ing)?");
});

// USING A PARAMETER ":something"
app.get("/testParam/:id", (req, res)=>{
    res.send(req.params.id);
});

// USING PARAMETERS VIA QUERY
// EX: 
app.get("/testQuery", (req, res) =>{
    res.send(req.query);
});

app.get("/testMultipleHandlers", (req, res, next) =>{
    console.log("callback1");
    next();
}, (req, res)=>{
    console.log("callback2");
    res.end();
});

const callback1 = (req , res, next) =>{
    console.log("callback1");
    next();
};

const callback2 = (req , res, next) =>{
    console.log("callback2");
    next();
};

const callback3 = (req , res) =>{
    console.log("callback3");
    res.end();
};

app.get("/testMultipleHandlersArray", [callback1, callback2, callback3]);

app.route("/testRoute")
    .get((req, res)=>{
        res.send("get");
    })
    .post((req, res)=>{
        res.send("post");
    })
    .delete((req, res)=>{
        res.send("delete");
    })

app.listen(8080,()=>{
    console.log("Server online!");
});