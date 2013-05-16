module.exports = function (grunt) { 
  grunt.initConfig({    
    sass: {
      dist: {
        files: {
          'lesson1/css/index.css': 'src/scss/lesson1/style.scss'
        },
        options: {
          style: 'expanded'
        }
      }
    },    
    connect: {  
      server: {
        options: {
          // localhost:9001 のサーバーを立てる
          port: 9001,
          base: 'lesson1/'
        }
      }      
    },
    livereload: {
      // localhost:35729 のサーバーを立てる
      port: 35729
    },
    regarde: {
      livereload: {
        files: ['lesson1/*.html'],
        tasks: ['livereload']
      },
      sass: {
        files: ['src/scss/lesson1/style.scss'],
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('default', ['livereload-start', 'connect' ,'regarde']);
}

