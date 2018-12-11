namespace ObserverPattern{
  export interface Observer {
    update(obs: Subject): void;
  }
};
