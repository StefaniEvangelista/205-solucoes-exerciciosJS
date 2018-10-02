let renda = Number(prompt("Digite sua renda: "));
let idade = Number(prompt("Digite sua idade: "));
let valor = Number(prompt("Digite o valor do empréstimo: "));


if (idade >= 21 && idade <= 55 && renda >= 1000 && valor < 15*renda && valor > 500){
     let parcela = Number(prompt("Em quantas parcelas você deseja realizar o pagamento? PARCELAMENTO 3X ATÉ 24X"));
     if (parcela > 3 && parcela <= 24 ) {
          let resultado = valor * (1+0.085) ** parcela;
          resultado=resultado/parcela; 
          alert(`Empréstimo aprovado, em ${parcela}X, valor das parcelas com os juros ${resultado.toFixed(0)} reais.`   );
     
        }

      } else {
     alert("Empréstimo negado!");
}


