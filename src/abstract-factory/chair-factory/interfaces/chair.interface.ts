import { IDimension } from './dimension.interface';

export interface IChair {
  width: number;
  height: number;
  name: string;

  getDimension(): IDimension;
}
