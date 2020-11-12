import { Date } from "./../src/js/date.js";

describe('Date', () => {

  let date;

  beforeEach(() => {
    date = new Date(20, 4, 1987);
  });

  test('should correctly construct a Date object with the correct Day, Month and Year', () => {
    expect(date.day).toEqual(20);
  });

  test('should correctly recieves back the last two digits of the year getting the number to find the year code', () => {
    expect(date.twoDigitYear()).toEqual(87);
  });

  test('should return the full year code', () => {
    expect(date.yearCode()).toEqual(3);
  });

  test('should return the month code for the given month', () => {
    expect(date.monthCode()).toEqual(6);
  });

  test('should return the date with a G, or J, depending on the input year', () => {
    expect(date.centuryCode()).toEqual("G");
  });

});