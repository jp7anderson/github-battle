var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'ad3febc85cde41b697bf3216a9f09ec8';
var sentryApp = '96433';
var sentryUrl = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
    name: 'Github Battle',
    branch: '4',
    version: '1.0'
}

Raven.config(sentryUrl, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch,
    }
}).install();

ReactDom.render(
    routes,
    document.getElementById('app')
);
