const request = require('supertest');

const server = require('../api/server.js');

it('should set db environment to testing', function() {
  expect(process.env.DB_ENV).toBe('testing');
});

describe('server.js', () => {
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get('/');
      expect(response.status).toEqual(expectedStatusCode);
    });
  });
});
