import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import cities from '../../../../data/cities'

chai.use(chaiHttp)

const server = require('../../../../src/server')

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
