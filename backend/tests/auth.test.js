const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app'); // Asegúrate de que la ruta sea correcta
const User = require('../src/models/user');

describe('Auth Tests', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('Registro de usuario', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({ email: 'test@example.com', password: '123456' });

    console.log(response.body);

    expect(response.status).toBe(201);
  });

  test('Inicio de sesión de usuario', async () => {
    await request(app)
      .post('/api/register')
      .send({ email: 'test@example.com', password: '123456' });

    const response = await request(app)
      .post('/api/login')
      .send({ email: 'test@example.com', password: '123456' });

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
