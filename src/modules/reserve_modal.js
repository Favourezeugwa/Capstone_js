import { invUrl, invAppId } from './url_config.js';
import getMatches from './getdata.js';

const renderList = (reservations, reservationContainer) => {
  Object.keys(reservations).forEach((item) => {
    reservationContainer.innerHTML = `<li>${reservations[item].date_start} - ${reservations[item].date_end} by ${reservations[item].username}</li>`;
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
        <ul id="reservation__container">
          
        </ul>
        </div>
    </div>
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

export default renderReservation;