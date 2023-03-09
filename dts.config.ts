// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
/**
 * @type {import('dts-cli').DtsConfig}
 */
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    console.log(config, 'config')
    return config; // always return a config.
  },
};