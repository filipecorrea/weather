import config from './config/server'

!config.clusterMode ? require('./server') : require('./cluster')
