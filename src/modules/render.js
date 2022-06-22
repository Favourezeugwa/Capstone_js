import getMatches from './getdata.js';

const displayMatches = async (matchList, url) => {
  const data = await getMatches(url);
  matchList.innerHTML = '';
  data.response.forEach((item) => {
    const matchesItems = `<div class="col-md-3 mt-4">
      <div class="card">
          <div class="card-title">${item.title}</div>
          <div class="card-body"><img id="card-image" src="${item.thumbnail}">
          </div>
      </div>
  </div>`;
    matchList.innerHTML += matchesItems;
  });
};
export default displayMatches;