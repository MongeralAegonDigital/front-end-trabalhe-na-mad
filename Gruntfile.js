module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			projeto: {
				expand: true,
				cwd: 'teste',
				src: '**',
				dest: 'dist'
			}
		},
		clean: ['dist'],
		useminPrepare: {
			teste_mg: ['dist/**/*.html']
		},
		usemin: {
			teste_mg: ['dist/**/*.html']
		},
		uglify: {
			teste: {
				expand: true,
				cwd: 'dist/',
				src: ['**/*.js'],
				dest: 'dist/'
			}
		},
		cssmin: {
			teste: {
				expand: true,
				cwd: 'dist/',
				src: ['**/*.css'],
				dest: 'dist/'
			}
		}, 
		sass: {
			teste_mg: {
				expand: true,
				cwd: 'dist/sass/',
				src: '**/*.sass',
				dest: 'dist/css',
				ext: '.css'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			todos: {
				files: ['dist/**/*']
			},
			sass: {
				files: 'dist/sass/*.sass',
				options: {
					event: ['all']
				},
				tasks: 'sass'
			}
		},
		connect: {
			server: {
				options: {
					livereload: true
				}
			}
		}
	});
	
	grunt.registerTask('run', ['connect', 'watch']);
	grunt.registerTask('minifica', ['useminPrepare', 'usemin', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('default', ['clean', 'copy', 'minifica', 'sass']);
	
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-contrib-clean');	
	grunt.loadNpmTasks('grunt-contrib-concat');	
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-usemin');	
}