const fs = require("fs")


fs.unlink("creado2.txt", (error)=>{
    if (error) {
        console.log("no se pudo eliminar ", error)
        return
    }

    console.log("archivo eliminado" )

})