const { expect } = require('chai');
const request = require('supertest');
const basicSetup = require('./helpers/clients.basicSetup');
const app = require('../src/index');

describe('Client API', () => { // eslint-disable-line no-undef
  basicSetup();

  it('should create client with valid data', async () => { // eslint-disable-line no-undef
    const newCity = {
      name: 'Petropolis',
      state: 'Rio de Janeiro',
    };
    await request(app).post('/api/v1/cities')
      .send(newCity);

    const toSendData = {
      name: 'Arthur',
      age: '18',
      city: 'Petropolis',
      sex: 'Masculino',
      birthDate: '20/06/2002',
    };

    const res = await request(app).post('/api/v1/clients')
      .send(toSendData);

    expect(res.statusCode).to.equal(201); // eslint-disable-line no-undef
  });

  it('should get client by ID successfully', async () => { // eslint-disable-line no-undef
    const newCity = {
      name: 'Petropolis',
      state: 'Rio de Janeiro',
    };
    await request(app).post('/api/v1/cities')
      .send(newCity);

    const newCLient = {
      name: 'Calebe',
      age: '18',
      city: 'Petropolis',
      sex: 'Masculino',
      birthDate: '20/06/2002',
    };

    const newClientRes = await request(app).post('/api/v1/clients')
      .send(newCLient);
    // console.log(newClientRes.body)
    const getRes = await request(app)
      .get(`/api/v1/clients/?id=${newClientRes.body.data._id}`);

    expect(getRes.statusCode).to.equal(200); // eslint-disable-line no-undef
    expect(getRes.body.data.name).to.equal(newCLient.name); // eslint-disable-line no-undef
  });

  it('should get client by Name successfully', async () => { // eslint-disable-line no-undef
    const newCity = {
      name: 'Aracaju',
      state: 'Serjipes',
    };
    await request(app).post('/api/v1/cities')
      .send(newCity);

    const newCLient = {
      name: 'Ribeiro',
      age: '18',
      city: 'Petropolis',
      sex: 'Masculino',
      birthDate: '20/06/2002',
    };

    const newClientRes = await request(app).post('/api/v1/clients')
      .send(newCLient);
    // console.log(newClientRes.body)
    const getRes = await request(app)
      .get(`/api/v1/clients/?name=${newClientRes.body.data.name}`);

    expect(getRes.statusCode).to.equal(200);// eslint-disable-line no-undef
    expect(getRes.body.data.name).to.equal(newCLient.name);// eslint-disable-line no-undef
  });

  it('should update client successfully', async () => { // eslint-disable-line no-undef
    const newCity = {
      name: 'Petropolis',
      state: 'Rio de Janeiro',
    };
    await request(app).post('/api/v1/cities')
      .send(newCity);

    const newCLient = {
      name: 'Soares',
      age: '18',
      city: 'Petropolis',
      sex: 'Masculino',
      birthDate: '20/06/2002',
    };

    const newClientRes = await request(app).post('/api/v1/clients')
      .send(newCLient);

    const dataToSend = {
      name: 'João',
    };

    const updatedRes = await request(app)
      .put(`/api/v1/clients/${newClientRes.body.data._id}`)
      .send(dataToSend);

    expect(updatedRes.statusCode).to.equal(200);// eslint-disable-line no-undef
    expect(updatedRes.body.data.name).to.equal(dataToSend.name);// eslint-disable-line no-undef
  });

  it('should delete client successfully', async () => { // eslint-disable-line no-undef
    const newCity = {
      name: 'Petropolis',
      state: 'Rio de Janeiro',
    };
    await request(app).post('/api/v1/cities')
      .send(newCity);

    const newCLient = {
      name: 'Soares',
      age: '18',
      city: 'Petropolis',
      sex: 'Masculino',
      birthDate: '20/06/2002',
    };

    const newClientRes = await request(app).post('/api/v1/clients')
      .send(newCLient);

    await request(app)
      .delete(`/api/v1/clients/${newClientRes.body.data._id}`);

    const getDeletedUserRes = await request(app)
      .get(`/api/v1/clients/?id=${newClientRes.body.data._id}`);

    expect(getDeletedUserRes.statusCode).to.equal(200);// eslint-disable-line no-undef
    expect(getDeletedUserRes.body.data).to.equal(null);// eslint-disable-line no-undef
  });
});
