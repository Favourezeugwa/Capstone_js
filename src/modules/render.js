import getMatches from './getdata.js';
import { getLikes } from './likescounter.js';

const displayMatches = async (matchList, url) => {
 
  const data = await getMatches(url);
  matchList.innerHTML = '';
  data.response.forEach((item) => {
    // console.log(item);
    const matchesItems = `<div class="col-md-3 mt-4">
      <div class="card">
          <div class="card-title">${item.title}</div>
          <div class="card-body"><img id="card-image" src="${item.thumbnail}">
          </div>
      </div>
      <div class="d-flex flex-row-reverse">
        <div class="d-flex flex-column">
        <button class="btn btn-light liked-icon"  data-id=${item.id}>like</button>
          <button class="btn btn-light">comments</button>
          <button class="btn btn-light">reservation</button>
        </div>
      </div>
  </div>`;
  

  document.querySelectorAll('liked-icon').forEach((btn) => {
    btn.addEventListener('click', (() => { console.log('like'); }));
  });
    matchList.innerHTML += matchesItems;
  });

  const likesArray =await getLikes();
  likesArray.forEach((like) => {
    data.forEach((datas) => {
      if (like.item_id === datas.id) {
        datas.likes = like.likes;
      } else if (data.likes === undefined) {
        datas.likes = 0;
      }
    })
  })
  

};
export default displayMatches;