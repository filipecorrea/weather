import config from './config/server'

!config.clusterMode ? import('./server') : import('./cluster')
