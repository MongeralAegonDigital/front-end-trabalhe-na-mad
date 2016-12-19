'use strict';
module.exports = function(grunt) {

	grunt.initConfig({

		dirs: {
			js: 'js',
			css: 'css',
		},

		watch: {
			options: {
				livereload: 12345,
			},
			js: {
				files: [
					'Gruntfile.js',
					'js/libs/*.js',
					'js/script/*.js'
				],
				tasks: ['uglify', 'clean' ]
			},
			css: {
				files: [
					'css/sass/*/*.scss',
					'css/sass/*.scss'
				],
				tasks: ['sass', 'concat', 'cssmin', 'clean']
			}
		},

		// uglify to concat, minify, and make source maps
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'js/libs.min.js': [ 
						'js/libs/*.js' 
					],
					'js/app.min.js': [
						'js/libs.min.js',
						'js/script/app.js'
					],
				}
			}
		},

		sass: {
			dist: {
				files: {
					'css/style.min.css' : 'css/sass/style.scss'
				}
			}
		},

		concat: {
			dist: {
				files: {
					'css/style.min.css': [ 'css/libs/*.css', 'css/style.min.css']
				}
			}
		},

		cssmin: {
			dist: {
				files: {
					'css/style.min.css': [ 'css/style.min.css' ]
				}
			}
		},
		
		clean: {
			dist: [
				'js/libs.min.js',
				'js/libs.js.map',
				'css/libs.css'
			]
		},

		exec: {
			txpull: {
				cmd: 'tx pull -a --minimum-perc=75'
			},
			txpush_s: {
				cmd: 'tx push -s'
			},
		},

	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-cssjanus' );
	grunt.loadNpmTasks( 'grunt-exec' );

	// register task
	grunt.registerTask('default', ['watch']);

	grunt.registerTask( 'tx', ['exec:txpull']);
	grunt.registerTask( 'makeandpush', ['makepot', 'exec:txpush_s']);

	grunt.registerTask('build', ['uglify', 'sass', 'concat', 'cssmin', 'clean', 'makepot', 'tx', 'makeandpush','cssjanus' ]);
};
