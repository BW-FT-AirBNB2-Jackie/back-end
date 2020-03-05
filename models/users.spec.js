const Users = require('./users-model');
const db = require('../database/dbConfig');

describe('users-model', function() {
  describe('add()', function() {
    it('add the user to the db', async function() {
      await Users.add({
        username: 'lars',
        password: 'metallica',
        email: 'lu@email.com'
      });
      const users = await db('users');
      expect(users).toHaveLength(1);
    });
  });
});
