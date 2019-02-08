(function(win, doc) {
    'use strict';
    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.

    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.

    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false

    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
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

    var $a = new DOM('[data-js="link"]');
    
    $a.forEach(function(item) {
        console.log(item);
    });
    
    var dataJs = $a.map(function(item) {
        return item.getAttribute('data-js');
    });
    console.log(dataJs);

    var $href = $a.filter(function(item) {
        return item.hasAttribute('href');
    });
    console.log($href)
    
    console.log($a.isArray( [1,2,3,4,5] ) );
    console.log($a.isNumber( 1 ) );
    console.log($a.isString( '' ) );
    console.log($a.isFunction( function() {} ) );
    console.log($a.isNull( undefined ) );
})(window, document);


