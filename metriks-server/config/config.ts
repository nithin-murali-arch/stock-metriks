export default process.env.envname === 'local' ? require('./config.local.json') : require('./config.prod.json');