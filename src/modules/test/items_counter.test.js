import {getItems} from './items_counter.js';
test('Test two comment length',() => {
    expect(getItems().length).toBe(2);
  });
  