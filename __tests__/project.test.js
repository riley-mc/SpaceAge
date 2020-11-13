import { Date } from "../src/js/date.js";

describe('Date', () => {

  let Gdate;
  let Jdate;

  beforeEach(() => {
    Gdate = new Date(20, 4, 1987);
    Jdate = new Date(20, 4, 1687);
  });

  test('should correctly construct a Date object with the correct Day, Month and Year', () => {
    expect(Gdate.day).toEqual(20);
  });

  test('should correctly recieves back the last two digits of the year getting the number to find the year code', () => {
    expect(Gdate.twoDigitYear()).toEqual(87);
  });

  test('should return the full year code', () => {
    expect(Gdate.yearCode()).toEqual(3);
  });

  test('should return the month code for the given month', () => {
    expect(Gdate.monthCode()).toEqual(6);
  });

  test('should return the date with a G, or J, depending on the input year', () => {
    expect(Gdate.calendar()).toEqual("G");
  });

  test('should return the century code for a gregorian year', () => {
    expect(Gdate.gregCenturyCode()).toEqual(0);
  });

  test('should return the century code for a julian year', () => {
    expect(Jdate.julCenturyCode()).toEqual(2);
  });

  test('should return if the year is a leap year or not', ()  => {
  expect(Gdate.toWeekday()).toEqaul()
  }
});