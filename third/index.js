const fs = require("fs")

fs.writeFile("creado.txt","hola desde node","utf8", (error) => {

    if (error) {
        console.error("error: ", error)
        return
    }
    console.log("Archivo escrito")
})