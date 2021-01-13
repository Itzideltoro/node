const fs = require ("fs")

fs.rmdir("./kodemia", (error) => {
    if (error) {
        console.log("no se pudo eliminar ", error)
        return
    }

    console.log("carpeta eliminada")
})