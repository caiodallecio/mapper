import { AutoMap } from '@automapper/classes';

export class Schema {
  @AutoMap()
  id!: string;

  @AutoMap()
  value!: string;
}

type ModelP = {
  value: string;
};

export class Model {
  @AutoMap()
  private _id!: string;

  @AutoMap()
  private _value!: string;

  get id() {
    return this._id;
  }

  set value(o: string) {
    throw new Error('This could fail');
    this._value = o;
  }

  get value() {
    return this._value;
  }

  constructor(props?: ModelP) {
    if (!props) return;
    this._id = 'uiid';
    this._value = props.value;
  }
}
