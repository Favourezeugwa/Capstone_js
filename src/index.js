import './style.css';
import { displayMatches, diplayComments, displayReservation } from './modules/render.js';

const render = async () => {
  await displayMatches();
  await diplayComments();
  await displayReservation();
};

render();