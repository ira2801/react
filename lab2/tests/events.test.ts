import { describe, expect, test } from '@jest/globals';
import {
  CampusEvent,
  events,
  findEventById,
  getEventsByCategory,
  getEventTitles,
  getOpenEvents,
  registerForEvent,
} from '../src/events';
import { Attendee } from '../src/attendee';

describe('events', () => {
  test('getOpenEvents не повертає подію з нульовою кількістю місць', () => {
    const result = getOpenEvents(events);
    expect(result.every((event) => event.seatsLeft > 0)).toBe(true);
    expect(result.some((event) => event.id === 'career-meetup')).toBe(false);
  });

  test('getEventsByCategory повертає лише потрібну категорію', () => {
    const result = getEventsByCategory(events, 'workshop');
    expect(result.length).toBe(2);
    expect(result.every((event) => event.category === 'workshop')).toBe(true);
  });

  test('findEventById повертає undefined для невідомого ID', () => {
    expect(findEventById(events, 'unknown-id')).toBeUndefined();
  });

  test('findEventById знаходить існуючу подію', () => {
    expect(findEventById(events, 'ux-lecture')?.title).toBe(
      'Відкрита лекція: Мобільний UX',
    );
  });

  test('getEventTitles повертає масив рядків із назвами', () => {
    const titles = getEventTitles(events);
    expect(titles.length).toBe(events.length);
    expect(titles.every((title) => typeof title === 'string')).toBe(true);
    expect(titles[0]).toBe(events[0].title);
  });
});

describe('Attendee', () => {
  test('register додає новий ID', () => {
    const attendee = new Attendee('st-01', 'Олена');
    expect(attendee.register('ux-lecture')).toBe(true);
    expect(attendee.isRegisteredFor('ux-lecture')).toBe(true);
  });

  test('register не додає той самий ID двічі', () => {
    const attendee = new Attendee('st-01', 'Олена');
    attendee.register('ux-lecture');
    expect(attendee.register('ux-lecture')).toBe(false);
    expect(attendee.registeredEventIds).toEqual(['ux-lecture']);
  });

  test('cancel видаляє ID і повертає false для відсутнього', () => {
    const attendee = new Attendee('st-01', 'Олена');
    attendee.register('ux-lecture');
    expect(attendee.cancel('ux-lecture')).toBe(true);
    expect(attendee.cancel('ux-lecture')).toBe(false);
  });
});

describe('registerForEvent', () => {
  const makeEvent = (seatsLeft: number): CampusEvent => ({
    id: 'test-event',
    title: 'Тестова подія',
    startsAt: new Date('2026-11-01T10:00:00'),
    seatsLeft,
    capacity: 10,
    category: 'meetup',
    price: 10,
  });

  test('успішна реєстрація зменшує кількість місць', () => {
    const attendee = new Attendee('st-01', 'Олена');
    const updated = registerForEvent(attendee, makeEvent(5));
    expect(updated.seatsLeft).toBe(4);
    expect(attendee.isRegisteredFor('test-event')).toBe(true);
  });

  test('реєстрація на заповнену подію кидає помилку', () => {
    const attendee = new Attendee('st-01', 'Олена');
    expect(() => registerForEvent(attendee, makeEvent(0))).toThrow(
      'немає вільних місць',
    );
  });

  test('повторна реєстрація кидає помилку і не змінює місця', () => {
    const attendee = new Attendee('st-01', 'Олена');
    const event = makeEvent(5);
    registerForEvent(attendee, event);
    expect(() => registerForEvent(attendee, event)).toThrow('уже зареєстрований');
    expect(event.seatsLeft).toBe(4);
  });
});
