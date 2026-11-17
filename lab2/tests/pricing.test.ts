import { describe, expect, test } from '@jest/globals';
import { events } from '../src/events';
import { calculateRegistration } from '../src/pricing';

describe('calculateRegistration', () => {
  test('правильно рахує суму без знижки', () => {
    expect(calculateRegistration(events, ['ts-workshop'], 2)).toEqual({
      subtotal: 100,
      discount: 0,
      total: 100,
    });
  });

  test('застосовує 5% знижку для групи з 5 людей', () => {
    expect(calculateRegistration(events, ['ts-workshop'], 5)).toEqual({
      subtotal: 250,
      discount: 12.5,
      total: 237.5,
    });
  });

  test('застосовує 10% знижку для групи з 10 людей', () => {
    expect(calculateRegistration(events, ['ts-workshop'], 10)).toEqual({
      subtotal: 500,
      discount: 50,
      total: 450,
    });
  });

  test('кидає помилку для недопустимого groupSize', () => {
    const message = 'Кількість учасників має бути цілим числом від 1 до 30';
    expect(() => calculateRegistration(events, ['ts-workshop'], 0)).toThrow(message);
    expect(() => calculateRegistration(events, ['ts-workshop'], 31)).toThrow(message);
    expect(() => calculateRegistration(events, ['ts-workshop'], 2.5)).toThrow(message);
  });

  test('кидає помилку для невідомої події', () => {
    expect(() => calculateRegistration(events, ['unknown-id'], 1)).toThrow(
      'Подію з ID unknown-id не знайдено',
    );
  });

  test('кидає помилку для заповненої події', () => {
    expect(() => calculateRegistration(events, ['career-meetup'], 1)).toThrow(
      'немає вільних місць',
    );
  });
});
