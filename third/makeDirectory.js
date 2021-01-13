const fs = require("fs")

fs.mkdir ("kodemia", (error) => {
    if (error) {
        console.log("no se pudo crear la carpeta", error)
        return
    }
    console.log("carpeta creada :)")

})

