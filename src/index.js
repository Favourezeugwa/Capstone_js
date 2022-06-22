import './style.css';
import displayMatches from './modules/render.js';

const matchesContainer = document.getElementById('matchesContainer');
const baseurl = 'https://www.scorebat.com/video-api/v3/feed/?token=MjA5OThfMTY1NTg5MTUwOF80OTRiYzkwMjE0MDFiYzdmZmY2ZGRhOTY3NmVkOWRjZTFjM2Q4Y2M0';
displayMatches(matchesContainer, baseurl);