module.exports = function(grunt) {

	grunt.config.set('connect', {
                server: {
                    options:{
                        port: 8000,
                        livereload: true,
                        base: 'assets/'
                    }
                }
	});

    grunt.loadNpmTasks('grunt-contrib-connect');
};


