import { IChair } from './interfaces/chair.interface';
import { EChairs } from './enums/chairs.enum';
import { SmallChair } from './subclasses/small-chair.class';
import { MediumChair } from './subclasses/medium-char.class';
import { LargeChair } from './subclasses/large-chair.class';

export class ChairFactory {
  static createChair(type: EChairs): IChair {
    switch (type) {
      case EChairs.SmallChair:
        return new SmallChair();
      case EChairs.MediumChair:
        return new MediumChair();
      case EChairs.LargeChair:
        return new LargeChair();
    }
  }
}
