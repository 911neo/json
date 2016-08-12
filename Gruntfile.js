module.exports = function(grunt){


  grunt.initConfig({


uglify: {
    my_target: {
      files: {
        'js/min/scripts.min.js': ['js/scripts.js']

      }
    }
  }


  });


grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');


};
