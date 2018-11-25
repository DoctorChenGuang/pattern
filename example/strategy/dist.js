(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var Duck = (function () {
        function Duck() {
        }
        Duck.prototype.performQuack = function () {
            this.quackBehavior.quack();
        };
        Duck.prototype.performFly = function () {
            this.flyBehavior.fly();
        };
        Duck.prototype.swim = function () {
            console.log('所有鸭子必备技能，会游泳');
        };
        Duck.prototype.setFlyBehavior = function (flyBehavior) {
            this.flyBehavior = flyBehavior;
        };
        Duck.prototype.setQuackBehavior = function (quackBehavior) {
            this.quackBehavior = quackBehavior;
        };
        return Duck;
    }());

    var Quack = (function () {
        function Quack() {
        }
        Quack.prototype.quack = function () {
            console.log('我会呱呱叫');
        };
        return Quack;
    }());

    var FlyWithWings = (function () {
        function FlyWithWings() {
        }
        FlyWithWings.prototype.fly = function () {
            console.log('我带有小翅膀，我会飞');
        };
        return FlyWithWings;
    }());

    var MallardDuck = (function (_super) {
        __extends(MallardDuck, _super);
        function MallardDuck() {
            var _this = _super.call(this) || this;
            _this.quackBehavior = new Quack();
            _this.flyBehavior = new FlyWithWings();
            return _this;
        }
        MallardDuck.prototype.display = function () {
            console.log('我是一只绿头鸭子');
        };
        return MallardDuck;
    }(Duck));

    var ModelDuck = (function (_super) {
        __extends(ModelDuck, _super);
        function ModelDuck() {
            var _this = _super.call(this) || this;
            _this.quackBehavior = new Quack();
            _this.flyBehavior = new FlyWithWings();
            return _this;
        }
        ModelDuck.prototype.display = function () {
            console.log('我是一只模型鸭子');
        };
        return ModelDuck;
    }(Duck));

    var FlyRocketPowered = (function () {
        function FlyRocketPowered() {
        }
        FlyRocketPowered.prototype.fly = function () {
            console.log('我是一只依赖rocket powered飞行的鸭子( •̀ ω •́ )✧');
        };
        return FlyRocketPowered;
    }());

    var Test = (function () {
        function Test() {
        }
        Test.main = function () {
            var md = new MallardDuck();
            md.performFly();
            var modelDuck = new ModelDuck();
            modelDuck.performFly();
            modelDuck.setFlyBehavior(new FlyRocketPowered);
            modelDuck.performFly();
        };
        return Test;
    }());
    Test.main();

})));
