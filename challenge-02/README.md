# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(5,10) + 5;

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var branco;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adiciona(){
    branco = 10;
    return "O valor da variável agora é " + branco;
}

// Invoque a função criada acima.
adiciona();

// Qual o retorno da função? (Use comentários de bloco).
/*O valor retornar foi 10*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

//isNaN determina se o valor é NaN ou não.
function multiplicacao(x, y, z) {
    var mensagem = "Preencha todos os valores corretamente!";
    if(x === undefined || y === undefined || z === undefined){
        return mensagem;
    }
    return x * y * z + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacao(5,10);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//"Preenchar todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicacao(5, 10, 15);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O resultado foi: 752

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgs(x, y, z) {
    //Se somente um argumento for passado, retorne o valor do argumento
    if( x !== undefined && y === undefined && z === undefined) {
        return x;
    //Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    } else if(x !== undefined && y !== undefined && z === undefined) {
        return x + y;
    //Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    } else if(!(x === undefined && y === undefined && z === undefined)) {
        return (x + y) / z;
    } else if(x === undefined && y === undefined && z === undefined) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
threeArgs(); //false
threeArgs(5); //5
threeArgs(5,7); //12
threeArgs(5,7,10); //1.2
```