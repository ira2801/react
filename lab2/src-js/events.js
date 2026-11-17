const events = [
  {
    id: 'ux-lecture',
    title: 'Відкрита лекція: Мобільний UX',
    startsAt: new Date('2026-10-01T16:00:00'),
    seatsLeft: 20,
    category: 'lecture',
    price: 0,
  },
  {
    id: 'ts-workshop',
    title: 'Воркшоп: TypeScript з нуля',
    startsAt: new Date('2026-10-05T14:00:00'),
    seatsLeft: 12,
    category: 'workshop',
    price: 50,
  },
  {
    id: 'career-meetup',
    title: 'Мітап: Кар’єра в IT',
    startsAt: new Date('2026-10-10T18:00:00'),
    seatsLeft: 0,
    category: 'meetup',
    price: 20,
  },
  {
    id: 'ai-workshop',
    title: 'Воркшоп: Вступ до ШІ',
    startsAt: new Date('2026-10-15T15:00:00'),
    seatsLeft: 8,
    category: 'workshop',
    price: 80,
  },
];

function getOpenEvents(events) {
  return events.filter((event) => event.seatsLeft > 0);
}

function getEventsByCategory(events, category) {
  return events.filter((event) => event.category === category);
}

function findEventById(events, id) {
  return events.find((event) => event.id === id);
}

function getEventTitles(events) {
  return events.map((event) => event.title);
}

module.exports = {
  events,
  getOpenEvents,
  getEventsByCategory,
  findEventById,
  getEventTitles,
};
