import { convertUsing } from '@automapper/core';
import type { Converter } from '@automapper/types';
import { MapFnClassId, TransformationType } from '@automapper/types';

describe('ConvertUsingFunction', () => {
  const dateToStringConverter: Converter<Date, string> = {
    convert(source: Date): string {
      return source.toDateString();
    },
  };

  const birthdayToStringConverter: Converter<{ birthday: Date }, string> = {
    convert(source: { birthday: Date }): string {
      return source.birthday.toDateString();
    },
  };

  const source: { birthday: Date; birth?: Date } = {
    birthday: new Date('10/14/1991'),
  };

  it('should return correctly', () => {
    const convertUsingFn = convertUsing(
      dateToStringConverter,
      () => new Date()
    );
    expect(convertUsingFn).toBeTruthy();
    expect(convertUsingFn[MapFnClassId.type]).toEqual(
      TransformationType.ConvertUsing
    );
    expect(convertUsingFn[MapFnClassId.misc]).toEqual(null);
    expect(convertUsingFn[MapFnClassId.fn]).toBeInstanceOf(Function);
  });

  it('should map correctly', () => {
    const convertUsingFn = convertUsing(
      dateToStringConverter,
      (s: typeof source) => s.birthday
    );
    const result = convertUsingFn[MapFnClassId.fn](source);
    expect(result).toEqual(source.birthday.toDateString());
  });

  it('should map correctly with source', () => {
    const convertUsingFn = convertUsing(birthdayToStringConverter);
    const result = convertUsingFn[MapFnClassId.fn](source);
    expect(result).toEqual(source.birthday.toDateString());
  });
});