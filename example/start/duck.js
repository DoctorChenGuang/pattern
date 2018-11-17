"use strict";
var Duck = (function () {
    function Duck() {
    }
    Duck.prototype.info = function () {
        console.log('我是一只鸭子');
    };
    return Duck;
}());
var duck = new Duck();
duck.info();

//# sourceMappingURL=duck.js.map
