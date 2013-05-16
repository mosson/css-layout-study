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
      // 開発用 connect
      lesson1_server: {
        options: {
          port: 9001,
          base: 'lesson1/'
        }
      },
      // 閲覧用 connect 
      production: {
        options: {
          port: 9001,
          base: 'lesson1/',
          keepalive: true
        }
      }      
    },
    livereload: {
      // livereload用 localhost:35729 のサーバーを立てる
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
  
  grunt.registerTask('default', ['livereload-start', 'connect:lesson1_server' ,'regarde']);
  grunt.registerTask('production', ['sass', 'connect:production']);
}

