const chai = require('chai')
const chaiHttp = require('chai-http')
const cities = require('data/cities')
const server = require('src/server')

const expect = chai.expect

chai.use(chaiHttp)

describe('Routes: GET cities/{:id}/weather', () => {
  it('returns unauthorized', done => {
    chai.request(server)
      .get(`/cities/${cities[0].id}/weather`)
      .end((err, res) => {
        expect(err).to.be.equal(null)
        expect(res).to.have.status(401)
        done()
      })
  }).timeout(5000)
})
