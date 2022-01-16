import { setupClasses } from '../setup.spec';
import { Model, Schema } from './models/decimal';
import { decimalProfile } from './profiles/decimal.profile';
import { Decimal } from 'decimal.js';
describe('Decimal', () => {
  const [mapper] = setupClasses('decimal');

  afterEach(() => {
    mapper.dispose();
  });

  it('from schema to model', () => {
    mapper.addProfile(decimalProfile);
    const schema = makeSchema();
    const result = mapper.map(schema, Model, Schema);
    expect(result.value.toString()).toBe(schema.value.toString());
  });

  it('from model to schema', () => {
    mapper.addProfile(decimalProfile);

    const model = makeModel();

    const result = mapper.map(model, Schema, Model);

    expect(result.value.toString()).toBe(result.value.toString());
  });
});

function makeSchema() {
  const schema = new Schema();
  schema.value = new Decimal('1.0');

  return schema;
}

function makeModel() {
  const schema = new Model();
  schema.value = new Decimal('2.0');

  return schema;
}
