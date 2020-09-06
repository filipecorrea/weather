import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import cities from '../../../../data/cities'
import server from '../../../../src/server'

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
