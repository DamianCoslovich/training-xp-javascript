const xpPorHora = 60
const goalXP = 1000
const diasSemana = 7

const nombre = prompt("Como te llamas?")

let totalXP = 0
let diaActual = 1

const calcularXP = (horas, xpPorHora) => {
    return horas * xpPorHora
}

function pedirHorasPorDia(dia) {
    let horas = parseFloat(prompt("Cuantas horas vas a entrenar el dia " + dia + "?"))
    return horas
}

function evaluarProgreso(totalXP, goalXP){
    if (totalXP >= goalXP) {
        console.log("Ya alcanzaste tu meta de XP!")
    } else if (totalXP >= 500) {
        console.log("Vas muy bien!")
    } else {
        console.log("Segui entrenando!")
    }
}

while (diaActual <= diasSemana) {
   
    let horas = pedirHorasPorDia(diaActual)

    let xpGanado = calcularXP(horas, xpPorHora)
    totalXP = totalXP + xpGanado

     evaluarProgreso(totalXP, goalXP)

    console.log("Dia " + diaActual + ": ganaste " + xpGanado + " XP.")
    console.log("XP acumulado: " + totalXP)

    diaActual = diaActual + 1
}

console.log(nombre + ", obtuviste " + totalXP + " XP esta semana")

