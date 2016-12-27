"use strict";

module.exports = function(grunt){

	grunt.initConfig({
		uglify : {
			my_target : {
				files : {
					'build/js/bundle.min.js' : ['public/bundle.js']
				}
			}
		} ,

		cssmin : {
			target : {
				files : {
					'build/css/style.min.css' : ['assets/css/style.css']
				}
			}
		}
	
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('default' , ['uglify' , 'cssmin']);
}
