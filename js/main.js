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

function registrarEntrenamiento() {
    let entrada = prompt("Cuantas horas entrenaste?")
    if (entrada === null) {
        return
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
}

function mostrarRutina(lista) {
    let mensaje = "=== REPORT FINAL: RUTINA DE ENTRENAMIENTO ==="
    for (const ejercicio of lista) {
        mensaje += "- " + ejercicio + "\n"
    }
    alert(mensaje)
}

function agregarEjercicioInicio(lista) {
    let nuevo = prompt("Que ejercicio queres agregar al inicio de tu rutina?")
    if (nuevo !== null && nuevo.trim() !== "") {
        lista.unshift(nuevo.trim())
        alert(nuevo + " se agrego al inicio de la rutina!")
    }
}
function eliminarUltimoEjercicio(lista) {
    if (lista.length > 0) {
        let eliminado = lista.pop()
        alert("Se elimino el ultimo ejercicio de tu rutina: " + eliminado)
    } else {
        alert("No quedan ejericios para eliminar.")
    }
}

function buscarEjercicio(lista) {
    let buscado = prompt("Que ejercicio queres consultar?")
    if (buscado === null) return

    if (lista.includes(buscado)) {
        let posicion = lista.indexOf(buscado)
        alert("El ejercicio " + buscado + " esta en la rutina(posicion " + (posicion + 1) + ").")
    } else {
        alert("El ejericio " + buscado + " no esta en la rutina.")
    }
}

function reemplazarEjercicio(lista) {
    let viejo = prompt("Que ejercicio queres reemplazar?")
    if (viejo === null) return

    let posicion = lista.indexOf(viejo)
    if (posicion !== -1) {
        let nuevo = prompt("Por cual queres reemplazar a " + viejo + "?")
        if (nuevo !== null && nuevo.trim() !== "") {
            lista.splice(posicion, 1, nuevo.trim())
            alert("Listo! Se cambio " + viejo + " por " + nuevo + ".")
        }
    } else {
        alert("El ejercicio " + viejo + " no existe en la rutina.")
    }
}

let ejercicios = ["Biceps", "Piernas", "Espalda", "Pecho", "Abdominales"]

while (continuar) {
    const opcion = prompt("Hola " + nombre + ", elegi una opcion: \n" +
        "1. Registrar nuevo entrenamiento \n" +
        "2. Consultar horas acumuladas \n" +
        "3. Consultar XP acumulada y estado \n" +
        "4. Ver rutina completa \n" +
        "5. Agregar ejercicio al inicio \n" +
        "6. Eliminar ultimo ejercicio \n" +
        "7. Buscar ejercicio \n" +
        "8. Reemplaza un ejercicio\n" +
        "9. Salir"
    )

    if (opcion === null || opcion === "9") {
        alert("Gracias por entrenar, " + nombre + "! Resumen final:" + totalHoras + " hs y " + totalXP + " XP.")
        continuar = false
        break
    }

    switch (opcion) {
        case "1":
            registrarEntrenamiento()
            break
        case "2":
            alert("Llevas entrenadas un total de " + totalHoras + " horas.")
            break
        case "3":
            alert("XP Acumulada: " + totalXP + " / " + goalXP + " XP. \n" + "Estado: " + evaluarProgreso(totalXP, goalXP))
            break
        case "4":
            mostrarRutina(ejercicios)
            break
        case "5":
            agregarEjercicioInicio(ejercicios)
            break
        case "6":
            eliminarUltimoEjercicio(ejercicios)
            break
        case "7":
            buscarEjercicio(ejercicios)
            break
        case "8":
            reemplazarEjercicio(ejercicios)
            break

        default:
            alert("Opcion no valida.")
            break
    }
}
console.log(nombre + ", obtuviste " + totalXP + " XP esta semana")


