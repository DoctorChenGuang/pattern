;
var ObserverPattern;
(function (ObserverPattern) {
    class WeatherData {
        constructor() {
            this._observerList = new Map();
            this._currentState = true;
        }
        get temp() {
            return this._temp;
        }
        set temp(value) {
            this._temp = value;
        }
        get humidity() {
            return this._humidity;
        }
        set humidity(value) {
            this._humidity = value;
        }
        get pressure() {
            return this._pressure;
        }
        set pressure(value) {
            this._pressure = value;
        }
        getState() {
            return this._currentState;
        }
        setState() {
            this._currentState = false;
        }
        resetState() {
            this._currentState = true;
        }
        measurementsChanged(temp, humidity, pressure) {
            this._temp = temp;
            this._humidity = humidity;
            this._pressure = pressure;
            this.getState();
            this.notifyObservers();
        }
        addObserver(observerName, observer) {
            this._observerList.set(observerName, observer);
        }
        removeObserver(observerName) {
            if (!this._observerList.has(observerName))
                return;
            this._observerList.delete(observerName);
        }
        notifyObservers() {
            if (!this.getState())
                return;
            for (let observer of this._observerList.values()) {
                observer.update(this);
            }
            this.setState();
        }
        clearObservers() {
            this._observerList.clear();
        }
    }
    ObserverPattern.WeatherData = WeatherData;
})(ObserverPattern || (ObserverPattern = {}));
;
;
;
var ObserverPattern;
(function (ObserverPattern) {
    class CurrentConditionsDisplay {
        constructor(weatherData) {
            this._weatherData = weatherData;
            this._weatherData.addObserver(Symbol('CurrentConditionsDisplay'), this);
        }
        update(obs) {
            // 此处处理的还是有问题
            if (obs instanceof ObserverPattern.WeatherData) {
                this._temp = obs.temp;
                this._humidity = obs.humidity;
                this._pressure = obs.pressure;
                this.display();
            }
        }
        display() {
            console.log(`我是目前状况面板：温度是：${this._temp},湿度是：${this._humidity}, 压强${this._pressure}`);
        }
    }
    ObserverPattern.CurrentConditionsDisplay = CurrentConditionsDisplay;
})(ObserverPattern || (ObserverPattern = {}));
;
var ObserverPattern;
(function (ObserverPattern) {
    class ForecastDisplay {
        constructor(weatherData) {
            this._weatherData = weatherData;
            this._weatherData.addObserver(Symbol('ForecastDisplay'), this);
        }
        update(obs) {
            // 此处处理的还是有问题
            if (obs instanceof ObserverPattern.WeatherData) {
                this._temp = obs.temp;
                this.display();
            }
        }
        display() {
            console.log(`我是气象统计面板：整体温度${this._temp > 30 ? '过高' : '过低'}`);
        }
    }
    ObserverPattern.ForecastDisplay = ForecastDisplay;
})(ObserverPattern || (ObserverPattern = {}));
;
var ObserverPattern;
(function (ObserverPattern) {
    class StatisticsDisplay {
        constructor(weatherData) {
            this._weatherData = weatherData;
            this._weatherData.addObserver(Symbol('StatisticsDisplay'), this);
        }
        update(obs) {
            // 此处处理的还是有问题
            if (obs instanceof ObserverPattern.WeatherData) {
                this._temp = obs.temp;
                this._humidity = obs.humidity;
                this.display();
            }
        }
        display() {
            console.log(`我是预报面板：温度是：${this._temp > 30 ? "过高" : "正常"}, 湿度是：${this._humidity > 80 ? "湿度适中" : "湿度过低"},天气适合外出，请做好防晒工作`);
        }
    }
    ObserverPattern.StatisticsDisplay = StatisticsDisplay;
})(ObserverPattern || (ObserverPattern = {}));
;
var ObserverPattern;
(function (ObserverPattern) {
    let Pressure;
    (function (Pressure) {
        Pressure["UP"] = "\u4E0A\u5347";
        Pressure["Down"] = "\u4E0B\u964D";
    })(Pressure = ObserverPattern.Pressure || (ObserverPattern.Pressure = {}));
    class Test {
        static main() {
            let weatherData = new ObserverPattern.WeatherData();
            new ObserverPattern.CurrentConditionsDisplay(weatherData);
            new ObserverPattern.ForecastDisplay(weatherData);
            new ObserverPattern.StatisticsDisplay(weatherData);
            let temp = 20;
            let humidity = 50;
            let timerInterval = 500;
            let pressure = Pressure.UP;
            let stateIntervalTimer = setInterval(() => {
                weatherData.resetState();
            }, 2000);
            let clearTimer = setInterval(() => {
                temp += 2;
                humidity += 5;
                pressure = temp % 3 === 0 ? Pressure.UP : Pressure.Down;
                weatherData.measurementsChanged(temp, humidity, pressure);
                temp >= 50 && clearInterval(clearTimer) && clearInterval(stateIntervalTimer);
            }, timerInterval);
        }
    }
    Test.main();
})(ObserverPattern || (ObserverPattern = {}));
;
