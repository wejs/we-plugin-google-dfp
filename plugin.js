/**
 * We.js google DFP/DoubleClick integration plugin main file
 */

module.exports = function loadPlugin(projectPath, Plugin) {
  const plugin = new Plugin(__dirname);

  /**
   * Plugin fast loader for speed up we.js project bootstrap
   *
   * @param  {Object}   we
   * @param {Function} done    callback
   */
  plugin.fastLoader = function fastLoader(we, done) {
    done();
  }

  plugin.addGoogleDFPHeadTag = function addGoogleDFPHeadTag(data) {
    if (
      plugin.we.systemSettings &&
      plugin.we.systemSettings.googleDFPHeaderTag
    ) {
      data.html.text += plugin.we.systemSettings.googleDFPHeaderTag;
    }

  }

  plugin.events.on('we-html-header-end', plugin.addGoogleDFPHeadTag);

  return plugin;
};