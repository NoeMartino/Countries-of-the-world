const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  beforeAll(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('Country', () => {
      it('Should throw an error if object is empty', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid object')))
          .catch(() => done());
      })
      it('Should throw an error if name is null', (done) => {
        Country.create({
          id: 'ARG',
          name: null,
          flag: 'https://flagcdn.com/w320/ar.png',
          continent: 'South America',
          capital: 'Buenos Aires',
          population: 45376763
        })
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      })
      it('Should throw an error if flag is null', (done) => {
        Country.create({
          id: 'ARG',
          name: 'Argentina',
          flag: null,
          continent: 'South America',
          capital: 'Buenos Aires',
          population: 45376763
        })
          .then(() => done(new Error('It requires a valid flag')))
          .catch(() => done());
      })
      it('Should throw an error if continent is null', (done) => {
        Country.create({
          id: 'ARG',
          name: 'Argentina',
          flag: 'https://flagcdn.com/w320/ar.png',
          continent: null,
          capital: 'Buenos Aires',
          population: 45376763
        })
          .then(() => done(new Error('It requires a valid continent')))
          .catch(() => done());
      })
      it('Should work when has the correct values', () => {
        Country.create({
          id: 'ARG',
          name: 'Argentina',
          flag: 'https://flagcdn.com/w320/ar.png',
          continent: 'South America',
          capital: 'Buenos Aires',
          population: 45376763
        })
      })
    })
  })
})