'use strict';

require.config({

    urlArgs: 'rand=' + (new Date()).getTime(),// for development\
    baseUrl: 'scripts',
    paths: {
        angular: '../bower_components/angular/angular'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});