import {promises as fs, readFile} from "fs"; 

writeReadJson();

async function writeReadJson(){
    try {
        //INITIAL VALUES
        const arrayCarros = ["gol", "palio", "uno"];
        const obj = {
            carros: arrayCarros
        };

        //WRITE INITIAL VALUES ATA test.json FILE
        await fs.writeFile("test.json", JSON.stringify(obj));

        //READ THE FILE
        const data = JSON.parse(await fs.readFile("test.json", "utf-8"));

        //ADD DATA TO ARRAY
        data.carros.push("Onix");
        console.log(data);

        //OVERWRITE FILE WITH NEW ARRAY
        await fs.writeFile("test.json", JSON.stringify(data));

    }catch(err){
        console.log(err);
    }
}