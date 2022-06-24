let commentData = [];
const createComment =  async (id, username, commentDetail)  => {
    const comment = {
        item_id :  id,
        username :  username,
        comment :  commentDetail,
    }
    commentData.push(comment);

}
const fetchComment = (id) => {
  return  commentData.filter(e => e.item_id === id);
    
} 
export {fetchComment, createComment };