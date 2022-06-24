import {createComment,fetchComment} from './createComment.js';
test('Test two comment length', () => {
    const comments_one = {
        id: 1,
        username: 'user1',
        comment: 'comment1',
      };
    const comments_two = {
        id: 2,
        username: 'user2',
        comment: 'comment2',
      };
      createComment(comments_one.id,comments_one.username,comments_one.comment);
      createComment(comments_two.id,comments_two.username,comments_two.comment);
      expect(fetchComment(1).length).toBe(1);
});
