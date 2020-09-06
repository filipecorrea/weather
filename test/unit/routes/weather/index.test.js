/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import listEndpoints from 'express-list-endpoints'
import routes from '../../../../src/routes'

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
