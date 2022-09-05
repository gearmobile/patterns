import { Chair } from './chair.class';
import { IDimension } from './dimension.interface';

export class MediumChair extends Chair {
  constructor(
    public width: number = 40,
    public height: number = 40,
    public name: string = 'Medium Chair',
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
