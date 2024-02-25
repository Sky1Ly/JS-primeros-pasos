Notas("html")
Notas("css")
Notas("javaScript")

function Notas(ramo) {
    let nota = 0
    let suma = 0
    let targetHTML

    for (let index = 1; index < 4; index++) {
        //Se solicita Dato el signo "+" javaScript entiende que se usará un numero
        nota = + prompt("Ingrese la nota Nro " + index + " de " + ramo);

        //Busca el th en HTML y lo deja en targetHTML
        targetHTML = document.getElementById(ramo + "-" + index)
        targetHTML.innerHTML = nota

        //Se suman las notas
        suma += nota
    }

    let targetProm = document.getElementById(ramo + "-prom")
    targetProm.innerHTML = (suma / 3)
}

