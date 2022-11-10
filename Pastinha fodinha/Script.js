//tipos de funçôes
// funções declativa 
//deve ser declarada usando a palavra reservado function seguida do nome da funçoes, parentes "()" e "{}"
function nomedafuncao() {
alert('sou uma função declarativa');

}

//devemos chamar a função para ver o resultado 
nomedafuncao();

//expressão de função - são funções atributos á expressões 
// a nomeações 

var nomeDefuncao = function nomeDefuncao() {
    alert('sou uma expressão de funcao nomeada!');

}

//sem nomeação 
var nomeDefuncao2 = function (){
alert(' sou uma expressão de funcão não nomeada!');
}
 
// arrow function
// função de expressão de sintaxe curta, sempre anonima, não pode ser nomeada - deve ser declarada com paranteses "()", seguiddo "=>" e depois "{}
 var funcao =() => {
    alert('sou uma função anonima!');
 }

 nomeDefuncao1();
 nomeDefuncao2();
 funcao();