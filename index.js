'use strict';

var path   = require('path');
var fs     = require('fs');
var esNext = require('broccoli-traceur');

function ESNextPlugin(options) {
  this.name = 'ember-cli-traceur';
  this.ext = 'js';
  this.options = options || {};
}

ESNextPlugin.prototype.toTree = function(tree) {
  return esNext(tree, this.options);
};

function EmberCLIESNext(project) {
  this.project = project;
  this.name    = 'Ember CLI Traceur';
}

EmberCLIESNext.prototype.treeFor = function treeFor() {
};

EmberCLIESNext.prototype.included = function included(app) {
  var registry = app.registry;
  this.app = app;

  var plugin = new ESNextPlugin(this.app.options.esnextOptions);

  registry.add('js', plugin);
};

module.exports = EmberCLIESNext;
