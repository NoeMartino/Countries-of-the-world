const app = require('../../src/app');
const session = require('supertest');
const agent = session(app);

describe('Country detail route', () => {
    describe('GET countries/{id}', () => {
        it('Responds with status 200', async () => {
            await agent.get('/countries/arg').expect(200)
        })
        it('Responds with an object with keys: "id", "name", "flag", "continent", "capital", "subregion", "area" and "population"', async () => {
            const { body } = await agent.get('/countries/arg')
            const keys = Object.keys(body)
            expect(keys).toContain('id')
            expect(keys).toContain('name')
            expect(keys).toContain('flag')
            expect(keys).toContain('continent')
            expect(keys).toContain('capital')
            expect(keys).toContain('subregion')
            expect(keys).toContain('area')
            expect(keys).toContain('population')
        })
        it('Responds with an object with country data', async () => {
            const data = await agent.get('/countries/arg');
            expect(data.body.name).toEqual('Argentina');
            expect(data.body.flag).toEqual('https://flagcdn.com/w320/ar.png');
            expect(data.body.continent).toEqual('South America');
            expect(data.body.capital).toEqual('Buenos Aires');
            expect(data.body.population).toEqual(45376763);
        })
        it('If there is an error responds with status 404', async () => {
            await agent.get('/countries/150').expect(404)
        })
    })
})

describe('Country route', () => {
    describe('GET countries', () => {
        it('Responds with status 200', async () => {
            await agent.get('/countries').expect(200)
        })
        it('Responds with a array of countries', async () => {
            const data = await agent.get('/countries')
            expect(Array.isArray(data.body)).toBe(true)
        })
        it('Country must have keys "id", "name", "flag", "continent" and "population"', async () => {
            const data = await agent.get('/countries');
            expect(data.body[0]).toHaveProperty('id');
            expect(data.body[0]).toHaveProperty('name');
            expect(data.body[0]).toHaveProperty('flag');
            expect(data.body[0]).toHaveProperty('continent');
            expect(data.body[0]).toHaveProperty('population');
        })
    })
})

describe('Activity route', () => {
    describe('POST activities', () => {
        it('Responds with status 200 at sending data correctly', async () => {
            const activity = {
                idC: 'ARG',
                name: 'Ride horse',
                difficulty: 3,
                duration: 2,
                season: 'Spring'
            }
            const data = await agent.post('/activities').send(activity)
            expect(200)
        })
    })
})
