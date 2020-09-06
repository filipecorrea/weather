import swaggerJsdoc from 'swagger-jsdoc'
import paths from './paths'

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: `${capitalizeFirstLetter(require('../../package.json').name)} API`,
      version: require('../../package.json').version,
      description: require('../../package.json').description
    }
  },
  apis: paths
}

function capitalizeFirstLetter (string) {
  return string[0].toUpperCase() + string.slice(1)
}

export default swaggerJsdoc(options)
