module.exports = function htmlWidget(projectPath, Widget) {
  var widget = new Widget('google-dfp', __dirname);

  widget.beforeSave = function googleDFPWidgetafterSave(req, res, next) {
    req.body.configuration = {
      tag: req.body.tag
    };

    return next();
  };

  return widget;
};
