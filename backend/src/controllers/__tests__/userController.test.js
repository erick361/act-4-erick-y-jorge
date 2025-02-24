const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app'); // Asegúrate de que la ruta sea correcta
const User = require('../../models/user');

describe('User Controller', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({ email: 'test@example.com', password: 'password' });

    console.log(response.body);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Usuario registrado exitosamente');
  });

  it('should login a user', async () => {
    await request(app)
      .post('/api/register')
      .send({ email: 'test@example.com', password: 'password' });

    const response = await request(app)
      .post('/api/login')
      .send({ email: 'test@example.com', password: 'password' });

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not register a user with an existing email', async () => {
    await request(app)
      .post('/api/register')
      .send({ email: 'test@example.com', password: 'password' });

    const response = await request(app)
      .post('/api/register')
      .send({ email: 'test@example.com', password: 'password' });

    console.log(response.body);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('El usuario ya existe');
  });

  it('should not login a user with invalid credentials', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ email: 'invalid@example.com', password: 'password' });

    console.log(response.body);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Credenciales inválidas');
  });
});
