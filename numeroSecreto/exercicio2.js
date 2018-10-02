let  numeroSecreto = Math.floor(Math.random() * 50) + 1;
let jogada= Number (prompt ("Vamos jogar! Adivinhe qual o número secreto?! (Entre 1 á 50) "));

while ( jogada !== numeroSecreto){
    if (jogada > numeroSecreto){
        alert ("ERROU, O NÚMERO É MENOR");
    }

    else{ 
        alert ("ERROU, O NÚMERO É MAIOR");
    
    }

    jogada = Number (prompt ("Deseja tentar novamente?"));
}

alert ("ACERTOOOOOOOU!"); 


