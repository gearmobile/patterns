import { IDimension } from './dimension.interface';
import { Chair } from './chair.class';

export class LargeChair extends Chair {
  constructor(
    public width: number = 60,
    public height: number = 60,
    public name: string = 'Large Chair',
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
