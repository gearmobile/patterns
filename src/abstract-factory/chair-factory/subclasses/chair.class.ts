import { IChair } from '../interfaces/chair.interface';
import { IDimension } from '../interfaces/dimension.interface';

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
