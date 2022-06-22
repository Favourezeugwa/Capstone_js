import './style.css';
import { displayMatches, diplayComments } from './modules/render.js';

const render = async () => {
  await displayMatches();
  await diplayComments();
};

render();