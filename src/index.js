import './style.css';
import { displayMatches, diplayComments, displayReservation, displayLikes } from './modules/render.js';

const render = async () => {
  await displayMatches();
  await displayLikes();
  await diplayComments();
  await displayReservation();
};

render();
