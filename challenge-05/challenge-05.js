/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [null, 5, 'casa', undefined, true, [5, 'a']];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray( arg ) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray( meyarray )[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParams( array, index ) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myvar = array = [1, 'String', function() {}, null, false, 1.5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
twoParams( myvar, 0 );
twoParams( myvar, 1 );
twoParams( myvar, 2 );
twoParams( myvar, 3 );
twoParams( myvar, 4 );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ) {
    var allBooks = {
            'A volta de quem não foi' : {
                quantidadePaginas: 95,
                autor: 'A.B',
                editora: 'Nova'
            },
            'As tranças do rei careca' : {
                quantidadePaginas: 130,
                autor: 'K.O',
                editora: 'Areolá'
            },
            'Poeira em alto mar' : {
                quantidadePaginas: 100,
                autor: 'K.T',
                editora: 'Fechou'
            }
        };

    return !bookName ? allBooks : allBooks[ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'A volta de quem não foi';
'O livro ' + bookName + ' tem ' + book( bookName ).quantidadePaginas;

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro ' + bookName + ' é ' + book( bookName ).autor;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro ' + bookName + ' foi publicado pela editora ' + book( bookName ).editora;
