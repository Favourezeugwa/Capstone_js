import { invUrl, invAppId } from './url_config.js';
import getMatches from './getdata.js';

const openModal = async (item, comments) => {
  const modal = document.getElementById('modal__container');
  modal.innerHTML += `<div id="myModal" class="modal">
    
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
      <h3>Comments (${comments.length})</h3>
    </div>
  
  </div>`;

  const modal1 = document.getElementById('myModal');
  modal1.style.display = 'block';
  const span = document.getElementsByClassName('close')[0];
  span.onclick = () => {
    modal.style.display = 'none';
    window.location.reload();
  };
};

const getComments = async (index) => {
  try {
    const res = await fetch(`${invUrl}/${invAppId}/comments?item_id=item${index}`);
    return await res.json();
  } catch (error) {
    return error;
  }
};

const renderComment = async (index) => {
  const data = await getMatches();
  const comments = await getComments(index);
  Promise.all([data.response[index], comments]).then((data) => {
    if (data[1].error) {
      openModal(data[0], []);
    } else {
      openModal(data[0], data[1]);
    }
  });
};

export default renderComment;