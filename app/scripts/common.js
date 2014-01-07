'use strict';

require.config({
    urlArgs: 'rand=' + (new Date()).getTime(),// for development\
    baseUrl: 'scripts',
    paths: {
        'angular': '../bower_components/angular/angular',
        'ngResource': '../bower_components/angular-resource/angular-resource',
        'ngCookies': '../bower_components/angular-cookies/angular-cookies',
        'jQuery': '../bower_components/jquery/jquery'

    },
    shim: {
        ngResource: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngCookies: {
            deps: ['angular'],
            exports: 'angular'
        },
        angular: {
            exports: 'angular'
        },
        jQuery: {
            exports: 'jQuery'
        }
    }
});