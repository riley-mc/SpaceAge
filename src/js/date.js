export function Date(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
}

Date.prototype.yearCode = function() {
  return this.year %100;
}

