import { IDimension } from './dimension.interface';

export interface ITable {
  width: number;
  height: number;
  depth: number;
  name: string;

  getDimension(): IDimension;
}
