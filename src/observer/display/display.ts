interface Observer {
  update(temp: number, humidity: number, pressure: string): void;
}

interface DisplayElement {
  display(): void;
}

interface Subject {
  registerObserver(ob: Observer): void;
  removeObserver(ob: Observer): void;
  notifyObserver(temp: number, humidity: number, pressure: string): void;
}

class WeatherData implements Subject {
  private observers!: Set<Observer>;

  public measurementsChanged(): void {
    let temp = this.getTemperature();
    let humidity = this.getHumidity();
    let pressure = this.getPressure();

    this.notifyObserver(temp, humidity, pressure);
  }

  public getTemperature(): number {
    return 20;
  }

  public getHumidity(): number {
    return 60;
  }

  public getPressure(): string {
    return '上升';
  }

  public registerObserver(ob: Observer): void {
    this.observers.add(ob);
  }

  public removeObserver(ob: Observer): void {
    this.observers.delete(ob);
  }

  public notifyObserver(temp, humidity, pressure): void {
    this.observers.forEach((ob) => {
      ob.update(temp, humidity, pressure);
    });
  }
}

class CurrentConditiosDisplay implements DisplayElement, Observer {
  public weatherData: Subject;

  public humidity!: number;
  public temp!: number;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temp: number, humidity: number, pressure: string): void {
    this.temp = temp;
    this.humidity = humidity;
  }

  public display(): void {
    console.log(`温度是：${this.temp},湿度是：${this.humidity}`);
  }
}
