const nota1 = Number && prompt("Por favor, ingrese la nota correspondiente al TP 1") 
|| (alert(`Por favor, ingrese un numero entre el 0 y el 100`),
prompt(`Por favor, ingrese la nota correspondiente al TP 1`));
console.log(nota1);

const nota2 = Number && prompt("Por favor, ingrese la nota correspondiente al TP 2") 
|| (alert(`Por favor, ingrese un numero entre el 0 y el 100`),
prompt(`Por favor, ingrese la nota correspondiente al TP 2`));
console.log(nota2);

const nota3 = Number && prompt("Por favor, ingrese la nota correspondiente al TP 3") 
|| (alert(`Por favor, ingrese un numero entre el 0 y el 100`),
prompt(`Por favor, ingrese la nota correspondiente al TP 3`));
console.log(nota3);

let sumaNotas = Number = nota1*1 + nota2*1 + nota3*1;
console.log(sumaNotas);

let promedio = Number = sumaNotas / 3;
console.log(promedio);

let notaFinal = ((promedio > 90) && "EXCELENTE") || 
                ((promedio > 70 && promedio < 90) && "MUY BUENO") || 
                ((promedio > 60 && promedio < 70) && "BUENO") ||
                ((promedio > 40 && promedio < 60) && "REGULAR") ||
                ((promedio < 40) && "INSUFICIENTE");
console.log(notaFinal)

alert(`El promedio de notas es ${notaFinal}.`);