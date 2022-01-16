import { setupClasses } from '../setup.spec';
import { Model, Schema } from './models/private';
import { complexProfile } from './profiles/private.profile';

describe('Complex', () => {
  const [mapper] = setupClasses('complex');

  afterEach(() => {
    mapper.dispose();
  });

  it('from schema to model', () => {
    mapper.addProfile(complexProfile);

    const result = mapper.map(makeSchema(), Model, Schema);

    console.log(result);
  });

  it('from model to schema', () => {
    mapper.addProfile(complexProfile);

    const result = mapper.map(makeModel(), Schema, Model);

    console.log(result);
  });
});

function makeSchema() {
  const schema = new Schema();

  schema.id = 'uuid';
  schema.value = 'value';

  return schema;
}

function makeModel() {
  return new Model({
    value: 'value',
  });
}
