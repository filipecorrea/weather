/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import listEndpoints from 'express-list-endpoints'
const routes = require('../../../../src/routes').api

describe('Routes: Cities', () => {
  it('exports an express router', () => {
    expect(routes.stack).to.be.an('array')
  })

  it('defines restful API for cities routes', () => {
    const methods = listEndpoints(routes)
      .reduce((methods, endpoint) => {
        methods[endpoint.path] = endpoint.methods
        return methods
      }, {})

    expect(methods['/cities']).to.deep.equal(['GET'])
    expect(methods['/cities/:id']).to.deep.equal(['GET'])
  })
})
