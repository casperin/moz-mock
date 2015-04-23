module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.js'
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src',
                    name: 'mosaik-mock',
                    include: '../node_modules/grunt-contrib-requirejs/node_modules/requirejs/require',
                    mainConfigFile: 'src/mosaik-mock.js',
                    findNestedDependencies: true,
                    optimize: 'none',
                    generateSourceMaps: true,
                    wrap: true,
                    out: 'build/mosaik.js'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);
};
