import swaggerJsdoc from 'swagger-jsdoc'
import paths from './paths'

const project = require('../../package.json')

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: `${capitalizeFirstLetter(project.name)} API`,
      version: project.version,
      description: project.description
    }
  },
  apis: paths
}

function capitalizeFirstLetter (text: string) {
  return text[0].toUpperCase() + text.slice(1)
}

export default swaggerJsdoc(options)
