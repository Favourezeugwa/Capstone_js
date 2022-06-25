import './style.css';
import {
  displayMatches, diplayComments, displayReservation, displayLikes, homeItemsCounter,
} from './modules/render.js';

export const render = async () => {
  await homeItemsCounter();
  await displayMatches();
  await displayLikes();
  await diplayComments();
  await displayReservation();
};
render();