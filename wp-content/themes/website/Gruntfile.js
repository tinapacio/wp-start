module.exports = function(grunt){

    //Configuro Grunt
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'asset/css/style.css' : 'asset/scss/style.scss',
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

    //Creo i Task da Eseguire
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass:dist']);
    grunt.registerTask('build', ['sass']);
}