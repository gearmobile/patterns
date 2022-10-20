import { SimpleComponent } from './simple.class';
import { DecoratorA, DecoratorB } from './decorators';
import { IComponent } from './interface.interface';

function clientCode(component: IComponent) {
  console.log(`clientCode: ${component.operation()}`);
}

const simple = new SimpleComponent();
console.log('Экземпляр простого класса SimpleComponent');
clientCode(simple);
console.log('');

const decorator1 = new DecoratorA(simple);
const decorator2 = new DecoratorB(simple);

console.log(
  'Получаем декорированные экземпляры простого класса SimpleComponent',
);
clientCode(decorator1);
clientCode(decorator2);
