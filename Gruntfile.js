
module.exports = function (grunt) {   
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // レッスン数  
  var LESSON_N = 3;

  var sass_path = function(n) {
  var result = {};
  for ( var i = 1; i <= n; i ++ ) {
    var index = i;
    // resultというオブジェクトの中にkey,値を格納する
    result["app/lesson" + (index) + "/css/index.css"] = ["src/scss/lesson" + (index) + "/index.scss"];
  }
  return result;
  };

  grunt.initConfig({  
    sass: {
      dist: {
        files: sass_path(LESSON_N),
        options: {
          style: 'compressed'
        }
      }
    },

    connect: {        
      dev: {　　// 開発用 connect        
        options: {
          port: 9001,
          base: 'app/'
        }
      },      
      production: {　　// 閲覧用 connect 
        options: {
          port: 9001,
          base: 'app/',
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
        files: ['app/**/*.html'],
        tasks: ['livereload']
      },
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  });
    

  // 開発用: grunt
  grunt.registerTask('default', ['livereload-start', 'connect:dev' ,'regarde']);    
  // 閲覧用: grunt production
  grunt.registerTask('production', ['sass', 'connect:production']);
}

