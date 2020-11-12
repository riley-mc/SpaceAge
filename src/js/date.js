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

Date.prototype.centuryCode = function() {
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