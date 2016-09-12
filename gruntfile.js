
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerBundle: {
      target: {
        // Point to the files that should be updated when
        // you run `grunt bowerBundle`
        src: [
          'app/views/**/*.html',   // .html support...
          'app/views/**/*.jade'   // .jade support...
        ],   
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-bower-bundle');

};