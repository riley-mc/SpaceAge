export function Date(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
}

Date.prototype.twoDigitYear = function() {
  return this.year % 100;
}

Date.prototype.yearCode = function() {
  let year = this.twoDigitYear();
  let yearCode = (year + (Math.trunc(year / 4))) % 7;
  return yearCode;
}

Date.prototype.monthCode = function() {
  let m = this.month;
  if (m === 1 || m === 10) {
    return 0;
  } else if (m === 2 || m === 3 || m === 11) {
    return 3;
  } else if (m === 4 || m === 7) {
    return 6;
  } else if (m === 5) {
    return 1;
  } else if (m === 6) {
    return 4;
  } else if (m === 8) {
    return 2;
  } else if (m === 9 || m === 12) {
    return 5;
  } else {
    return "Month invalid";
  }
}

Date.prototype.calendar = function() {
  if (this.year > 1752){
    return "G";
  } else if (this.year < 1752) {
    return "J";
  } else {
    if (this.month > 9) {
      return "G";
    } else if (this.month < 9) {
      return "J";
    } else {
      if (this.day > 14) {
        return "G";
      } else if (this.day < 2) {
        return "J";
      } else {
        return "This day does not exist....";
      }
    }
  }
}

Date.prototype.gregCenturyCode = function() {
  let y = this.year;

  if (y >= 1700 && y <= 1799) {
    return 4;
  } else if (y >= 1800 && y <= 1899) {
    return 2;
  } else if (y >= 1900 && y <= 1999) {
    return 0;
  } else if (y >= 2000 && y <= 2099) {
    return 6;
  } else if (y >= 2100 && y <= 2199) {
    return 4;
  } else if (y >= 2200 && y <= 2299) {
    return 2;
  } else if (y >= 2300 && y <= 2399) {
    return 0;
  } else {
    return "the date is too far in the future....";
  }
}

Date.prototype.julCenturyCode = function() {
  let year = Math.trunc(this.year / 100);
  year -= 18;
  return Math.abs(year % 7);
}

Date.prototype.gregLeapYear = function() {
  if (this.year % 400 === 0) {
    return 1;
  } else if (this.year % 100 === 0) {
    return 0;
  } else if (this.year % 4 === 0) {
    return 1;
  } else {
    return 0;
  }
}

Date.prototype.julLeapYear = function() {
  if (this.year % 4 === 0) {
    return 1;
  } else {
    return 0;
  }
}

Date.prototype.calculate = function() {
  if (this.calendar() === "G") {
    let dayCode = (this.yearCode() + this.monthCode() + this.gregCenturyCode + this.day - this.gregLeapYear());
    return dayCode;
  } else if (this.calendar() === "J") {
    let dayCode = (this.yearCode() + this.monthCode() + this.julCenturyCode + this.day - this.julLeapYear());
    return dayCode;
  }
}

Date.prototype.toWeekday = function() {
  if (this.calculate() === 0) {
    return "Sunday";
  } else if (this.calculate() === 1)  {
    return "Monday";
  } else if (this.calculate() === 2)  {
    return "Tuesday";
  } else if (this.calculate() === 3)  {
    return "Wednesday";
  } else if (this.calculate() === 4)  {
    return "Thursday";
  } else if (this.calculate() === 5)  {
    return "Friday";
  } else if (this.calculate() === 6)  {
    return "Saturday";
  }
};