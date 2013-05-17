'use strict';

module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-livereload");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-regarde");


  var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

  var LESSON_N = 4;

  var coffee_path = function(n){
    var result = {};
    for( var i = 0; i < n; i ++ ){
      var index = (i+1);
      result["htdocs/lesson"+(index)+"/main.js"] = ["src/lesson"+(index)+"/coffee/**/*.coffee"];
    }
    return result;
  };

  var sass_path = function(n){
    var result = {};
    for( var i = 0; i < n; i ++ ){
      var index = (i+1);
      result["htdocs/lesson"+(index)+"/style.css"] = ["src/lesson"+(index)+"/sass/**/*.scss"];
    }
    return result;
  };

  grunt.initConfig({
    connect: {
      htdocs: {
        options: {
          port: 9000,
          base: "htdocs/",
          middleware: function( connect, options ) {
            return [lrSnippet, connect.static(options.base), connect.directory(options.base) ];
          }
        }
      }
    },

    livereload: {
      port: 35729
    },

    coffee: {
      compile: {
        files:  coffee_path(LESSON_N)
      }
    },

    sass: {
      compile: {
        files: sass_path(LESSON_N),
        options: {
          style: "compressed"
        }
      }
    },

    regarde: {
      coffee: {
        files: "src/**/*.coffee",
        tasks: ["coffee"]
      },
      sass: {
        files: "src/**/*.scss",
        tasks: ["sass"]
      },
      livereload: {
        files: "htdocs/**/*",
        tasks: ["livereload"]
      }
    }
  });

  grunt.registerTask('default', ["livereload-start", "sass", "coffee", "connect", "regarde"] );
};