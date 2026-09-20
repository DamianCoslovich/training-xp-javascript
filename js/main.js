const xpPorHora = 60;
const goalXP = 1000; 
const empezandoXP = 0

const nombre = prompt ("Como te llamas?");

let horasPorDia = parseFloat(prompt("Cuantas horas queres entrenar por dia?"));
let dias = parseInt(prompt("Cuantas dias vas a entrenar esta semana?"));

const totalXPObtenido = empezandoXP + xpPorHora * horasPorDia * dias;

console.log(nombre + ", obtuviste " + totalXPObtenido + "XP esta semana")


