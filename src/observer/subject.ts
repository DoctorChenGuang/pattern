namespace ObserverPattern {
  export interface Subject {
    addObserver(observerName: Symbol, observer: Observer): void;
    removeObserver(observerName: Symbol): void;
    notifyObservers(): void;
    clearObservers(): void;
    getState(): boolean;
    setState(): void;
    resetState(): void;
  }
};
