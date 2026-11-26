const xpPorHora = 60
const goalXP = 1000

let totalXP = 0
let totalHoras = 0
let continuar = true

class Ejercicio {
    constructor(id, nombre, series, repeticiones, peso) {
        this.id = id
        this.nombre = nombre
        this.series = series
        this.repeticiones = repeticiones
        this.peso = peso
    }
    calcularVolumen() {
        return this.series * this.repeticiones * this.peso
    }
}

const calcularXP = (horas, xpPorHora) => horas * xpPorHora

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
    if (entrada !== null) {

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
}

function mostrarRutina(lista) {
    let mensaje = "=== REPORT FINAL: RUTINA DE ENTRENAMIENTO ===\n"
    for (const ej of lista) {
        mensaje += ej.nombre + " - " + ej.series + "x" + ej.repeticiones + " con " + ej.peso + "kg (volumen: " + ej.calcularVolumen() + "kg) \n"
    }
    alert(mensaje)
}

function agregarEjercicioInicio(lista) {
    let nuevo = prompt("Que ejercicio queres agregar al inicio de tu rutina?")
    if (nuevo === null || nuevo.trim() === "") {
        alert("No se indico nombre.")
    } else {
        let series = parseInt(prompt("Cantidad de series:"))
        let reps = parseInt(prompt("Cantidad de repeticiones:"))
        let peso = parseInt(prompt("Peso en kg:")) || 0

        let nuevoEjercicio = new Ejercicio(lista.length + 1, nuevo.trim(), series, reps, peso)
        lista.unshift(nuevoEjercicio)
        alert(nuevoEjercicio.nombre + " se agrego al inicio de la rutina!")
    }
}

function eliminarUltimoEjercicio(lista) {
    if (lista.length > 0) {
        let eliminado = lista.pop()
        alert("Se elimino el ultimo ejercicio de tu rutina: " + eliminado.nombre)
    } else {
        alert("No quedan ejercicios para eliminar.")
    }
}

function buscarEjercicio(lista) {
    let buscado = prompt("Que ejercicio queres consultar?")
    if (buscado !== null) {
        let encontrado = null
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].nombre.toLowerCase() === buscado.trim().toLowerCase()) {
                encontrado = lista[i]
                break
            }
        }
        if (encontrado !== null) {
            alert("Encontrado: " + encontrado.nombre +
                "\n Series: " + encontrado.series +
                "\n Reps: " + encontrado.repeticiones +
                "\n Peso: " + encontrado.peso + "kg" +
                "\n Volumen total: " + encontrado.calcularVolumen() + "kg")
        } else {
            alert("El ejercicio " + buscado + " no esta en la rutina.")
        }
    }
}

function reemplazarEjercicio(lista) {
    let viejo = prompt("Que ejercicio queres reemplazar?")
    if (viejo !== null) {
        let posicion = -1
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].nombre.toLowerCase() === viejo.trim().toLowerCase()) {
                posicion = i
                break
            }
        }
        if (posicion !== -1) {
            let nuevoNombre = prompt("Por cual queres reemplazar a " + viejo + "?")
            if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
                let series = parseInt(prompt("Cantidad de series:"))
                let reps = parseInt(prompt("Cantidad de repeticiones:"))
                let peso = parseFloat(prompt("Peso en kg:")) || 0
                let reemplazo = new Ejercicio(lista[posicion].id, nuevoNombre.trim(), series, reps, peso)
                lista.splice(posicion, 1, reemplazo)
                alert("Listo! Se cambio " + viejo + " por " + nuevoNombre + ".")
            }
        } else {
            alert("El ejercicio " + viejo + " no existe en la rutina.")
        }
    }
}

const ejercicio1 = new Ejercicio(1, "Sentadillas", 4, 10, 60)
const ejercicio2 = new Ejercicio(2, "Press de Banca", 4, 8, 50)
const ejercicio3 = new Ejercicio(3, "Dominadas", 3, 12, 0)

let ejercicios = [ejercicio1, ejercicio2, ejercicio3]

const nombre = prompt("Como te llamas?")
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


