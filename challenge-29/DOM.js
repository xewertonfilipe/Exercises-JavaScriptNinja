(function(win, doc) {
    'use strict';

    function DOM(elements) {
        if(!(this instanceof DOM))
            return new DOM(elements);
        this.element = doc.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(event, callback) {
        Array.prototype.forEach.call(this.element, function(item){
            item.addEventListener(event, callback, false);
        });
    }

    DOM.prototype.off = function off(event, callback) {
        Array.prototype.forEach.call(this.element, function(item) {
            item.removeEventListener(event, callback, false);
        });
    }

    DOM.prototype.get = function get(index) {
        if(!index)
            return this.element[0];
        return this.element[index];
    }

    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
    }

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    }

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    }

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    }

    DOM.prototype.is = function is(obj) {
        return Object.prototype.toString.call(obj);
    }

    DOM.prototype.isArray = function isArray(param) {
        return this.is( param ) === '[object Array]';
    }

    DOM.prototype.isObject = function isObject(param) {
        return this.is( param ) === '[object Object]';
    }

    DOM.prototype.isFunction = function isFunction(param) {
        return this.is( param ) === '[object Function]';
    }

    DOM.prototype.isNumber = function isNumber(param) {
        return this.is( param ) === '[object Number]';
    }

    DOM.prototype.isString = function isString(param) {
        return this.is( param ) === '[object String]';
    }

    DOM.prototype.isBoolean = function isBoolean(param) {
        return this.is( param ) === '[object Boolean]';
    }

    DOM.prototype.isNull = function isNull(param) {
        return this.is( param ) === '[object Null]'
            || this.is( param ) === '[object Undefined]';
    }

    win.DOM = DOM;
})(window, document);