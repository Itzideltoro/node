const fs = require("fs");

var files = fs.readdirSync("./kodemia");
console.log(files);


fs.readdir("./kodemia", (error,files) => {
    if(error) {
        console.log("no se pudo leer el archivo")
        return
    }
    console.log("Aquí los archivos: ",files)
}); 




