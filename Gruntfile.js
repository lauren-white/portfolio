
module.exports = function(grunt) {
    const sass = require('node-sass');
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        options: {
            implementation: sass,
            sourceMap: true
        },
        dist: {
            files: {
                'css/main.css': 'css/global.scss'
            }
        }
    },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['watch']);
    grunt.registerTask('compile', ['sass']);
  }