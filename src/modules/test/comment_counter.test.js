import { createComment, fetchComment } from './createComment.js';

test('Test two comment length', () => {
  const commentsOne = {
    id: 1,
    username: 'user1',
    comment: 'comment1',
  };
  const commentsTwo = {
    id: 2,
    username: 'user2',
    comment: 'comment2',
  };
  createComment(commentsOne.id, commentsOne.username, commentsOne.comment);
  createComment(commentsTwo.id, commentsTwo.username, commentsTwo.comment);
  expect(fetchComment(1).length).toBe(1);
});
