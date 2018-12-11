declare namespace ObserverPattern {
    interface Subject {
        addObserver(observerName: Symbol, observer: Observer): void;
        removeObserver(observerName: Symbol): void;
        notifyObservers(): void;
        clearObservers(): void;
        getState(): boolean;
        setState(): void;
        resetState(): void;
    }
}
declare namespace ObserverPattern {
    class WeatherData implements Subject {
        private _temp;
        temp: number;
        private _humidity;
        humidity: number;
        private _pressure;
        pressure: Pressure;
        private _observerList;
        private _currentState;
        getState(): boolean;
        setState(): void;
        resetState(): void;
        measurementsChanged(temp: number, humidity: number, pressure: Pressure): void;
        addObserver(observerName: Symbol, observer: Observer): void;
        removeObserver(observerName: Symbol): void;
        notifyObservers(): void;
        clearObservers(): void;
    }
}
declare namespace ObserverPattern {
    interface Display {
        display(): void;
    }
}
declare namespace ObserverPattern {
    interface Observer {
        update(obs: Subject): void;
    }
}
declare namespace ObserverPattern {
    class CurrentConditionsDisplay implements Observer, Display {
        private _weatherData;
        private _temp;
        private _humidity;
        private _pressure;
        constructor(weatherData: Subject);
        update(obs: Subject): void;
        display(): void;
    }
}
declare namespace ObserverPattern {
    class ForecastDisplay implements Observer, Display {
        private _weatherData;
        private _temp;
        constructor(weatherData: Subject);
        update(obs: Subject): void;
        display(): void;
    }
}
declare namespace ObserverPattern {
    class StatisticsDisplay implements Observer, Display {
        private _weatherData;
        private _temp;
        private _humidity;
        constructor(weatherData: Subject);
        update(obs: Subject): void;
        display(): void;
    }
}
declare namespace ObserverPattern {
    enum Pressure {
        UP = "\u4E0A\u5347",
        Down = "\u4E0B\u964D"
    }
}
