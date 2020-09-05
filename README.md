# Weather

REST based service to retrieve information about the weather in different cities using [OpenWeather](https://openweathermap.org) data.

[Download the list of available cities](http://bulk.openweathermap.org/sample/city.list.json.gz)

## Prerequisites

- [Node.js](https://nodejs.org)
- [OpenWeather API key](https://home.openweathermap.org/api_keys)

Optionally, this service and all the different tests can be [build and run in Docker](https://github.com/filipecorrea/weather/wiki/Build-and-Run-in-Docker).

## Setup

Install project dependencies:

```console
npm install
```

Create an `.env` file and set the [OpenWeather API key](https://home.openweathermap.org/api_keys) by replacing `<OPENWEATHER_API_KEY_VALUE>`:

```.env
OPENWEATHER_API_KEY=<OPENWEATHER_API_KEY_VALUE>
```

### Customize

The same `.env` file can be used to start the service in [cluster mode](https://nodejs.org/api/cluster.html#cluster_cluster), change its running port, log level, directory and maximum size. The variable names and default values are:

```.env
CLUSTER_MODE=false
PORT=3000
LOG_ENABLED=true
LOG_LEVEL=info
LOG_DIR=logs
LOG_MAX_SIZE=10m
LOG_MAX_FILES=7d
```

## Run

Start the service:

```console
npm start
```

Access [localhost:3000/docs](http://localhost:3000/docs) to check the API documentation.

## Test

Run code style, unit, integration and security tests:

```console
npm test
```

### Code Coverage

Generate code coverage test report:

```console
npm run cover
```

When reports are created, `coverage/lcov-report/index.html` can be opened in a web browser.

### Performance Tests

Run performance tests:

```console
npm run test:performance
```

When performance tests are completed, generate report:

```console
npm run performance:report
```

`logs/performance.log.html` should open in a web browser.
