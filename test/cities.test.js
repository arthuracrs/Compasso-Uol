const { expect } = require('chai');
const request = require('supertest');
const basicSetup = require('./helpers/cities.basicSetup');
const app = require('../src/index');

describe('City API', () => { // eslint-disable-line no-undef
  basicSetup();

  it('should create a city with valid data', async () => { // eslint-disable-line no-undef
    const toSendData = {
      name: 'Petrolina',
      state: 'Pernambuco',
    };

    const res = await request(app).post('/api/v1/cities')
      .send(toSendData);

    expect(res.statusCode).to.equal(201);
  });

  it("should update the city's name successfully", async () => { // eslint-disable-line no-undef
    const newCity = {
      name: 'Juazeira',
      state: 'Bahia',
    };
    const createRes = await request(app).post('/api/v1/cities')
      .send(newCity);

    const toSendData = {
      name: 'Juazeiro',
      state: 'Bahia',
    };

    const updateRes = await request(app)
      .put(`/api/v1/cities/${createRes.body.data._id}`)
      .send(toSendData);

    expect(updateRes.statusCode).to.equal(200);
    expect(updateRes.body.data.name).to.equal(toSendData.name);
  });

  it('should get the city by Name successfully', async () => { // eslint-disable-line no-undef
    const newCity = {
      name: 'Casa Nova',
      state: 'Bahia',
    };
    const createRes = await request(app).post('/api/v1/cities')
      .send(newCity);

    const getRes = await request(app)
      .get(`/api/v1/cities/?city=${createRes.body.data.name}`);

    expect(getRes.statusCode).to.equal(200);
    expect(getRes.body.data[0].name).to.equal(newCity.name);
  });

  it('should get the city by State successfully', async () => { // eslint-disable-line no-undef
    const newCity = {
      name: 'Sobradinho',
      state: 'Bahia',
    };
    const createRes = await request(app).post('/api/v1/cities')
      .send(newCity);

    const getRes = await request(app)
      .get(`/api/v1/cities/?state=${createRes.body.data.state}`);

    expect(getRes.statusCode).to.equal(200);// eslint-disable-line no-undef
    expect(getRes.body.data[0].name).to.equal(newCity.name);// eslint-disable-line no-undef
  });
});
