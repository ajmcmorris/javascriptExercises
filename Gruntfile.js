module.exports = function(grunt){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
		    all: ['Gruntfile.js', 'js/**/*.js','lib/**/*.js', 'test/**/*.js']
		  }
	});

	// Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
};