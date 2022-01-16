import { Decimal as DecimalOld } from 'decimal.js';
import { AutoMap } from '@automapper/classes';

export class Decimal extends DecimalOld {
  constructor(value?: DecimalOld.Value) {
    super(value || '0');
  }
}

export class Schema {
  @AutoMap()
  value: Decimal;
}

export class Model {
  @AutoMap()
  value: Decimal;
}
