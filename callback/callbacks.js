
const koder = {
    entrevistado: false,
    ofertado: false,
    inscrito: false,
    asistioAClase: false   
}

 //creamos varias funciones, llamando a la propiedad del objeto con ., 
 //reasignando de falso a verdadero, pedimos return para que regrese el parámetro y la siguiente función pueda utilizarlo 


function entrevistarKoder (koderAEntrevistar) {
    koderAEntrevistar.entrevistado = true
    return koderAEntrevistar

}

function ofertarKoder (koderAOfertar) {
    koderAOfertar.ofertado = true
    return koderAOfertar

}

function inscribirKoder (koderAInscribir) {
    koderAInscribir.inscrito = true
    return koderAInscribir

}

function asistirAClaseKoder (koderAClase) {
    koderAClase.asistioAClase = true
    return koderAClase

}

//Declaramos una variables con la funciones que declaramos anteriormente para llamarlas y darles el parámetro 

const koderEntrevistado = entrevistarKoder (koder)
const koderOfertado = ofertarKoder (koderEntrevistado) // No va a ofertar a cualquier koder, va a ofertar al que ya esté entrevistado
const koderInscrito = inscribirKoder (koderOfertado)
const koderConAsistencia = asistirAClaseKoder(koderInscrito)

console.log("Koder en Kodemia: ", koderConAsistencia)






