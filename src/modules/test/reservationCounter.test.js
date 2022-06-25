import { fetchReservation, createReservation } from './reservation.case.js';

describe('Check counter function', () => {
  test('Test reservation counter', () => {
    const firstReservation = {
      item_id: 1,
      date_start: '2022-06-22',
      username: 'test1',
      date_end: '2022-06-22',
    };
    createReservation(firstReservation.item_id,
      firstReservation.date_start, firstReservation.date_end, firstReservation.username);
    expect(fetchReservation(1).length).toBe(1);
  });

  test('Test reservation counter', () => {
    const secondReservation = {
      item_id: 2,
      date_start: '2022-06-23',
      username: 'test2',
      date_end: '2022-06-25',
    };
    createReservation(secondReservation.item_id,
      secondReservation.date_start, secondReservation.date_end, secondReservation.username);
    expect(fetchReservation(1).length).toBe(1);
  });
});