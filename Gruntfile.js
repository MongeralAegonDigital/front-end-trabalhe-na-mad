module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'app/assets/js/main.js' : [ 'app/assets/_js/scripts.js' ]
        }
      }
    },



    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'app/assets/css/style.css' : 'app/assets/_sass/style.scss'
        }
      }
    },



    watch : {
      dist : {
        files : [
          'app/assets/_js/**/*',
          'app/assets/_sass/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    } 

  });

  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );



  grunt.registerTask( 'default', [ 'uglify', 'sass' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};