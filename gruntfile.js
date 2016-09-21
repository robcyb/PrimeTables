module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      js: ['app/build/**/*.js', '!app/build/**/*.min.js'],
      css: ['app/build/**/*.css', '!app/build/**/*.min.css']
    },
    uglify: {
      build: {
        src: 'app/build/concat.js',
        dest: 'app/build/dynamic_application.min.js'
      }
    },
    concat: {
      js: {
        src: 'src/javascripts/**/*.js',
        dest: 'app/build/concat.js'
      },
      css: {
        src: 'src/styles/**/*.css',
        dest: 'app/build/application_styles.css'

      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'app/build',
          src: ['application_styles.css'],
          dest: 'app/build',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'clean']);
};