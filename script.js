//while

// let numero = Number(prompt("Digite um número"))
// let soma = 0

// while (numero !== 0) {
//    soma = soma + numero
//    console.log(numero);
//    console.log(soma);
//    numero = Number(prompt("Digite um novo número"))
// }

// console.log("Soma:", soma);


//----------------------------------------------

// for

// let numero = Number(prompt("Digite um número"))

// for (let i = 0; i <= numero; i ++){
//     console.log(i);
// }


//----------------------------------------------

// for com arrays

// const meuArray = [2,3,6,9,12,4,7]

// for(let i = 0; i < meuArray.length; i ++){
//     console.log(`O elemento de índice ${i} é ${meuArray[i]}`);
// }

//----------------------------------------------

// Pra guardar na cabeça

//01

let tipoUsuario = prompt("Informe seu usuário: ")

while(tipoUsuario.toUpperCase() !== "A"){
    console.log("Acesso negado!")
    tipoUsuario = prompt("Informe seu usuário: ")
}
console.log("Boas vindas, admin!")

//02

// const tabuada = 2

// for(let i = 1; i <= 10; i++){
//     console.log(`${tabuada} * ${i} = ${tabuada * i}`);
// }


//03

// const arrayStrings = ["Maia", "Clara", "Serena"]

// for(let i = 0; i < arrayStrings.length; i++){
//     console.log(arrayStrings[i].toUpperCase());
// }