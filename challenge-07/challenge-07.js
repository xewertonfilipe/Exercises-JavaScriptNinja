/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['1', null, function soma( x,y ) { return x + y }, 'texto', 2.8];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( item ) {
    arr.push( item );
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log( addItem(['Carro', undefined, 5]) );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + arr[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');  

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num1 = 10;
var num2 = 20;
var divide = 2;
while( num1 <= num2 ) {
    num1 % divide === 0 ? console.log( 'Números pares entre 10 e 20: ' + num1) : '';
    num1++;
}

// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

while( num1 <= num2 ) {
    num1 % divide !== 0 ? console.log( 'Números ímpares entre 10 e 20:' + num1) : '';
    num1++;
}
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120: ');
for( var num1 = 100; num1 <= 120; num1++ ) {
    num1 % divide === 0 ? console.log( num1 ) : '';
}

console.log( 'Números ímpares entre 111 e 125: ');
for( var num1 = 111; num1 <= 125; num1++ ) {
    num1 % divide !== 0 ? console.log( num1 ) : '';
}