import { Chair } from './chair.class';
import { IDimension } from './dimension.interface';

export class SmallChair extends Chair {
  constructor(
    public width: number = 30,
    public height: number = 30,
    public name: string = 'Small Chair',
  ) {
    super();
  }

  public getDimension(): IDimension {
    return {
      width: this.width,
      height: this.height,
      name: this.name,
    };
  }
}
