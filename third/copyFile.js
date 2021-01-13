const fs = require("fs")

fs.copyFile("creado.txt","creado2.txt", (error) => {

    if (error) {
        console.error("error: ", error)
        return
    }
    console.log("Archivo copiado")
})