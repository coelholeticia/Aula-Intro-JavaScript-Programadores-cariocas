//função nativa alert

// let nome = "Letícia";

// alert("Olá" + nome);

// // exemplo 2:

// alert(" Olá Letícia Coelho");

//Template string

// let nome = "Letícia";
// let sobreNome = "Coelho";

// console.log(`Olá eu sou ${nome} e meu sobrenome é ${sobreNome} e moro no Rio de janeiro.`)


// //Operador ponto

// let texto = "Moro no Rio de Janeiro";

// console.log(texto.toLowerCase()); // minusculo
// console.log(texto.toUpperCase()); // maiuscula

//Replace

//    let manoelFeira = "Manoel foi a feira";
// let luizFeira = manoelFeira.replace("Manoel" , "Luiz");

// console.log(manoelFeira);
// console.log(luizFeira);

// //maiuscula e minuscula 

// let manoelFeiraMaius = manoelFeira.toLowerCase();// minusculo
// let manoelFeiraMinus = manoelFeira.toUpperCase();// maiuscula

// console.log(`${manoelFeiraMaius} , ${manoelFeiraMinus}`);


// string tamanho
//     let tamanho= manoelFeira.length;

//     console.log(tamanho);

// //string acesso a propriedade

//     console.log(manoelFeira[0])// M
//     console.log(manoelFeira[5]) // l


// String index of

// console.log(manoelFeira.indexOf("foi"));// 7

// string charCodeAt

// console.log(manoelFeira.charCodeAt(3));//111

//estrutura de repetição com while

// let mastigadas = 0;

// while(mastigadas < 20){
//     console.log(`Mastigadas de numeros ${mastigadas} realizadas`);
//     mastigadas++;//contagem 
// }

// console.log("Engoliu!");

//estrutura de repetição while usando break


// let mastigadas = 0;
// let comida ="sopa";

// while(mastigadas < 20){
//     if(comida == "sopa"){
//         console.log("É só engolir");
//         break;
//     }else{
//         console.log(`Mastigadas de numeros ${mastigadas} realizadas`);
//         mastigadas++;
//     }
// }

//exercicio 1

// function listaDecrescente (){
//     let numeroPositivo = 10;

//     while(numeroPositivo >= 0){
//         console.log(`${numeroPositivo} \n`)
//         numeroPositivo--; //descremento
//     }

// }

// listaDecrescente();

//exercicio 2:

//documento write

// var n1 = parseFloat(prompt('Digite um número: '));
// var n2 = parseFloat(prompt('Digite outro número: '));

// document.write('A soma desses números é: ', n1 + n2, "<br/>");
// document.write('A subtração desses números é:', n1 + n2)


//https://cursos.alura.com.br/forum/topico-erro-ao-utilizar-o-comando-document-write-51973(error no documento write)




