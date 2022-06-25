import getMatches from './getdata.js';
import { renderComment } from './comment_modal.js';
import renderReservation from './reservation_modal.js';
import { addLike, getLikes } from './likeFunctionality.js';
const displayMatches = async () => {
  const matchList = document.getElementById('matchesContainer');
  const data = await getMatches();
  const likes = await getLikes();
  matchList.innerHTML = '';
  data.response.slice(0, 20).forEach((item, index) => {
    const like = likes
      .filter((like) => typeof like.item_id === 'string')
      .filter((like) => like.item_id === item.videos[0].id)[0];
    const matchesItems = `
    <div class="col-md-3 mt-4">
    <div class="card">
    <img class="card-img" src="${item.thumbnail}" alt="Card image">
    <div class="card-body">
      <div class="row m-2">
      <div class="col-9 p-0 item-title">
      <p class="card-title">${item.title}</p>
      </div>
      <div class="col-3 like">
      <i class="fa-regular fa-heart likeBtn"id="${item.videos[0].id}"></i>
      <div class="like_title" ><span id="counter${item.videos[0].id}">${like ? like.likes : 0}</span> likes</div>
      </div>
      </div>
​
      <div class="row m-2">
      <div class="col-6 p-0 text-center" id="${index}">
        <button class="btn commentModal bg-dark text-white">Comments</button>
      </div>
      <div class="col-6 p-0 text-center" id="${index}">
      <button class="btn reservationModal">Reservations</button>
      </div>
      </div>
    </div>
    </div>
    </div>`;
    matchList.innerHTML += matchesItems;
  });
};
const diplayComments = async () => {
  const commentButtons = document.querySelectorAll('.commentModal');
  commentButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const currentShow = e.path[1];
      const id = currentShow.getAttribute('id');
      renderComment(id);
    });
  });
};
const displayReservation = async () => {
  const reservationButtons = document.querySelectorAll('.reservationModal');
  reservationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const currentShow = e.path[1];
      const id = currentShow.getAttribute('id');
      renderReservation(id);
    });
  });
};
const displayLikes = async () => {
  const likeBtn = document.querySelectorAll('.likeBtn');
  likeBtn.forEach((item)=> {
    item.addEventListener('click', async (e) => {
      const path = e.path[0];
      const id = path.getAttribute('id');
      await addLike(id);
      const likeCounter = document.getElementById('counter'+id);
      const likes = await getLikes();
      const like = likes
      .filter((like) => typeof like.item_id === 'string')
      .filter((like) => like.item_id === id)[0];
   
      likeCounter.textContent = `${like.likes}`;
  });
});
};
export { displayMatches, diplayComments, displayReservation,displayLikes };