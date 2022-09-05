import { ITable } from './interfaces/table.interface';
import { ETables } from './enums/tables.enum';

import { SmallTable } from './subclasses/small-table.class';
import { MediumTable } from './subclasses/medium-table.class';
import { LargeTable } from './subclasses/large-table.class';

export class TableFactory {
  static createTable(type: ETables): ITable {
    switch (type) {
      case ETables.SmallTable:
        return new SmallTable();
      case ETables.MediumTable:
        return new MediumTable();
      case ETables.LargeTable:
        return new LargeTable();
    }
  }
}
