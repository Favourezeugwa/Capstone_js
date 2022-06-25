import { invUrl, invAppId } from './url_config.js';

const getLikes = async () => {
  try {
    const res = await fetch(`${invUrl}/${invAppId}/likes`);
    return await res.json();
  } catch (error) {
    return error;
  }
};
const addLike = async (id) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  const result = await fetch(`${invUrl}/${invAppId}/likes`, data);
  return result;
};
export { getLikes, addLike };
