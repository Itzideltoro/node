
  const koder = {
    entrevistado: false,
    ofertado: false,
    inscrito: false,
    asistioAClase: false   
}
/*
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

=========================AGREGAMOS CALLBACK AL LLAMAR LA PRIMERA FUNCIÓN ========================================
*/


/*


// Necesitamos decirle a las funciones que en cuanto acabe la primera función
//con ayuda del callback le avise que ya terminó para poder ir  con la siguiente función
// lo mejor es hacerla genérica por si necesitamos hacer otra cosa antes
// es decir para que no se peguen las funciones y le quites libertar 


//pones un segundo parámetro, que es otra función 




function entrevistarKoder (koderAEntrevistar, callback) {
    setTimeout (() =>{
        koderAEntrevistar.entrevistado = true
        callback (koderAEntrevistar)
    
    }, 1000)


}

function ofertarKoder (koderAOfertar, callback ) {
    setTimeout (() =>{
        koderAOfertar.ofertado = true
        callback (koderAOfertar)
    
    }, 2000)
    

}

function inscribirKoder (koderAInscribir, callback) {
    setTimeout (() =>{
        koderAInscribir.inscrito = true
        callback (koderAInscribir)
        
    }, 2000)
 

}

function asistirAClaseKoder (koderAClase, callback) {
    setTimeout (() =>{
        koderAClase.asistioAClase = true
        callback (koderAClase)
        
    }, 3000)
   

}




//const koderEntrevistado = entrevistarKoder (koder)
//const koderOfertado = ofertarKoder (koderEntrevistado) 
//const koderInscrito = inscribirKoder (koderOfertado)
//const koderConAsistencia = asistirAClaseKoder(koderInscrito)

// La función koderEntrevistado todavía recibe a koder, y también un nuevo parámetro que es callback 
// en vez de meter otro parámetro callback metemos una función anónima, puede ser flecha o normal 
// de esa forma primero se ejecuta koder y después ejecuta la función flecha 

entrevistarKoder(koder, (koderEntrevistado) => {
    console.log('Koder entrevistado: ', koderEntrevistado)

   ofertarKoder (koderEntrevistado, (koderOfertado) => {
    console.log('Koder ofertado ', koderOfertado)
    inscribirKoder (koderOfertado, (koderInscrito) => {
        console.log('Koder inscrito ', koderInscrito)
        asistirAClaseKoder (koderInscrito, (koderAClase) => {
            console.log('Koder en clase ', koderAClase)
        })
    }) 
   })
})

// No existe return por lo tanto no puedes utilziarla en otro lado, todo lo que quieras
//hacer tienes que hacer dentro de la función asistirAClase

======================== CALLBACK SINTAXIS==================================================
*/

//por convención se tiene que tener en cuenta los dos escenarios posibles, tanto error cómo exitoso 


function entrevistarKoder (koderAEntrevistar, callback) {
    setTimeout (() =>{
        koderAEntrevistar.entrevistado = true

        let error = null 
        if(koderAEntrevistar)
        callback (error, koderAEntrevistar)
    
    }, 1000)


}

function ofertarKoder (koderAOfertar, callback ) {
    setTimeout (() =>{
        koderAOfertar.ofertado = true
        callback (error, koderAOfertar)
    
    }, 2000)
    

}

function inscribirKoder (koderAInscribir, callback) {
    setTimeout (() =>{
        koderAInscribir.inscrito = true
        callback (error, koderAInscribir)
        
    }, 2000)
 

}

function asistirAClaseKoder (koderAClase, callback) {
    setTimeout (() =>{
        koderAClase.asistioAClase = true
        callback (error, koderAClase)
        
    }, 3000)
   

}



entrevistarKoder(koder, (koderEntrevistado) => {
    console.log('Koder entrevistado: ', koderEntrevistado)

   ofertarKoder (koderEntrevistado, (koderOfertado) => {
    console.log('Koder ofertado ', koderOfertado)
    inscribirKoder (koderOfertado, (koderInscrito) => {
        console.log('Koder inscrito ', koderInscrito)
        asistirAClaseKoder (koderInscrito, (koderAClase) => {
            console.log('Koder en clase ', koderAClase)
        })
    }) 
   })
})


