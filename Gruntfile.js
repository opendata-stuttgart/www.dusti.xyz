module.exports = function(grunt) {

  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          targetDir: 'vendor',
          cleanTargetDir: true,
          layout: function(type, component, source) {
            return type;
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task.
  grunt.registerTask('default', ['bower:install']);

};
