import { MappingProfile } from '@automapper/core';
import { Model, Schema } from '../models/decimal';

export const decimalProfile: MappingProfile = (mapper) => {
  mapper.createMap(Schema, Model);
  mapper.createMap(Model, Schema);
};
