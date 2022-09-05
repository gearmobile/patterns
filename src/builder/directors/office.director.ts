import { IHouse } from '../interfaces/house.interface';
import { HouseBuilder } from '../house-builder.class';
import { House } from '../house.class';
import { EHouseType } from '../enums/house-type.enum';
import { EHouseMaterial } from '../enums/house-material.enum';

export class OfficeDirector {
  static create(): IHouse {
    return new HouseBuilder(new House())
      .setHouseType(EHouseType.Office)
      .setHouseMaterial(EHouseMaterial.Concrete)
      .setHouseWindows(100)
      .setHouseDoors(10)
      .build();
  }
}
