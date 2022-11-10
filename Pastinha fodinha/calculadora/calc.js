//criando uma calculadora 
function calculadora (){
    //definimos as opreações e pegando valor de entrada do usuario
    // usaremos o /"n"
    const operacao = number(prompt('escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicão (*)\n 4 divisao real (/)\n 5 - divisão inteira(%)\n 6 - potenciação (**)'));
//verificando se a operação é valida
if (!operacao || operacao >=7){
 alert('erro - operação Invalidada!');
 calculadora();
}else{


//definindo variaves - todas as entradas devem ser tipos Number 
let n1 = Number(prompt('insira o primeiro valor: '));
let n2 = Number (prompt('insira o segundo valor:'));
let resultado;


//verificando se as variaveis são validas
if(!n1 | !n2) {
    alert('erro - parametro invalidos!');
    calculadora();

}else{


            //definindo as funções


            function some() { 
                resultado = n1 + n2;
                //mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();


            }function subtracao() { 
                resultado = n1 - n2;
                //mostrando o resultado usando template strings
                alert(`${n1} - ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();


        }function divisaoReal() { 
            resultado = n1 / n2;
            //mostrando o resultado usando template strings
            alert(`${n1} / ${n2} = ${resultado}`);
            //dando a opção de chamar uma nova operação
            novaOperacao();


        }function DivisaoInteira() { 
            resultado = n1 % n2;
            //mostrando o resultado usando template strings
            alert(`${n1} % ${n2} é igual a = ${resultado}`);
            //dando a opção de chamar uma nova operação
            novaOperação();


        }function potenciacao() { 
            resultado = n1 ** n2;
            //mostrando o resultado usando template strings
            alert(`${n1} elevado à ${n2} = ${resultado}`);
            //dando a opção de chamar uma nova operação
            novaOperação();


}
                                  //nova operação 

                    function novaOperacao(){
                        let opcao = prompt ('deseja fazer outra operação ?\n1 - sim\n 2 - não ')
                        if(opcao == 1){
                            calculadora ();
                        }else if (opcao == 2){
                            alert('até mais!');
                        }else{
                            alert('Digite uma opcao valida!');
                            moveOperacao();
                 }

             }
         }
    }


//escolhendo uma operação
//usando if && else


    if (operacao == 1) {
         some();
    
    }else if  (operacao == 2){
         subtracao();

    }else if (operacao == 3){
         multiplicacao();

    }else if (operacao == 4){
        divisaoReal();

    }else if (operacao == 5){
         DivisaoInteira();

    }else if (operacao == 6){
    potenciacao();

    }
    }


    //usando switch case com alternativa (comentar um dos dois)
    
    switch (operacao){


        case 1: 
        soma();
        break;

        case 2:
        subtracao();
        break;
        

        case 3:
        multiplicacao();
        break;
        

        case 4:
        divisaoReal();
        break;


        case 5:
        divisaoInteira();
        break;


        case 6:
        potenciacao();
        break;  

        
    }

calculadora();