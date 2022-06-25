import { invUrl, invAppId } from './url_config.js';
import getMatches from './getdata.js';

const renderList = (reservations, reservationContainer) => {
  Object.keys(reservations).forEach((item) => {
    reservationContainer.innerHTML += `<li><b>From</b> ${reservations[item].date_start} <b>To</b> ${reservations[item].date_end} <b>By</b> ${reservations[item].username}</li>`;
  });
};

const openReservationModal = async (item, reservations) => {
  const modal = document.getElementById('modal__container');
  modal.innerHTML = '';
  modal.innerHTML += `<div id="myModal2" class="modal">
    
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
        <h3>reservations (<span id="counter">${reservations.length}</span>)</h3>
        <ul id="reservation__container"></ul>
        </div>
    </div>
    <form action="#" method="POST" class="was-validated" id="reservationForm">
    <div class="mb-3 mt-3">
      <label for="uname" class="form-label">Username:</label>
      <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="mb-3 mt-3">
    <label for="uname" class="form-label">Start Date:</label>
    <input type="date" class="form-control" id="date_start" placeholder="Enter Start Date" name="date_start" required>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div class="mb-3 mt-3">
  <label for="uname" class="form-label">End Date:</label>
  <input type="date" class="form-control" id="date_end" placeholder="Enter End Date" name="date_end" required>
  <div class="valid-feedback">Valid.</div>
  <div class="invalid-feedback">Please fill out this field.</div>
</div>
  <button type="submit" id="reserve-btn" class="btn bg-dark text-white">Submit</button>
  </form>
    </main>
  </div>`;

  const modal2 = document.getElementById('myModal2');
  modal2.style.display = 'block';

  const span = document.getElementsByClassName('close')[0];
  span.onclick = async () => {
    modal2.style.display = 'none';
  };
  const reservationContainer = document.getElementById('reservation__container');
  renderList(reservations, reservationContainer);

  const getreservationsTwo = async (index) => {
    const res = await fetch(`${invUrl}/${invAppId}/reservations?item_id=${index}`).then((response) => response.json());
    return res;
  };

  const addForm = async (index) => {
    const username = document.getElementById('username').value;
    const startDate = document.getElementById('date_start').value;
    const endDate = document.getElementById('date_end').value;

    await fetch(`${invUrl}/${invAppId}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: index,
        username,
        date_start: startDate,
        date_end: endDate,
      }),
    }).then((res) => res.text()).then(() => {
    })
      .catch((error) => (error));

    const data = await getreservationsTwo(index);
    document.getElementById('counter').innerHTML = data.length;

    let litem = '';
    data.forEach((data) => {
      litem += `<li><b>From</b>${data.date_start} <b>To</b>${data.date_end} <b>By</b>${data.username}</li>`;
    });
    document.getElementById('reservation__container').innerHTML = litem;
  };

  const form = document.getElementById('reservationForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    addForm(item.videos[0].id);
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

export default renderReservation;