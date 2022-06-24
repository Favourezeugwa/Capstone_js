import { invUrl, invAppId } from './url_config.js';

const getLikes = async ()=>{
    try {
        const res = await fetch(`${invUrl}/${invAppId}/likes`);
        return await res.json();
         
      } catch (error) {
        return error;
      }
    
}

export {getLikes};