import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import cities from '../../../../data/cities'

chai.use(chaiHttp)

const server = require('../../../../src/server')

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
