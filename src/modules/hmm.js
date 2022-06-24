import { invUrl, invAppId } from './url_config.js';
import getMatches from './getdata.js';

const renderList = (reservations, reservationContainer) => {
  Object.keys(reservations).forEach((item) => {
    reservationContainer.innerHTML += `<li><b>From</b> ${reservations[item].date_start} <b>To</b> ${reservations[item].date_end} <b>By</b> ${reservations[item].username}</li>`;
  });
};

const openReservationModal = async (item, reservations) => {
  const modal = document.getElementById('modal__container');
  modal.innerHTML += `<div id="modalID" class="modal">
    
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="video_player">
      ${item.videos[0].embed}
      </div>
      <div class="row">
      <div class="col-6"><h2>${item.title}</h2></div>
      <div class="col-6"> <h4>${item.competition}</h4></div>
      </div>
      <p>date: ${item.date}</p>
      <div>
      <a href="${item.matchviewUrl}" class="btn bg-dark text-white" target="_blank">Match Link</a>
      <a href="${item.competitionUrl}"  class="btn bg-dark text-white" target="_blank">Competition Link</a>
      <div>
      <br>
    </div>
    <div class="row">
        <div class="col-12 text-center">
        <h3>reservations (${reservations.length})</h3>
        <ul id="reservation__container"></ul>
        </div>
    </div>
    <iframe name="blank"></iframe>
    <form action="${invUrl}/${invAppId}/reservations" id="reservationForm" method="POST" target="blank">
        <input type="hidden" value = "${item.videos[0].id}" name="item_id"/>
        <div class="mb-3">
        <label for="username"><b>Your name:<b/></label>
          <input
            type="text"
            class="col-md-4"
            id="username"
            name="username"
          />
        </div>
        <div class="mb-3">
          <label for="date_start"><b>Start date:<b/></label>
          <input
            type="date"
            class="col-md-4"
            id="date_start"
            name="date_start"
            placeholder="Start date"
          />
        </div>
        <div class="mb-3">
        <label for="date_end"><b>End date:<b/></label>
          <input
            type="date"
            class="col-md-4"
            id="date_end"
            name="date_end"
            placeholder="End date"
          />
        </div>
        <button type="submit" class="btn btn-primary px-5" id="reserve-btn" onClick="window.location.reload()">Reserve</button>
      </form>
    </main>
  </div>`;

  const modal1 = document.getElementById('modalID');
  modal1.style.display = 'block';
  const span = document.getElementsByClassName('close')[0];
  span.onclick = () => {
    modal.style.display = 'none';
    window.location.reload();
  };
  const reservationContainer = document.getElementById('reservation__container');
  renderList(reservations, reservationContainer);

  const form = document.getElementById('reservationForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    getreservations();
    form.reset();
  });
};

const getreservations = async (index) => {
  try {
    const res = await fetch(`${invUrl}/${invAppId}/reservations?item_id=${index}`);
    return await res.json();
  } catch (error) {
    return error;
  }
};

const renderReservation = async (index) => {
  const data = await getMatches();
  const reservations = await getreservations(data.response[index].videos[0].id);
  Promise.all([data.response[index], reservations]).then((data) => {
    if (data[1].error) {
      openReservationModal(data[0], []);
    } else {
      openReservationModal(data[0], data[1]);
    }
  });
};


// const reserveButton = document.getElementById('reserve-btn');
// reserveButton.addEventListener('submit', (event) => {
//   event.preventDefault();
//   getreservations();
// });

// const reserveButton = document.getElementById('reserve-btn');

export default renderReservation;