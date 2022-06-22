import { baseUrl } from './url_config.js';

const getMatches = async () => {
  try {
    const res = await fetch(baseUrl);
    return await res.json();
  } catch (error) {
    return error;
  }
};
export default getMatches;