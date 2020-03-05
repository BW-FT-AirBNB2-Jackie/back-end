const request = require('supertest');

const server = require('../api/server.js');

const db = require('../database/dbConfig.js');

describe('register', function() {
  beforeEach(async () => {
    await db('users').truncate();
  });

  it('should return 201', function() {
    return request(server)
      .post('/api/auth/rvowners/register')
      .send({ username: 'jon snow', password: 'pass', email: 'test@email.com' })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
});
