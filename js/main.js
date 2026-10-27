const xpPorHora = 60
const goalXP = 1000

const nombre = prompt("Como te llamas?")

let totalXP = 0
let totalHoras = 0
let continuar = true

const calcularXP = (horas, xpPorHora) => {
    return horas * xpPorHora
}

function evaluarProgreso(totalXP, goalXP) {
    if (totalXP >= goalXP) {
        return ("Ya alcanzaste tu meta de XP!")
    } else if (totalXP >= 500) {
        return ("Vas muy bien!")
    } else {
        return ("Segui entrenando!")
    }
}

while (continuar) {
    const opcion = prompt("Hola " + nombre + ", elegi una opcion: \n" +
        "1. Registrar nuevo entrenamiento \n" +
        "2. Consultar horas acumuladas \n" +
        "3. Consultar XP acumulada y estado \n" +
        "4. Salir"
    )

    if (opcion === null) {
        alert("Programa cancelado.")
        continuar = false
        break
    }

    switch (opcion) {
        case "1": {
            let entrada = prompt("Cuantas horas entrenaste?")

            if (entrada === null) {
                break
            }
            let horas = parseFloat(entrada)
            if (!isNaN(horas) && horas > 0) {
                let xpGanada = calcularXP(horas, xpPorHora)

                totalHoras = totalHoras + horas
                totalXP = totalXP + xpGanada
                alert("Sumaste " + horas + " hs y ganaste " + xpGanada + " XP.")
            } else {
                alert("Por favor, ingresa una cantidad de horas valida.")
            }
            break
        }


        case "2":
            alert("Llevas entrenadas un total de " + totalHoras + " horas.")
            break
        case "3":
            alert("XP Acumulada: " + totalXP + " / " + goalXP + " XP. \n" + "Estado: " + evaluarProgreso(totalXP, goalXP))
            break
        case "4":
            alert("Gracias por entrenar, " + nombre + "! Resumen final: " + totalHoras + "hs y " + totalXP + " XP.")
            continuar = false
            break
        default:
            alert("Opcion no valida.")
            break
    }
}
console.log(nombre + ", obtuviste " + totalXP + " XP esta semana")

let ejercicios = ["Biceps", "Piernas", "Espalda", "Pecho", "Abdominales"]
console.log("Rutina base inicial:", ejercicios)

let ejercicioEliminado = ejercicios.pop()
console.log("Se quito del final:", ejercicioEliminado)

ejercicios.unshift("Warm up")
console.log("Rutina con inicio prioritario:", ejercicios)

let ejerciciosConsultado = "Piernas"
if (ejercicios.includes(ejerciciosConsultado)){
    let posicion = ejercicios.indexOf(ejerciciosConsultado)
    console.log("El ejercicio "+ ejerciciosConsultado + " esta en la rutina.")
    console.log("Posicion en la lista (indice): " + posicion)
} else {
    console.log("El ejercicio " + ejerciciosConsultado + " no esta en la rutina.")
}

ejercicios.splice(2,1,"Hombros")
console.log("Rutina actualizada con splice:", ejercicios)

function mostrarRutina(listaEjercicios){
    console.log("=== REPORT FINAL: RUTINA DE ENTRENAMIENTO ===")
    for (const ejercicio of listaEjercicios){
        console.log("- " + ejercicio)
    }
}
mostrarRutina(ejercicios)