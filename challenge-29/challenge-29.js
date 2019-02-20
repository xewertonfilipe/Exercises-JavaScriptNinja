(function(DOM, doc) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {
    var fragment = doc.createDocumentFragment();
    var $form = new DOM('[data-js="form"]');
    var $urlImagem = new DOM('[data-js="url-imagem"]');
    var $marca = new DOM('[data-js="marca"]');
    var $ano = new DOM('[data-js="ano"]');
    var $placa = new DOM('[data-js="placa"]');
    var $cor = new DOM('[data-js="cor"]');
    var $table = new DOM('[data-js="table"]');

    function initialize() {
      submitForm();
    }
    
    function submitForm() {
      $form.on('submit', addCarInTable);
    }

    function addCarInTable(event) {
      event.preventDefault();
      var data = capturesInputValue();
      var trCompleta = doc.createElement('tr');
      var tdUrl = doc.createElement('td');
      var tdMarca = doc.createElement('td');
      var tdAno = doc.createElement('td');
      var tdPlaca = doc.createElement('td');
      var tdCor = doc.createElement('td');
      var url = doc.createTextNode(data.url);
      var marca = doc.createTextNode(data.marca);
      var ano = doc.createTextNode(data.ano);
      var placa = doc.createTextNode(data.placa);
      var cor = doc.createTextNode(data.cor);
      tdUrl.appendChild(url);
      tdMarca.appendChild(marca);
      tdAno.appendChild(ano);
      tdPlaca.appendChild(placa);
      tdCor.appendChild(cor);
      trCompleta.appendChild(tdUrl);
      trCompleta.appendChild(tdMarca);
      trCompleta.appendChild(tdAno);
      trCompleta.appendChild(tdPlaca);
      trCompleta.appendChild(tdCor);
      createElementTd(trCompleta);
    }

    function hasChildInTable() {
      return $table.get()[0].firstElementChild;
    }

    function createElementTd(element) {
      return $table.get()[0].appendChild(element);
    }

    function capturesInputValue() {
      var url = doc.createTextNode($urlImagem.get()[0].value);
      var marca = doc.createTextNode($marca.get()[0].value);
      var ano = doc.createTextNode($ano.get()[0].value);
      var placa = doc.createTextNode($placa.get()[0].value);
      var cor = doc.createTextNode($cor.get()[0].value);
      return {
        url: url.textContent,
        marca: marca.textContent,
        ano: ano.textContent,
        placa: placa.textContent,
        cor: cor.textContent
      };
    }

    return {
      initialize: initialize
    };
    
  }

  app().initialize();

})(window.DOM, document);
