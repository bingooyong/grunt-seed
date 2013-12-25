'use strict';
module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

    var cfg = {
        src: 'app/',
        // Change 'localhost' to '0.0.0.0' to access the server from outside.
        serverHost: '0.0.0.0',
        serverPort: 8000,
        livereload: 35729
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },

        pkg: grunt.file.readJSON('package.json'),

        // 配置Web Server
        connect: {
            'static': {
                options: {
                    hostname: 'localhost',
                    port: 8001,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ],
                    livereload: cfg.livereload
                }
            },
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    middleware: function (connect) {
                        return [proxySnippet];
                    },
                    open: true
                },
                proxies: [
                    {
                        context: '/api',
                        host: 'localhost',
                        port: 18001
                    },
                    {
                        context: '/',
                        host: 'localhost',
                        port: 8001

                    }
                ]
            }
        },

        // 编译less文件
        less: {
            dist: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: [
                    {
//                    "<%= yeoman.app %>/styles/main.css": "<%= yeoman.app %>/styles_less/main.less"

                        expand: true,
                        cwd: '<%= yeoman.app %>/styles_less',
                        src: '{,*/}*.less',
                        dest: '<%= yeoman.app %>/styles',
                        ext: '.css'
                    }
                ]
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            }
        },

        // 优化图片文件
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '{,*/}*.{png,jpg,jpeg,gif}',
                        dest: '<%= yeoman.dist %>/images'
                    }
                ]
            }
        },
        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '{,*/}*.svg',
                        dest: '<%= yeoman.dist %>/images'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    // Optional configurations that you can uncomment to use
                    // removeCommentsFromCDATA: true,
                    // collapseBooleanAttributes: true,
                    // removeAttributeQuotes: true,
                    // removeRedundantAttributes: true,
                    // useShortDoctype: true,
                    // removeEmptyAttributes: true,
                    // removeOptionalTags: true*/
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        src: ['*.html', 'views/*.html'],
                        dest: '<%= yeoman.dist %>'
                    }
                ]
            }
        },

        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/concat/scripts',
                        src: '*.js',
                        dest: '.tmp/concat/scripts'
                    }
                ]
            }
        },

        // 清除文件
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= yeoman.dist %>/*',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/styles/',
                        src: '{,*/}*.css',
                        dest: '.tmp/styles/'
                    }
                ]
            }
        },


        // js代码检查
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js'
            ],
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            'bower_components/**/*',
                            'images/{,*/}*.{webp}',
                            'fonts/*',
                            'scripts/{,*/}*.js',
                        ]
                    },
                    {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= yeoman.dist %>/images',
                        src: [
                            'generated/*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '.tmp/styles',
                        dest: '<%= yeoman.dist %>/styles',
                        src: [
                            '{,*/}*.css'
                        ]
                    }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },


        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },

        // 测试
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        // 文件监听
        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            css: {
                files: ['<%= yeoman.app %>/styles_less/{,*/}*.less'],
                tasks: ['newer:less', 'newer:copy:styles', 'autoprefixer'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: ['{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all']
            },
            livereload: {
                options: {
                    livereload: cfg.livereload
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        }
    });


    // 启动开发的Web Server
    grunt.registerTask('server', [
        'clean:server',
        'concurrent:server',
        'connect:static',
        'configureProxies:server',
        'connect:server',
        'autoprefixer',
        'watch'
    ]);

    // 发布
    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngmin',
        'copy:dist',
        'cssmin',
        'uglify',
        'rev',
        'usemin'
    ]);

    // 测试
    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);
}