import { invUrl, invAppId } from './url_config.js';
import getMatches from './getdata.js';
import sendComment from './sendComment.js';

const getComments = async (index) => {
  try {
    const res = await fetch(`${invUrl}/${invAppId}/comments?item_id=${index}`);
    return await res.json();
  } catch (error) {
    return error;
  }
};

const commentList = async (comments, commentContainer) => {
  commentContainer.innerHTML = '';

  Object.keys(comments).forEach((item) => {
    commentContainer.innerHTML += `<li>${comments[item].creation_date} &nbsp; ${comments[item].username} : ${comments[item].comment}</li>`;
  });
};

const openModal = async (item, comments) => {
  const modal = document.getElementById('modal__container');
  modal.innerHTML = '';
  modal.innerHTML += `<div id="myModal" class="modal">
    
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="video_player">
      ${item.videos[0].embed}
      </div>
      <div class="row mt-3">
      <div class="col-12"><h2>${item.title}</h2></div>
      <div class="col-12"> <h4>${item.competition}</h4></div>
      </div>
      <p><i class="fa-solid fa-calendar-days"></i> ${item.date}</p>

      <div class="btns d-flex ">
      <a href="${item.matchviewUrl}" class="btn bg-dark text-white mr-3" target="_blank">Match Link</a>
      <a href="${item.competitionUrl}"  class="btn bg-dark text-white" target="_blank">Competition Link</a>
      </div>

      <br>
 
    <div class="row">
        <div class="col-12 text-left">
        <h3>Comments (<span id="comment-counter">${comments.length}</span>)</h3>
        <ul id="comment__container">
          
        </ul>
        </div>
    </div>
    <div class="container-fulid mt-3">
  <h3 class="text-left">Add Comment</h3> 
    <div class="row justify-content-center">
    <div class="col-md-12 col-xs-12">
  <form action="#" method="POST" class="was-validated" id="form">
    <div class="mb-3 mt-3">
      <label for="uname" class="form-label">Username:</label>
      <input type="text" class="form-control" id="uname" placeholder="Enter username" name="username" required>
      <input type="hidden" value="${item.videos[0].id}" class="form-control"  name="item_id">
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="mb-3">
      <label for="pwd" class="form-label">Comment:</label>
      <textarea class="form-control" rows="5" id="comment" name="comment" required></textarea>
        
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

  <button type="submit" class="btn bg-dark text-white">Submit</button>
  </form>
  <div>
  <div>
</div>
  </div>`;

  const modal1 = document.getElementById('myModal');
  modal1.style.display = 'block';

  const span = document.getElementsByClassName('close')[0];
  span.onclick = async () => {
    modal1.style.display = 'none';
  };
  const commentContainer = document.getElementById('comment__container');
  const commentCounter = document.getElementById('comment-counter');
  commentList(comments, commentContainer);
  const Form = document.getElementById('form');
  const sendURL = `${invUrl}/${invAppId}/comments`;
  Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await sendComment(sendURL, Form);
    let comments1 = [];
    comments1 = await getComments(item.videos[0].id);
    commentList(comments1, commentContainer);
    commentCounter.textContent = `${comments1.length}`;
  });
};

const renderComment = async (index) => {
  const data = await getMatches();
  const comments = await getComments(data.response[index].videos[0].id);
  Promise.all([data.response[index], comments]).then((data) => {
    if (data[1].error) {
      openModal(data[0], []);
    } else {
      openModal(data[0], data[1]);
    }
  });
};

export { commentList, renderComment };