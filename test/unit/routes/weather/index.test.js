/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
const routes = require('../../../../src/routes').api
const listEndpoints = require('express-list-endpoints')

describe('Routes: Weather', () => {
  it('exports an express router', () => {
    expect(routes.stack).to.be.an('array')
  })

  it('defines restful CRUD for weather routes', () => {
    const methods = listEndpoints(routes)
      .reduce((methods, endpoint) => {
        methods[endpoint.path] = endpoint.methods
        return methods
      }, {})

    expect(methods['/cities/:id/weather']).to.deep.equal(['GET'])
  })
})
