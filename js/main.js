const xpPorHora = 60
const goalXP = 1000
const diasSemana = 7

const nombre = prompt("Como te llamas?")

let totalXP = 0
let diaActual = 1 

while (diaActual <= diasSemana){
    let horas = parseFloat(
        prompt("Cuantas horas queres entrenar hoy")
            );

            let xpGanado = xpPorHora * horas
            totalXP = totalXP + xpGanado

            if (totalXP >= goalXP) {
                console.log ("Ya alcanzaste tu meta de XP!")
            }else if (totalXP >= 500){
                console.log("Vas muy bien!")
            } else {
                console.log("Segui entrenando!")
            }

            console.log("Dia" + diaActual + ": ganaste " + xpGanado + "XP.")
            console.log("XP acumulado: " + totalXP)

            diaActual = diaActual + 1
}

console.log(nombre + ", obtuviste " + totalXP + " XP esta semana")

