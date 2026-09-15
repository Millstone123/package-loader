// package-loader main entry
const config = require('./config.json');

module.exports = {
  version: config.version,
  settings: config.settings,
  validate: () => {
    console.log('Configuration validated');
    return true;
  }
};
