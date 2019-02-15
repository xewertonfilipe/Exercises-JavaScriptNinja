(function(doc) {
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function DOM( elements ) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback ) {
    Array.prototype.forEach.call(this.element, function(item){
      item.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function off(event, callback ) {
    Array.prototype.forEach.call(this.element, function(item) {
      item.removeEventListener(event, callback, false);
    });
  }

  DOM.prototype.get = function get() {
    return this.element;
  }

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply( this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply( this.element, arguments);
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply( this.element, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply( this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply( this.element, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply( this.element, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply( this.element, arguments);
  }

  DOM.prototype.is = function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  DOM.prototype.isArray = function isArray( param ) {
    return this.is( param ) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject( param ) {
    return this.is( param ) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction( param ) {
    return this.is( param ) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber( param ) {
    return this.is( param ) === '[object Number]';
  }

  DOM.prototype.isString = function isString( param ) {
    return this.is( param ) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean( param ) {
    return this.is( param ) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull( param ) {
    return this.is( param ) === '[object Null]' 
      || this.is( param ) === '[object Undefined]';
  }

  var ajax = new XMLHttpRequest();
  var url = 'http://apps.widenet.com.br/busca-cep/api/cep/<cepCode>.json';
  var $inputCEP = new DOM('[data-js="cep"]');
  var $inputBuscar = new DOM('[data-js="buscar"]');
  var $p = new DOM('[data-js="info"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cepRetornado = new DOM('[data-js="cepRetornado"]');
  
  $inputBuscar.on('click', searchAddressAndSetStatus);

  function searchAddressAndSetStatus(e) {
    e.preventDefault();
    if(hasValueInInput()) {
      ajax.open('GET', replaceUrl());
      ajax.send();
      console.log(ajax);
      ajax.addEventListener('readystatechange', setStatus);
    } else {
      alert("Campo CEP em branco");
    }
  }

  function hasValueInInput() {
    return !$inputCEP.get()[0].value == '';
  } 

  function setStatus() {
    var texto = doc.createTextNode('Informação: Buscando informações para o CEP: ' + cepNumber() + '...');
    removeValueElement($p);
    $p.get()[0].appendChild(texto);
    whomStatus();
  }
  function whomStatus() {
    var data = JSON.parse(ajax.responseText || '[]');
    var texto;
    console.log(data);
    setTimeout(function() {
      if(data.status == 0) {
        texto = doc.createTextNode('Informação: Não encontramos o endereço para o CEP: ' + cepNumber());
        removeValueElement($p);
        return $p.get()[0].appendChild(texto);
      }
    texto = doc.createTextNode('Informação: Endereço referente ao CEP: ' + cepNumber());
    removeValueElement($p);
    setAddress(data);
    $p.get()[0].appendChild(texto);
    }, 2000);
  }

  function removeValueElement(element) {
    if(!(element.get()[0].innerHTML == ''))
      return element.get()[0].innerHTML = '';
  }

  function replaceUrl() {
    return url.replace('<cepCode>', cepNumber());
  }

  function cepNumber() {
    return $inputCEP.get()[0].value.replace(/\D+/g, '');
  }

  function setAddress(data) {
    $logradouro.get()[0].textContent = 'Rua: ' + data.address;
    $cidade.get()[0].textContent = 'Cidade: ' + data.city;
    $estado.get()[0].textContent = 'Estado: ' + data.state;
    $cepRetornado.get()[0].textContent = 'CEP: ' + data.code;
  }
})(document);
