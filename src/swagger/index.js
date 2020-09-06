const swaggerJsdoc = require('swagger-jsdoc')
const paths = require('src/swagger/paths')
const project = require('package.json')

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

function capitalizeFirstLetter (string) {
  return string[0].toUpperCase() + string.slice(1)
}

module.exports = swaggerJsdoc(options)
