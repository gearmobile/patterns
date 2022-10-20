import { AbstractFactory } from './abstract.interfaces';
import {
  ConcreteFactory1,
  ConcreteFactory2,
} from './concrete-factories.classes';

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.usefulFunctionA());
  console.log(productB.usefulFunctionB());
}

console.log(
  'Тестируем создание продуктов при помощи конкрентой фабрики ConcreteFactory1 =>',
);
clientCode(new ConcreteFactory1());

console.log('');

console.log(
  'Тестируем создание продуктов при помощи конкрентой фабрики ConcreteFactory2 =>',
);
clientCode(new ConcreteFactory2());
