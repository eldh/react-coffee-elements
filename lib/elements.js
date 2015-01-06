// Generated by CoffeeScript 1.8.0
(function() {
  var React, build,
    __slice = [].slice;

  React = require('react');

  build = function(tag) {
    return function() {
      var options;
      options = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (options[0]['_isReactElement'] || options[0].constructor !== Object) {
        options.unshift({});
      }
      return React.DOM[tag].apply(this, options);
    };
  };

  module.exports = (function() {
    var element, object, _i, _len, _ref;
    object = {};
    _ref = Object.keys(React.DOM);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      element = _ref[_i];
      object[element] = build(element);
    }
    return object;
  })();

}).call(this);