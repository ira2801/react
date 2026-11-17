const { printEventSummary } = require('./basics');
const { events, getOpenEvents } = require('./events');
const { Attendee } = require('./attendee');
const { calculateRegistration } = require('./pricing');

console.log('Відкриті події:');
for (const event of getOpenEvents(events)) {
  console.log(`- ${event.title}`);
}

printEventSummary(events[0].title, events[0].seatsLeft);
printEventSummary(events[2].title, events[2].seatsLeft);

const student = new Attendee('st-01', 'Олена');
console.log('Реєстрація на ux-lecture:', student.register('ux-lecture'));
console.log('Реєстрація на ts-workshop:', student.register('ts-workshop'));
console.log('Повторна реєстрація на ux-lecture:', student.register('ux-lecture'));

const result = calculateRegistration(events, ['ux-lecture', 'ts-workshop'], 10);
console.log('Розрахунок для групи з 10 осіб:', result);
