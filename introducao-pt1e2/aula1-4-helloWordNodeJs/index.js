
//process.argv = used to pass a argument with the execution of the code. 
//Ex.: node index.js 100 (this will execute the script with an aditional argument of 100)
//Obs.: these arguments come in an array, so it's needed to check the position first with a "console.log(process.argv)"

//console.log(process.argv)
const numero = parseInt(process.argv[2]);
const multiplos = [];

for(let i = 3; i < numero; i++){
    if((i%3 === 0 ) || (i%5 === 0)){
        multiplos.push(i);
    }
}
console.log(multiplos);
