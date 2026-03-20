const request = require('supertest');
const app = require('../index');
const { version } = require('../package.json');

describe('API Tests', () => {

  test('GET / should return status ok', async () => {
    const res = await request(app).get('/');
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  test('GET /health should return correct version', async () => {
    const res = await request(app).get('/health');
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ version: version });
  });

});
