/*
 * typeahead.js
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

var EventBus = (function() {
  var namespace = 'typeahead:';

  // constructor
  // -----------

  function EventBus(o) {
    if (!o || !o.el) {
      $.error('EventBus initialized without el');
    }

    this.$el = $(o.el);
  }

  // instance methods
  // ----------------

  _.mixin(EventBus.prototype, {

    // ### public

    trigger: function(type) {
      var args = [].slice.call(arguments, 1);

      this.$el.trigger(namespace + type, args);
    }
  });

  return EventBus;
})();
