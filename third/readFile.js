const fs = require("fs")

fs.readFile ("creado.txt", "utf8",(err, data) => {
    if (err) {
        console.error("error: ", err)
        return
    }
    console.log("leido", data)
})