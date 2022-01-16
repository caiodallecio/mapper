import {
  CamelCaseNamingConvention,
  MappingProfile,
  NamingConvention,
} from '@automapper/core';
import { Model, Schema } from '../models/private';


class EntityNamingConvention implements NamingConvention {
  separatorCharacter = '_';
  splittingExpression = /_/;

  constructor(readonly log = false) {}

  public transformPropertyName(sourcePropNameParts: string[]): string {
    const len = sourcePropNameParts.length;
    if (this.log) console.log(sourcePropNameParts);

    if (!len) {
      return '';
    }

    const result = ['_', ...sourcePropNameParts].join('');
    if (this.log) console.log(result);
    return result;
  }
}

export const complexProfile: MappingProfile = (mapper) => {
  mapper.createMap(Schema, Model, {
    namingConventions: {
      source: new CamelCaseNamingConvention(),
      destination: new EntityNamingConvention(),
    },
  });

  mapper.createMap(Model, Schema, {
    namingConventions: {
      source: new EntityNamingConvention(),
      destination: new CamelCaseNamingConvention(),
    },
  });
};
