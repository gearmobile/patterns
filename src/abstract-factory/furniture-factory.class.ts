import { ETables } from './table-factory/tables.enum';
import { EChairs } from './chair-factory/chairs.enum';
import { ITable } from './table-factory/table.interface';
import { IChair } from './chair-factory/chair.interface';
import { ChairFactory } from './chair-factory/chair-factory.class';
import { TableFactory } from './table-factory/table-factory.class';

type Furniture = IChair | ITable;

const chairs: EChairs[] = [
  EChairs.SmallChair,
  EChairs.MediumChair,
  EChairs.LargeChair,
];

const tables: ETables[] = [
  ETables.SmallTable,
  ETables.MediumTable,
  ETables.LargeTable,
];

export class FurnitureFactory {
  static createFurniture(furniture: ETables | EChairs): Furniture | undefined {
    if (chairs.includes(furniture as EChairs)) {
      return ChairFactory.createChair(furniture as EChairs);
    }
    if (tables.includes(furniture as ETables)) {
      return TableFactory.createTable(furniture as ETables);
    }
    return;
  }
}
