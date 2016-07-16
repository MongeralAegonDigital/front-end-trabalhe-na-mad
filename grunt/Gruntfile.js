'use strict';
module.exports = function (grunt, init) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    rewrite: {
      package: {
        src: 'package.json',
        editor: function(contents, filePath) {
          contents = contents.replace(/"fullName": (.)*/g, '"fullName": "' + grunt.config('package.name') + '",');
          contents = contents.replace(/"name": (.)*/g, '"name": "' + grunt.config('package.slug') + '",');
          contents = contents.replace(/"description": (.)*/g, '"description": "' + grunt.config('package.desc') + '",');

          contents = contents.replace(/"url": (.)*/g, '"url": "' + grunt.config('package.svn') + '"');

          return contents;
        }
      },

      style: {
        src: '../style.css',
        editor: function(contents, filePath) {
          
          contents = contents.replace(/Theme Name:(.)*/g, 'Theme Name:         ' + grunt.config('package.name'));
          contents = contents.replace(/Description:(.)*/g, 'Description:        ' + grunt.config('package.desc'));
          return contents;
        }
      },

      version: {
        src: '../style.css',
        editor: function(contents, filePath) {
          var version = grunt.config.get('pkg.version');
          contents = contents.replace(/Version:(.)*/g, 'Version:            ' + version);
          return contents;
        }
      },
      
      debug: {
        src: '../release/<%= pkg.version %>/functions.php',
        editor: function(contents, filePath) {
          console.log('../release/' + grunt.config.get('pkg.version') + '/functions.php');
          contents = contents.replace(/public \$dev = true;/g, 'public $dev = false;');
          return contents;
        }
      }
      
    },

    prompt: {
      target: {
        options: {
          questions: [
            {
              config: 'package.name', // arbitray name or config for any other grunt task
              type: 'input', // list, checkbox, confirm, input, password
              message: 'Qual o nome desse tema? (Nome mesmo, slug será definido em seguida)', // Question to ask the user, function needs to return a string,
              default: '<%= pkg.fullName %>', // default value if nothing is entered
              //choices: 'Array|function(answers)',
              //validate: function(value), // return true if valid, error message if invalid
              //filter:  function(value), // modify the answer
              //when: function(answers) // only ask this question when this function returns true
            },

            {
              config: 'package.desc', // arbitray name or config for any other grunt task
              type: 'input', // list, checkbox, confirm, input, password
              message: 'Descrição do tema', // Question to ask the user, function needs to return a string,
              default: 'Tema personalizado desenvolvido por Refs Tecnologia.', // default value if nothing is entered
              //choices: 'Array|function(answers)',
              //validate: function(value), // return true if valid, error message if invalid
              //filter:  function(value), // modify the answer
              //when: function(answers) // only ask this question when this function returns true
            },

            {
              config: 'package.slug', // arbitray name or config for any other grunt task
              type: 'input', // list, checkbox, confirm, input, password
              message: 'Slug desse tema?', // Question to ask the user, function needs to return a string,
              default: '<%= pkg.name %>', // default value if nothing is entered
              //choices: 'Array|function(answers)',
              //validate: function(value), // return true if valid, error message if invalid
              //filter:  function(value), // modify the answer
              //when: function(answers) // only ask this question when this function returns true
            },

            {
              config: 'package.svn', // arbitray name or config for any other grunt task
              type: 'input', // list, checkbox, confirm, input, password
              message: 'Repositório SVN', // Question to ask the user, function needs to return a string,
              default: '', // default value if nothing is entered
              //choices: 'Array|function(answers)',
              //validate: function(value), // return true if valid, error message if invalid
              //filter:  function(value), // modify the answer
              //when: function(answers) // only ask this question when this function returns true
            },

            {
              config: 'package.modules', // arbitray name or config for any other grunt task
              type: 'confirm', // list, checkbox, confirm, input, password
              message: 'Deseja selecionar que módulos excluir?', // Question to ask the user, function needs to return a string,
              default: false, // default value if nothing is entered
              //choices: 'Array|function(answers)',
              //validate: function(value), // return true if valid, error message if invalid
              //filter:  function(value), // modify the answer
              //when: function(answers) // only ask this question when this function returns true
            },

            {
              config: 'whichModules', // arbitray name or config for any other grunt task
              type: 'checkbox', // list, checkbox, confirm, input, password
              message: 'Selecione que módulos deseja excluir (OS MARCADOS SERÃO EXCLUIDOS!)', // Question to ask the user, function needs to return a string,
              default: '', // default value if nothing is entered
              choices: function() {
                
                var choices = [];

                grunt.file.expand({
                  filter: 'isDirectory'
                }, "../modules/*").forEach(function (dir) {
                  choices.push(dir);
                });

                return choices;

              },
              //validate: function(value), // return true if valid, error message if invalid
              //filter:  function(value), // modify the answer
              when: function(answers) {
                return answers["package.modules"];
              } // only ask this question when this function returns true
            }
          ]
        }
      },
    },

    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: '../assets/img/',          // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],      // Actual patterns to match
          dest: '../assets/img/'          // Destination path prefix
        }]
      }
    },

    // phplint: {
    //     options: {
    //       swapPath: '/tmp'
    //     },
    //     all: ['./../*.php', './../**/*.php']
    // },

    bumper: {
      options: {
        tasks: ['rewrite:version'],
        add: false,
        commit: false,
        createTag: false,
        push: false,
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
      'Gruntfile.js',
      '../assets/js/*.js',
      '!../assets/js/scripts.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          '../assets/css/main.css': [
          '../assets/less/app.less'
          ]
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.title %> - v<%= pkg.version %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
        ' */\n'
      },
      minify: {
        expand: true,

        cwd: '../assets/css/',
        src: ['main.css'],

        dest: '../assets/css/',
        ext: '.min.css'
      }
    },
    uglify: {
      dist: {
        files: {
          '../assets/js/scripts.min.js': [
          '../assets/js/plugins/bootstrap/transition.js',
          '../assets/js/plugins/bootstrap/alert.js',
          '../assets/js/plugins/bootstrap/button.js',
          '../assets/js/plugins/bootstrap/carousel.js',
          '../assets/js/plugins/bootstrap/collapse.js',
          '../assets/js/plugins/bootstrap/dropdown.js',
          '../assets/js/plugins/bootstrap/modal.js',
          '../assets/js/plugins/bootstrap/tooltip.js',
          '../assets/js/plugins/bootstrap/popover.js',
          '../assets/js/plugins/bootstrap/scrollspy.js',
          '../assets/js/plugins/bootstrap/tab.js',
          '../assets/js/plugins/bootstrap/affix.js',
          '../assets/js/plugins/*.js',
          '../assets/js/_*.js'
          ]
        },
        options: {
                    // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
                    // sourceMap: '../assets/js/scripts.min.js.map',
                    // sourceMappingURL: '/app/themes/roots/assets/js/scripts.min.js.map'
                  }
                }
              },
              version: {
                options: {
                  file: '../lib/scripts.php',
                  css: '../assets/css/main.min.css',
                  cssHandle: 'roots_main',
                  js: '../assets/js/scripts.min.js',
                  jsHandle: 'roots_scripts'
                }
              },

              clean: {
                options: {
                  force: true,
                },

                dist: [
                '../assets/css/main.min.css',
                '../assets/js/scripts.min.js'
                ],

                main: ['../release/<%= pkg.version %>'],

                // Modules
                modules: {
                  src: ['<%= whichModules %>']
                }
              },

              copy: {
            // Copy the plugin to a versioned release directory
            main: {
              cwd: '../',
              expand: true,
              src: [
              '**',
              '!grunt/**',
              '!release/**',
              '!.git/**',
              '!.svn/**',
              '!.idea/**',
              '!.sass-cache/**',
              '!assets/less/**',
              '!assets/js/plugins/**',
              '!assets/js/_*.js',
              '!assets/img/src/**',
              '!Gruntfile.js',
              '!package.json',
              '!.gitignore',
              '!.gitmodules'
              ],
              dest: '../release/<%= pkg.version %>/'
            }
          },
          compress: {
            main: {
              options: {
                mode: 'zip',
                archive: './../release/<%= pkg.name %>.<%= pkg.version %>.zip'
              },
              expand: true,
              cwd: '../release/<%= pkg.version %>/',
              src: ['**/*'],
              dest: '<%= pkg.name %>/'
            }
          },

          watch: {

            less: {
              files: [
              '../assets/less/*.less',
              '../assets/less/**/*.less',
              ],
              tasks: ['less', 'cssmin', 'version'],
              options: {
                livereload: true,
              },
            },

            js: {
              files: [
              '<%= jshint.all %>'
              ],
              tasks: ['jshint', 'uglify', 'version'],
              options: {
                livereload: true,
              },
            },

            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                  livereload: true
                },
                files: [
                '../assets/css/main.min.css',
                '../assets/js/scripts.min.js',
                '../templates/*.php',
                '*.php'
                ]
              }
            }
          });

    grunt.registerTask('deleteModules', 'desc', function() {
      var modules = grunt.config('whichModules');
      if (typeof modules !== "undefined" && modules.length > 0) {
        grunt.task.run(['clean:modules']);
      }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-wp-version');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-bumper');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-prompt');
    grunt.loadNpmTasks('grunt-rewrite');

    // Register tasks
    grunt.registerTask('default', [
      'clean:main',
      'less',
      'cssmin',
      'uglify',
      'version'
    ]);

    grunt.registerTask('dev', [
      'watch'
    ]);

    grunt.registerTask('start', [
      'prompt',
      'rewrite',
      'deleteModules',
      //'clean:modules',
      'watch'
    ]);

    grunt.registerTask('build', [
      'default',
      'imagemin',
      'copy',
      'rewrite:debug',
      'compress'
    ]);

  };