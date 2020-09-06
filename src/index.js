const config = require('./config/server')

!config.clusterMode ? require('./server') : require('./cluster')
