module.exports = function (grunt) {
    grunt.initConfig({
        imagemin: {                          // Task
            dynamic: {
                options: {                       // Target options
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,                // Enable dynamic expansion
                    cwd: 'src/images/',         // Src matches are relative to this path
                    src: ['**/*.{png,jpg}'],   // Actual patterns to match
                    dest: 'dist/images/'      // Destination path prefix
                }]
            }
        } 
    });
    
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default',['imagemin']);
};