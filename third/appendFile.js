const fs = require("fs")

fs.appendFile("creado.txt"," node to append","utf8", (error) => {

    if (error) {
        console.error("error: ", error)
        return
    }
    console.log("Archivo append")
})