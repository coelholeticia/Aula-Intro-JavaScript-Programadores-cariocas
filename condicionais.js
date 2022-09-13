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

// com retorno 

function previsaoRodagem(qntGasolina, quilometragem){
 
    return  qntGasolina / quilometragem;
}

//console.log(previsaoRodagem(3000, 500));

//sem retorno

function previsaoRodagem(qntGasolina, quilometragem){
 
    console.log (qntGasolina / quilometragem);
}

previsaoRodagem(3000, 500);



