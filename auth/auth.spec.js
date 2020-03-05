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
      .send({
        username: 'angus young',
        password: 'acdc',
        email: 'ay@email.com'
      })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
  it('should return JSON object', async () => {
    const res = await request(server)
      .post('/api/auth/rvowners/register')
      .send({ email: 'testemail@testing.com', password: 'testing' });

    expect(res.type).toMatch(/json/i);
  });
});
