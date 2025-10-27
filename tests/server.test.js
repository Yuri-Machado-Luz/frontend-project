const request = require('supertest');
const app = require('../server');

describe('Server', () => {
  it('should respond to GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should serve static files', async () => {
    const response = await request(app).get('/css/main.css');
    expect(response.status).toBe(200);
  });
});