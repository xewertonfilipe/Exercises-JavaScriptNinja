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
  
  var $form = new DOM('[data-js="form"]');
  var $inputCEP = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cepRetornado = new DOM('[data-js="cepRetornado"]');
  var ajax = new XMLHttpRequest();
  
  $form.on('submit', initialize);

  function initialize(e) {
    if(hasValueInInput())
      return searchAddress(e);
    alert("Valor inválido!");
  }

  function hasValueInInput() {
    return $inputCEP.get()[0].value.replace(/\D+/g, '');
  } 

  function searchAddress(e) {
    e.preventDefault();
    var url = getUrl();
    ajax.open('GET', url);
    ajax.send(null);
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function getUrl() {
    return replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
  }

  function clearCEP() {
    return $inputCEP.get()[0].value.replace(/\D+/g, '')
  }

  function handleReadyStateChange() {
    if( isRequestOk() ) {
      getMessage('ok');
      fillAddress();
    }
    fillAddress();
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillAddress(data) {
    var data = parseData();
    if(!data) {
      getMessage('error');
      data = clearData();
    }

    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $cidade.get()[0].textContent = data.localidade;
    $estado.get()[0].textContent = data.uf;
    $cepRetornado.get()[0].textContent = data.cep;
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    }
    catch(e) {
      result = null;
    }
    return result;    
  }

  function getMessage(type) {
    var message = {
      loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
      ok: replaceCEP('Endereço referente ao CEP [CEP]'),
      error: replaceCEP('Não encontramos o endereço para o CEP [CEP]')
    };
    $status.get()[0].textContent = message[type];
  }

  function replaceCEP(message) {
    return message.replace('[CEP]', clearCEP());
  }

  function clearData() {
    return {
      logradouro: '-',
      bairro: '-',
      localidade: '-',
      uf: '-',
      cep: '-'
    }
  }
})(document);
