/* jshint node: true */
'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-cloudfront',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,
      defaultConfig: {
        objectPaths: '/index.html'
      },
      requiredConfig: ['accessKeyId', 'secretAccessKey', 'distributionId'],

      didActivate: function(context) {

        var distributionId = this.readConfig('distributionId');

        this.log('preparing to create invalidation for CloudFront distribution `' + distributionId + '`');
      }
    });

    return new DeployPlugin();
  }
};
