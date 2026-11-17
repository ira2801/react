function formatEventTitle(title, category) {
  return `Подія: ${title} (${category})`;
}

function isRegistrationOpen(seatsLeft) {
  return seatsLeft > 0;
}

function printEventSummary(title, seatsLeft) {
  const status = isRegistrationOpen(seatsLeft)
    ? 'реєстрація відкрита'
    : 'реєстрація закрита';
  console.log(`${formatEventTitle(title, 'підсумок')} — ${status}`);
}

module.exports = { formatEventTitle, isRegistrationOpen, printEventSummary };
