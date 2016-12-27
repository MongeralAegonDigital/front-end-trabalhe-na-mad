module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['_scripts/tags/**/*.tag' , '_scripts/sass/*.scss'],
        tasks: ['default'],
        options: {
          reload: true
        }
      }
    },

    riot: {
      options: {
        concat: true
      },
      dist: {
        src: '_scripts/tags/**/*.tag',
        dest: '../app/assets/js/tags.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-riot');

  grunt.registerTask('default', ['riot']);
};
