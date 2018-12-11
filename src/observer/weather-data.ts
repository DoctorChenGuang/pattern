namespace ObserverPattern {
  export class WeatherData implements Subject {
    private _temp!: number;
    public get temp(): number {
      return this._temp;
    }
    public set temp(value: number) {
      this._temp = value;
    }

    private _humidity!: number;
    public get humidity(): number {
      return this._humidity;
    }
    public set humidity(value: number) {
      this._humidity = value;
    }

    private _pressure!: Pressure;
    public get pressure(): Pressure {
      return this._pressure;
    }
    public set pressure(value: Pressure) {
      this._pressure = value;
    }

    private _observerList: Map<Symbol, Observer> = new Map();
    private _currentState: boolean = true;

    public getState(): boolean {
      return this._currentState;
    }
    public setState(): void {
      this._currentState = false;
    }
    public resetState(): void {
      this._currentState = true;
    }

    public measurementsChanged(temp: number, humidity: number, pressure: Pressure): void {
      this._temp = temp;
      this._humidity = humidity;
      this._pressure = pressure;
      this.getState();
      this.notifyObservers();
    }

    public addObserver(observerName: Symbol, observer: Observer): void {
      this._observerList.set(observerName, observer);
    }

    public removeObserver(observerName: Symbol): void {
      if (!this._observerList.has(observerName)) return;

      this._observerList.delete(observerName);
    }

    public notifyObservers(): void {
      if (!this.getState()) return;

      for (let observer of this._observerList.values()) {
        observer.update(this);
      }
      this.setState();
    }

    public clearObservers(): void {
      this._observerList.clear();
    }
  }
};
