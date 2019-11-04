// Flo, este codigo tiene el mismo problema que el ej 34. Supongo que con Number lo que intentás hacer es validar
// si efectivamente cada variable es un número. Eso no funciona, ya que javascript no sabe bien qué hacer con
// Number (supone que es una variable) y lo ignora. Tu código funcionaría sacando todas las menciones a Number. 

// Para validar si nota1 es un número, deberíamos hacer algo así

// const nota1 = prompt("Por favor, ingrese la nota correspondiente al TP 1")
// Number(nota1) || alert("Por favor ingrese un número válido") 

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

// Multiplicar los números por 1 supongo que es una manera de coercionar la variable nota1, que es un prompt, 
// a que sea un número. 
// No está mal en sí, ya que "funciona", pero no es el método más claro para otra persona que lee nuestro código. 
// Existe el método Number() cuya función es justamente hacer esa coerción, por lo que sería preferible hacerlo así
// let sumaNotas = Number(nota1) + Number(nota2) + Number(nota3)
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

// Muy buen trabajo
