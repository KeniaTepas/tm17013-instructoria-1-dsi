import fs from 'fs';
class leer {
    nombreArchivo:string;
    constructor(archivo:string){
        this.nombreArchivo=archivo;

    }
    async leer() {
        fs.readFile(this.nombreArchivo, 'utf8', (err, data)=>{
            console.log(data);

        });
        
    }
}
//identificar archivoo
let leyendoArchivo=new leer("ejemplo.txt");
leyendoArchivo.leer()

//en este ejemplo usar npm start ""