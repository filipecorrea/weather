import chai, { expect } from 'chai'

import chaiHttp from 'chai-http'
chai.use(chaiHttp)

const server = require('../../../../src/server')
const cities = require('../../../../data/cities')

describe('Routes: GET cities/{:id}', () => {
  it('returns cities', done => {
    chai.request(server)
      .get(`/cities/${cities[0].id}`)
      .end((err, res) => {
        expect(err).to.be.equal(null)
        expect(res).to.have.status(200)
        expect(res.body.id).to.be.equal(cities[0].id)
        expect(res.body.name).to.be.equal(cities[0].name)
        expect(res.body.lat).to.be.equal(cities[0].coord.lat)
        expect(res.body.lon).to.be.equal(cities[0].coord.lon)
        done()
      })
  })
})
