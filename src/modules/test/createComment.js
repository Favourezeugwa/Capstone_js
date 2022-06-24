const commentData = [];
const createComment = async (id, username, commentDetail) => {
  const comment = {
    item_id: id,
    username,
    comment: commentDetail,
  };
  commentData.push(comment);
};
const fetchComment = (id) => commentData.filter((e) => e.item_id === id);
export { fetchComment, createComment };