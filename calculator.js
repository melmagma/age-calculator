
document.getElementById('dateForm').addEventListener('submit', function(e) {
  e.preventDefault(); // stops the page from reloading

  const date = luxon.DateTime.fromISO(document.getElementById('birth-date').value);
  const dt = luxon.DateTime.now();

  const age = dt.diff(date, ['years', 'months', 'days']);

  document.getElementById('age').textContent = 
    `Age: ${Math.floor(age.years)} years, ${Math.floor(age.months)} months, ${Math.floor(age.days)} days`;
});