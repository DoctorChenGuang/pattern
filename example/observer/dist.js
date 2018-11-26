(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var WeatherData = (function () {
      function WeatherData() {
          this.observers = new Set();
      }
      WeatherData.prototype.measurementsChanged = function (temp, humidity, pressure) {
          this.temp = temp;
          this.humidity = humidity;
          this.pressure = pressure;
          this.notifyObserver(temp, humidity, pressure);
      };
      WeatherData.prototype.registerObserver = function (ob) {
          this.observers.add(ob);
      };
      WeatherData.prototype.removeObserver = function (ob) {
          this.observers.delete(ob);
      };
      WeatherData.prototype.notifyObserver = function (temp, humidity, pressure) {
          this.observers.forEach(function (ob) {
              ob.update(temp, humidity, pressure);
          });
      };
      return WeatherData;
  }());
  var CurrentConditiosDisplay = (function () {
      function CurrentConditiosDisplay(weatherData) {
          this.weatherData = weatherData;
          this.weatherData.registerObserver(this);
      }
      CurrentConditiosDisplay.prototype.update = function (temp, humidity, pressure) {
          this.temp = temp;
          this.humidity = humidity;
          this.display();
      };
      CurrentConditiosDisplay.prototype.display = function () {
          console.log("\u6E29\u5EA6\u662F\uFF1A" + this.temp + ",\u6E7F\u5EA6\u662F\uFF1A" + this.humidity);
      };
      return CurrentConditiosDisplay;
  }());

  var Test = (function () {
      function Test() {
      }
      Test.main = function () {
          var wd = new WeatherData();
          var ccd = new CurrentConditiosDisplay(wd);
          var count = 0;
          var clearTimer = setInterval(function () {
              count++;
              wd.measurementsChanged(count, count + 50, '上升');
              count >= 3 && clearInterval(clearTimer);
          }, 2000);
      };
      return Test;
  }());
  Test.main();

})));
