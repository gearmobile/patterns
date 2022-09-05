import { IChair } from './chair.interface';
import { IDimension } from './dimension.interface';

export class Chair implements IChair {
  constructor(
    public width: number = 0,
    public height: number = 0,
    public name: string = '',
  ) {}

  public getDimension(): IDimension {
    return {
      width: this.width,
      height: this.height,
      name: this.name,
    };
  }
}
