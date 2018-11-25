import { QuackBehavior } from "./quack-behavior";

class Squeak implements QuackBehavior{
  quack(){
    console.log('我会吱吱叫');
  }
}

export {
  Squeak
}