// soma de dois números
let n1 = 5
let n2 = 10

let somar = (n1, n2) => n1 + n2;

let soma = somar(n1, n2);

console.log(soma);


// Maior de três números
let num1 = 5
let num2 = 10
let num3 = 25
let maior

function Maiorde3(num1, num2, num3) {

if (num1 > num2 && num1 > num3) {
    maior = num1
}

else if (num2 > num1 && num2 > num3) {
    maior = num2
}

else if (num3 > num1 && num3 > num2) {
    maior = num3
}

console.log(maior);

} 

Maiorde3(num1, num2, num3);


// Se um número é par ou impar

function ParouImpar(num) {
    if (num % 2 === 0) {
        return('É par');
    }
    else {
        return('É impar');
    }
}

console.log(ParouImpar(4))