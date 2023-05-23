 

const opiniones = document.querySelectorAll(".opinionCliente");

var posEstrella = 0

/*recorremos las secciones donde estan las estrellas,en este caso las opiniones 
de los clientes */ 
opiniones.forEach(opinion => {

    // para cada opinion, recuperamos las estrellas
    const estrellas = opinion.querySelectorAll(".estrella i");

    console.log(estrellas)

    var posActual = 1
    // para cada estrella le asignamos un listener
    // que cada vez que se haga click recupera la posición que ocupa
    // la estrella para saber cuantas estrellas marcaré
    estrellas.forEach(estrella => {


        estrella.addEventListener("click", function(){

            // recuperamos la posición de la estrella
            // a través del atributo attrNum
            posEstrella =  estrella.getAttribute("attrNum");

            // reseteamos el valor del estilo de todas las estrellas
            // al principio
            for (let i = 0; i < estrellas.length; i++) {

                estrellas[i].style.color = "black";

            }

            // recorremos todas las estrellas desde el inicio
            // hasta la estrella que se haya hecho click
            for (let i = 0; i < posEstrella; i++) {

                estrellas[i].style.color = "cyan";

            }
            

            

        })

    })

})