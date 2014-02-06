// Load .env for development environments
require('dotenv')().load();

var keystone = require('keystone');

/**
 * Application Initialisation
 */

keystone.init({

  'name': 'Mikan-node',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': 'public',

  'views': 'templates/views',
  'view engine': 'jade', // TODO

  'auto update': false,
  'mongo': process.env.MONGO_URI,

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET || 'demo',

  'ga property': process.env.GA_PROPERTY,
  'ga domain': process.env.GA_DOMAIN,

});

require('./models');

keystone.set('locals', {
  _: require('underscore'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable,
  ga_property: keystone.get('ga property'),
  ga_domain: keystone.get('ga domain'),
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
  'posts': ['posts', 'post-comments', 'post-categories'],
  'galleries': 'galleries',
  'enquiries': 'enquiries',
  'users': 'users',
  'field-tests': 'things'
});

keystone.start();
