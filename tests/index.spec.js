const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    it('{"message":"Warakorn 61160020"}', (done) => {
        request(app).get('/').expect('{"Warakorn 61160020"}', done)
    })
})