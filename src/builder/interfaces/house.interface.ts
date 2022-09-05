import { EHouseType } from '../enums/house-type.enum';
import { EHouseMaterial } from '../enums/house-material.enum';

export interface IHouse {
  doors: number;
  windows: number;
  material: EHouseMaterial;
  type: EHouseType;

  construction(): string;
}
