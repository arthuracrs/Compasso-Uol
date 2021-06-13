const expect = require('chai').expect
const request = require('supertest')
const basicSetup = require('./helpers/basicSetup')
const app = require('../src/index')

describe('City tests', ()=>{
    basicSetup();    
  
    it('create city with valid data', async ()=>{
        let toSendData = {
          name: 'Petrolina',
          state: 'Pernambuco'
        } 
        
        const res = await request(app).post('/api/v1/cities')
            .send(toSendData)
            
        expect(res.statusCode).to.equal(201);
    })
})