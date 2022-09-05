import { IHouse } from '../interfaces/house.interface';
import { HouseBuilder } from '../house-builder.class';
import { House } from '../house.class';
import { EHouseType } from '../enums/house-type.enum';
import { EHouseMaterial } from '../enums/house-material.enum';

export class FanzaDirector {
  static create(): IHouse {
    return new HouseBuilder(new House())
      .setHouseType(EHouseType.Fanza)
      .setHouseMaterial(EHouseMaterial.Wood)
      .setHouseDoors(1)
      .build();
  }
}
