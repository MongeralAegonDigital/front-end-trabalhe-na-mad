'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    // Load tasks
    require('jit-grunt')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist',
        tmp: '.tmp'
    };

    grunt.initConfig({

        config: config,

        // Watch files
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['<%= config.app %>/js/**/*.js'],
                tasks: ['uglify:dev']
            },
            sass: {
                files: ['<%= config.app%>/css/**/*.scss'],
                tasks: ['sass:dev', 'autoprefixer:dev']
            },
            images: {
                files: ['<%= config.app %>/images/**/*.{png,jpg,gif,svg}'],
            },
            html: {
                files: ['<%= config.app %>/**/*.html'],
                tasks: ['copy:dev']
            }
        },

        // Compress the CSS.
        sass: {
            dev: {
                options: {
                    sourcemap: 'auto',
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/css/',
                    src: ['**/*.scss'],
                    dest: '<%= config.tmp %>/css/',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded' //expanded or compressed
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/css/',
                    src: ['**/*.scss'],
                    dest: '<%= config.dist %>/css/',
                    ext: '.css'
                }]
            }
        },

        // Compress JS
        uglify: {
            dev: {
                options: {
                    sourceMap: false,
                    sourceMapIncludeSources: false,
                    beautify: true,
                    mangle: true
                },
                files: {
                    '<%= config.tmp %>/js/apis-angular.js' : ['<%= config.app %>/js/apis-angular.js']
                }
            },
            dist: {
                options: {
                    sourceMap: false,
                    sourceMapIncludeSources: false,
                    beautify: true,
                    mangle: {
                        except: ['jQuery', 'Angular']
                    }
                },
                files: {
                    '<%= config.dist %>/js/apis-angular.js': ['<%= config.app %>/js/apis-angular.js']
                }
            }
        },

        // Auto prefix css
        autoprefixer: {
            dev: {
                options: {
                    map: true,
                    browsers: ['last 2 versions', 'ie 9', '> 1%']
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/css/',
                    src: '{,*/}*.css',
                    dest: '<%= config.tmp %>/css/'
                }]
            },
            dist: {
                options: {
                map: false,
                browsers: ['last 2 versions', 'ie 9', '> 1%']
            },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/css/',
                    src: '{,*/}*.css',
                    dest: '<%= config.dist %>/css/'
                }]
            }
        },

        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: '<%= config.app %>/**/*.html',
                        dest: '<%= config.tmp %>'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: '<%= config.app %>/css/fonts/bootstrap/*',
                        dest: '<%= config.tmp %>/css/fonts/bootstrap'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/angular/angular.min.js',
                        dest: '<%= config.tmp %>/js/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/jquery/dist/jquery.min.js',
                        dest: '<%= config.tmp %>/js/'
                    }
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: '<%= config.app %>/**/*.html',
                        dest: '<%= config.dist %>'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: '<%= config.app %>/css/fonts/bootstrap/*',
                        dest: '<%= config.dist %>/css/fonts/bootstrap'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/angular/angular.min.js',
                        dest: '<%= config.dist %>/js/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/jquery/dist/jquery.min.js',
                        dest: '<%= config.dist %>/js/'
                    }
                ]
            },
        },

        // Connect
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: './<%= config.tmp %>/',
                    hostname: '*',
                    livereload: true,
                    open: true
                }
            }
        },

        clean: {
          dist: {
            files: [{
              dot: true,
              src: [
                '.sass-cache/*',
                '<%= config.dist %>/*',
                '<%= config.tmp %>/*'
              ]
            }]
          }
        },

        // Delete Empties folders
        cleanempty: {
          options: {},
          src: ['.tmp/', 'dist/']
        }

    });

    // Task Development
    grunt.registerTask('default', [
        'clean:dist',
        'cleanempty',
        'copy:dev',
        'sass:dev',
        'autoprefixer:dev',
        'uglify:dev',
        'connect',
        'watch'
    ]);

    // Task Build
    grunt.registerTask('build', [
        'clean:dist',
        'cleanempty',
        'copy:dist',
        'sass:dist',
        'autoprefixer:dist',
        'uglify:dist',
    ]);

};