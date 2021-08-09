//import fs, { readFile } from "fs";
import {promises as fs} from "fs"; //using promises

init();

//ASYNC AWAIT, BEST WAY TO USE PROMISES (MULTI THREADING)
async function init(){
    try{
        await fs.writeFile("teste4.txt", "lol promises lol");
        await fs.appendFile("teste4.txt", "\n test append file");
        const data = await fs.readFile("teste4.txt", "utf-8");
        console.log(data);
        
      
    }catch(err){
        console.log(err);
    }
}

//PROMISE HELL (BAD IDEA, BUT WORKS, MULTI THREADING)
/*fs.writeFile("teste3.txt", "lol promises lol").then(()=>{
    fs.appendFile("teste3.txt", "\n test append file").then(()=>{
        fs.readFile("teste3.txt", "utf-8").then(resp =>{

        }).catch(err=>{
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
});*/

/*
// THIS METHOD USES ASYNCRONISM, SO IT DOESN'T LOCK ON ONE SINGLE THREAD. 
// THE CALLBACK FUNCTIONS (AKA ARROW FUCTIONS) ARE RESPONSIBLE FOR THIS ASYNCRONISM,
// THEY MAKE USE OF MULTIPLE THREADS WHILE EXECUTING THE SCRIPT, NOT "STOPING THE FLOW"
fs.writeFile("teste.txt", "test texttest texttest texttest texttest texttest text", (err)=>{ 
    if (err){
        console.log(err);
    }else{
        fs.appendFile("teste.txt", "lol new text added lol", (err)=>{
            if (err){
                console.log(err);
            }else{
                readFile("teste.txt", "utf-8", (err, data) =>{
                    if (err){
                        console.log(err);
                    }else{
                        console.log(data);
                    }
                })
            }
        })
        
    }
})*/

// THIS METHOD USES SYNCRONISM, SO IT LOCKS ON ONE SINGLE THREAD. 
// SO WHAT HAPPENS IS THAT THE SCRIPT HAS TO WAIT THAT SINGLE THREAD TO BE
// UNOCUPIED TO CONTIUE, MAKING THE PROCESS SLOWER IN SOME CASES.
/*try{
    fs.writeFileSync("texto2.txt", "test 2 whatever, lol");
    const data = fs.readFileSync("texto2.txt", "utf-8");
    console.log(data);
}catch (err) {
    if (err){
        console.log(err);
    }
}
*/