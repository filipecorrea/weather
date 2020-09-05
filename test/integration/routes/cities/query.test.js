const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

const server = require('src/server')
const cities = require('src/data/cities')

describe('Routes: GET cities', () => {
  it('returns cities', done => {
    chai.request(server)
      .get(`/cities?lat=${cities[0].coord.lat}&lon=${cities[0].coord.lon}`)
      .end((err, res) => {
        expect(err).to.be.equal(null)
        expect(res).to.have.status(200)
        done()
      })
  })
})
