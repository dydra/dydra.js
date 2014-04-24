module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      gruntfile: {
        options: {jshintrc: '.jshintrc'},
        src: 'Gruntfile.js'
      },
      src: {
        options: {jshintrc: 'src/.jshintrc'},
        src: ['src/**/*.js']
      },
      test: {
        options: {jshintrc: 'test/.jshintrc'},
        src: ['test/**/*.js']
      }
    },
    jasmine: {
      src: ['src/**/*.js'],
      options: {
        vendor: ['lib/**/*.js'],
        specs: ['test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: ['src/**/*.js'],
        tasks: ['jshint:src', 'jasmine']
      },
      test: {
        files: ['test/**/*.html', 'test/**/*.js'],
        tasks: ['jshint:test', 'jasmine']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['test']);
};
