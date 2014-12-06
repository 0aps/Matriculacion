
module.exports = function(grunt) {

	grunt.config.set('watch', {
            src: {
              files: ['assets/*.html', 'assets/js/*.js', 'assets/styles/*.css', 'assets/controllers/*.js', 'assets/views/*.html'],
              options: { livereload: true  }   
            } 
	});

        grunt.loadNpmTasks('grunt-contrib-watch');
};


