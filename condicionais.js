// exercicio pizzaria

/*let SaborPizza = prompt("Qual sabor você quer ?");

if(SaborPizza == "marguerita"){
    console.log("Preparar pizza de marguerita");
}else if(SaborPizza == "quatro-queijos"){
    console.log("Preparar pizza de quatro queijos");
}else if(SaborPizza == "calabresa"){
    console.log("Preparar pizza de calabresa");
}else{
    console.log("Não temos essa pizza");
}
*/

//função exercicio 2:

function verificarPermissoes (){
    let idade = prompt("Qual a sua idade?");
    
    if(idade >= 16 && idade < 18){
        console.log("você pode votar, mas ainda não pode dirigir");
    }else if( idade >= 18){
        console.log("você pode dirigir e votar");
    }else{
        console.log("Você ainda não possui idade suficiente para votar ou dirigir");
    }


}

//verificarPermissoes();


//calcular imc 

function verificarIMC() {
    let altura = prompt("qual a sua altura?");
    let peso = prompt("qual o seu peso ?");

    let imc =  peso / (altura * altura);

    if (imc < 17) {
      console.log("Muito abaixo do peso");
    } else if (imc > 17 && imc <= 18.49){
      console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.99){
      console.log("Peso normal");
    } else if (imc >= 25 && imc <= 29.99){
      console.log("Acima do peso");
    } else if (imc >= 30 && imc <= 34.99){
      console.log("Obesidade I");
    } else {
      console.log("Obesidade II");
    }
  }

  verificarIMC();



