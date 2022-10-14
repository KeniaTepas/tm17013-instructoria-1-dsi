//en este caso npm start ruta1.txt ruta2.txt
import * as fs from 'fs';

let parametro1: string=process.argv[2];
//luego obtenemos la  ruta de destino
let parametro2: string=process.argv[3];


let fileNameOrigen: string = parametro1;

let fileNameDestino: string = parametro2;
let content: string='';
//readFile leemos el archivo 
fs.readFile(fileNameOrigen, 'utf8', (err, data)=> {
    if (err) throw err;
 
    content=data;
    // writeFile para escribir o sobreescribir el archivo
fs.writeFile(fileNameDestino, data, (err)=>{
    if (err) throw err;
    console.log("OK. Ya se copio");
})
});