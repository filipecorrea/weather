const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

const server = require('src/server')
const cities = require('src/data/cities')

describe('Routes: GET cities/{:id}/weather', () => {
  it('returns unauthorized', done => {
    chai.request(server)
      .get(`/cities/${cities[0].id}/weather`)
      .end((err, res) => {
        expect(err).to.be.equal(null)
        expect(res).to.have.status(401)
        done()
      })
  })
})
