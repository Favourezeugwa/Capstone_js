
const sendComment = async (url,Form ) => {
  try {

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: Form.username.value,
        comment: Form.comment.value,
        item_id: Form.item_id.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    Form.username.value = '';
    Form.comment.value = '';
    return await res.json();
  } catch (error) {

    return false;
  }
};
export default sendComment;