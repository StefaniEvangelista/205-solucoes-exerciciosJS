let degraus = Number (prompt("Quantos degraus você deseja ter na sua escada?"));
let caracter = prompt("Qual formato de degrau você deseja utilizar?");
let escada = caracter;
let a = 1;

 while ( a <= degraus){
    

    console.log(escada); 
    // console.log(caracter.repeat(i)); OUTRA MANEIRA DE FAZER A LINHA 9.


    escada = escada + caracter;
     a++
 }


