import getMatches from './getdata.js';
import renderComment from './comment_modal.js';
// import renderReservation from './reserve_modal.js';
import renderReservation from './hmm.js';

const displayMatches = async () => {
  const matchList = document.getElementById('matchesContainer');
  const data = await getMatches();
  matchList.innerHTML = '';
  data.response.slice(0, 20).forEach((item, index) => {
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
      <i class="fa-regular fa-heart"></i>
      <div class="like_title">10 likes</div>
      </div>
      </div>

      <div class="row m-2">
      <div class="col-6 p-0 text-center" id="${index}">
        <button class="btn commentModal">Comments</button>
      </div>
      <div class="col-6 p-0 text-center" id = "${index}">
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

export { displayMatches, diplayComments, displayReservation };